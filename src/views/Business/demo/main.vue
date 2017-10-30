<template>
  <div id="app">
    <div v-waves>hello wave</div>
    <group>
      <radio title="title" :options="options" v-model="options2.value"></radio>
    </group>
  </div>
</template>
<script>
import 'assets/js/app'
import { Radio, Group } from 'vux'
export default {
  data() {
    return {
      options: ['China', 'Japan'],
      options2: [{
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '001',
        value: 'radio001'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '002',
        value: 'radio002'
      }]
    }
  },
  components: {
    Radio, Group
  },
  mounted() {
    this.$vux.alert.show({
      title: 'Vux is Cool',
      content: 'Do you agree?',
      onShow() {
        console.log('Plugin: I\'m showing')
      },
      onHide() {
        console.log('Plugin: I\'m hiding')
      }
    })
  }
}
</script>
<style lang="scss">
// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
#app {
  font-size: 40px;
}
</style>

