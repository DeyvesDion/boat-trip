<template>
    <div class="">
        <div class="banner">
            <SearchBar />
        </div>
    </div>
</template>

<script>
import SearchBar from "@/components/searchBar/SearchBar.vue";
export default {
    name: "Banner",
    components: {
        SearchBar,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Banner.css" scoped></style>
