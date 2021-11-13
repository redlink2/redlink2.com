<template>
<body>
    <div>
        <div id="mat">
            <div id="opchoice">{{ opcard }}</div>
            <div id="urcard">{{ pcard }}</div>
            <div id="hand">{{ hand }}</div>
        </div>
    </div>
</body>
</template>
<script>
export default {
    mounted() {
        let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        const length = range.length;
        let oprandy = Math.floor(Math.random() * length)
        let prandy = Math.floor(Math.random() * length)
        let sel = 0
        this.opcard = range[oprandy]
        this.pcard = range[prandy]
        this.hand = oprandy
    },
    data() {
        return {
            opcard: 0,
            pcard: 0,
            hand: 0,
        }
    },
}
</script>
<style scoped>
body {
    background-color: goldenrod;
}
</style>