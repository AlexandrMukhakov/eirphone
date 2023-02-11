<template>
    <div class="list">
        <div class="col-lg-8 col-sm-6 list1">
                <div class="goods-card" v-for="(i, index) in prod" :key="index">
                    <span class="label">New</span>
                    <!-- /.label --><img width="150px" src="../assets/orig.jpg" alt="goods-1" class="goods-image">
                    <h3 class="goods-title">{{ i.title }}</h3>
                    <!-- /.goods-title -->
                    <span class="goods-price">{{ i.price }}</span>
                    <!-- /.goods-price -->
                </div>
                <!-- /.goods-card -->
            </div>
    </div>
  </template>
  

  <script>

import products from '../mocks/earphoneInfo'

  export default {
    name: 'ManeMenu',

    data() {
        return {
            prod: products
        }
    },


  }
  </script>
  
  
  <style scoped>
    .list {
        background-color: rgb(238, 233, 233);
        height: 100vh;
    }

    .list1 {
        display: flex;
        flex-wrap: wrap;
    }


    .goods-card {
   position: relative;
   text-align: center;
   padding: 30px 35px 35px 35px;
   width: 226px;
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

  </style>