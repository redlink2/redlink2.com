<template>
	<div class="flexy">
		<div class="links" id="left">
			<div id="bound">
				<img
				:src="require(`~/assets/circle.svg`)"
				v-on:click="linkset1"
				id="fit"/>
			</div>
		</div>
		<div class="links" id="center">
			<div id="bound">
				<img
				:src="require(`~/assets/tri.svg`)"
				v-on:click="linkset2"
				id="fit"/>
			</div>
		</div>
		<div class="links" id="right">
			<div id="bound">
				<img
				:src="require(`~/assets/square.svg`)"
				v-on:click="linkset3"
				id="fit"/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
	},
	methods: {
		linkset1() {
			document.querySelector('#link1').innerHTML = `<a href="` + `https://github.com` + `">` + `github` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + `https://app.astral.com` + `">` + `astral` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + `https://sidebar.io` + `">` + `sidebar` + `</a>`
		},
		linkset2() {
			document.querySelector('#link1').innerHTML = `<a href="` + `` + `">` + `null` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + `` + `">` + `null` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + `` + `">` + `null` + `</a>`
		},
		linkset3() {
			document.querySelector('#link1').innerHTML = `<a href="` + `` + `">` + `null` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + `` + `">` + `null` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + `` + `">` + `null` + `</a>`
		}
		// sel3() {
		// 	this.$emit('update:seltab', 3)
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