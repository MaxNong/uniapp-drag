//#ifdef H5
import {observeWeb} from '@/common/interflow/interaction';
//#endif

export default function (Vue) {
    //#ifdef H5
    //注册交互全局函数
    observeWeb();
    //#endif
}