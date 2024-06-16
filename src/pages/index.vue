<script setup lang="ts">
import useSidebar from "~/composables/useSidebar";
import useCoordinate from "~/composables/useCoordinate";
import useSwitchMap from "~/composables/useSwitchMap";

useHead({
  title: 'Maximilien Grzeczka - Dungeon Portfolio',
})

const {sidebar, setSidebar} = useSidebar();
const {coordinate} = useCoordinate();

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


async function markerOnClick(e: any, title: string) {
  coordinate.value.longitude = e.latlng.lng + 1.8;
  coordinate.value.latitude = e.latlng.lat + 15;

  if (sidebar.value) {
    setSidebar(false, title)
    return setTimeout((e: any) => {
      return setSidebar(true, title)
    }, 700)
  }
  return setSidebar(true, title);
}
</script>

<template>
  <div style="height:100vh; width:100vw">
    <LMap style="background-color: #e7d6c2; z-index: 4" v-if="useSwitchMap().map.value"
          ref="map"
          :zoom="0"
          :max-zoom="3"
          :min-zoom="2"
          :center="[height / 2, width / 2]"
          :use-global-leaflet="false"
          :options="{attributionControl: false, zoomControl: false}"
          :max-bounds="bounds"
          crs="Simple"
          @ready="mapInitialized"
    >

      <LImageOverlay url="/maps/map.jpg" :bounds="bounds"/>

      <LMarker :lat-lng="[coordinate.latitude, coordinate.longitude]">
        <LIcon icon-url="/markers/YOU ARE HERE.png" :icon-size="[755/7, 272/7]"/>
      </LMarker>

      <LMarker :lat-lng="[75, 70]" @click="markerOnClick($event, 'START COAST')">
        <LIcon icon-url="/markers/START COAST.png" :icon-size="[844/8, 460/8]"/>
      </LMarker>

      <LMarker :lat-lng="[60, 125]" @click="markerOnClick($event, 'MODDED MARSH')">
        <LIcon icon-url="/markers/MODDED MARSH.png" :icon-size="[967/8, 476/8]"/>
      </LMarker>

      <LMarker :lat-lng="[115, 90]" @click="markerOnClick($event, 'WASTING WOODS')">
        <LIcon icon-url="/markers/WASTING WOODS.png" :icon-size="[1010/8, 460/8]"/>
      </LMarker>

      <LMarker :lat-lng="[95, 130]" @click="markerOnClick($event, 'LEARNING CLEARING')">
        <LIcon icon-url="/markers/LEARNING CLEARING.png" :icon-size="[1190/8, 460/8]"/>
      </LMarker>

      <LMarker :lat-lng="[155, 173]" @click="markerOnClick($event, 'PALADIUM PEAKS')">
        <LIcon icon-url="/markers/PALADIUM PEAKS.png" :icon-size="[1037/8, 486/8]"/>
      </LMarker>

      <LMarker :lat-lng="[63, 205]" @click="markerOnClick($event, 'RUSTY WRECK')">
        <LIcon icon-url="/markers/RUSTY WRECK.png" :icon-size="[868/8, 460/8]"/>
      </LMarker>

      <LMarker :lat-lng="[125, 230]" @click="markerOnClick($event, 'VOLCANIC VENTURES')">
        <LIcon icon-url="/markers/VOLCANIC VENTURES.png" :icon-size="[1214/8, 460/8]"/>
      </LMarker>

      <LMarker :lat-lng="[150, 280]" @click="markerOnClick($event, 'SNOWY BIOMES')">
        <LIcon icon-url="/markers/SNOWY BIOMES.png" :icon-size="[943/8, 476/8]"/>
      </LMarker>

      <LMarker :lat-lng="[90, 250]" @click="markerOnClick($event, 'TECHNOLOGY TEMPLE')">
        <LIcon icon-url="/markers/TECHNOLOGY TEMPLE.png" :icon-size="[1261/8, 483/8]"/>
      </LMarker>

      <LMarker :lat-lng="[50, 300]" @click="markerOnClick($event, 'OLD OCEAN')">
        <LIcon icon-url="/markers/OLD OCEAN.png" :icon-size="[710/8, 485/8]"/>
      </LMarker>

      <LMarker :lat-lng="[118, 320]" @click="markerOnClick($event, 'COMING SOON')">
        <LIcon icon-url="/markers/COMING SOON.png" :icon-size="[950/8, 482/8]"/>
      </LMarker>
    </LMap>
    <LMap style="background-color: #ffffff; z-index: 4" v-else
          ref="map2"
          :zoom="0"
          :max-zoom="3"
          :min-zoom="2"
          :center="[height / 2, width / 2]"
          :use-global-leaflet="false"
          :options="{attributionControl: false, zoomControl: false}"
          :max-bounds="[[0, 0], [200, 250]]"
          crs="Simple"
    >

      <LImageOverlay url="/maps/the end.png" :bounds="[[0, 0], [200, 250]]"/>

      <LMarker :lat-lng="[coordinate.latitude, coordinate.longitude]">
        <LIcon icon-url="/markers/YOU ARE HERE.png" :icon-size="[755/7, 272/7]"/>
      </LMarker>

      <LMarker :lat-lng="[80, 37]" @click="markerOnClick($event, 'INITIATE ISLAND')">
        <LIcon icon-url="/markers/INITIATE ISLAND.png" :icon-size="[1001/8, 460/8]"/>
      </LMarker>

      <LMarker :lat-lng="[45, 150]" @click="markerOnClick($event, 'PRIMARY PROJECT')">
        <LIcon icon-url="/markers/PRIMARY PROJECT.png" :icon-size="[1104/8, 476/8]"/>
      </LMarker>

      <LMarker :lat-lng="[90, 148]" @click="markerOnClick($event, 'PALADIUM INTERNSHIP')">
        <LIcon icon-url="/markers/PALADIUM INTERNSHIP.png" :icon-size="[1324/8, 485/8]"/>
      </LMarker>

      <LMarker :lat-lng="[120, 210]" @click="markerOnClick($event, 'SECONDARY SOFTWARE')">
        <LIcon icon-url="/markers/SECONDARY SOFTWARE.png" :icon-size="[1344/8, 476/8]"/>
      </LMarker>

      <LMarker :lat-lng="[126, 160]" @click="markerOnClick($event, 'INCOMING INTERNSHIP')">
        <LIcon icon-url="/markers/INCOMING INTERNSHIP.png" :icon-size="[1308/8, 485/8]"/>
      </LMarker>

      <LMarker :lat-lng="[148, 105]" @click="markerOnClick($event, 'GRADUATION GATEWAY')">
        <LIcon icon-url="/markers/GRADUATION GATEWAY.png" :icon-size="[1320/8, 482/8]"/>
      </LMarker>
    </LMap>
    <Sidebar/>
    <ChangeMap/>
    <Me/>
    <Profil/>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>