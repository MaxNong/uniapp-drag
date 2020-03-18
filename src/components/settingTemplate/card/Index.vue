<template>
  <Form :model="formItem" label-position="left" :label-width="80">
    <FormItem label="背景图">
      <Input v-model="formItem.coverImgSrc" placeholder="请输入背景图地址"></Input>
    </FormItem>

    <FormItem label="标签">
      <Input v-model="formItem.cuTag" placeholder="请输入标签"></Input>
    </FormItem>

    <FormItem label="卡片内容">
      <Input
        v-model="formItem.content"
        type="textarea"
        :autosize="{minRows: 2,maxRows: 5}"
        placeholder="请输入卡片内容..."
      ></Input>
    </FormItem>

    <FormItem label="头像">
      <Input v-model="formItem.avatarImgSrc" placeholder="请输入头像图片地址"></Input>
    </FormItem>

    <FormItem label="卡片名称">
      <Input v-model="formItem.userName" placeholder="请输入卡片名称"></Input>
    </FormItem>

    <FormItem label="时间">
      <Input v-model="formItem.time" placeholder="请输入时间"></Input>
    </FormItem>

    <FormItem label="预览人数">
      <Input v-model="formItem.seeNum" placeholder="请输入预览人数"></Input>
    </FormItem>

    <FormItem label="点赞人数">
      <Input v-model="formItem.assistNum" placeholder="请输入点赞人数"></Input>
    </FormItem>

    <FormItem label="评论人数">
      <Input v-model="formItem.discussNum" placeholder="请输入评论人数"></Input>
    </FormItem>

    <FormItem label="是否平铺">
      <i-switch v-model="formItem.isCard" size="large">
        <span slot="open">On</span>
        <span slot="close">Off</span>
      </i-switch>
    </FormItem>
  </Form>
</template>
<script>
import { notifyUni } from "@/common/interflow/interaction.js";
export default {
  data() {
    return {
      formItem: {
        coverImgSrc: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        cuTag: "标签",
        content: "这里填写卡片内容这里填写卡片内容这里填写卡片内容这里填写卡片内容这里填写卡片内容这里填写卡片内容这里填写卡片内容",
        avatarImgSrc: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        userName: "正义天使 凯尔",
        time: "几天前",
        seeNum: 0,
        assistNum: 0,
        discussNum: 0,
        isCard: false
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
      default: () => {{}}
    }
  },

  watch: {
    '$store.state.settingConsoleInfo.settingConsoleData': {
      handler (newValue) {
        this.formItem = Object.assign({}, newValue.data);
        this.settingConsoleData = newValue;
      },
      deep: true,
      immediate: true
    },

    formItem: {
      handler(newValue) {
        let params = {
          name: this.settingConsoleData.name,
          data: newValue
        };
        notifyUni("setComponentData", params);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>