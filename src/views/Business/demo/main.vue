<template>
  <div id="app">
    <div v-waves>hello wave</div>
    <!-- <group>
          <radio title="title" :options="options" v-model="options2.value"></radio>
        </group> -->
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
    // this.$vux.alert.show({
    //   title: 'Vux is Cool',
    //   content: 'Do you agree?',
    //   onShow() {
    //     console.log('Plugin: I\'m showing')
    //   },
    //   onHide() {
    //     console.log('Plugin: I\'m hiding')
    //   }
    // })
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation: jello 0.7s ease-in-out;
}

div {}

#app {
  font-size: 40px;
}



@-webkit-keyframes jello {

  from,
  11.1%,
  to {
    -webkit-transform: none;
    transform: none;
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
</style>

