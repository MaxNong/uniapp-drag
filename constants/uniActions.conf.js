import signals from "signals";

let Signal = signals.Signal;
let actions = {
  initCompleted: new Signal() //uni初始化完成
};

export default actions;
