<template>
    <div>
<p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rem
            obcaecati animi dolorum nam facere nostrum, nihil illum eveniet,
            iure fugiat a? A temporibus qui distinctio velit ipsam aliquam,
            dignissimos ea, ab deleniti debitis expedita, dicta in enim ad!
            Consectetur sunt, sapiente ullam repellat recusandae doloribus modi
            iste a in repellendus asperiores accusamus eaque perferendis
            quibusdam. Esse ullam laborum facilis nihil minima modi velit
            dolorem quas. Ipsum harum delectus mollitia perspiciatis eius
            consectetur modi, facilis consequatur hic adipisci voluptas
            provident autem quasi laboriosam. Exercitationem quod, non excepturi
            ullam veritatis, recusandae quia laudantium eos eveniet similique
            quisquam, perspiciatis tempore ratione rerum cupiditate iusto
            deleniti quidem praesentium debitis saepe adipisci rem amet!
            Temporibus deleniti libero beatae quas dolorem laudantium esse
            debitis nostrum provident consequuntur! Laudantium exercitationem,
            consequatur non quo illo repudiandae. destination coup de coeur
            <h2>{{getFavoriteDestination}}</h2>
        </p>
    </div>
</template>

<script>
    export default {
         name: "FavoriteDestination",
    data() {
        return {
             // bN:boat name you can seen on rooter/index.js
            getFavoriteDestination: this.$route.params.dN
        };
    },
    }
</script>

<style lang="scss" scoped>

</style>