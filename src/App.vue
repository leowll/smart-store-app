<template>
        <div id="app" class="App">
            <ui5-shellbar
            primary-title="Smart Store Manager"
            show-notifications
            show-product-switch
            show-co-pilot
            ></ui5-shellbar>
            <Home />
        </div>
    </template>

    <script>
        import logo from "./assets/logo.png";
        import profile from "./assets/profile.png";

        import "@ui5/webcomponents/dist/Card";
        import "@ui5/webcomponents/dist/Title";
        import "@ui5/webcomponents/dist/Label";
        import "@ui5/webcomponents/dist/List";
        import "@ui5/webcomponents/dist/CustomListItem";
        import "@ui5/webcomponents/dist/StandardListItem";
        import "@ui5/webcomponents-fiori/dist/ShellBar";
        import Home from "@/views/Home.vue"
        export default {
            name: "app",
                components: {
                    Home
                },
                data: function() {
                    return {
                        logo: logo,
                        profile: profile
                    };
                }
        };
    </script>