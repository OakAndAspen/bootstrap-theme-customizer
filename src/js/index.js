import "bootstrap/dist/js/bootstrap.min";
import "src/css/style.scss";
import Vue from "vue";
import {router} from "src/js/config/vue-router.js";
import App from "src/js/App.vue";

const app = new Vue({
    el: "#root",
    router,
    render: (h) => h(App)
});