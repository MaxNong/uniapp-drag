<template>
  <div class="home-page">
    <!-- 页面头部 -->
    <div class="header-bar">
      <Button>保存</Button>
    </div>
    <div class="content">
      <!-- 大分类区域 -->
      <div class="nav-cus-type">
        <NavCus></NavCus>
      </div>

      <!-- 组件导航 -->
      <div class="nav-components">
        <NavOptions @dragstart="dragstart" @drag="drag" @dragend="dragend"></NavOptions>
      </div>

      <!-- 预览区域 -->
      <div class="page-div">
        <div
          class="prediv-box"
          @dragleave="dragleave"
          @dragenter="dragenter"
          @dragover="dragover"
          @drop="drop"
        >
          <div class="preview-header">
            <h3 class="title">首页</h3>
            <img class="img" width="375" src="../assets/images/mp-header.png" alt />
          </div>
          <div
            v-show="isDragging"
            :class="['replace-box', isDragoverContainer ? 'in-container' : '']"
          ></div>
          <div class="content-box">
            <preview ref="uniapp"></preview>
          </div>
        </div>
      </div>

      <!-- 设置区域 -->
      <div class="current-console">
        <SettingConsole></SettingConsole>
      </div>
    </div>
  </div>
</template>

<script>
import preview from "@/components/preview/index";
import NavOptions from "@/components/layout/NavOptions";
import NavCus from "@/components/layout/NavCus";
import SettingConsole from "@/components/layout/SettingConsole";
import {
  addSettingConsole,
  removeSettingConsole
} from "@/common/asyncSettingConsole/index";

const initDrapStatus = {
  hasEndtered: false, //是否进入过容器中
  isLeaveContainer: true, //是否拖动离开容器
  isDroped: true, //是否落下
  isDragging: false, //是否在拖动过程中
  isDragoverContainer: false, //是否拖动在容器上
  drapComponentItem: null //选中拖动的组件元素数据
};
export default {
  data() {
    return {
      ...initDrapStatus
    };
  },
  mounted() {
    // this.$refs.uniapp.subscribe("initCompleted", () => {
    //   this.$refs.uniapp.notify(
    //     "addComponent",
    //     { name: "TrendsCard" },
    //     function() {
    //       console.log("通知回调");
    //     }
    //   );
    // });
  },

  watch: {
    isDragoverContainer(newValue) {
      if (newValue) {
        this.$refs.uniapp.notify("addComponent", { name: "ComponentSeat" });
      } else {
        this.$refs.uniapp.notify("removeComponent", { name: "ComponentSeat" });
      }
    },

    isLeaveContainer(newValue) {},

    isDroped(newValue) {
      if (!newValue) return;
      let scope = this;
      if (this.hasEndtered) {
        this.$refs.uniapp.notify("removeComponent", {
          name: "ComponentSeat"
        });
      }

      if (this.isDragoverContainer) {
        let componentParams = {
          name: this.drapComponentItem.name,
          data: {
            id: this.getUuid()
          }
        };
        this.$refs.uniapp.notify("addComponent", componentParams, () => {
          addSettingConsole(scope.drapComponentItem.name, componentParams);
          scope.resetDragData();
        });
      } else {
        scope.resetDragData();
      }
    }
  },

  methods: {
    //被拖动元素开始拖动
    dragstart(event, componentItem) {
      event.target.style.opacity = 0.5;
      this.drapComponentItem = componentItem;
    },

    //被拖动元素拖动过程中
    drag(event) {
      this.isDragging = true;
      this.isDroped = false;
    },

    //拖动刚进入容器区域
    dragenter(event) {
      this.hasEndtered = true;
    },
    dragleave(event) {
      this.isDragoverContainer = false;
    },
    dragend(event) {
      event.target.style.opacity = "";
    },
    dragover(event) {
      event.preventDefault();
      this.isDragoverContainer = true;
    },
    drop(event) {
      this.isDroped = true;
    },

    resetDragData() {
      Object.assign(this.$data, initDrapStatus);
    },

    getUuid() {
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      return uuid;
    }
  },

  components: {
    preview,
    NavOptions,
    NavCus,
    SettingConsole
  }
};
</script>

<style lang="scss">
@import "../assets/home.scss";
</style>
