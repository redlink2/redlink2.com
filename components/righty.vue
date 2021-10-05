<template>
	<!-- <svg id="svg-1" class="clip-svg" width="300" height="260">
		<rect class="svg-describe" width="300" height="260" fill="red" />
		<polygon points="200,10 300,250 50,250" id="poly"/>
		<polygon points="200,100 250,200 150,200" id="poly"/>
	</svg> -->
	<!-- <Shaper/> -->
	<div>
		<h1 id="fill">{{selection}}</h1>
		<Randbutt/>
	</div>
</template>

<script>
export default {
	mounted() {
		const randy = Math.floor(Math.random() * this.greets.length);
		document.querySelector('#fill').innerHTML = this.greets[randy];
	},
	data() {
		return {
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
</style>