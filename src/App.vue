<template>
  <div id="app">
      <navbar/>
      <div class="navbar-spacer">
      <router-view />
      </div>
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
.navbar-spacer {
  padding-top: 70px;
}
</style>