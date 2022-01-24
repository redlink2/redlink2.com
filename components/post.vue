<template>
    <div>
        <div v-if="$fetchState.pending">
            <Card title="loading..." content="please wait" />
        </div>
        <div v-else-if="$fetchState.error">
            <Card title="error" content="please refresh" />
        </div>
        <div v-else>
            <!-- <Card v-for="post in posts" :title="title" :img="img" :content="content" /> -->
            <Card :title="title" :img="img" :content="content" />
        </div>
    </div>
</template>
<script>
import Card from './card.vue'
export default {
    name: 'index',
    components: {
        Card,
    },
    data() {
        return {
            title: '',
            img: '',
            content: '',
            posts: [],
        }
    },
    async fetch() {
        try {
            const res = await fetch('https://rl2-chaotic.com/posts/')
            const json = await res.json()
            // for (let i = 0; i < json.length; i++) {
            //     this.posts[i] = json.data[i].data.title
            //     this.posts[i] = json.data[i].data.title
            //     this.posts[i] = json.data[i].data.title
            // }
            this.title = json.data[0].data.title
            this.img = json.data[0].data.img
            this.content = json.data[0].data.content
            console.log("fetching complete")
        } catch (err) {
            this.title = 'Error'
            this.img = ''
            this.content = 'API failed to load, please refresh'
            console.log("error: " + err)
        }
    },
}
</script>