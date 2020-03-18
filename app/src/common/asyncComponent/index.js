import asyncComponentConfig from "../../../../constants/components.conf";
import Vue from "vue";
import store from "@/store/index";

//按需获取对应组件
async function addDenamicComponent(componentKey, data) {
  
  if (!asyncComponentConfig[componentKey]) {
    throw new Error(`没有找到该组件，无法加载组件，组件名：${componentKey}`);
  }

  let componentPath = asyncComponentConfig[componentKey].path;

  if (!componentPath) {
    throw new Error(`没有找到该组件配置的path路径，组件名：${componentKey}`);
  }
  
  let { default: componnetOptions } = await require("../../components/" +
    componentPath +
    ".vue");

  // 注册组件
  Vue.component(componentKey, componnetOptions);
  let currentComponentData = {
    name: componentKey,
    data: data
  }

  let newComponentsData = [...store.state.componentsInfo.componentsData, currentComponentData];
  store.commit("setComponentsData",newComponentsData);
}

function removeDenamicComponent (componentKey) {
  if (!asyncComponentConfig[componentKey]) return;

  let componentsData = [...store.state.componentsInfo.componentsData];
  let componentIndex = componentsData.findIndex((value, index, arr) => {
    return value.name == componentKey;
  })

  if (componentIndex != -1) {
    componentsData.splice(componentIndex, 1)
  }

  store.commit("setComponentsData",componentsData);
}

// 设置组件参数
function setComponentData (componentKey, data){
  if (!asyncComponentConfig[componentKey]) return;

  let componentsData = [...store.state.componentsInfo.componentsData];
  let componentIndex = componentsData.findIndex((value, index, arr) => {
    return value.data.id == data.id;
  })

  if (componentIndex != -1) {
    Object.assign(componentsData[componentIndex].data, data)
  }

  console.log(componentsData, 7777)
  store.commit("setComponentsData",componentsData);
}

export { addDenamicComponent, removeDenamicComponent, setComponentData };
