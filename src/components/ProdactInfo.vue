<template>
  <div class="card col-lg-9 col-12" v-if="cards">
    <div class="container">
      <img class="image" :src="cards.img"/>
    </div>
    <div class="allDesc">
      <div class="title"> {{ cards.title }}</div>
      <div class="description">{{ cards.description }}</div>
      <div class="price">{{ cards.price }}</div>
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
    const card = data.find(card => card.id == this.$route.params.id)
    if (card) {
      this.cards = card;
    }
  }

}
</script>


<style scoped>
.card {
  background-color: rgb(238, 238, 238);
  display: flex;
  padding: 30px 0 50px;

}



.allDesc {
  display: flex;
  flex-direction: column;

}

.image {
  width: 400px;
  height: 400px;
  margin-bottom: 10px;
}

.title {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
}

.description {
  text-align: center;
  padding: 0 30px;
  margin-bottom: 20px;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price {
  font-size: 50px;
  font-weight: 800;
  text-align: center;
}

@media(max-width:769px) {
  .card {
    display: block;
  }

  img {
    margin: 0 auto;
  }
}
</style>