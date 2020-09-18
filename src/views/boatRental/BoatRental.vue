<template>
    <div style="margin-top:260px">
        <h2>Location de {{ getBoatType }}</h2>
    </div>
</template>

<script>
export default {
    name: "BoatRental",
    data() {
        return {
            // bT:boat type you can seen on rooter/index.js
            getBoatType: this.$route.params.bT,
        };
    },
};
</script>

<style src="./BoatRental.css" scoped></style>
