<template>
    <button
        v-on:click="linkr"
        id="button">randy
    </button>
</template>

<script>
export default {
	mounted() {
		// const randy = Math.floor(Math.random() * this.links.length);
		// document.querySelector('#left').innerHTML = `<a href="` + this.links[randy] + `">` + this.text[randy] + `</a>`
	},
	methods: {
		linkr() {
			const randy = Math.floor(Math.random() * this.links.length);
			document.querySelector('#left').innerHTML = `<a href="` + this.links[randy] + `">` + this.text[randy] + `</a>`
		}
	},
	data() {
		return {
			links: [
				'https://github.com',
				'https://app.astralapp.com/dashboard',
				'https://codecademy.com/learn'
			],
			text: [
				'github',
				'astral',
				'codecademy'
			]
		}
	}
}
</script>


<style>
#button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	width: auto;
	height: auto;
}
</style>