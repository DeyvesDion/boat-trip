<template>
    <div style="margin-top:260px">
        <h2>Destination populaire:{{ getFavoriteDestination }}</h2>
    </div>
</template>

<script>
export default {
    name: "FavoriteDestination",
    data() {
        return {
            // bN:boat name you can seen on rooter/index.js
            getFavoriteDestination: this.$route.params.dN,
        };
    },
};
</script>

<style lang="scss" scoped></style>
