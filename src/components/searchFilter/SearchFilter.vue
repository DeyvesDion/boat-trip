<template>
    <div class="">
        <b-form-radio-group
            v-model="gender"
            :options="boatsType"
            class="form-item boatType"
        ></b-form-radio-group>
        <h4><i class="fas fa-map-marker-alt"></i> {{ getDestination }}</h4>
    </div>
</template>

<script>
export default {
    name: "SearchFilter",
    data() {
        return {
            getDestination: this.$route.params.sD,
        };
    },
    computed: {
        boatsType() {
            return this.$store.state.boatsType;
        },
    },
};
</script>

<style src="./SearchFilter.css" scoped></style>
