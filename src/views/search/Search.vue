<template>
    <div class="searchContainer">
        <div class="container shadow rounded">
            <div class="searchBox">
                <div class="row searchFilter shadow-sm">
                    <div>
                        <!-- searchFilter -->
                        <h4>Type de bateau</h4>
                        <div v-for="(boat, index) in boats" :key="index">
                            <input
                                v-model="boatRadioFilterKey"
                                class="boatType"
                                type="radio"
                                :id="boat.type"
                                :value="boat.type"
                            />
                            <label :for="boat.type" style="cursor:pointer">{{
                                boat.type
                            }}</label>
                        </div>
                        <h4 class="mb-4">
                            <i class="fas fa-map-marker-alt"></i>
                            {{ getDestination }}
                        </h4>
                        <ul class="priseValue">
                            <h6>Prix :</h6>

                            <span
                                v-for="(price, index) in priceValue"
                                :key="index"
                            >
                                {{ price }} </span
                            ><small>€/jour</small>
                        </ul>
                        <vue-range-slider
                            class="mt-4"
                            v-model="priceValue"
                            :min="min"
                            :max="max"
                            :enable-cross="enableCross"
                        ></vue-range-slider>
                    </div>
                </div>
                <div class="row boatList">
                    <div
                        class=""
                        v-for="(boat, index) in FilteredList"
                        :key="index"
                    >
                        <div class="card mb-5">
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

                                <b-button class="btnLocation">Louer</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import SearchFilter from "@/components/searchFilter/SearchFilter.vue";
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";
export default {
    name: "Search",
    components: {
        VueRangeSlider,
    },
    data() {
        return {
            boatRadioFilterKey: "",
            priceValue: [0, 850],
            // priceValueFilter:"",
            getDestination: this.$route.params.sD,
        };
    },
    created() {
        this.min = 0;
        this.max = 1000;
        this.enableCross = false;
    },

    computed: {
        boats() {
            return this.$store.state.boats;
        },
        radioFilterList() {
            return this.boats.filter((boat) => {
                return boat.type.includes(this.boatRadioFilterKey);
            });
        },
        FilteredList() {
            return this.boats.filter((boat) => {
                return boat.type.includes(this.boatRadioFilterKey);
            });
        },
    },
    methods: {},
};
</script>

<style src="./Search.css" scoped></style>
