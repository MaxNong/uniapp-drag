import bridgeFunctions from "@/common/interflow/bridgeFunctions";
import uniActions from '../../../constants/uniActions.conf'

function postMessage(data) {
  let msessageEle = document.getElementById("iframeM").contentWindow;
  msessageEle.postMessage(data, "http://192.168.3.217:8081");
}

function receiveMessage(event) {
  if (event.origin !== "http://192.168.3.217:8081") return;

  let { action, data, cbName, type } = event.data;

  if (type == "publish") {
    if (!uniActions[action]) return; //监听到uni发布动作
    uniActions[action].dispatch(data);
  } else if (type == "resolve" || type == "notify") { //监听到uni通知动作
    if (!bridgeFunctions[action]) {
      throw new Error("请正确传递交互方法");
    }

    //调用对应的交互处理函数
    bridgeFunctions[action](data, cbName);
  }
}

export { postMessage, receiveMessage };
