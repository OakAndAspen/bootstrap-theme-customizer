<template>
    <nav class="navbar navbar-expand-sm navbar-light">
        <router-link class="navbar-brand" to="/">
            <img :src="logo" alt="Oak & Aspen" class="img-fluid" style="max-height: 50px;"/>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Kitchen sink</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/example1">Example 1</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/example2">Example 2</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import logo from "src/images/favicon.png";

    export default {
        name: "LayoutNavbar",
        data() {
            return {
                logo: logo
            }
        }
    }
</script>