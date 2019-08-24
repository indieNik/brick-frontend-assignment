<template>
  <div id="app">
    <Header />
    <div class="section-views">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600');
    * {
        font-family: 'Poppins', sans-serif;
        color: darkslategray;
        font-weight: 300;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    .section-views {
        margin-top: 70px;
    }
</style>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>