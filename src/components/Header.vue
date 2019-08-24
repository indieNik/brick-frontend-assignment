<template>
    <div class="header">
        <router-link to="/">Home</router-link>
        <router-link v-if="userIsLoggedIn" to="/logout">Logout</router-link>
        <router-link v-else to="/auth">Login/Sign up</router-link>
    </div>
</template>

<style lang="scss">
    $header-color: #bf3d1a;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 60px;
        background-color: $header-color;
        padding: 20px;
        a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
        }
    }
</style>

<script>
    export default {
        data(){
            return {
                userIsLoggedIn: localStorage.getItem('isLoggedIn'),
                reactive: true
            }
        }
    }
</script>
