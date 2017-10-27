<template>
    <div id="header">
        <h1><a href="../iconfont/list.html"  >hello</a></h1>
        <div>按钮</div>

    </div>
</template>
<script>
import { Loading } from 'vux'
export default {
    data() {
        return {

        }
    },
    components: {
        Loading
    },
    methods: {
        aaa() {
            const _this = this;
            this.$vux.loading.show({
                text: 'Loading'
            })
            setTimeout(() => {
                _this.$vux.loading.hide()
            }, 5000)
        }
    }

}
</script>

<style lang="scss">
h1{
    a{
        color:blue;
    }
}
</style>
