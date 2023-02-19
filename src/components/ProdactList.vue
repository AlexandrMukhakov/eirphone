<template>
    <div class="list">
        <div class="title mb-4">Вся наша продукция</div>
        <div class="col-lg-12 col-sm-4 list1">
                <div class="goods-card" v-for="(i, index) in prod" :key="index">
                    <span class="label">New</span>
                    <!-- /.label --><img width="150px" src="../assets/orig.jpg" alt="goods-1" class="goods-image">
                    <h3 class="goods-title">{{ i.title }}</h3>
                    <!-- /.goods-title -->
                    <span class="goods-price">{{ i.price }}р. </span>
                    <router-link
                    class="cards-links"
                    :to="{name: 'Info', params: {id: i.id} }"
                    >
                        <div class="about">Подробнее</div>
                    </router-link>
                    <!-- /.goods-price -->
                </div>
                <!-- /.goods-card -->
            </div>
    </div>
  </template>
  

  <script>

import products from '../mocks/earphoneInfo'

  export default {
    name: 'ProductList',

    data() {
        return {
            prod: products
        }
    },


  }
  </script>
  
  
  <style scoped>
    .list {
        background-color: rgb(238, 238, 238);
        height: auto;
    }

    .list1 {
        display: flex;
        flex-wrap: wrap;
    }


.title {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 20px;
    display: flex;
    justify-content: flex-start;
}

.goods-card {
   position: relative;
   text-align: center;
   display:flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   padding: 20px 35px 20px 75px;
   width: 276px;
   box-shadow: 1px 1px 1px 2px rgba(0.2, 0.2, 0.2, 0.2);
   margin-right: 15px;
   margin-top: 15px;
   background-color: white;
   z-index: 0;
}

.goods-title {
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #262D33;
    font-family: 'Roboto Slab', serif;
}
.goods-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4B5157;
}
.goods-price {
    font-size: 18px;
    line-height: 30px;
    color: #262D33;
}

.cards-links {
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left:0px;
    color:white;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
}

.cards-links:hover {
    opacity: 1;
}
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
}
@media(max-width:990px) {
    .list1 {
        margin:0 auto;
        padding: 0;
        display:flex;
        justify-content: center;

    }
}

@media(max-width:769px) {
    .title {
        display: flex;
        justify-content: center;
    }
  }


@media(max-width:550px) {
    .list1 {
        margin:0 auto;
        padding: 0;
        display:flex;
        justify-content: center;

    }
}

  </style>