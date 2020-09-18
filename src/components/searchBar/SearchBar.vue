<template>
    <div>
       <h1 class="bannerTitle">
                Boad trip
            </h1>
            <h2 class="bannerSubTitle">
                Location de bateau entre particuliers
            </h2>
            <form>
                <div>
                    <div class="form-box">
                        <label for="destination">
                        <!-- <i class="fas fa-map-marker-alt"></i>  -->
                        </label>
                        <input
                            v-model.trim="formDestination.destination"
                            type="text" name="destination" id="destination"
                            class="search-box form-item"
                            title="Ville de destination"
                            placeholder="Paris, Corse, Marseille..."
                        />
                        <!-- Datepicker --> 
                        <label for="debut">
                        <!-- <i class="fas fa-calendar-check"></i>     -->
                        </label>
                        <input v-model="formDestination.startOfReservation" @click="selectDate" placeholder="Début réservation" type="text" name="debut" id="debut" max="" onfocus="(this.type='date')"  class="form-item">
                        <label for="fin">
                        <!-- <i class="fas fa-calendar-times"></i>       -->
                        </label>
                        <input v-model="formDestination.endOfReservation" @click="selectDate" placeholder="Fin réservation" type="text" name="fin" id="fin" min="" onfocus="(this.type='date')"  class="form-item">
                        <label for="boatType">
                            <!-- <i class="fas fa-ship"></i> -->
                        </label>
                        <select style="color:#7451EB;" class="form-item boatType" name="boatType" id="boatType">
                            <option value="" disabled selected hidden>Types de bateaux</option>
                            <option value="voilier">Voilier</option>
                            <option value="bateau-a-moteur">Bateau à moteur</option>
                            <option value="catamaran">Catamaran</option>
                            <option value="semi-rigide">Semi-rigide</option>
                        </select>
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
</template>

<script>
export default {
    name:"SearchBar",
      components: {
    },
     data() {
        return {
            errors: [],
            formDestination: {
                destination: null,
                startOfReservation: null,
                endOfReservation: null,
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
          selectDate(){
               var today = new Date().toISOString().split('T')[0];
               document.getElementsByName("debut")[0].setAttribute('min', today);
               document.getElementsByName("fin")[0].setAttribute('min', today);
            let debut;
            $("#debut").on("change", function() {
                debut = $(this).val();
                $("#fin").prop("min", function() {
                    return debut;
                })
                
            });
            let fin;            
            $("#fin").on("change", function() {
               document.getElementsByName("fin")[0].setAttribute('min', today);
                fin = $(this).val();
                $("#debut").prop("max", function() {
                    return fin;
                })
            });
          },
        search(searchDestination) {
            let search = this.formDestination.destination;
            let start= this.formDestination.startOfReservation;
            let end=this.formDestination.endOfReservation;
               
                if (search) {
        this.$router.push({ name: "Search", params: { sD: searchDestination } });
        console.log(start)
      }
      this.errors = [];
       if (!search) {
        this.errors.push('La destination est réquise.');
      }
       if (!start) {
        this.errors.push('Le début de la location est réquise.');
      }
      if (!end) {
        this.errors.push('La fin de la location est réquise.');
      }
               
        },
    },
}
</script>

<style src="./SearchBar.css" scoped>

</style>