import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store/store';

// Components
import FirstPage from './components/FirstPage/FirstPage.vue';
import SeondPage from './components/SecondPage/SecondPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/first', component:FirstPage},
        {path: '/second', component:SeondPage}
    ],
    mode: 'history'
});



export default {
    store,
    name: 'app',
    router
}