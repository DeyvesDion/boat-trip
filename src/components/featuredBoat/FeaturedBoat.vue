<template>
    <div>
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
                    v-for="(boad, index) in boads"
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
                        <h4 class="mb-2">{{ boad.name }}</h4>
                        <b-card-text>
                            {{ boad.description }}
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
    data() {
        return {
            boads: [
                {
                    name: "Voilier",
                    description:
                        "Louez votre voilier à un particulier ou un loueur professionnel.",
                },
                {
                    name: "Bateau à moteur",
                    description:
                        "La location de bateau à moteur entre particuliers et à un professionnel n’a jamais été aussi simple.",
                },
                {
                    name: "Catamaran",
                    description:
                        "Louez votre Catamaran à un particulier ou un loueur professionnel.",
                },
                {
                    name: "Semi-rigide",
                    description:
                        "Louez votre Semi-rigide à un particulier ou un loueur professionnel.",
                },
            ],
        };
    },
};
</script>

<style src="./FeaturedBoat.css" scoped></style>
