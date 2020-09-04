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
            <b-row class="featuredDestinationsLitsCard">
                <b-col sm="6" md="4" lg="4" xl="3">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 50rem; cursor:pointer"
                        class="mb-2"
                    >
                        <h4 class="mb-2">kjjjfj jffh</h4>
                        <b-card-text>
                            lorerv jiefijfiji jjijij jojj joji joj
                        </b-card-text>

                        <b-button class="btnLocation" href="#">Louer</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeaturedDestinations",
};
</script>

<style src="./FeaturedDestinations.css" scoped></style>
