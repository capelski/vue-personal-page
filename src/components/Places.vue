<template>
    <header class="masthead">
      <div class="container">
        <div id="map" style="width:100%; height: 500px;"></div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Places',
  created() {
    let places = document.createElement('script');
    places.setAttribute('src',"/carles-capellas/js/places.js");
    document.head.appendChild(places);
  }
}
</script>

<style scoped>
.navbar-spacer,
.masthead {
  height: 100%;
}

header.masthead {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: black;
  background-image: url('/carles-capellas/img/map-image.png')
}

.btn-xl {
  margin-top: 10px;
}
</style>