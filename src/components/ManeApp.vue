<template>
    <div>
      <Header class="col-12 header" ></Header>
      <div class="basic col-12">
        <ManeMenu class="menu col-3"></ManeMenu>
        <router-view></router-view>
      </div>
      <Footter></Footter>
    </div>
  </template>
  
  <script>
  import ManeMenu from './ManeMenu.vue'
  import Header from './HeadAndList/HeaderMenu.vue'
  import Footter from './Footter.vue'
  
  export default {
    name: 'ManeApp',
    components: {
      ManeMenu,
      Header,
      Footter
  
    },
  
  
    created() {
      this.$router.push({name: 'ManeMenu'})
    }
  
  }
  </script>
  
  <style scoped>

.menu + router-view {
  width: 100%;
}


.basic {
    display:flex;
    justify-content: space-between;
}
  
  @media(max-width:769px) {
    .menu {
      display:none;
    }
    .basic {
        display: block;
    }
  }

  </style>