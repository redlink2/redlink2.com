<template>
	<div id="scrolls"></div>
</template>

<script>
export default {
	mounted() {
		this.fromHere()
		if (this.pardner == true) {
			this.anagrammer()
		} else {
			this.notFromHere()
		}
	},
	methods: {
		fromHere() {
			if (!localStorage.getItem('reg')) {
				localStorage.setItem('reg', false)
			} else {
				let cookie = localStorage.getItem('reg')
				if (cookie == "true") {
					this.pardner = true
				} else {
					localStorage.setItem('reg', true)
				}
			}
		},
		notFromHere() {
			document.querySelector('#scrolls').innerHTML = `<h1>` + this.stranger[Math.floor(Math.random() * this.stranger.length)] + `</h1>`

		},
		anagrammer() {
			// it takes approx 14.5-16 seconds for text to pass viewable area on std monitor
			// need to add method to change to another phrase after passing
			let roll = Math.floor(Math.random() * this.phrases.length)
			let chars = this.phrases[roll]
			const charsLen = chars.length
			// at 74 length, it seems to cut off characters.
			for (var i = 0; i < 64; i++) {
				this.randy += chars.charAt(Math.floor(Math.random() * charsLen))
				document.querySelector('#scrolls').innerHTML = `<h1>` + this.randy + `</h1>`
			}
		}
	},
	data() {
		return {
			pardner: false,
			stranger: [
				// "You're not from 'round here are you pardner?",
				// "This site is mostly RNG so refresh for changes!",
				// "Email me your qualms at redlink@redlink2.com!"
				"youre new here yeah? cool this test passed"
			],
			phrases: [
				"redlink2",
				"permutations",
				"chaos",
				"aeiou",
				"trust",
				"unity",
				"manifest",
				"hidden",
				"third-eye",
				"trance"
			],
			randy: ""
		}
	},
}
</script>

<style scoped>
#scrolls {
	white-space: nowrap;
	font-size: 3vh;
	color: var(--subGreen);
	overflow: scroll;
	animation: loopText 15000ms infinite linear;
}
/* gotta be a better way to do this... */
@keyframes loopText {
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(-100%);
	}
}
</style>