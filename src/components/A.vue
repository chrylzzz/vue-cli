<template>
	<div>	
		
		<p></p>
		<p>
		<router-link to="/">返回</router-link>
		</p>
		<p><router-link to="/a1">转到a1</router-link></p>
		<!-- 无法转到a1 是因为 需要挂载: a1的父级为a 
			挂载为子路由,子路由的方式:router-view,该标签放在父页面,如,a1的父级页面为a,所以放在a
			在其routes下,写children 的属性(index.js)
			,会把父级a一起显示在页面上,比较常用在父页面存在时打开子页面
		-->
		<router-view></router-view>

		<!--
			该a11没有在index.js定义Chilren属性,而是与a平级,
			则就不是子路由的方式
		-->
		<p><router-link to="/a11">转到a11</router-link></p>


		
	</div>
</template>
<script>
</script>
<style>
</style>