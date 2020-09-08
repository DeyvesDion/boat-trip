<template>
    <div>
        <Banner />
        <FeaturedBoat />
        <FeaturedDestinations />
        <Estimate />
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/banner/Banner.vue";
import FeaturedBoat from "@/components/featuredBoat/FeaturedBoat.vue";
import FeaturedDestinations from "@/components/featuredDestinations/FeaturedDestinations.vue";
import Estimate from "@/components/estimate/Estimate.vue";

export default {
    name: "Home",
    components: {
        Banner,
        FeaturedBoat,
        FeaturedDestinations,
        Estimate,
    },
};
</script>
