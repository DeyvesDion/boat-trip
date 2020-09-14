<template>
    <div class="searchContainer">
        <div class="container shadow rounded">
            <div class="searchBox">
                <div class="row searchFilter shadow-sm">
                    <div>
                        <SearchFilter />
                    </div>
                </div>
                <div class="row">
                    <div
                        class="col-md-6 col-xl-6 col-sm-12"
                        v-for="(boat, index) in boats"
                        :key="index"
                    >
                        <div
                            class="card mb-5"
                            style="max-width: 50rem; cursor:pointer;"
                        >
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
import SearchFilter from "@/components/searchFilter/SearchFilter.vue";
export default {
    name: "Search",
    components: {
        SearchFilter,
    },

    computed: {
        boats() {
            return this.$store.state.boats;
        },
    },
};
</script>

<style src="./Search.css" scoped></style>
