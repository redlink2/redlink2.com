<template>
</template>

<script>
export default {
	mounted() {
		const randy = Math.floor(Math.random() * this.greets.length);
		document.querySelector('#leftarm').innerHTML = `<h1>` + this.greets[randy] + `</h1>`;
	},
	data() {
		return {
			greets: [
				'nice day today',
				'drink some water',
				'y\'know this is a lot easier to change now',
				'now in nuxt form!!',
				'draw something'
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