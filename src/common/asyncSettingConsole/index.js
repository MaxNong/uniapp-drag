import asyncComponentConfig from "../../../constants/components.conf";
import Vue from "vue";
import store from "@/store/index";

//按需获取对应组件
async function addSettingConsole(componentKey, data) {
  if (!asyncComponentConfig[componentKey]) {
    throw new Error(`没有找到该组件，无法设置组件参数，组件名：${componentKey}`);
  }

  let componentPath = asyncComponentConfig[componentKey].settingPath;

  if (!componentPath) {
    throw new Error(`没有找到该组件配置的settingPath路径，组件名：${componentKey}`);
  }

  let { default: componnetOptions } = await require("../../components/" +
    componentPath +
    ".vue");

  // 注册组件
  Vue.component(componentKey, componnetOptions);

  store.commit("setSettingConsoleData", data);
}

function removeSettingConsole (componentKey) {
  if (!asyncComponentConfig[componentKey]) return;

  store.commit("setSettingConsoleData", {});
}

export { addSettingConsole, removeSettingConsole };
