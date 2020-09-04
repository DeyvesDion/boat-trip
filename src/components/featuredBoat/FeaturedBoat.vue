<template>
    <div class="container">
        <section class="featuredBoat">
            <h2 class="subTitle">
                Les plus populaire
            </h2>

            <b-row class="featuredBoatCard">
                <b-col
                    sm="6"
                    md="4"
                    lg="4"
                    xl="3"
                    v-for="(boat, index) in boats"
                    :key="index"
                >
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 50rem; cursor:pointer"
                        class="mb-2"
                    >
                        <h4 class="mb-2">{{ boat.name }}</h4>
                        <b-card-text>
                            {{ boat.description }}
                        </b-card-text>

                        <b-button class="btnLocation" href="#">Louer</b-button>
                    </b-card>
                </b-col>
            </b-row>
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
};
</script>

<style src="./FeaturedBoat.css" scoped></style>
