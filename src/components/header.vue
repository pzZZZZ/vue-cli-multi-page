<template>
    <div id="header" @click="aaa">
        <h1><a href="#">hello</a></h1>

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
