<template>
  <iframeM src="http://192.168.3.217:8081/"></iframeM>
</template>

<script>
import iframeM from '../iframe'
import {notifyUni, subscribeUni} from '@/common/interflow/interaction.js'

export default {
  methods: {
    // 通知uniapp动作
    notify: function (action, data, callback) {
      console.log('通知uniapp动作', action)
      notifyUni(action, data, callback)
    },

    //监听uniapp动作
    subscribe: function (action, callback) {
      console.log('订阅uniapp动作', action)
      subscribeUni(action, callback)
    }
  },

  components: { iframeM },
}
</script>
