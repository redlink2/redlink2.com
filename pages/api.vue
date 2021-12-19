<template>
    <div>
        <div>
            <p v-if="$fetchState.pending">Fetching...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
                <h1>API Test</h1>
                <ul>
                    <li v-for="user of users">{{ user.name }}</li>
                </ul>
                <button @click="$fetch">Refresh</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            users: []
        }
    },
    async fetch() {
        this.users = []
        this.users = await fetch(
            'https://rl2-chaotic.com/users'
        ).then(res => res.json())
    }
}
</script>
<style>
body {
    background-color: cadetblue;
    color: brown;
}
</style>