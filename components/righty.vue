<template>
	<div>
		<h1 id="fill">{{selection}}</h1>
	</div>
</template>

<script>
export default {
	mounted() {
		const randy = Math.floor(Math.random() * this.num.length);
		document.querySelector('#fill').innerHTML = this.num[randy];
	},
	data() {
		return {
			num: [
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8'
			],
			selection: '0'
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