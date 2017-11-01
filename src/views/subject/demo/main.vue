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
    <div class="footer">

    </div>
  </div>
</template>
<script>
import 'assets/js/app'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      show: true
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
