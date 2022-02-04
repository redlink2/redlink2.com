<template>
    <div>
        <ul id="index">
            <div v-if="$fetchState.pending">
                <li class="gems">
                    <h1>Loading posts...</h1>
                    <div>Please wait while posts are retrieved...</div>
                </li>
            </div>
            <div v-if="$fetchState.error">
                <li class="gems">
                    <h1>Failed to retrieve posts.</h1>
                    <div>Please refresh the page to try again.</div>
                </li>
            </div>
            <div v-else>
                <div v-for="post in poster" v-bind:key="post.number">
                    <li class="gems">
                        <h1 class="header">{{ post.title }}</h1>
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
            console.log("fetching posts...")
            const res = await fetch("https://rl2-chaotic.com/api/blog/posts/");
            const json = await res.json();
            for (let i = 0; i < json.data.length; i++) {
                this.poster.push(json.data[i].data);
            }
            console.log("Posts fetched: " + this.poster.length);
            console.log("fetching complete");
            this.poster.reverse();
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
.gems:hover {
    animation: border-color-rotate 1s infinite;
}
@keyframes border-color-rotate {
    0% {
        border-color: var(--new-blu);
    }
    50% {
        border-color: var(--new-pnk);
    }
    100% {
        border-color: var(--new-blu);
    }
}
.gems:hover > .header {
    animation: color-rotate 1s infinite;
}
@keyframes color-rotate {
    0% {
        color: var(--new-pnk);
    }
    50% {
        color: var(--new-blu);
    }
    100% {
        color: var(--new-pnk);
    }
}
h3 {
    color: var(--new-blu);
    text-decoration: underline;
}
</style>