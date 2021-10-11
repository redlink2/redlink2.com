<template>
	<div>
        <a v-on:click="seltab=1">one</a>
        <a v-on:click="seltab=2">two</a>
        <a v-on:click="seltab=3">three</a>
        <div v-if="seltab === 1">
            <h1>booyah</h1>
        </div>
        <div v-if="seltab === 2">
            <h1>chaching!</h1>
        </div>
        <div v-if="seltab === 3">
            <h1>wowza</h1>
        </div>
	</div>
</template>

<script>
export default {
	mounted() {
	},
	data() {
		return {
            seltab: 0,
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