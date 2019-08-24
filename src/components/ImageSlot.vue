<template>
   <img @click="highlight">
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
                this.resetImageBorders();
                e.target.classList.add('active');
                this.$emit('imageClicked', e.target.id);
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
