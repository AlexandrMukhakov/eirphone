<template>
    <div class="list col-lg-9 col-md-9">
      <div class="text">Вы моежет с нами связаться через электронную почту, заполнив форму <span @click="prom()">"Связаться с нами"</span>, так же, для более быстрой связи написать в телеграм канал</div> <a href="https://t.me/aleksandrmukhakov"><img width="60px" src="https://w7.pngwing.com/pngs/402/10/png-transparent-telegram-logo-scalable-graphics-icon-logo-blue-angle-triangle.png" title="telegram"/></a>
    </div>
  </template>
  
  <script>

  export default {
    name: 'ManeMenu',


    methods: {
      prom () {
        alert("dude");
      }
    }

  }
  </script>
  
  
  <style scoped>
  .list {
    background-color: rgb(238, 238, 238);
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top:40px;
    }

    .text {
    text-decoration: none;
    color: #939699;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: 400px;
    }


    span {
      cursor:pointer;
      color: #32557f;
      text-decoration: underline #32557f dashed;
    }


  </style>