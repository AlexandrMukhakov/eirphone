<template>
<div class="col-md-12 col-lg-9" >
    <div class="backImage">
        <div class='container'>
            <div class="title col-lg-6 col-3">
                <h1>Earphone</h1>
            </div>

            <div class="description col-6">
                Наушники Earphone это реплика, звучат не хуже ориинала, работает микрофон, функция шумоподавления и
                многое
                другое, как в ориинале
            </div>

            <div class="butt d-flex justify-content-start">
                <button @click="openModal()" class="button">
                    <p class="buttonText">Связаться с нами</p>
                </button>
            </div>
        </div>
    </div>
    <ModalWindow
    @closeModal = "closeModal"
    @modal2 = 'modal2'
    v-if="modal"
     ></ModalWindow>
     <ThanksModal v-if="thanks"></ThanksModal>
</div>
</template>

<script>

import ModalWindow from './Modal/ModalWindow.vue';
import ThanksModal from './Modal/ThanksModal.vue'

export default {
    name: 'ManeLoyaut',

    components: {
        ModalWindow,
        ThanksModal
    },

    data() {
        return {
            modal: false,
            thanks: false
        }
    },

    watch: {
        thanks: 'closeModal2'
    },

    methods: {
        openModal() {
            this.modal = true
        },

        closeModal() {
            this.modal = false
        },

        modal2() {
            this.thanks = true
        },

        closeModal2() {
           if (this.thanks) {
            setTimeout(() => {
                this.thanks = false
            }, 2000)
           }
        }

        
    } 

}
</script>

<style>
.container {
    padding: 30px 0px 100px 10px;
}


.backImage {
    background: url('../assets/girlPro.jpg') top right 40%;
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
