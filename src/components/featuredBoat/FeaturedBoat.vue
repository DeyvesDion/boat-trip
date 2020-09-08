<template>
    <div class="container">
        <section class="featuredBoat">
            <h2 class="subTitle">
                Les plus populaire
            </h2>

            <div class="row">
                <div
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-3"
                    v-for="(boat, index) in boats"
                    :key="index"
                >
                    <div
                        @click="rental(boat.name)"
                        class="card mb-2"
                        style="max-width: 50rem; cursor:pointer"
                    >
                        <img
                            class="card-img-top"
                            :src="boat.imgUrl"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">{{ boat.name }}</h5>
                            <p class="card-text">
                                {{ boat.description }}
                            </p>

                            <b-button
                                @click="rental(boat.name)"
                                class="btnLocation"
                                >Louer</b-button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "PopularBoad",
    computed: {
        boats() {
            return this.$store.state.boats;
        },
    },
    methods: {
        rental(boatType) {
            // bT:boat type you can seen on rooter/index.js
            this.$router.push({ name: "BoatRental", params: { bT: boatType } });
        },
    },
};
</script>

<style src="./FeaturedBoat.css" scoped></style>
