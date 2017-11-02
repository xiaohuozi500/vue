<template>
  <div id="app">
    <my-nav></my-nav>
    <cft-nav v-if="!this.$route.params.id"></cft-nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import myNav from '@/components/my-nav/my-nav'
import cftNav from '@/components/cft-nav/cft-nav'
export default {
  components: {
    myNav,
    cftNav
  },
  created () {
  },
  watch: {
    // 检测路由信息变化，重新发送请求
    $route: function () {
      // console.log(this.$route.params.id)
    }
  }
}
</script>
<style>
  @import '../static/css/reset.css';
  @import '../static/css/app.css';
</style>
