import bridgeFunctions from "@/common/interflow/bridgeFunctions";
import webActions from "../../../../constants/webActions.conf";

function postMessage(data) {
  window.parent.postMessage(data, "http://192.168.3.217:8080");
}

function receiveMessage(event) {
  if (event.origin !== "http://192.168.3.217:8080") return;

  let { action, data, cbName, type } = event.data;

  if (!action) return;

  if (type == "publish") {
    if (!webActions[action]) return; //监听到web发布动作
    webActions[action].dispatch(data);
  } else if (type == "resolve" || type == "notify") { //监听到web通知动作
    if (!bridgeFunctions[action]) {
      throw new Error("请正确传递交互方法");
    }

    //调用对应的交互处理函数
    bridgeFunctions[action](data, cbName);
  }
}

export { postMessage, receiveMessage };
