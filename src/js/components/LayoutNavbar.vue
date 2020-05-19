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
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button"
                       aria-haspopup="true" aria-expanded="false">Sections</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" :key="section.label"
                           v-for="section of sections" :href="getAnchor(section.label)">
                            {{section.label}}
                        </a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                       aria-haspopup="true" aria-expanded="false">Examples</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" :key="ex.label"
                           v-for="ex of examples" :href="getUrl(ex.label)">
                            {{ex.label}}
                        </a>
                    </div>
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
                logo: logo,
                sections: [
                    {label: "Navbars"},
                    {label: "Buttons"},
                    {label: "Typography"},
                    {label: "Tables"},
                    {label: "Forms"},
                    {label: "Navs"},
                    {label: "Indicators"},
                    {label: "Progress"},
                    {label: "Containers"},
                    {label: "Dialogs"}
                ],
                examples: [
                    {label: "Album"},
                    {label: "Blog"},
                    {label: "Carousel"},
                    {label: "Checkout"},
                    {label: "Cover"},
                    {label: "Dashboard"},
                    {label: "Pricing"},
                    {label: "Product"}
                ]
            }
        },
        methods: {
            getUrl(label) {
                return "/" + label.toLowerCase();
            },
            getAnchor(label) {
                return "/#" + label;
            }
        }
    }
</script>