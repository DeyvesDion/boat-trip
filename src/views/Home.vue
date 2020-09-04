<template>
    <div>
        <Banner />
        <FeaturedBoat />
        <FeaturedDestinations />
        <Estimation />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import FeaturedBoat from "@/components/featuredBoat/FeaturedBoat.vue";
import FeaturedDestinations from "@/components/featuredDestinations/FeaturedDestinations.vue";
import Estimation from "@/components/estimation/Estimation.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
    name: "Home",
    components: {
        Banner,
        FeaturedBoat,
        FeaturedDestinations,
        Estimation,
        Footer,
    },
};
</script>
