<template>
</template>

<script>
export default {
	mounted() {
		const randy = Math.floor(Math.random() * this.ideas.length);
		document.querySelector('#leftarm').innerHTML = `<h1>` + this.ideas[randy] + `</h1>`;
	},
	data() {
		return {
			ideas: [
				'make shapes = links',
				'better background color',
				'buttons to change righty an lefty',
				'better assets to use besides builtin buttons',
				'maybe there should be a picture here that gets changed?'
			],
			selection: 'bozo'
		}
	}
}
</script>

<style>
#leftarm {
	grid-area: leftarm;
	color: forestGreen;
	border-color: green;
}
</style>