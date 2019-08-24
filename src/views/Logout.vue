<template>
    <h1>Sucessfully Logged Out!</h1>
</template>

<script>
export default {
    data(){
        return {
            name: 'logout',
            isLoggedIn: localStorage.getItem('isLoggedIn')
        }
    }
}
</script>