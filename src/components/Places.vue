<template>
  <div>
    <div id="map" style="height: 500px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Places',
  created() {
    let places = document.createElement('script');
    places.setAttribute('src',"/static/js/places.js");
    document.head.appendChild(places);
  }
}
</script>
