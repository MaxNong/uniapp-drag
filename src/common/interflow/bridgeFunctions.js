import { notifyUniExecuteResolve } from "./interaction";
import uniActions from '../../../constants/uniActions.conf'
import store from "@/store/index";

let bridgeFunctions = {
  initCompleted(data) {
    uniActions[initCompleted].dispatch();
  },
  changeCurrentComponent(data){
    store.commit("setSettingConsoleData", data);
  },
  addComponent(data, cbName) {
    let resolveData = {
      message: '99999'
    }
    if (cbName) notifyUniExecuteResolve(resolveData, cbName );
  },

  //执行uni这边的回调
  resolve(data, cbName) {
    if (!cbName) return;

    window[cbName](data);
    delete window[cbName];
  }
};

export default bridgeFunctions;
