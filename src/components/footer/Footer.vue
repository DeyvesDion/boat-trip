<template>
    <div class="footer">
        <footer>
            <b-row class="">
                <b-col sm="6" md="4" lg="4" xl="3"
                    ><h5>A propos</h5>
                    Boat tip leader de la location de bateaux entre
                    particuliers</b-col
                >
                <b-col sm="6" md="4" lg="4" xl="3"
                    ><h5>Destinations</h5>
                    <ul class="destinationList">
                        <li class="">
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Voilier</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Bateau à moteur</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Catamaran</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Semi-rigide</router-link
                            >
                        </li>
                    </ul>
                </b-col>
                <b-col sm="6" md="4" lg="4" xl="3"
                    ><h5>Bateaux</h5>
                    <ul class="boatList">
                        <li class="">
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Voilier</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Bateau à moteur</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Catamaran</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                to="/louer-un-bateau/recherche/ville/:sD"
                                >Semi-rigide</router-link
                            >
                        </li>
                    </ul>
                </b-col>
                <b-col sm="6" md="4" lg="4" xl="3"
                    ><h5>Nous suivre</h5>
                    <ul class="socialList">
                        <li>
                            <a href="#" title="Facebook"
                                ><i class="fab fa-facebook"></i>Facebook</a
                            >
                        </li>
                        <li>
                            <a href="#" title="Twitter"
                                ><i class="fab fa-twitter-square"></i>Twitter</a
                            >
                        </li>
                        <li>
                            <a href="#" title="Instagram"
                                ><i class="fab fa-instagram"></i>Instagram</a
                            >
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style src="./Footer.css" scoped></style>
