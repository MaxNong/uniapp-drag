<template>
  <view>
    <view v-for="(item, key) in componentsData" :key="key" :class="['component-box', activeIndex == key ? 'active' : '']" @click="selectComponent(item, key)">
      <ComponentSeat v-if="item.name == 'ComponentSeat'" v-bind="item.data"></ComponentSeat>
      <Progress v-if="item.name == 'Progress'" v-bind="item.data"></Progress>
      <EasySwiper v-if="item.name == 'EasySwiper'" v-bind="item.data"></EasySwiper>
      <Card v-if="item.name == 'Card'" v-bind="item.data"></Card>
      <TrendsCard v-if="item.name == 'TrendsCard'" v-bind="item.data"></TrendsCard>
      <ArticleCard v-if="item.name == 'ArticleCard'" v-bind="item.data"></ArticleCard>
    </view>
  </view>
</template>

<script>
import {notifyWeb} from '@/common/interflow/interaction'
export default {
  data() {
    return {
      activeIndex: null
      // componentsData: []
    };
  },
  computed: {
    componentsData() {
      console.log(this.$store.state.componentsInfo.componentsData, 666)
      return this.$store.state.componentsInfo.componentsData;
    }
  },

  // watch: {
  //   '$store.state.componentsInfo.componentsData': {
  //     handler(newValue) {
  //       console.log(this.$store.state.componentsInfo.componentsData)
  //       this.componentsData = [...this.$store.state.componentsInfo.componentsData]
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },

  methods: {
    selectComponent(item, key){
      this.activeIndex = key
      notifyWeb('changeCurrentComponent', {...item})
    }
  }
};
</script>

<style lang="scss">
.component-box{
  &:hover:not(.active){
    border: 1px dashed #155bd4;
  }
}

.active{
  border: 1px solid #155bd4;
}

</style>
