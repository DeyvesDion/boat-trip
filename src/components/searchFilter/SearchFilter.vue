<template>
    <div class="">
        <!-- <h4>Type de bateau</h4>
        <div v-for="(boat, index) in boats" :key="index">
            <input
                @click="boatType(boat)"
                class="boatType"
                type="radio"
                name="boatType"
                :value="boat.type"
            /><small>{{ boat.type }}</small>
        </div>
        <h4 class="mb-4">
            <i class="fas fa-map-marker-alt"></i> {{ getDestination }}
        </h4>
        <ul class="priseValue">
            <h6>Prix :</h6>

            <span v-for="(item, index) in priseValue" :key="index">
                {{ item }} </span
            ><small>€/jour</small>
        </ul>
        <vue-range-slider
            class="mt-4"
            v-model="priseValue"
            :min="min"
            :max="max"
            :enable-cross="enableCross"
        ></vue-range-slider> -->
    </div>
</template>

<script>
// import "vue-range-component/dist/vue-range-slider.css";
// import VueRangeSlider from "vue-range-component";
export default {
    name: "SearchFilter",
    components: {
        // VueRangeSlider,
    },
    data() {
        return {
            // priseValue: [0, 850],
            // getDestination: this.$route.params.sD,
        };
    },
    // created() {
    //     this.min = 0;
    //     this.max = 1000;
    //     this.enableCross = false;
    // },
    computed: {
        // boats() {
        //     return this.$store.state.boats;
        // },
    },
    methods: {
        // boatType(boat) {
        //     if (boat.type === "Voilier") {
        //         console.log("un");
        //     } else {
        //         console.log(boat.type);
        //     }
        // },
    },
};
</script>

<style src="./SearchFilter.css" scoped></style>
