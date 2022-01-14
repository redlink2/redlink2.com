<template>
	<div id="void">
		<!--
			model should be something like this:
			vertical blog
			content is vertical center with 20% margins on left and right side
			first div should be a title composed of shapes
			second should be a nav like sticky post
			subsequent posts should probably thought of otherwise no scroll and focus on the nav
			in the margins should be something eye candy / interactive and probably randomized
			colors should be deep dark navy / hot pink / sharp reds / and maybe some accent orange yellow green blue
			should all be animated heavily with :hover and maybe gifs? but keep it accessible
			first time page views should get a popup with details? maybe not but i mean a gentle barely noticed popup
		-->
		<Nav />
		<Card
			title="shoot"
			img="https://redlink2.com/coolsun.ico"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. At quis risus sed vulputate odio ut enim. Volutpat odio facilisis mauris sit amet. Tellus elementum sagittis vitae et leo duis ut diam quam. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Maecenas pharetra convallis posuere morbi leo urna molestie at. Consectetur purus ut faucibus pulvinar. Senectus et netus et malesuada. Fusce id velit ut tortor pretium. Venenatis a condimentum vitae sapien pellentesque habitant. Nibh praesent tristique magna sit amet purus gravida quis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar."
		/>
		<Card title="shotter" content="Real life color suit amount constructor anticipating elite." />
		<Card />
	</div>
</template>

<script>
import Card from '../components/card.vue'
export default {
	name: 'index',
	components: {
		Card,
	}
}
</script>

<style>
:root {
	/* colors to stay */
	--bgDark: rgb(45, 25, 50);
	--new-pnk: #d90368;
	--test-pnk: #ee72f1;
	/* colors to go */
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

	--new-blu: #2274a5;
	--new-org: #f75c03;
	--new-yel: #f1c40f;
}
@font-face {
	font-family: "panicsans";
	src: url("~/assets/fonts/panicsans.ttf");
}
* {
	font-family: "panicsans";
	/* scrollbar-width: none; */
}
body {
	margin: 0;
	padding: 0;
	background-color: var(--bgDark);
	display: flex;
	justify-content: center;
}
#void {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>