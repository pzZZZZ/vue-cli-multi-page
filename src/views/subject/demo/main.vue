<template>
  <div id="app">
    <div class="box">
      <div class="wrapper">

        <div id="example-2">
          <button @click="show = !show">Toggle show</button>
          <transition name="bounce">
            <p v-if="show">Look at me!</p>
          </transition>
        </div>

      </div>
    </div>
    <actionsheet v-model="show7" :menus="menu7" theme="android">
    </actionsheet>
    <div id="example-8">
      <input v-model.number="firstNumber" type="number" step="20"> +
      <input v-model.number="secondNumber" type="number" step="20"> = {{ result }}
      <p>
        <animated-integer v-bind:value="firstNumber"></animated-integer> +
        <animated-integer v-bind:value="secondNumber"></animated-integer> =
        <animated-integer v-bind:value="result"></animated-integer>
      </p>
    </div>
    <div class="footer">

    </div>
  </div>
</template>
<script>
import 'assets/js/Lib';
import tools from 'assets/js/tool'
import BScroll from 'better-scroll'
import animatedInteger from 'components/tew'
import { TransferDom, Actionsheet, Group, XSwitch, Toast } from 'vux'
console.log(tools)
export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast,
    animatedInteger
  },
  data() {
    return {
      show: true,
      show7: false,
      menu7: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍'
      },
      firstNumber: 20,
      secondNumber: 40
    }
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

    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper)
    setTimeout(() => {
      this.show = true;
    }, 5000)
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.box {
  flex: 1;
  overflow: hidden;
  .wrapper {
    height: 100%;
  }
}

.footer {
  height: 40px;
  background: orange;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
