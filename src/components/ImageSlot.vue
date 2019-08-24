<template>
   <img src="this.srcStr" @click="highlight">
</template>

<style lang="scss">
    .active {
        border: 2px solid blue;
    }
</style>

<script>
    export default {
        data(){
            return {
                isActive: false
            }
        },
        methods: {
            highlight: function(e) {
                console.log(e);
                console.log(e.target);
                this.resetImageBorders();
                e.target.classList.add('active');
            },
            resetImageBorders: function() {
                let activeElems = document.getElementsByClassName("item active");
                [...activeElems].forEach(image => {
                    image.classList.remove('active');
                })
            }
        }
    }
</script>
