<template>
  <div class="page-not-found">
    <h2>I'm sorry...Page not found </h2>
    <v-icon :size=50 style="color:red;">far fa-times-circle</v-icon>
    <h2 style="color:red;">Error 404</h2>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
  .page-not-found {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
