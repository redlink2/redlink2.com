<template>
    <div>
        <div v-if="$fetchState.pending">
            <Card title="loading..." content="please wait"/>
        </div>
        <div v-else-if="$fetchState.error">
            <Card title="error" content="please refresh"/>
        </div>
        <div v-else>
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
        }
    },
    async fetch() {
        try {
            const res = await fetch('https://rl2-chaotic.com/posts/321372173293846593')
            const json = await res.json()
            this.title = json.data.title
            this.img = json.data.img
            this.content = json.data.content
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