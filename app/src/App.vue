<script>
//#ifdef H5
import { publishAction } from "@/common/interflow/interaction";
//#endif
export default {
  onLaunch: function() {
    //#ifdef H5
    publishAction('initCompleted');
    //#endif
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
@import "./colorui/main.css";
@import "./colorui/icon.css";
/*每个页面公共css */
</style>
