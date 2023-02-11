<template>
  <div>
    <ul 
    v-for="link in links" :key="link.id"
    class="listUl">
      <li class="listLi"
        @click="makeActive(link)" 
      >
        <router-link class="link" 
        :class="selectLink === link ? 'activeClass' : ''"
        :to="{name: link.pathName}">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ManeMenu',

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
    makeActive (item){
            this.selectLink = item;
        }
  },

  created() {
    this.selectLink = this.links[0]
  }





}
</script>


<style scoped>
  .listUl {
    list-style-type: none;
  }

  .listLi {
    margin-bottom: 70px;
  }
  .link {
    color: black;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 20px;
    text-decoration: none;
  }

  .activeClass {
    background-color: rgb(207, 203, 203);
    color:white;
    border-radius: 10px;
    padding: 5px 10px;
  }



</style>
