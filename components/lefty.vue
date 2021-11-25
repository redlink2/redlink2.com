<template>
	<div id="lefty"></div>
</template>

<script>
export default {
	// it takes approx 14.5-16 seconds for text to pass viewable area on std monitor
	// need to add method to change to another phrase after passing
	mounted() {
		let roll = Math.floor(Math.random() * this.phrases.length)
		let chars = this.phrases[roll]
		const charsLen = chars.length;
		// at 74 length, it seems to cut off characters.
		for (var i = 0; i < 64; i++) {
			this.randy += chars.charAt(Math.floor(Math.random() * charsLen));
			document.querySelector('#lefty').innerHTML = `<h1>` + this.randy + `</h1>`;
		}
	},
	data() {
		return {
			phrases: [
				"redlink2",
				"permutations",
				"chaos",
				"aeiou",
				"trust",
				"unity",
				"manifest",
				"hidden",
				"third-eye",
				"trance"
			],
			randy: ""
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