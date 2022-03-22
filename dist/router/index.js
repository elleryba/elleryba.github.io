import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutMe from '@/views/AboutMe.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: AboutMe,
    }
];
const router = new VueRouter({
    routes,
});
export default router;
//# sourceMappingURL=index.js.map