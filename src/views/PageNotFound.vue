<template>
    <div class="not-found-page">
        No Page here.
        <router-link to="/">Home</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .not-found-page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: calc(100vh - 80px);
        font-size: 2em;
        color: #ccc;
    }
</style>

<script>
export default {
  name: 'error404'
}
</script>
