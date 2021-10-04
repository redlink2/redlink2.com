<template>
	<div id="flexy">
		<div class="links" id="left">
			<a class="li" href=""></a>
		</div>
		<div class="links" id="center">
			<a class="li" href=""></a>
		</div>
		<div class="links" id="right">
			<a class="li" href=""></a>
		</div>
		<button
			v-on:click="linkr"
			id="button">randy
		</button>
	</div>
</template>

<script>
// so i think that v-if= activetab is probably the way to go
// but maybe play around with swapping props live with a button like this?
export default {
	mounted() {
		const randy = Math.floor(Math.random() * this.links.length);
		document.querySelector('#left').innerHTML = `<a href="` + this.links[randy] + `">` + this.text[randy] + `</a>`
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
#flexy {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
}
#button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;
	width: auto;
	height: auto;
}
.links {
	height: 100%;
	width: 100%;
	border-style: ridge;
	border-top: 2px;
	border-bottom: 2px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
}
#left {
	border-color: cyan;
}
#center {
	border-color: magenta;
}
#right {
	border-color: yellow;
}
.li {
	padding: 20px;
}
</style>