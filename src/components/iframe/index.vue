<template>
  <div class="iframebox" :style="{top: top}">
    <iframe
      id="iframeM"
      :src="src"
      scrolling="auto"
      name="myiFrame"
      frameborder="0"
      marginheight="0px"
      marginwidth="0px"
    ></iframe>
  </div>
</template>
<style scoped>
.iframebox {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: hidden;
}
.iframebox iframe {
  height: 100%;
  width: 100%;
  border: 0;
}
</style>


<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    top: {
      type: String
    }
  }
}
</script>
