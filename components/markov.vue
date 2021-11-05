<template>
    <div id="lefty"></div>
</template>

<script>
export default {
    mounted() {
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890?!@#$%^&*)-_=+]},.:;~';
        var result = '';
        const charLen = char.length;
        for (var i = 0; i < 100; i++) {
            result += char.charAt(Math.floor(Math.random() * charLen));
            document.querySelector('#lefty').innerHTML = `<h1>` + result + `</h1>`;
        }
        setInterval(() => {
            document.querySelector('#lefty').scrollBy(1, 0)
        }, 80);
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
    font-size: 3vh;
    color: var(--subGreen);
    overflow: scroll;
}
</style>