

import uniEventsConfig from '../../../constants/uniActions.conf'
import {receiveMessage, postMessage} from './until';

//监听uniapp消息
function observeUni() {
  window.addEventListener("message", receiveMessage, false);
}

//订阅uni动作
function subscribeUni(action, cb){
  if (!uniEventsConfig[action]) return;

  uniEventsConfig[action].add(cb)
}

//通知uniapp执行动作
function notifyUni(action, data, cb) {
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

//通知uni执行回调
function notifyUniExecuteResolve(data, cbName) {
  if (!cbName) return;

  let obj = {
    action: 'resolve',
    data: data,
    cbName: cbName,
    type: "resolve"
  };

  postMessage(obj);
}

//通知uni自己做了什么
function publishAction(action, data) {
  if (!actionsConfig[action]) return;

  let obj = {
    action: action,
    data: data,
    type: "publish"
  };

  postMessage(obj);
}

export { observeUni, notifyUni, subscribeUni, publishAction, notifyUniExecuteResolve };
