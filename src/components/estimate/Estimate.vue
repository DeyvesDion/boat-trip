<template>
    <div class="container">
        <section class="estimate">
            <div>
                <h2 class="title">
                    Vous êtes propriétaire de bateau ?<br />
                    <span class="subTitle"
                        >Estimez le potentiel locatif de votre bateau</span
                    >
                </h2>
                <input
                    @click="myEstimate"
                    type="button"
                    value="Faire mon estimation"
                    title="Faire mon estimation"
                />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Estimate",
    methods: {
        myEstimate() {
            this.$router.push({
                name: "Estimate",
            });
        },
    },
};
</script>

<style src="./Estimate.css" scoped></style>
