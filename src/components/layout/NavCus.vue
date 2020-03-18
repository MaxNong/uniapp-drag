<template>
  <ul class="nav-cus-box">
    <li class="cus-item" @click="activeIndex = 1" :class="[activeIndex=='1' ? 'active' : '']">
      <Icon type="ios-basketball-outline" size="24" />
      <p>开发者</p>
    </li>
    <li class="cus-item" @click="activeIndex = 2" :class="[activeIndex=='2' ? 'active' : '']">
      <Icon type="ios-beaker-outline" size="24" />
      <p>教育</p>
    </li>
    <li class="cus-item" @click="activeIndex = 3" :class="[activeIndex=='3' ? 'active' : '']">
      <Icon type="ios-beer-outline" size="24" />
      <p>医疗</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
        activeIndex: 1
    };
  }
};
</script>

<style lang="scss">
.nav-cus-box {
  padding-top: 20px;
  .cus-item {
    font-size: 12px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    color: black;
    
    &:hover:not(.active) {
      color: #155bd4;
      cursor: pointer;
    }

    &:not(:first-child) {
        margin-top: 18px;
    }
  }
  .active {
    background: #155bd4;
    color: #FFFFFF;
    border-radius: 4px;
  }
}
</style>