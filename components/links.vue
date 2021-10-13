<template>
	<div class="flexy">
		<div class="links" id="left">
			<div id="bound">
				<img :src="require(`~/assets/circle.svg`)" v-on:click="linkset1" id="fit" />
			</div>
		</div>
		<div class="links" id="center">
			<div id="bound">
				<img :src="require(`~/assets/tri.svg`)" v-on:click="linkset2" id="fit" />
			</div>
		</div>
		<div class="links" id="right">
			<div id="bound">
				<img :src="require(`~/assets/square.svg`)" v-on:click="linkset3" id="fit" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		document.querySelector('#link1').innerHTML = `<a>press</a>`
		document.querySelector('#link2').innerHTML = `<a>a</a>`
		document.querySelector('#link3').innerHTML = `<a>button</a>`
	},
	methods: {
		linkset1() {
			document.querySelector('#link1').innerHTML = `<a href="` + `https://github.com` + `">` + `Github` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + `https://app.astralapp.com` + `">` + `Astral` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + `https://sidebar.io` + `">` + `Sidebar` + `</a>`
		},
		linkset2() {
			document.querySelector('#link1').innerHTML = `<a href="` + `http://10.0.0.8:8096` + `">` + `Jellyfin` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + `http://10.0.0.22/admin` + `">` + `PiHole` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + `http://10.0.0.1` + `">` + `Router` + `</a>`
		},
		linkset3() {
			document.querySelector('#link1').innerHTML = `<a href="` + `https://mail.protonmail.com` + `">` + `Protonmail` + `</a>`
			document.querySelector('#link2').innerHTML = `<a href="` + `https://codecademy.com/learn` + `">` + `Codecademy` + `</a>`
			document.querySelector('#link3').innerHTML = `<a href="` + `https://mega.nz` + `">` + `Mega` + `</a>`
		}
		// sel3() {
		// 	this.$emit('update:seltab', 3)
		// }
	},
	data() {
		return {
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