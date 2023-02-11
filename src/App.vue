<template>
  <div class="head">
    <div class="d-flex justify-content-beetwen pt-2 pl-4 pr-4">
      <ManeMenu class="col-3 mt-5"></ManeMenu>
      <router-view class="col-8"></router-view>
    </div>
  </div>
</template>

<script>
import ManeMenu from './components/ManeMenu.vue'

export default {
  name: 'App',
  components: {
    ManeMenu
  }
}
</script>

<style src="@/style/bootstrap-grid.min.css">
  
</style>
