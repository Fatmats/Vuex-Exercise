<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
   created() {
    document.body.style.backgroundImage = `url(${localStorage.getItem(
      "arkaplan1"
    )})`
}
}
</script>
<style lang="scss">

</style>
