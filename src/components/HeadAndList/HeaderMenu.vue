<template>
    <div class="list">
        <div class="d-flex justify-content-between align-items-center">
            <div class="menuList2">
                <img src="../../assets/menuList.png" @click="openMenu()"
                    class="menuList" />
                <p class="text logo" @click="linktomane()"> Earphone</p>
            </div>
            <div class="rightSide">
                <router-link :to="{ name: 'Basket' }"  class="basket">
                    <img src="../../assets/baseline_shopping.png" />
                    <span v-if="signal">{{ data.length }}</span>
                </router-link>
                <div class="text place">F.A.Q</div>
            </div>

        </div>
        <div class="line"></div>
        <MenuList @closeMenu="closeMenu" v-if="menu"></MenuList>
    </div>
</template>
  
<script>

import MenuList from './MenuList.vue'

export default {
    name: 'HeaderMenu',

    components: {
        MenuList
    },

    data() {
        return {
            menu: false,
            signal: false,
            data: null
        }
    },

   


    methods: {
        linktomane() {
            window.location.reload()
        },

        openMenu() {
            this.menu = !this.menu
        },

        closeMenu() {
            this.menu = false
        }
    }



}
</script>
  
  
<style scoped>
.list {
    background-color: rgb(238, 238, 238);
}

.menuList2 {
    display: flex;
    justify-content: flex-start;
}



.menuList {
    display: none;
}

.rightSide {
    display: flex;
    align-items: center;
}

.place {
    margin-left: 10px;
}

.basket {
    cursor: pointer;
}

span {
    position: absolute;
    top:10px;
    right: 55px;
    color:white;
    background-color: rgb(230, 68, 68);
    padding: 0px 5px;
    border-radius: 100px;
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
    margin-bottom: 5px;
    box-shadow: 0.5px 0.5px 0px 0.5px rgba(0.2, 0.2, 0.2, 0.2);
}

.logo {
    cursor: pointer;
}

@media(max-width:769px) {
    .menuList {
        display: block;
        margin-right: 15px;
        cursor: pointer;
        padding: 5px 10px;
    }

    .menuList2 {
        display: flex;
    }
}
</style>