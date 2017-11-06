<template>
  <div id="app">
    <div class="box">
      <div class="wrapper">

        <div id="example-2">
          <button @click="show = !show">Toggle show</button>
          <transition name="bounce">
            <p v-if="show">Look at me!</p>
          </transition>
          <actionsheet v-model="show7" :menus="menu7" theme="android">
          </actionsheet>
          <ul>
            <li>1a</li>
            <li>2a</li>
            <li>3a</li>
            <li>4a</li>
            <li>5a</li>
          </ul>
          <div id="example-8">
            <input v-model.number="firstNumber" type="number" step="20"> +
            <input v-model.number="secondNumber" type="number" step="20"> = {{ result }}
            <p>
              <animated-integer v-bind:value="firstNumber"></animated-integer> +
              <animated-integer v-bind:value="secondNumber"></animated-integer> =
              <animated-integer v-bind:value="result"></animated-integer>
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="footer">

    </div>
  </div>
</template>
<script>
import 'assets/js/Lib';
import tools from 'assets/js/tool'
import data from './assets/data'
import BScroll from 'better-scroll'
import animatedInteger from 'components/tew'
import { TransferDom, Actionsheet, Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast,
    animatedInteger
  },
  data() {
    return data
  },
  computed: {
    result: function() {
      return this.firstNumber + this.secondNumber
    }
  },
  created() {

  }
  ,
  mounted() {
    const _this = this;
    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper)
    function sleep() {
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          _this.firstNumber = 1000;
          scroll.refresh()
          reslove();
        }, 3000)
      })
    }
    async function func() {
      console.log(1)
      await sleep()
      console.log(2)

    }
    // func()
    // function *aa(){
    //   debugger
    //   yield 123
    //   yield 423
    // }
    // let a = aa()
    // alert(a.next().value)
    // alert(a.next().value)
  }
}
</script>

<style lang="scss">
@import './assets/app.scss'
</style>
