<template>
    <div>
        <h1>API Tests</h1>
        <div id="tester">
            <button @click="$fetch">Refresh</button>
            <p v-if="$fetchState.pending">Fetching...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
                <h2>Tester Get</h2>
                <ul>
                    <li
                        v-for="user of users"
                    >username: {{ user.name }} | userphrase: {{ user.phrase }} | useretc: {{ user.etc }}</li>
                </ul>
            </div>
        </div>
        <div>
            <p v-if="$fetchState.pending">Fetching...</p>
            <p v-else-if="$fetchState.error">Refresh the page :(</p>
            <div v-else>
                <h2>Color Test</h2>
                <ul>
                    <div v-for="color of colors" :style="color">{{ color }}</div>
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
            style: "background-color: ",
            input: ""
        }
    },
    async fetch() {
        try {
            console.log("fetching users...")
            const res = await fetch("https://rl2-chaotic.com/api/blog/users/all");
            const json = await res.json();
            for (let i = 0; i < json.data.length; i++) {
                this.users.push(json.data[i].data);
                this.colors.push(this.style + this.users[i].color);
            }
            console.log("Users fetched: " + this.users.length);
            console.log("fetching complete");
        } catch (err) {
            console.log("error: " + err);
        }
    },
}
</script>