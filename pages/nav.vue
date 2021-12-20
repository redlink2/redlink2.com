<template>
    <div>
        <div id="title">
            <h1>LINKS</h1>
        </div>
        <div id="devLinks">
            <div class="dev">
                <nuxt-link class="lines" to="/">index</nuxt-link>
            </div>
            <div class="dev">
                <nuxt-link class="lines" to="blackjack">blackjack</nuxt-link>
            </div>
            <div class="dev">
                <nuxt-link class="lines" to="api">API</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            animation: "animation: slide-out 1s forwards"
        }
    },
}
</script>
<style>
body {
    height: 100%;
    width: 99%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
}
a {
    text-decoration: none;
    color: silver;
}
.dev {
    padding-top: 2vh;
    margin-right: 20vw;
    padding-bottom: 2vh;
    margin-left: 20vw;
    font-size: 2em;
}
.dev:hover {
    margin-right: 30vw;
    margin-left: 30vw;
    transition: width 1s;
}
.dev:nth-of-type(odd) {
    background-color: red;
}
.dev:nth-of-type(even) {
    background-color: green;
}
</style>