<template>
    <div class="App">
        <layout-navbar/>
        <section class="container my-4">
            <router-view/>
        </section>
    </div>
</template>

<script>
    import LayoutNavbar from "src/js/components/LayoutNavbar.vue";

    export default {
        name: "App",
        components: {LayoutNavbar}
    };
</script>