<template>
    <div>
        <ul id="index">
            <div v-if="$fetchState.pending">whoop</div>
            <div v-if="$fetchState.error">whoopsiedaisy</div>
            <div v-else>
                <div v-for="post in poster" v-bind:key="post.number">
                    <li class="gems">
                        <h1>{{ post.title }}</h1>
                        <img :src="post.img" />
                        <div v-if="post.content.length > 250">
                            <div v-if="!readmore">{{ post.content.slice(0, 250) }}</div>
                            <h3 v-if="!readmore" @click="morepls">readmore!</h3>
                            <div v-if="readmore">{{ post.content }}</div>
                        </div>
                        <div v-if="post.content.length < 250">{{ post.content }}</div>
                    </li>
                </div>
            </div>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            readmore: false,
            poster: []
        }
    },
    async fetch() {
        try {
            const res = await fetch("https://rl2-chaotic.com/posts/");
            const json = await res.json();
            for (let i = 0; i < json.data.length; i++) {
                this.poster.push(json.data[i].data);
                console.log(json.data[i].data.title);
            }
            console.log("fetching complete");
        } catch (err) {
            console.log("error: " + err);
        }
    },
    methods: {
        morepls() {
            this.readmore = true;
        }
    },
}
</script>
<style scoped>
#index {
    margin: 1vh 2vw -4vh 2vw;
    padding: 1vh;
}
.gems {
    background-color: black;
    color: var(--new-org);
    border: 0.3vh solid var(--new-pnk);
    margin: 1vh 5vw 5vh 5vw;
    padding: 3vh;
    box-shadow: 0vh 3vh 3vh black;
    list-style: none;
}
h3 {
    color: var(--new-blu);
    text-decoration: underline;
}
</style>