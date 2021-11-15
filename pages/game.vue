<template>
<body>
    <div>
        <div id="mat">
            <div id="opchoice"></div>
            <div id="urcard">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div id="hand"></div>
        </div>
    </div>
</body>
</template>
<script>
export default {
    mounted() {
        let opt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        const length = opt.length
        let sel = Math.floor(Math.random() * length)
        this.number = opt[sel]
    },
    data() {
        return {
            suit: "",
            number: 0,
            pcard: "spade"
        }
    },
}
</script>
<style scoped>
body {
    background-color: goldenrod;
}
</style>