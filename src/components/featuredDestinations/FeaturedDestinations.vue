<template>
    <div>
        <section class="featuredDestinations">
            <div>
                <h2 class="subTitle">
                    Destination à la une
                </h2>
                <div class="img" title="Visiter la corse">
                    <h2 class="title">
                        La corse
                    </h2>
                    <h3 class="subTitle">
                        La méditerranée à bout de bras
                    </h3>
                    <input
                        type="button"
                        value="Visiter"
                        title="Visiter la corse"
                    />
                </div>
            </div>
        </section>
        <div class="container featuredDestinationsLits">
            <h2 class="subTitle">
                Destinations coup de coeur
            </h2>
            <div class="row">
                <div
                    class="col-sm-6 col-md-4 col-lg-4 col-xl-3"
                    v-for="(destination, index) in destinations"
                    :key="index"
                >
                    <div
                        class="card mb-2"
                        style="max-width: 50rem; cursor:pointer"
                    >
                        <img
                            class="card-img-top"
                            :src="destination.imgUrl"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ destination.name }}
                            </h5>
                            <p class="card-text">
                                {{ destination.description }}
                            </p>
                            <b-button class="btnLocation" href="#"
                                >Visiter {{ destination.name }}
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeaturedDestinations",
    computed: {
        destinations() {
            return this.$store.state.destinations;
        },
    },
};
</script>

<style src="./FeaturedDestinations.css" scoped></style>
