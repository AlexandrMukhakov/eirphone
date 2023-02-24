<template>
  <div class="mymodal">
    <div class="overlay" ref="overlay">
      <div class="content">
        <div @click="closeModal" data-close class="modal__close">&times;</div>
       <form @submit.prevent="onSubmit()" class="form">

        <h2>Заполните ваши данные, мы с вами обязательно свяжемся</h2>
        
        <div  class="name pos mb-4">
          <label class="mb-2">Имя</label>
          <input v-model="name" type="text">
          <span>{{ errName }}</span>
        </div>

        <div class="tel pos mb-4">
          <label class="mb-2">Телефон</label>
          <input v-model="tel" type="text">
          <span>{{ errTel }}</span>
        </div>
      

        <div class="but pos">
          <button  class="button">Отправить</button>
        </div>

       </form>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'ModalWindow',


  data() {
    return {
      name: '',
      tel: '',
      errName: '',
      errTel: '',
    }
  },

  watch: {
    name: 'valid',
    tel: 'valid'
  },

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },

    onSubmit: async function (e) {


      if (this.name && this.tel) {
        this.closeModal();
        this.$emit('modal2')

        let formData = [this.tel, this.tel]

       await fetch('./sendmail.json', {
      method: 'POST',
      body: formData
     });

      }

      if (this.name) {
        this.errName = ''
      }

      if (this.tel) {
        this.errTel = ''
      }

      if (!this.name) {
        this.errName = 'Введите имя'
      }

      if (!this.tel) {
        this.errTel = 'Введите телефон'
      }

      e.preventDefault();


    },

  },
  

  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs['overlay']) {
        vm.closeModal();
      }
    })
  }


}
</script>


<style src="./styleModal.css" scoped>

</style>