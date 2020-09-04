<template>
    <div class="">
        <div class="banner">
            <h1 class="bannerTitle">
                Boad trip
            </h1>
            <h2 class="bannerSubTitle">
                Location de bateau entre particuliers
            </h2>
            <form @submit.prevent="submitDestination">
                <div>
                    <div class="form-box">
                        <input
                            v-model.trim="formDestination.destination"
                            type="text"
                            class="search-box form-item"
                            title="Ville de destination"
                            placeholder="Paris, Corse, Marseille..."
                            required
                        />
                        <!-- Datepicker -->
                        <b-form-datepicker
                            v-model="formDestination.startOfReservation"
                            id="datepicker-dateformat"
                            :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                            }"
                            locale="fr"
                            class="form-item-datepicker"
                            title="Début de réservation"
                            placeholder="Début"
                        ></b-form-datepicker>
                        <b-form-datepicker
                            v-model="formDestination.endOfReservation"
                            id="datepicker-dateformat1"
                            :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                            }"
                            locale="fr"
                            class="form-item-datepicker"
                            title="Fin de réservation"
                            placeholder="Fin"
                        ></b-form-datepicker>

                        <b-form-select
                            v-model="formDestination.boatType"
                            :options="boatsType"
                            class="form-item boatType"
                        ></b-form-select>
                        <input
                            type="submit"
                            value="Rechercher"
                            title="Rechercher votre destination de rêve"
                            class="search-btn form-item"
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner",
    components: {},
    data() {
        return {
            formDestination: {
                destination: "",
                startOfReservation: "",
                endOfReservation: "",
                boatType: null,
            },
        };
    },
    computed: {
        boatsType() {
            return this.$store.state.boatsType;
        },
    },
    methods: {
        submitDestination() {
            console.log(this.formDestination.destination);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Banner.css" scoped></style>
