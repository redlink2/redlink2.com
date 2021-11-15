<template>
<body>
    <div>
        <div class="container">
            <div class="opHand">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="oCard1">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="oCard2">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="oCard3">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="oCard4">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="oCard5">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="stay"></div>
            <div class="dealer"></div>
            <div class="hit"></div>
            <div class="playerHand"></div>
            <div class="pCard1">
                <!-- <img :src="require(`~/assets/pc/${pcard1}.png`)" /> -->
            </div>
            <div class="pCard2">
                <img :src="require(`~/assets/pc/${suit}/${number}.png`)" />
            </div>
            <div class="pCard3">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="pCard4">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
            <div class="pCard5">
                <img :src="require(`~/assets/pc/${pcard}/${number}.png`)" />
            </div>
        </div>
    </div>
</body>
</template>
<script>
export default {
    mounted() {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        const numLen = nums.length
        let selNum = Math.floor(Math.random() * numLen)
        this.number = nums[selNum]
        let suit = ["spade", "heart", "club", "diamond"]
        const suitLen = suit.length
        let selSuit = Math.floor(Math.random() * suitLen)
        this.suit = suit[selSuit]
        // this.pcard1 = this.suit + '/' + this.number
    },
    data() {
        return {
            suit: "heart",
            number: 0,
            pcard: "spade",
            pcard1: ""
        }
    },
}
</script>
<style scoped>
body {
    background-color: goldenrod;
}
.container {
    display: grid;
    grid-template-columns: 0.5fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 0.5fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
}
.container * {
    display: flex;
    justify-content: center;
    border: groove;
    border-color: red;
}
.opHand {
    grid-area: 1 / 2 / 2 / 7;
}
.playerHand {
    grid-area: 4 / 2 / 5 / 7;
}
.hit {
    grid-area: 2 / 6 / 4 / 7;
}
.stay {
    grid-area: 2 / 2 / 4 / 3;
}
.dealer {
    grid-area: 2 / 3 / 4 / 6;
}
.pCard1 {
    grid-area: 4 / 2 / 5 / 3;
}
.pCard2 {
    grid-area: 4 / 3 / 5 / 4;
}
.pCard3 {
    grid-area: 4 / 4 / 5 / 5;
}
.pCard4 {
    grid-area: 4 / 5 / 5 / 6;
}
.pCard5 {
    grid-area: 4 / 6 / 5 / 7;
}
.oCard1 {
    grid-area: 1 / 2 / 2 / 3;
}
.oCard2 {
    grid-area: 1 / 3 / 2 / 4;
}
.oCard3 {
    grid-area: 1 / 4 / 2 / 5;
}
.oCard4 {
    grid-area: 1 / 5 / 2 / 6;
}
.oCard5 {
    grid-area: 1 / 6 / 2 / 7;
}
</style>