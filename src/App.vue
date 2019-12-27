<template>
<!-- app.vue是主组件,index.js里的路由是子组件 -->
  <div id="app">
    <!-- 图片引用,也可以放在static -->
    <img src="./assets/logo.png">
    <!-- 该router-view 挂载index.js -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 主会引起子改变 */
#app {
  /* 字体 */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* 浏览器兼容 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 居中 */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
