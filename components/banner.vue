<template>
    <div id="nav">
        <div class="shape" :style="bordo">
            <svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg" class="svg" id="s1">null</svg>
            <svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg" class="svg" id="s2">null</svg>
            <svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg" class="svg" id="s3">null</svg>
            <svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg" class="svg" id="s4">null</svg>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.bordo = this.bordprefix + this.bordcolor[this.roll(this.bordcolor.length)] + this.bordcap
        this.getShapes()
    },
    methods: {
        roll(arg) {
            //simple rng roll
            let rng = Math.floor(Math.random() * arg)
            return rng
        },
        mkShapes() {
            this.shaper = []
            const shapes = [`<rect width="100" height="100"`, `<circle cx="50" cy="50" r="50"`, `<polygon points="0,100 100,100 50,0"`]
            const styles = ` style="fill: `
            const colors = this.colors
            const cap = `" />`
            let selShape = String
            let selColor = String
            let Shaped = String
            for (let s = 0; s < shapes.length; s++) {
                selShape = shapes[s]
                for (let c = 0; c < 4; c++) {
                    selColor = colors[c]
                    Shaped = selShape + styles + selColor + cap
                    this.shaper.push(Shaped)
                }
            }
        },
        getShapes() {
            // mkShapes first
            this.mkShapes()
            // selectors for shapes
            const s1 = document.querySelector("#s1")
            const s2 = document.querySelector("#s2")
            const s3 = document.querySelector("#s3")
            const s4 = document.querySelector("#s4")
            // choice for rolls
            let choice = Number
            // randomly generate shapes and their colors
            choice = this.roll(this.shaper.length)
            let shape1 = this.shaper[choice]
            s1.innerHTML = shape1
            this.shaper.splice(choice, choice)
            choice = this.roll(this.shaper.length)
            let shape2 = this.shaper[choice]
            s2.innerHTML = shape2
            this.shaper.splice(choice, choice)
            choice = this.roll(this.shaper.length)
            let shape3 = this.shaper[choice]
            s3.innerHTML = shape3
            this.shaper.splice(choice, choice)
            choice = this.roll(this.shaper.length)
            let shape4 = this.shaper[choice]
            s4.innerHTML = shape4
            this.shaper.splice(choice, choice)
        }
    },
    data() {
        return {
            // Shapes
            shaper: [],
            // Colors
            colors: [
                "#d90368", //red
                "#2274a5", //blue
                "#7A9B76", //green
                "#f1c40f", //yellow
                "#f75c03", //orange
            ],
            bordprefix: "border: 0.3vh solid var(",
            bordcolor: ["--new-blu", "--new-yel", "--new-org", "--primeRed", "--primeGreen", "--primeBlue"],
            bordcap: ");",
            bordo: "border: 0.3vh solid gray;"
        }
    },
}
</script>
<style scoped>
#nav {
    margin: 1vh 2vw -4vh 2vw;
    padding: 1vh;
    display: flex;
}
.shape {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: var(--new-org);
    margin: 3vh 0vw 8vh 0vw;
    padding: 3vh;
    box-shadow: 0vh 5vh 3vh black;
    list-style: none;
}
.svg {
    display: flex;
    width: 12%;
    padding-left: 5vw;
    padding-right: 5vw;
}
</style>