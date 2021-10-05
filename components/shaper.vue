<template>
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
		}
	}
}
</script>

<style>
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