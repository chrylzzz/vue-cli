<template>
	<div>
		<p>zzz</p>
        <p><router-link to="/">返回主页</router-link></p>
        
        <p><router-link to="/y">进入y</router-link></p>
		<!-- z作为x的父页面 -->
        <p><router-link to="/x">进入x</router-link></p>
        <router-view></router-view> 
	</div>
</template>
<script>
</script>
<style>
</style>
