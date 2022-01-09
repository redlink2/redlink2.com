<template>
    <div id="notif" v-show="!seen">
        <p class="notif-text">
            email me at
            <a
                class="notif-link"
                href="mailto:redlink@redlink2.com"
            >redlink@redlink2.com!</a>
        </p>
    </div>
</template>
<script>
export default {
    mounted() {
        if (!localStorage.getItem('notif')) {
            localStorage.setItem('notif', false)
        } else {
            let cookie = localStorage.getItem('notif')
            if (cookie == "true") {
                this.seen = true
            } else {
                localStorage.setItem('notif', true)
            }
        }

    },
    data() {
        return {
            seen: false,
        }
    },
}
</script>
<style scoped>
#notif {
    height: 8vh;
    top: 86.5vh;
    left: 2vw;
    right: 76vw;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 5vh;
    padding-bottom: 1vh;
    line-break: strict;
    position: fixed;
    background-color: var(--subYellow);
    border: solid 0.5vh;
    border-color: var(--primeRed);
}
.notif-text {
    font-size: 1.3em;
    color: crimson;
}
.notif-link {
    text-decoration: dotted;
    color: navy;
}
</style>