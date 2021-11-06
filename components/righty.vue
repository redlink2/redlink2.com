<template>
	<div id="contain">
		<div id="link1" class="righty">Press</div>
		<div id="link2" class="righty">a</div>
		<div id="link3" class="righty">shape</div>
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
.righty {
	font-size: 4vh;
	text-decoration: none;
	color: var(--altBlue);
}
</style>