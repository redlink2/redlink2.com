<template>
	<div class="border" id="grid-container">
		<div class="border" id="leftarm"><Lefty/></div>
		<div class="border" id="rightarm"><Righty/></div>
		<div class="border" id="belly">
			<Links/>
		</div>
		<div class="border" id="feet"><Search/></div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
  font-family: 'panicsans';
  src: url('~/assets/panicsans.ttf');
}
* {
	font-family: 'panicsans';
}
body {
	background-color: black;
}
#grid-container {
	height: 96.6vh;
	width: 97.9vw;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(7, 1fr);
	gap: 3px 2px;
	grid-template-areas:
		"leftarm leftarm leftarm rightarm rightarm rightarm"
		"leftarm leftarm leftarm rightarm rightarm rightarm"
		"leftarm leftarm leftarm rightarm rightarm rightarm"
		"belly belly belly belly belly belly"
		"belly belly belly belly belly belly"
		"belly belly belly belly belly belly"
		"feet feet feet feet feet feet";
	text-align: center;
	color: red;
	border-style: dashed;
	border-color: gray;
}
.border {
	border-style: ridge;
	border-width: 8px;
	background-color: indigo;
}
#belly {
	grid-area: belly;
	color: firebrick;
	border-color: red;
}
#feet {
	grid-area: feet;
	color: orange;
	border-color: yellow;
}
</style>