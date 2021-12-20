<template>
    <div id="switchContain">
        <nuxt-link to="nav" id="displaced">LINKS!</nuxt-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link: "api",
        }
    },
}
</script>
<style scoped>
#switchContain {
    display: flex;
    justify-content: center;
    align-items: center;
}
#displaced {
    padding: 10%;
    color: black;
    background-color: var(--subBlue);
    box-shadow: 1vw 1vh var(--subYellow);
    border: solid var(--primeRed);
    border-width: 0.5vh;
}
#displaced:hover {
    cursor: pointer;
    filter: hue-rotate(180deg);
}
</style>