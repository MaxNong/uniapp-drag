<template>
  <component v-if="currentComponent" :is="currentComponent" :componentName="currentComponent" :componentData="componentData"></component>
</template>
<script>
export default {
  data() {
    return {
    };
  },

  computed: {
    componentData() {
      return this.$store.state.settingConsoleInfo.settingConsoleData.data;
    },
    currentComponent() {
      return this.$store.state.settingConsoleInfo.settingConsoleData.name;
    }
  }
};
</script>