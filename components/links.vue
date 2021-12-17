<template>
	<div class="flexy">
		<div class="links" id="left">
			<div class="bound">
				<img
					:style="{ filter: hueRotate + hue1 + suffix }"
					:src="require(`~/assets/shapes/${shape1}.svg`)"
					v-on:click="linkset1"
					id="fit"
				/>
			</div>
		</div>
		<div class="links" id="center">
			<div class="bound">
				<img
					:style="{ filter: hueRotate + hue2 + suffix }"
					:src="require(`~/assets/shapes/${shape2}.svg`)"
					v-on:click="linkset2"
					id="fit"
				/>
			</div>
		</div>
		<div class="links" id="right">
			<div class="bound">
				<img
					:style="{ filter: hueRotate + hue3 + suffix }"
					:src="require(`~/assets/shapes/${shape3}.svg`)"
					v-on:click="linkset3"
					id="fit"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		var link1 = document.querySelector('#link1')
		var link2 = document.querySelector('#link2')
		var link3 = document.querySelector('#link3')
		// rand gen hue1/2/3
		this.hue1 = this.hues[Math.floor(Math.random() * this.hues.length)]
		this.hue2 = this.hues[Math.floor(Math.random() * this.hues.length)]
		this.hue3 = this.hues[Math.floor(Math.random() * this.hues.length)]
		// rand gen shapes1/2/3
		this.shape1 = this.shapes[Math.floor(Math.random() * this.shapes.length)]
		this.shape2 = this.shapes[Math.floor(Math.random() * this.shapes.length)]
		this.shape3 = this.shapes[Math.floor(Math.random() * this.shapes.length)]
	},
	methods: {
		linkset1() {
			link1.innerHTML = `<a class="linkr" href="` + this.github[0] + `">` + this.github[1] + `</a>`
			link2.innerHTML = `<a class="linkr" href="` + this.astral[0] + `">` + this.astral[1] + `</a>`
			link3.innerHTML = `<a class="linkr" href="` + this.sidebar[0] + `">` + this.sidebar[1] + `</a>`
		},
		linkset2() {
			link1.innerHTML = `<a class="linkr" href="` + this.blackjack[0] + `">` + this.blackjack[1] + `</a>`
			link2.innerHTML = `<a class="linkr" href="` + this.issues[0] + `">` + this.issues[1] + `</a>`
			link3.innerHTML = `<a class="linkr" href="` + this.repo[0] + `">` + this.repo[1] + `</a>`
		},
		linkset3() {
			link1.innerHTML = `<a class="linkr" href="` + this.proton[0] + `">` + this.proton[1] + `</a>`
			link2.innerHTML = `<a class="linkr" href="` + this.codecad[0] + `">` + this.codecad[1] + `</a>`
			link3.innerHTML = `<a class="linkr" href="` + this.jelly[0] + `">` + this.jelly[1] + `</a>`
		},
	},
	data() {
		return {
			//shape randomizer
			shape1: "tri",
			shape2: "tri",
			shape3: "tri",
			shapes: [
				"tri",
				"square",
				"circle"
			],
			//hue-rotate randomizer
			hues: [
				180, //teal
				250, //blue
				300, //purp
				335, //pink
			],
			hueRotate: "hue-rotate(",
			hue1: 0,
			hue2: 0,
			hue3: 0,
			suffix: "deg)",
			//tab1 default
			github: ["https://github.com", "Github"],
			astral: ["https://app.astralapp.com", "Astral"],
			sidebar: ["https://sidebar.io", "Sidebar"],
			//tab2 default
			jelly: ["http://10.0.0.8:8096", "Jellyfin"],
			pihole: ["http://10.0.0.22/admin", "PiHole"],
			router: ["http://10.0.0.1", "Router"],
			//tab3 default
			proton: ["https://mail.protonmail.com", "ProtonMail"],
			codecad: ["https://codecademy.com/learn", "Codecademy"],
			mega: ["https://mega.nz", "Mega"],
			//custom
			game: ["https://redlink2.com/game", "Game WIP"],
			blackjack: ["https://redlink2.com/blackjack", "Blackjack WIP"],
			repo: ["https://github.com/redlink2/redlink2.com", "Repo"],
			issues: ["https://github.com/redlink2/redlink2.com/issues/new", "Problems?"],
		}
	},
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
.bound {
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
	filter: hue-rotate(0deg);
}
#fit:hover {
	cursor: pointer;
	animation: slide-in 1000ms;
}
@keyframes slide-in {
	0% {
		transform: rotate(0turn);
	}
	50% {
		filter: hue-rotate(180deg);
	}
	100% {
		transform: rotate(1turn);
	}
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