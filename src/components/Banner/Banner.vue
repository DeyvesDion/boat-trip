<template>
    <div class="">
        <div class="banner">
            <h1 class="bannerTitle">
                Boad trip
            </h1>
            <h2 class="bannerSubTitle">
                Location de bateau entre particuliers
            </h2>
            <form>
                <div>
                    <div class="form-box">
                        <input
                            v-model.trim="formDestination.destination"
                            type="text"
                            class="search-box form-item"
                            title="Ville de destination"
                            placeholder="Paris, Corse, Marseille..."
                        />
                        <!-- Datepicker -->
                        <datepicker placeholder="Début réservation"
                             v-model="formDestination.startOfReservation"
                            :bootstrap-styling="true"
                            :format="DatePickerFormat"
                            :disabledDates="disabledDates"
                            class="form-item-datePicker"
                            :calendar-button="true"
                            :language="fr"
                            calendar-button-icon="fa fa-calendar"
                            title="Début de réservation"
                            >
                        </datepicker>
                         <datepicker placeholder="Fin réservation"
                            v-model="formDestination.endOfReservation"
                            :bootstrap-styling="true"
                            :format="DatePickerFormat"
                            :disabledDates="disabledDates"
                            class="form-item-datePicker"
                            :calendar-button="true"
                            :language="fr"
                            calendar-button-icon="fa fa-calendar"
                            title="Fin de réservation"
                            >
                        </datepicker>
                        <!-- <b-form-datepicker
                            v-model="formDestination.startOfReservation"
                            id="datepicker-dateformat"
                            :date-format-options="{
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                            }"
                            Default: true
                            locale="fr"
                            class="form-item-datepicker"
                            title="Début de réservation"
                            placeholder="Début"
                        ></b-form-datepicker> -->
                        <!-- <b-form-datepicker
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
                        ></b-form-datepicker> -->

                        <b-form-select
                            v-model="formDestination.boatType"
                            :options="boatsType"
                            class="form-item boatType"
                        ></b-form-select>
                        <input
                            @click.prevent="search(formDestination.destination)"
                            type="submit"
                            value="Rechercher"
                            title="Rechercher votre destination de rêve"
                            class="search-btn form-item"
                        />
                    </div>
    <p class="error" v-if="errors.length">
    <b>Veuillez corriger l'erreur suivante:</b>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>
  </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {fr, es} from 'vuejs-datepicker/dist/locale'
export default {
    name: "Banner",
    components: {
        Datepicker,
    },
    data() {
        return {
            fr: fr,
            es: es,
            errors: [],
            formDestination: {
                destination: null,
                startOfReservation: null,
                endOfReservation: null,
                boatType: null,
            },
        DatePickerFormat: 'dd/MM/yyyy',
        disabledDates: {
          to: new Date(Date.now() - 8640000),
        }
        };
    },
    computed: {
        boatsType() {
            return this.$store.state.boatsType;
        },
    },
    methods: {
        search(searchDestination) {
            let search = this.formDestination.destination;
            let pp=this.formDestination.startOfReservation;
               
                if (search) {
        this.$router.push({ name: "Search", params: { sD: searchDestination } });
      }
      this.errors = [];
       if (!search) {
        this.errors.push('La destination est réquise.');
      }
               
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Banner.css" scoped></style>
