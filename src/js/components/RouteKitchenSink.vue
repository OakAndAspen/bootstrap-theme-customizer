<template>
    <div id="RouteKitchenSink">
        <div v-for="section of sections">
            <h2 class="text-center text-secondary small-caps my-4 py-4" :id="section.label">
                - {{section.label}} -
            </h2>
            <component v-bind:is="section.component"></component>
        </div>
    </div>
</template>

<script>
    import SectionButtons from "src/js/components/sections/SectionButtons.vue";
    import SectionContainers from "src/js/components/sections/SectionContainers.vue";
    import SectionDialogs from "src/js/components/sections/SectionDialogs.vue";
    import SectionForms from "src/js/components/sections/SectionForms.vue";
    import SectionIndicators from "src/js/components/sections/SectionIndicators.vue";
    import SectionNavbar from "src/js/components/sections/SectionNavbar.vue";
    import SectionNavs from "src/js/components/sections/SectionNavs.vue";
    import SectionProgress from "src/js/components/sections/SectionProgress.vue";
    import SectionTables from "src/js/components/sections/SectionTables.vue";
    import SectionTypography from "src/js/components/sections/SectionTypography.vue";

    export default {
        name: "RouteKitchenSink",
        components: {
            SectionDialogs, SectionContainers, SectionProgress, SectionIndicators,
            SectionNavs, SectionForms, SectionTables, SectionTypography, SectionButtons, SectionNavbar
        },
        data() {
            return {
                sections: [
                    {label: "Navbars", component: SectionNavbar},
                    {label: "Buttons", component: SectionButtons},
                    {label: "Typography", component: SectionTypography},
                    {label: "Tables", component: SectionTables},
                    {label: "Forms", component: SectionForms},
                    {label: "Navs", component: SectionNavs},
                    {label: "Indicators", component: SectionIndicators},
                    {label: "Progress", component: SectionProgress},
                    {label: "Containers", component: SectionContainers},
                    {label: "Dialogs", component: SectionDialogs}
                ]
            }
        }
    }
</script>