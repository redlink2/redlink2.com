<template>
	<div id="contain">
		<div id="link1">
			<!-- <a class="li" href="">doof</a> -->
		</div>
		<div id="link2">
			<!-- <a class="li" href="">goof</a> -->
		</div>
		<div id="link3">
			<!-- <a class="li" href="">boof</a> -->
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
	},
	data() {
		return {
		}
	}
}
</script>

<style scoped>
#contain {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
/* #link1 {
}
#link2 {
}
#link3 {
} */
</style>