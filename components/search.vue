<template>
	<div id="search">
		<form role="search" id="form">
			<input
				id="bar"
				autocomplete="on"
				type="text"
				title="Search"
				autofocus
				placeholder="Explore That Sea"
			/>
		</form>
	</div>
	<!-- <div id="search">
		<form role="search" id="form">
			<input
				id="searchbar"
				autocomplete="on"
				type="text"
				title="Search"
				autofocus
				onkeydown="search(event)"
				placeholder=" Explore That Sea"
			/>
		</form>
	</div>-->
</template>

<script>
export default {
	mounted() {
		const bar = document.getElementById("bar");
		const form = document.getElementById("form");
		const link = "https://duckduckgo.com/?q=";
		function searchEngine(event) {
			event.preventDefault();
			const url = link + bar.value;
			form.reset();
			window.open(url, "_self");
		}
		form.addEventListener("submit", searchEngine);
	},
}
</script>

<style scoped>
#search {
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}
#bar {
	height: 5vh;
	width: 50vw;
	border-width: 0.5vw;
	border-radius: 8vh;
	border-color: var(--primeYellow);
	font-family: panicsans;
	font-size: 2em;
	text-align: center;
	background-color: var(--subYellow);
}
/* #bar {
	height: 32px;
	width: 500px;
	border-width: 3px;
	border-radius: 30px;
	border-color: yellow;
	font-family: panicsans;
	font-size: 32px;
} */
</style>