<template>
	<div id="search">
		<form role="search" id="form">
			<input id="searchbar" autocomplete="on" type="text" title="Search" autofocus onkeydown="search(event)" placeholder=" Explore That Sea">
		</form>
	</div>
</template>

<script>
export default {

}
</script>

<style>
#search {
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}
#searchbar {
	height: 32px;
	width: 500px;
	border-width: 3px;
	border-radius: 30px;
	border-color: yellow;
	font-family: panicsans;
	font-size: 32px;
}
</style>