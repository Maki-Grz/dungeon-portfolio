<script setup lang="ts">
useHead({
  title: 'Maximilien Grzeczka - Dungeon Portfolio',
})

const map: any = ref(null);
const width = ref(390);
const height = ref(200);

const bounds = computed(
    () =>
        [
          [0, 0],
          [height.value, width.value],
        ] as L.LatLngBoundsLiteral
);

const mapInitialized = () => {
  const mapObject = map.value.leafletObject;
}


/*function markerOnClick(e: any) {
  alert("hi. you clicked the marker at " + e.latlng);
}*/
</script>

<template>
  <div style="height:100vh; width:100vw">
    <LMap style="background-color: #e7d6c2;"
          ref="map"
          :zoom="0"
          :max-zoom="2"
          :min-zoom="2"
          :center="[height / 2, width / 2]"
          :use-global-leaflet="false"
          :options="{attributionControl: false, zoomControl: false}"
          :max-bounds="bounds"
          crs="Simple"
          @ready="mapInitialized"
    >

      <LImageOverlay url="/map.jpg" :bounds="bounds"/>

      <!-- <LMarker :lat-lng="[170, 150]" @click="">
        <LIcon icon-url="" :icon-size="[40, 40]" />
      </LMarker> -->
    </LMap>
  </div>
</template>

<style lang="scss" scoped>

</style>