<template>
	<div id="center">
		<div class="bord0" id="grid-container">
			<div class="bord0" id="leftarm">
				<Lefty />
			</div>
			<div class="bord0" id="rightarm">
				<Righty />
			</div>
			<div class="bord0" id="belly">
				<Links />
			</div>
			<div class="bord0" id="feet">
				<!-- <Toggle /> -->
				<!-- <Notif /> -->
				<Search />
				<!-- <Link /> -->
				<!-- <Api /> -->
			</div>
		</div>
	</div>
</template>

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
	--bgTest: pink;
	--borderGray: rgb(128, 128, 128);

	--new-blu: #2274a5;
	--new-org: #f75c03;
	--new-yel: #f1c40f;
	--new-pnk: #d90368;
}
@font-face {
	font-family: "panicsans";
	src: url("~/assets/fonts/panicsans.ttf");
}
::-webkit-scrollbar {
	display: none;
}
* {
	font-family: "panicsans";
	scrollbar-width: none;
}
body {
	background-color: black;
}
a.linkr {
	font-size: 4vh;
	text-decoration: none;
	color: var(--primeYellow);
}
#center {
	display: flex;
	justify-content: center;
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
.bord0 {
	border-style: ridge;
	border-width: 8px;
	background-color: var(--bgPurple);
}
.bord1 {
	border-style: ridge;
	border-width: 8px;
	background-color: var(--bgTest);
}
#rightarm {
	grid-area: rightarm;
	color: var(--subBlue);
	border-color: var(--primeBlue);
}
#leftarm {
	grid-area: leftarm;
	overflow: auto;
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
	flex-direction: row;
	justify-content: space-evenly;
	grid-area: feet;
	color: var(--subYellow);
	border-color: var(--primeYellow);
}
@media (max-width: 650px) {
	html {
		overflow: hidden;
		height: 100%;
	}
	#grid-container {
		height: 95vh;
	}
}
</style>