<template>
    <div>
        <Banner />
        <b-container>
            <FeaturedBoat />
        </b-container>
        <FeaturedDestinations />
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import FeaturedBoat from "@/components/featuredBoat/FeaturedBoat.vue";
import FeaturedDestinations from "@/components/featuredDestinations/FeaturedDestinations.vue";

export default {
    name: "Home",
    components: {
        Banner,
        FeaturedBoat,
        FeaturedDestinations,
    },
};
</script>
