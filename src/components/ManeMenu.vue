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
    margin-bottom: 40px;
  }
  .link {
    text-decoration: none;
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    color:aqua;
  }

  .activeClass {
    background-color: aqua;
    color:white;
    border-radius: 10px;
    padding: 5px 10px;
  }



</style>
