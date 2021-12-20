<template>
    <div>
        <h1>API Tests</h1>
        <div id="tester">
            <p v-if="$fetchState.pending">Fetching...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
                <h2>Tester Get</h2>
                <ul>
                    <li v-for="user of users">{{ user.name }} - {{ user.phrase }} - {{ user.etc }}</li>
                </ul>
                <button @click="$fetch">Refresh</button>
            </div>
        </div>
        <div>
            <p v-if="$fetchState.pending">Fetching...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
                <h2>Color Test</h2>
                <ul>
                    <div id="apiColor" :style="color">{{ color }}</div>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            users: [],
            colors: [],
            color: String,
            style: "background-color: "
        }
    },
    async fetch() {
        this.users = []
        this.users = await fetch(
            'https://rl2-chaotic.com/tester'
        ).then(res => res.json())

        this.colors = []
        this.colors = await fetch(
            'https://rl2-chaotic.com/tester'
        ).then(res => res.json())
        this.color = this.style + this.colors[0].etc
    },
}
</script>