<template>
	<div id="lefty"></div>
</template>

<script>
export default {
	mounted() {
		const randy = Math.floor(Math.random() * this.ideas.length);
		document.querySelector('#lefty').innerHTML = `<h1>` + this.ideas[randy] + `</h1>`;
	},
	data() {
		return {
			ideas: [
				'make shapes = links',
				'better background color',
				'buttons to change righty an lefty',
				'hueshift on the shapes with random levels?',
				'better assets to use besides builtin buttons',
				'maybe there should be a picture here that gets changed?'
			],
		}
	}
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
}
</style>