<template>
<body>
    <div>
        <div class="container">
            <div class="opHand">
                <div class="oCard1" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="oCard2" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="oCard3" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="oCard4" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="oCard5" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
            </div>
            <div class="stay">
                <button v-on:click="hide" class="btns">STAY</button>
            </div>
            <div class="dealer">
                <textarea
                    name="DEALER"
                    id="dealer"
                    cols="100"
                    rows="20"
                    placeholder="outputted text will go here"
                ></textarea>
            </div>
            <div class="hit">
                <button v-on:click="deal" class="btns">HIT</button>
            </div>
            <div class="playerHand">
                <div class="pCard1" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="pCard2" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="pCard3" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="pCard4" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
                <div class="pCard5" v-show="dealt">
                    <img :src="require(`~/assets/playCards/${pcard1}.png`)" />
                </div>
            </div>
        </div>
    </div>
</body>
</template>
<script>
export default {
    mounted() {
    },
    methods: {
        deal() {
            //gen number and select at random
            const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            const numLen = nums.length
            let selNum = Math.floor(Math.random() * numLen)
            this.number = nums[selNum]
            //gen suit and select at random
            const suit = ["spade", "heart", "club", "diamond"]
            const suitLen = suit.length
            let selSuit = Math.floor(Math.random() * suitLen)
            this.suit = suit[selSuit]
            //put card together
            this.pcard1 = this.suit + this.number
            this.dealt = true
        },
        hide() {
            this.dealt = false
        }

    },
    data() {
        return {
            suit: "spade",
            number: 0,
            pcard1: "spade0",
            dealt: false
        }
    },
}
</script>
<style scoped>
body {
    background-color: goldenrod;
}
.container {
    height: 96.6vh;
    width: 98.9vw;
    display: grid;
    grid-template-columns: 0.5fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 0.5fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
}
.container * {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: groove;
    border-color: red;
}
.opHand {
    grid-area: 1 / 2 / 2 / 7;
}
.playerHand {
    grid-area: 4 / 2 / 5 / 7;
}
.btns {
    height: 50%;
    width: 50%;
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