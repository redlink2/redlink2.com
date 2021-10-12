<template>
	<div class="flexy">
		<div class="links" id="left">
			<div id="bound">
				<img :src="require(`~/assets/circle.svg`)" id="fit"/>
			</div>
		</div>
		<div class="links" id="center">
			<div id="bound">
				<img :src="require(`~/assets/tri.svg`)" id="fit"/>
			</div>
		</div>
		<div class="links" id="right">
			<div id="bound">
				<img :src="require(`~/assets/square.svg`)" v-on:click="sel3" id="fit"/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
	},
	methods: {
		sel3() {
			this.$emit('update:seltab', 3)
		}
		// linkr() {
		// 	const randy = Math.floor(Math.random() * this.links.length);
		// 	document.querySelector('#left').innerHTML = `<a href="` + this.links[randy] + `">` + this.text[randy] + `</a>`
		// }
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
}
#bound {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
#fit {
	display: flex;
	width: 50%;
	height: 50%;
	/* filter: hue-rotate(230deg); */
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
	justify-content: center;
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