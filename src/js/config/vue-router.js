import RouteExample1 from "src/js/routes/RouteExample1.vue";
import RouteExample2 from "src/js/routes/RouteExample2.vue";
import RouteHome from "src/js/routes/RouteHome.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        name: 'home',
        component: RouteHome
    },
    {
        path: '/example1',
        name: 'example1',
        component: RouteExample1
    },
    {
        path: '/example2',
        name: 'example2',
        component: RouteExample2
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});