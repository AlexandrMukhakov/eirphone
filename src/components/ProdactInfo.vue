<template>
  <div class="productInfo col-lg-9 col-12">
    <div class="card" v-if="cards">
      <div class="container">
        <img class="image" :src="cards.img" />
      </div>
      <div class="allDesc">
        <div class="title"> {{ cards.title }}</div>
        <div class="description">{{ cards.description }}</div>
        <div class="price">{{ cards.price }}</div>
      </div>
    </div>
    <button @click="addToBasket()" class="Add-basket col-3">Добавить в корзину</button>
  </div>
</template>

<script>

import data from '../mocks/earphoneInfo';



export default {
  name: 'ProdactInfo',



  data() {
    return {
      cards: null,
      product: []
    }
  },


  created() {
    const card = data.find(card => card.id == this.$route.params.id)
    if (card) {
      this.cards = card;
    }
  },

  methods: {
    addToBasket() {
      let arr = []
      if (localStorage.getItem('product'))
          arr = JSON.parse(localStorage.getItem('product'))

      let addRow = {
        'name': this.cards.title,
        'img': this.cards.img,
        'description': this.cards.description,
        'price': this.cards.price,
        'id': this.cards.id
      }

      if(arr.some(t => t.id === addRow.id)) {
        alert('Данный товар уже есть в корзине');
      } else {
        arr.push(addRow)
        localStorage.setItem('product', JSON.stringify(arr))
      }

    }
  }

}
</script>


<style scoped>
.card {
  display: flex;
}

.productInfo {
  background-color: rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  padding: 30px 0 50px;
  height: 100vh;
}

.Add-basket {
  padding: 10px 30px;
    background: #4592FF;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    color: white;
}

.Add-basket:hover {
  background-color: aquamarine;
}


.allDesc {
  display: flex;
  flex-direction: column;

}

.image {
  width: 300px;
  height: 300px;
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