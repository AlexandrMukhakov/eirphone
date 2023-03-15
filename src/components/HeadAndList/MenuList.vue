<template>
    <div class="listMenu">
      <div class="over" ref="over">
        <div class="content height d-flex align-items-start">
            <div>
    <ul 
    v-for="link in links" :key="link.id"
    class="listUl">
      <li class="listLi"
        @click="closeMenu()"
      >
        <router-link class="link" 
        :class="selectLink === link ? 'activeClass' : ''"
        :to="{name: link.pathName}">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
          

        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  
  
  export default {
    name: 'ModalWindow',
  
    data() {
    return {
      selectLink: null,


      links: [
        {
          id: 1,
          name: 'Главная',
          pathName: 'ManeMenu'
        },
        {
          id: 2,
          name: 'Продукт',
          pathName: 'List'
        },
        {
          id: 3,
          name: 'Контакты',
          pathName: 'Contact'
        }
      ]
    }
  },
  
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    }
  }
   
    
  
  
  }
  </script>
  
  
  <style scoped>
.listMenu .over {
    position: fixed;
    left: 0;
    top: 50px;
    width: 100%;
    height: 100%;
    /* background: rgba(196, 195, 195, 0.7); */
    z-index: 5;
  }
  
  .listMenu .content {
    animation: dropdown 0.1s;
    display: block;
    width: 200px;
    min-height: 200px;
    background-color: #fefefe;
    padding: 20px;
    color: #333333;
    position: relative;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  

  .pos {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  label {
    color: black;
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 23px;
      line-height: 20px;
      text-decoration: none;
  }
  
  
  
  
  
  
  
  @keyframes dropdown {
    from {
      opacity: 0;
      transform: translateX(-3000px);
    }
  
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  
  @media(max-width:769px) {
    .listMenu .content {
      width: 40%;
      margin-top: 24px;
      height: 30%;
    }
  }

</style>