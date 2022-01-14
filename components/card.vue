<template>
    <div>
        <ul id="index">
            <li class="gems">
                <h1>{{ title }}</h1>
                <img :src="img" />
                <div v-if="content.length > 250">
                    <div v-if="!readmore">{{ content.slice(0, 250) }}</div>
                    <h3 v-if="!readmore" @click="morepls">readmore!</h3>
                    <div v-if="readmore">{{ content }}</div>
                </div>
                <div v-if="content.length < 250">{{ content }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            default: 'defaulted'
        },
        img: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: 'didnt fill out'
        }
    },
    data() {
        return {
            readmore: false,
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