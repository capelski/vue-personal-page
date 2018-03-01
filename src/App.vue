<template>
  <div id="app">
      <navbar/>
      <router-view />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
      Navbar
  },
  name: 'App'
}
</script>

<style>
html,
body,
#app,
.navbar-spacer {
height: 100%;
}

.navbar-spacer {
  padding-top: 50px;
}
</style>