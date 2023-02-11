<template>
<div class="head">
    <div class='container'>
            <div class="title col-3">
                <h1>Earphone</h1>
            </div>

            <div class="description col-6">
                Наушники Earphone это реплика, звучат не хуже ориинала, работает микрофон, функция шумоподавления и
                многое
                другое, как в ориинале
            </div>

            <div class="butt d-flex justify-content-start">
                <button class="button">
                    <p class="buttonText">Связаться с нами</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ManeLoyaut',

}
</script>

<style>
.container {
    padding: 30px 100px 100px 10px;
}


.head {
    background:url('../assets/girlPro.jpg');
    background-size: cover;
    height: 100vh;
}

.button {
    padding: 10px 30px;
    background: #4592FF;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    color: white;
}

.button:hover {
    background-color: aquamarine;
}

.description {
    margin-bottom: 100px;
    text-decoration: none;
    color: #939699;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.buttonText {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
}
</style>
