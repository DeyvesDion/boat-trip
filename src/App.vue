<template>
    <div id="app">
        <!-- <div id="nav">
            <NavBar />
            <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        </div> -->
        <NavBar />
        <router-view />
    </div>
</template>
<script>
import NavBar from "@/components/navBar/NavBar.vue";
export default {
    name: "App",
    components: {
        NavBar,
    },
};
</script>

<style>
#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
