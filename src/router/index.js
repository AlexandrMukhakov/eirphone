import VueRouter from "vue-router";
import ManeLoyaut from '../components/ManeLoyaut.vue'
import ProdactInfo from '../components/ProdactInfo.vue'
import ProdactList from '../components/ProdactList.vue'
import Contacts from '../components/Contacts.vue'

export default new VueRouter({
    routes: [
        {
            path: '/maneMenu',
            name: 'ManeMenu',
            component: ManeLoyaut
        },

       {
        path: '/Info',
        name: 'Info',
        component: ProdactInfo
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