<template>
	<!-- <svg id="svg-1" class="clip-svg" width="300" height="260">
		<rect class="svg-describe" width="300" height="260" fill="red" />
		<polygon points="200,10 300,250 50,250" id="poly"/>
		<polygon points="200,100 250,200 150,200" id="poly"/>
	</svg> -->
	<div id="bound">
		<img :src="require(`~/assets/${img}.svg`)" id="fit"/>
	</div>
</template>

<script>
export default {
	mounted() {
		// const randy = Math.floor(Math.random() * this.greets.length);
		// document.querySelector('#rightarm').innerHTML = `<h1>` + this.greets[randy] + `</h1>`;
		const rando = Math.floor(Math.random() * this.imgs.length)
		this.img = this.imgs[rando]
	},
	data() {
		return {
			imgs: [
				'circle',
				'square',
				'tri'
			],
			img: 'square',
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
#rightarm {
	grid-area: rightarm;
	color: teal;
	border-color: blue;
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
/* probably randomize rotation and make it so that theres an offset between sections of the belly flexy */
</style>