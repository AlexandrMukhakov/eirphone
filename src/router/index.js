import VueRouter from "vue-router";
import ManeLoyaut from '../components/ManeLoyaut.vue'
import ProdactInfo from '../components/ProdactInfo.vue'
import ProdactList from '../components/ProdactList.vue'
import Contacts from '../components/Contacts.vue'
import Basket from '../components/Basket/BasketGoods.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'ManeMenu',
            component: ManeLoyaut
        },

       {
        path: '/Info',
        name: 'Info',
        component: ProdactInfo
       },

       {
        path: '/Basket',
        name: 'Basket',
        component: Basket
       },

       {
        path: '/List',
        name: 'List',
        component: ProdactList
       },

       {
        path: '/Contact',
        name: 'Contact',
        component: Contacts
       } 

    ]
})