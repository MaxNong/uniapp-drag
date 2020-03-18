import { notifyWebExecuteResolve } from "./interaction";
import {addDenamicComponent, removeDenamicComponent, setComponentData} from '../asyncComponent/index'

let bridgeFunctions = {
  // 添加组件
  addComponent(data, cbName) {
    let componentKey = data.name; //组件key值
    addDenamicComponent(componentKey, data.data);
    let resolveData = {
      code: 1,
      message: `加载${data.componentKey}组件成功`
    };

    if (cbName) notifyWebExecuteResolve(resolveData, cbName);
  },

  // 设置组件参数数据
  setComponentData(data){
    let componentKey = data.name; //组件key值
    setComponentData(componentKey, data.data);
  },

  removeComponent(data, cbName){
    let componentKey = data.name; //组件key值
    removeDenamicComponent(componentKey, data);
    let resolveData = {
      code: 1,
      message: `删除${data.componentKey}组件成功`
    };

    if (cbName) notifyWebExecuteResolve(resolveData, cbName);
  },


  //执行web这边的回调
  resolve(data, cbName) {
    if (!cbName) return;

    window[cbName](data);
    delete window[cbName];
  }
};

export default bridgeFunctions;
