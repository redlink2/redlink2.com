<template>
	<div class="flexy">
		<div class="links" id="left">
			<div class="bound">
				<svg
					viewBox="0 0 100 100"
					xmlns="https://www.w3.org/2000/svg"
					id="fit"
					class="s1"
					v-on:click="linkset1"
				>null</svg>
			</div>
		</div>
		<div class="links" id="center">
			<div class="bound">
				<svg
					viewBox="0 0 100 100"
					xmlns="https://www.w3.org/2000/svg"
					id="fit"
					class="s2"
					v-on:click="linkset2"
				>null</svg>
			</div>
		</div>
		<div class="links" id="right">
			<div class="bound">
				<svg
					viewBox="0 0 100 100"
					xmlns="https://www.w3.org/2000/svg"
					id="fit"
					class="s3"
					v-on:click="linkset3"
				>null</svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		// selectors for links
		var link1 = document.querySelector('#link1')
		var link2 = document.querySelector('#link2')
		var link3 = document.querySelector('#link3')
		// selectors for shapes
		const s1 = document.querySelector(".s1")
		const s2 = document.querySelector(".s2")
		const s3 = document.querySelector(".s3")
		// randomly generate shapes and their colors
		this.getShapes()
	},
	methods: {
		linkset1() {
			link1.innerHTML = `<a class="linkr" href="` + this.github[0] + `">` + this.github[1] + `</a>`
			link2.innerHTML = `<a class="linkr" href="` + this.repo[0] + `">` + this.repo[1] + `</a>`
			link3.innerHTML = `<a class="linkr" href="` + this.ghrl2[0] + `">` + this.ghrl2[1] + `</a>`
		},
		linkset2() {
			link1.innerHTML = `<a class="linkr" href="` + this.email[0] + `">` + this.email[1] + `</a>`
			link2.innerHTML = `<a class="linkr" href="` + this.issues[0] + `">` + this.issues[1] + `</a>`
			link3.innerHTML = `<a class="linkr" href="` + this.nav[0] + `">` + this.nav[1] + `</a>`
		},
		linkset3() {
			link1.innerHTML = `<a class="linkr" href="` + this.proton[0] + `">` + this.proton[1] + `</a>`
			link2.innerHTML = `<a class="linkr" href="` + this.codecad[0] + `">` + this.codecad[1] + `</a>`
			link3.innerHTML = `<a class="linkr" href="` + this.mega[0] + `">` + this.mega[1] + `</a>`
		},
		roll(arg) {
			//simple rng roll
			let rng = Math.floor(Math.random() * arg)
			return rng
		},
		mkShapes() {
			this.shaper = []
			const shapes = [`<rect width="100" height="100"`, `<circle cx="50" cy="50" r="50"`, `<polygon points="-10,100 110,100 50,0"`]
			const styles = ` style="fill: `
			const colors = this.colors
			const cap = `" />`
			let selShape = String
			let selColor = String
			let Shaped = String
			for (let s = 0; s < shapes.length; s++) {
				selShape = shapes[s]
				for (let c = 0; c < this.colors.length; c++) {
					selColor = colors[c]
					Shaped = selShape + styles + selColor + cap
					this.shaper.push(Shaped)
				}
			}
		},
		getShapes() {
			// mkShapes first
			this.mkShapes()
			// selectors for shapes
			const s1 = document.querySelector(".s1")
			const s2 = document.querySelector(".s2")
			const s3 = document.querySelector(".s3")
			// choice for rolls
			let choice = Number
			// randomly generate shapes and their colors
			choice = this.roll(this.shaper.length)
			let shape1 = this.shaper[choice]
			s1.innerHTML = shape1
			this.shaper.splice(choice, choice)
			choice = this.roll(this.shaper.length)
			let shape2 = this.shaper[choice]
			s2.innerHTML = shape2
			this.shaper.splice(choice, choice)
			choice = this.roll(this.shaper.length)
			let shape3 = this.shaper[choice]
			s3.innerHTML = shape3
			this.shaper.splice(choice, choice)
		}
	},
	data() {
		return {
			// Shapes
			shaper: [],
			// Colors
			colors: [
				"#d90368", //red
				"#2274a5", //blue
				"#7A9B76", //green
				"#f1c40f", //yellow
				"#f75c03", //orange
			],
			// LINKS
			// Pages
			email: ["mailto:redlink@redlink2.com", "Email me!"],
			blackjack: ["https://redlink2.com/blackjack", "Blackjack WIP"],
			nav: ["https://redlink2.com/nav", "Navigation"],
			// Project
			issues: ["https://github.com/redlink2/redlink2.com/issues/new", "Problems?"],
			repo: ["https://github.com/redlink2/redlink2.com", "This Repo"],
			cldflr: ["https://dash.cloudflare.com", "Cloudflare"],
			// Development
			github: ["https://github.com", "Github"],
			ghrl2: ["https://github.com/redlink2", "My Profile"],
			codecad: ["https://codecademy.com/learn", "Codecademy"],
			astral: ["https://app.astralapp.com", "Astral"],
			sidebar: ["https://sidebar.io", "Sidebar"],
			// 10.0.0.*
			jelly: ["http://10.0.0.8:8096", "Jellyfin"],
			pihole: ["http://10.0.0.22/admin", "PiHole"],
			router: ["http://10.0.0.1", "Router"],
			// Personal
			proton: ["https://mail.protonmail.com", "ProtonMail"],
			mega: ["https://mega.nz", "Mega"],
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
}
.s1:hover {
	animation: spin 800ms linear infinite;
}
.s2:hover {
	animation: scribble 800ms linear infinite;
}
.s3:hover {
	animation: bouncy 800ms linear infinite;
}
@keyframes spin {
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
@keyframes scribble {
	0% {
		transform: skew(0deg);
		filter: hue-rotate(0deg);
	}
	25% {
		transform: skew(50deg);
		filter: hue-rotate(50deg);
	}
	50% {
		transform: skew(-50deg);
		filter: hue-rotate(150deg);
	}
	75% {
		transform: skew(50deg);
		filter: hue-rotate(250deg);
	}
	100% {
		transform: skew(0deg);
		filter: hue-rotate(0deg);
	}
}
@keyframes bouncy {
	0% {
		transform: translateY(0px);
		filter: hue-rotate(0deg);
	}
	50% {
		transform: translateY(-10px);
		filter: hue-rotate(180deg);
	}
	100% {
		transform: translateY(0px);
		filter: hue-rotate(0deg);
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