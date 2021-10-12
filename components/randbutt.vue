<template>
	<div class="flexy">
		<button
			v-on:click="linkrand"
			id="button"> randy
		</button>
		<button
			v-on:click="linkset1"
			id="button"> set1
		</button>
		<button
			v-on:click="linkr"
			id="button"> numbers
		</button>
	</div>
</template>

<script>
export default {
	mounted() {
			document.querySelector('#link1').innerHTML = `<h1>press</h1>`
			document.querySelector('#link2').innerHTML = `<h1>a</h1>`
			document.querySelector('#link3').innerHTML = `<h1>button</h1>`
	},
	methods: {
		linkrand() {
			const randy = Math.floor(Math.random() * this.links.length);
			document.querySelector('#link1').innerHTML = `<a href="` + this.links[randy] + `">` + this.text[randy] + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + this.links[randy] + `">` + this.text[randy] + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + this.links[randy] + `">` + this.text[randy] + `</a>`
		},
		linkr() {
			const randy = Math.floor(Math.random() * this.links.length);
			document.querySelector('#link1').innerHTML = `<a href="` + this.links[randy] + `">` + `1` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + this.links[randy] + `">` + `2` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + this.links[randy] + `">` + `3` + `</a>`
		},
		linkset1() {
			const randy = Math.floor(Math.random() * this.links.length);
			document.querySelector('#link1').innerHTML = `<a href="` + this.links[randy] + `">` + `1` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + this.links[randy] + `">` + `2` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + this.links[randy] + `">` + `3` + `</a>`
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


<style scoped>
.flexy {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
}
#button {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2.5vh;
	width: 5vw;
	height: 6vh;
}
</style>