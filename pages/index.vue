<template>
	<div class="border" id="grid-container">
		<div class="border" id="leftarm">
			<Lefty />
		</div>
		<div class="border" id="rightarm">
			<Righty />
		</div>
		<div class="border" id="belly">
			<Links />
		</div>
		<div class="border" id="feet">
			<Randbutt />
			<!--<Search/>-->
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
:root {
	--primeRed: rgb(255, 0, 0);
	--subRed: rgb(178, 34, 34);

	--primeBlue: rgb(0, 0, 255);
	--subBlue: rgb(0, 128, 128);
	--altBlue: rgb(0, 174, 255);

	--primeGreen: rgb(0, 128, 0);
	--subGreen: rgb(34, 139, 34);

	--primeYellow: rgb(255, 255, 0);
	--subYellow: rgb(255, 166, 0);

	--bgPurple: rgb(76, 0, 130);
	--borderGray: rgb(128, 128, 128);
}
@font-face {
	font-family: "panicsans";
	src: url("~/assets/panicsans.ttf");
}
* {
	font-family: "panicsans";
}
body {
	background-color: black;
}
a {
	font-size: 4vh;
	text-decoration: none;
	color: var(--altBlue);
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
	border-style: dashed;
	border-color: var(--borderGray);
}
.border {
	border-style: ridge;
	border-width: 8px;
	background-color: var(--bgPurple);
}
#rightarm {
	grid-area: rightarm;
	color: var(--subBlue);
	border-color: var(--primeBlue);
}
#leftarm {
	grid-area: leftarm;
	color: var(--subGreen);
	border-color: var(--primeGreen);
}
#belly {
	grid-area: belly;
	color: var(--subRed);
	border-color: var(--primeRed);
}
#feet {
	display: flex;
	justify-content: center;
	grid-area: feet;
	color: var(--subYellow);
	border-color: var(--primeYellow);
}
</style>