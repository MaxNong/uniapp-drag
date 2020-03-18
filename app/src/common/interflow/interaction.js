import webActions from "../../../../constants/webActions.conf";
import { postMessage, receiveMessage } from "./until";
import uniActions from "../../../../constants/uniActions.conf";

//监听web消息
function observeWeb() {
  window.addEventListener("message", receiveMessage, false);
}

//订阅web动作
function subscribeWeb(action, cb) {
  if (!webActions[action]) return;

  webActions[action].add(cb);
}

//postmess到web动作分3类：1通知web去做某个动作 2通知web执行回调 3通知web自己完成了某个动作
//通知web动作，希望web去做什么
function notifyWeb(action, data, cb) {
  if (!action) return;

  let cbName = null;

  if (cb) {
    cbName = "mps_" + new Date().getTime();
    window[cbName] = cb;
  }

  let obj = {
    action: action,
    data: data,
    cbName: cbName,
    type: "notify"
  };

  postMessage(obj);
}

//通知web执行回调
function notifyWebExecuteResolve(data, cbName) {
  if (!cbName) return;

  let obj = {
    action: 'resolve',
    data: data,
    cbName: cbName,
    type: "resolve"
  };

  postMessage(obj);
}

//通知web自己自己做了什么
function publishAction(action, data) {
  if (!uniActions[action]) return;

  let obj = {
    action: action,
    data: data,
    type: "publish"
  };

  postMessage(obj);
}

export { observeWeb, notifyWeb, subscribeWeb, publishAction, notifyWebExecuteResolve };
