<template>
    <div>
        <ul id="index">
            <li class="gems">
                <h1>{{ title }}</h1>
                <p>{{ content }}</p>
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
        content: {
            type: String,
            default: 'didnt fill out'
        }
    }
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
    margin: 1vh 1vw 5vh 1vw;
    padding: 3vh;
    box-shadow: 0vh 2vh 3vh black;
    list-style: none;
}
</style>