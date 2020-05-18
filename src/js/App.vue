<template>
    <div class="App">
        <layout-navbar/>
        <section class="container mt-4">
            <router-view/>
        </section>
    </div>
</template>

<script>
    import LayoutNavbar from "src/js/layout/LayoutNavbar.vue";

    export default {
        name: "App",
        components: {LayoutNavbar}
    };
</script>