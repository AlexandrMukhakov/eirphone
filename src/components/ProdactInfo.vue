<template>
  <div class="card" v-if="cards">
    <div class="container" v-for="(i,index) in cards" :key="index">
        {{ i.title }}
      
    </div>
  </div>
</template>

<script>

import data from '../mocks/earphoneInfo';

export default {
  name: 'ProdactInfo',

  data() {
    return {
      cards: null
    }
  },

  created() {
    const cards = data.find(card => card.id == this.$route.params.id)
    if (cards) {
      this.cards = cards;
    }
  }

}
</script>


<style scoped>
.card {
  background-color: rgb(238, 238, 238);
  height: 100vh;
 
}

.container {
  padding: 30px 50px 10px 50px;
}


</style>