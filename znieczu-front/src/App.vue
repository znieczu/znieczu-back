<template>
    <div id="app">
        <NavBar></NavBar>
        <router-view/>
        <FootBar></FootBar>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FootBar from './components/FootBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    FootBar
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    button {
        border-radius: 30px;
        cursor: pointer;
    }
</style>
