<template>
	<div id="app">
		<hhhh></hhhh>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Cell, Group, Divider } from 'vux'

import hhhh from 'components/header'
export default {
	data() {
		return {
			msg: 'hello worldzzz'
		}
	},
	components: {
		hhhh
	},
	//实例初始化最之前，无法获取到data里的数据
	beforeCreate() {


	},
	//在挂载开始之前被调用
	beforeMount() {


	},
	//已成功挂载，相当ready()
	mounted() {



	},
	//相关操作事件
	methods: {




	}
}
</script>

<style lang="less">

</style>
