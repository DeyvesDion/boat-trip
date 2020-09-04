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
                            :options="options"
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
        <!-- <div class="sicial">
            <ul class="socialItem">
                <li>
                    <a href="#"
                        ><img src="../../assets/instagram.png" alt="instagram"
                    /></a>
                </li>
                <li>
                    <a href="#"
                        ><img src="../../assets/facebook.png" alt="facebook"
                    /></a>
                </li>
                <li>
                    <a href="#"
                        ><img src="../../assets/twitter.png" alt="twitter"
                    /></a>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker";
export default {
    name: "Banner",
    components: {
        HotelDatePicker,
    },
    data() {
        return {
            formDestination: {
                destination: "",
                startOfReservation: "",
                endOfReservation: "",
                boatType: null,
            },

            options: [
                { value: null, text: "Type de bateau" },
                { value: "Voilier", text: "Voilier", description: "ok" },
                { value: "Bateau à moteur", text: "Bateau à moteur" },
                { value: "Catamaran", text: "Catamaran" },
                { value: "Semi-rigide", text: "Semi-rigide" },
            ],
        };
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
