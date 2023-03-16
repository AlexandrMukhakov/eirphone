<template>
    <div class="list col-lg-9 col-sm-6 pb-4">
        <div class="title mb-4 mt-4">Товары в вашей корзине</div>
        <p v-if="empty" class="emptyBas">В данный момент в корзине пусто</p>
        <div class="goods-card" v-for="i in data" :key="i.id">
            <img width="150px" :src="i.img" alt="goods-1" class="goods-image">
            <div>
                <h3 class="goods-title">{{ i.name }}</h3>
                <span class="goods-price">{{ i.price }}р. </span>
                <div class="count">
                    <button @click="minus()">-</button>
                    <p>кол. {{ count }}</p>
                    <button @click="plus()">+</button>
                </div>
                <button @click="delGoods(i)" class="delBus">удалить</button>
            </div>
        </div>
    </div>
</template>
  

<script>



export default {
    name: 'ProductList',

    data() {
        return {
            data: null,
            count: 1,
            empty: true
        }
    },

    created() {
        this.data = JSON.parse(localStorage.getItem('product'))
    },

    watch: {
        data: 'emptyFunc'
    },

    methods: {
        minus() {
            this.count <= 1 ? null : this.count--
        },
        plus() {
            this.count++
        },

        delGoods(card) {
            this.data = this.data.filter(t => t != card)
            localStorage.setItem('product', JSON.stringify(this.data))
        },

        emptyFunc() {
            if (this.data) {
                this.empty = false
            } else {
                this.empty = true
            }
        }
    }

}
</script>
  
  
<style scoped>
.delBus {
    position: absolute;
    bottom: 5px;
    right: 5px;
    cursor: pointer;
    padding: 2px 15px 2px 15px;
}


.list {
    background-color: rgb(238, 238, 238);
}

.list1 {
    display: flex;
    flex-wrap: wrap;
}

.count {
    display: flex;
    align-items: center;
    justify-content: center;
}
.title {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 20px;
    display: flex;
}

.goods-card {
    position: relative;
    text-align: center;
    display: flex;
    padding: 10px 20px 10px 20px;

    width: 276px;
    box-shadow: 1px 1px 1px 2px rgba(0.2, 0.2, 0.2, 0.2);
    margin-right: 15px;
    margin-top: 15px;
    background-color: rgb(255, 255, 255);
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

.about {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
}

.emptyBas {
    z-index: 5;
    display: flex;
    justify-content: center;
    text-align: center;
}


@media(max-width:990px) {
    .list1 {
        margin: 0 auto;
        padding: 0;
        display: flex;
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
        margin: 0 auto;
        padding: 0;
        display: flex;
        justify-content: center;

    }
}
</style>