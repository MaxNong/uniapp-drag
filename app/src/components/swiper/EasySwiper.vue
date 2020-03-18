<template>
  <view class="uni-padding-wrap">
    <view class="page-section swiper">
      <view class="page-section-spacing">
        <swiper
          class="swiper"
          :indicator-dots="isShowIndicatorDots"
          :autoplay="isAutoplay"
          :interval="interval"
          :duration="duration"
        >
          <swiper-item v-for="(item, key) in swiperList" :key="key">
            <view class="swiper-item uni-bg-red" >
              <img :src="item.imgSrc"/>
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    isShowIndicatorDots: {
      type: Boolean,
      default: true
    },
    isAutoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 2000
    },
    duration: {
      type: Number,
      default: 500
    },
    swiperList: {
      type: Array,
      default: () => [
        {
          imgSrc:
            "http://pics.sc.chinaz.com/files/pic/pic9/201911/zzpic21196.jpg"
        },
        {
          imgSrc:
            "http://pic2.sc.chinaz.com/files/pic/pic9/201911/zzpic20934.jpg"
        },
        {
          imgSrc:
            "http://pics.sc.chinaz.com/files/pic/pic9/201911/zzpic21196.jpg"
        }
      ]
    }
  },
  methods: {}
};
</script>

<style lang="scss">
@import "@/assets/home.scss";
</style>
