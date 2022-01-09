<template>
	<div id="contain">
		<div id="link1" class="before">Press</div>
		<div id="link2" class="before">a</div>
		<div id="link3" class="before">shape</div>
	</div>
</template>

<style scoped>
#contain {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
.before {
	font-size: 4vh;
	text-decoration: none;
	color: var(--altBlue);
}
</style>