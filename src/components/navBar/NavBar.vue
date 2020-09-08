<template>
    <div>
        <header>
            <div class="logoSection">
                <router-link to="/" class="logo"
                    ><img
                        src="./logo.png"
                        class="logoIcon"
                        alt="logo icon"
                    />Boat trip</router-link
                >
            </div>
            <div class="toggle" onclick="toggleMenu()"></div>
            <ul class="menu">
                <li class="navItem">
                    <router-link
                        to="/enregister-un-bateau"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Enregistrez un bateau</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/connexion"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Connexion</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/inscription"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Inscription</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/aide"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Aide</router-link
                    >
                </li>
                <li class="navItem">
                    <router-link
                        to="/contact"
                        class="navLink"
                        onclick="toggleMenu()"
                        >Contact</router-link
                    >
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style src="./NavBar.css" scoped></style>
