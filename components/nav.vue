<template>
    <div id="nav">
        <div class="items">
            <div class="link">
                <nuxt-link to="/">tester</nuxt-link>
            </div>
            <div class="link">
                <nuxt-link to="/">tester</nuxt-link>
            </div>
            <div class="link">
                <nuxt-link to="/">tester</nuxt-link>
            </div>
            <div class="link">
                <nuxt-link to="/">tester</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log('links.vue mounted');
    },
}
</script>
<style>
#nav {
    margin: 1vh 2vw -4vh 2vw;
    padding: 1vh;
    display: flex;
}
.items {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    border: 0.3vh solid var(--new-org);
    width: 100%;
    margin: 1vh 0vw 8vh 0vw;
    padding: 9vh;
    box-shadow: 0vh 5vh 3vh black;
}
.link {
    display: flex;
    width: 12%;
    padding-left: 5vw;
    padding-right: 5vw;
}
</style>