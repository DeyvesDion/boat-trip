<template>
    <div id="app">
        <div id="nav">
            <NavBar />
        </div>
        <router-view />
        <Footer />
    </div>
</template>
<script>
import NavBar from "@/components/navBar/NavBar.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    name: "App",
    components: {
        NavBar,
        Footer,
    },
};
</script>

<style>
#nav .navItem a.router-link-exact-active {
    color: #7451eb;
}
</style>
