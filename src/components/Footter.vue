<template>

    <div class="list">
        <div class="line"></div>
    <div class="container d-flex justify-content-center align-items-center">
        <p class="text"> Здесь может быть ваша реклама</p>
    </div>
</div>
  </template>
  
  <script>



  export default {
    name: 'ManeMenu',



    methods: {
      prom () {
        alert("dad");
      }
    }



  }
  </script>
  
  
  <style scoped>
  .list {
        background-color: rgb(238, 238, 238);
    }

    .container {
        padding:5px 10px;
    }

    .text {
    text-decoration: none;
    color: #939699;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.5px;
    }

    .line {
        border-bottom: 1px solid #bbbbbb;
        margin-top: 5px;
        box-shadow: 0.5px 0.5px 0px 0.5px rgba(0.2, 0.2, 0.2, 0.2);
    }


  </style>