<template>
	<div id="search">
		<form role="search" id="form">
			<input id="bar" autocomplete="on" type="text" title="Search" :placeholder="choice" />
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			choice: "",
			opts: [
				"We're riding on the internet!",
				"Cyberspace",
				"Set free!",
				"Hello Virtual Reality",
				"Interactive appetite",
				"Searching for a webite",
				"Take the spin",
				"Surfin' on the internet!"
			],
		}
	},
	mounted() {
		this.choice = this.opts[Math.floor(Math.random() * this.opts.length)]
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
	font-size: 200%;
	text-align: center;
	background-color: var(--subYellow);
}
@media (max-width: 650px) {
	#bar {
		font-size: 100%;
	}
}
</style>