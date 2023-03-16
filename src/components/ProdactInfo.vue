<template>
  <div class="productInfo col-lg-9 col-12">
    <div class="card" v-if="cards">
      <div class="container">
        <img class="image" :src="cards.img" />
      </div>
      <span v-if="popup" class="popuptext" id="myPopup">Товар успешно добавлен в корзину</span>
      <span v-if="sub" class="popuptext" id="myPopup">Данный товар уже есть в корзине</span>
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
      product: [],
      popup: false,
      sub: false
    }
  },

  watch: {
    popup: 'closeModal',
    sub: 'closeModal2'
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
        this.sub = true
      } else {
        arr.push(addRow)
        localStorage.setItem('product', JSON.stringify(arr))
        this.popup = true
      }

    },

    closeModal() {
      if (this.popup) {
        setTimeout(() => {
          this.popup = false
        }, 2000)
      }
    },
    
    closeModal2() {
      if (this.sub) {
        setTimeout(() => {
          this.sub = false
        }, 2000)
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

 .popuptext {
    animation: opac 0.5s;
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 30px 80px;
    position: absolute;
    top:245px;
    right: 530px;
    z-index: 6;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px;
}




@keyframes opac {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }

@media(max-width:769px) {
  .popuptext {
    position: absolute;
    top:350px;
    right: 130px;
    z-index: 6;
}
  .card {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
  }
  .Add-basket {
    margin: 0 auto;
  }

  img {
    margin: 0 auto;
  }
}
</style>