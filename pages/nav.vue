<template>
    <div>
        <div id="title">
            <h1>LINKS</h1>
        </div>
        <div id="devLinks">
            <div class="dev" @click="clickIndex">
                <nuxt-link id="index" class="lines" to="/">index</nuxt-link>
            </div>
            <div class="dev" @click="clickBlackjack">
                <nuxt-link id="blackjack" class="lines" to="blackjack">blackjack</nuxt-link>
            </div>
            <div class="dev" @click="clickApi">
                <nuxt-link id="api" class="lines" to="api">API</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        clickIndex() {
            document.querySelector("#index").click()
        },
        clickBlackjack() {
            document.querySelector("#blackjack").click()
        },
        clickApi() {
            document.querySelector("#api").click()
        },
    },
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
    color: chartreuse;
}
a {
    text-decoration: none;
    color: black;
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
    cursor: hover;
    transition: width 1s;
}
.dev:nth-of-type(odd) {
    background-color: #bf9aca;
}
.dev:nth-of-type(even) {
    background-color: #8e4162;
}
</style>