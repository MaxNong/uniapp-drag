<template>
  <view>
    <ComponentSeat v-if="componentName == 'ComponentSeat'" v-bind="data"></ComponentSeat>
    <Progress v-if="componentName == 'Progress'" v-bind="data"></Progress>
    <EasySwiper v-if="componentName == 'EasySwiper'" v-bind="data"></EasySwiper>
    <Card v-if="componentName == 'Card'" v-bind="data"></Card>
    <TrendsCard v-if="componentName == 'TrendsCard'" v-bind="data"></TrendsCard>
    <ArticleCard v-if="componentName == 'ArticleCard'" v-bind="data"></ArticleCard>
  </view>
</template>

<script>
export default {
  props: {
    componentName: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      default: () => {{}}
    }
  },

  // watch: {
  //   data: {
  //     handler(newValue) {
  //       console.log(this.$data, 7777);
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  updated() {
  },

  data() {
    return {};
  },

  components: {}
};
</script>  