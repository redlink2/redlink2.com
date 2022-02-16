<template>
	<div id="banner">
		<div class="rect" :style="bordo"></div>
	</div>
</template>
<script>
export default {
	mounted() {
		this.bordo = this.bordprefix + this.bordcolor[this.roll(this.bordcolor.length)] + this.bordcap
	},
	methods: {
		roll(arg) {
			//simple rng roll
			let rng = Math.floor(Math.random() * arg)
			return rng
		},
	},
	data() {
		return {
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
			bordo: "border: 0.3vh solid gray;",
		}
	},
}
</script>
<style scoped>
#banner {
	margin: 1vh 2vw -4vh 2vw;
	padding: 1vh;
	display: flex;
}
.rect {
	height: 15vh;
	width: 100%;
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
</style>