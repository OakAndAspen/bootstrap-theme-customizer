import ExampleAlbum from "src/js/components/examples/ExampleAlbum.vue";
import ExampleBlog from "src/js/components/examples/ExampleBlog.vue";
import ExampleCarousel from "src/js/components/examples/ExampleCarousel.vue";
import ExampleCheckout from "src/js/components/examples/ExampleCheckout.vue";
import ExampleCover from "src/js/components/examples/ExampleCover.vue";
import ExampleDashboard from "src/js/components/examples/ExampleDashboard.vue";
import ExamplePricing from "src/js/components/examples/ExamplePricing.vue";
import ExampleProduct from "src/js/components/examples/ExampleProduct.vue";
import RouteKitchenSink from "src/js/routes/RouteKitchenSink.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        name: 'home',
        component: RouteKitchenSink
    },
    {
        path: '/album',
        name: 'album',
        component: ExampleAlbum
    },
    {
        path: '/blog',
        name: 'blog',
        component: ExampleBlog
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: ExampleCarousel
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: ExampleCheckout
    },
    {
        path: '/cover',
        name: 'cover',
        component: ExampleCover
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: ExampleDashboard
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: ExamplePricing
    },
    {
        path: '/product',
        name: 'product',
        component: ExampleProduct
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});