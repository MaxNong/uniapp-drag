<template>
  <Collapse simple>
    <Panel :name="key + ''" v-for="(item, key) in navOptionsData" :key="key">
      {{item.name}}
      <div slot="content">
        <ul class="icons-content">
          <li
            class="icon-item"
            v-for="(componentItem, index) in item.components"
            :key="index"
            draggable="true"
            @dragstart="dragstart($event, componentItem)"
            @drag="drag"
            @dragend="dragend"
          >
            <Icon :type="componentItem.icon" size="24" />
            <p>{{componentItem.text}}</p>
          </li>
        </ul>
      </div>
    </Panel>
  </Collapse>
</template>
<script>
export default {
  data() {
    return {
      navOptionsData: [
        {
          name: "基础组件",
          components: [
            {
              name: "EasySwiper",
              text: "轮播图",
              icon: "ios-keypad-outline"
            },
            {
              name: "Progress",
              text: "进度条",
              icon: "ios-keypad-outline"
            },
            {
              name: "Card",
              text: "案例卡片",
              icon: "ios-keypad-outline"
            },
            {
              name: "TrendsCard",
              text: "动态卡片",
              icon: "ios-keypad-outline"
            },
            {
              name: "ArticleCard",
              text: "文章卡片",
              icon: "ios-keypad-outline"
            }
          ]
        },
        {
          name: "运营组件",
          components: [
            {
              text: "组件1",
              icon: "ios-keypad-outline"
            },
            {
              text: "组件2",
              icon: "ios-keypad-outline"
            },
            {
              text: "组件3",
              icon: "ios-keypad-outline"
            }
          ]
        }
      ]
    };
  },

  methods: {
    //被拖动元素开始拖动
    dragstart(event, componentItem) {
      event.target.style.opacity = 0.5;
      this.$emit("dragstart", event, componentItem);
    },

    //被拖动元素拖动过程中
    drag(event) {
      this.$emit("drag", event);
    },

    dragend(event) {
      event.target.style.opacity = "";
      this.$emit("dragend", event);
    }
  }
};
</script>

<style lang="scss" scoped>
.icons-content {
  font-size: 0;
  .icon-item {
    display: inline-block;
    width: 56px;
    height: 56px;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    padding-top: 8px;
    p {
      margin-top: 10px;
      line-height: 0;
    }
    &:hover {
      background: #155bd4;
      color: #ffffff;
    }
  }
}

// reset iview样式
.ivu-collapse-simple {
  border: none !important;
}

.ivu-collapse > .ivu-collapse-item {
  border-top: none !important;
}
</style>