<template>
  <Form :model="formItem" label-position="left" :label-width="120">
    <FormItem label="是否显示指示器">
      <i-switch v-model="formItem.isShowIndicatorDots" size="large">
        <span slot="open">On</span>
        <span slot="close">Off</span>
      </i-switch>
    </FormItem>

    <FormItem label="是否自动轮播">
      <i-switch v-model="formItem.isAutoplay" size="large">
        <span slot="open">On</span>
        <span slot="close">Off</span>
      </i-switch>
    </FormItem>

    <FormItem label="间隔时间">
      <Slider :max="10000" v-model="formItem.interval"></Slider>
    </FormItem>

    <FormItem label="动画时间">
      <Slider :max="1000" v-model="formItem.duration"></Slider>
    </FormItem>

    <FormItem v-for="(item, index) in formItem.swiperList" :key="index" :label="'图片 ' + (index + 1)">
      <Row>
        <Col span="18">
          <Input type="text" v-model="item.imgSrc" placeholder="请输入图片路径..."></Input>
        </Col>
        <Col span="4" offset="1">
          <Button @click="handleRemove(index)">删除</Button>
        </Col>
      </Row>
    </FormItem>
    <FormItem>
      <Row>
        <Col span="16">
          <Button type="dashed" long @click="handleAdd" icon="md-add">添加图片路径</Button>
        </Col>
      </Row>
    </FormItem>
  </Form>
</template>
<script>
import { notifyUni } from "@/common/interflow/interaction.js";
export default {
  data() {
    return {
      formItem: {
        isShowIndicatorDots: true,
        isAutoplay: true,
        interval: 2000,
        duration: 500,
        swiperList: [
          {
            imgSrc: ""
          }
        ]
      },

      settingConsoleData: {}
    };
  },

  porps: {
    componentName: {
      type: String,
      require: true
    },

    componentData: {
      type: Object,
      default: () => {
        {
        }
      }
    }
  },

  watch: {
    "$store.state.settingConsoleInfo.settingConsoleData": {
      handler(newValue) {
        this.formItem = Object.assign({}, this.formItem, newValue.data);
        this.settingConsoleData = newValue;
      },
      deep: true,
      immediate: true
    },

    formItem: {
      handler(newValue) {
        console.log(newValue, 8888)
        let params = {
          name: this.settingConsoleData.name,
          data: newValue
        };
        notifyUni("setComponentData", params);
      },
      deep: true,
      immediate: true
    },

  },

  methods: {
    handleAdd() {
      this.formItem.swiperList = [
        ...this.formItem.swiperList,
        {
          imgSrc: ""
        }
      ];
    },

    handleRemove(index) {
      this.formItem.swiperList.splice(index, 1);
    }
  }
};
</script>