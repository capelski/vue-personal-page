<template>
  <div class="navbar-spacer">
  

  <!-- Header -->
    <header class="masthead">
        <div class="intro-text">
          <div class="intro-lead-in">Get to know something about me</div>
          <div class="intro-heading text-uppercase">Carles Capellas</div>

          <router-link to="projects" class="btn btn-primary btn-xl text-uppercase">What have I built?</router-link>
          <router-link to="places" class="btn btn-primary btn-xl text-uppercase">Where have I been?</router-link>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* #app header.masthead {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
} */
#app header.masthead .intro-text {
  padding: 0;
}

.navbar-spacer,
.masthead {
  height: 100%;
}

.masthead {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-xl {
  margin-top: 10px;
}
</style>