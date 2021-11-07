<template>
    <div id="lefty"></div>
</template>

<script>
export default {
    mounted() {
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890?!@#$%^&*)-_=+]},.:;~';
        const charLen = char.length;
        for (var i = 0; i < 100; i++) {
            this.rng += char.charAt(Math.floor(Math.random() * charLen));
            document.querySelector('#lefty').innerHTML = `<h1>` + this.rng + `</h1>`;
        }
    },
    data() {
        return {
            rng: ""
        }
    },
}
</script>

<style scoped>
#lefty {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 180%;
    white-space: nowrap;
    font-size: 3vh;
    color: var(--subGreen);
    overflow: scroll;
    animation: loopText 15000ms infinite linear;
}
@keyframes loopText {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
</style>