<template>
    <div id="switchContain">
        <div id="displaced" v-on:click="colorShift">displace!</div>
    </div>
</template>
<style>
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
<script>
export default {
    methods: {
        colorShift() {
            this.toggle = !this.toggle
        }
    },
    watch: {
        toggle: {
            handler: function () {
                this.$nextTick(() => {
                    if (this.toggle) {
                        this.root.style.setProperty("--bg", "--bgMain")
                    } else {
                        this.root.style.setProperty("--bg", "--bgAlt")
                    }
                }
                )
            }
        }
    },
    data() {
        return {
            toggle: false,
        }
    },
}
</script>