<script lang="ts" setup>
import useCoordinate from "~/composables/useCoordinate";
import useSwitchMap from "~/composables/useSwitchMap";
import useContact from "../composables/useContactForm";

import Loader from "~/components/Loader.vue";

useHead({
  title: 'Maximilien Grzeczka - Dungeon Portfolio',
})

const {openSidebar} = useSidebar();
const loading = ref({state: true, percentage: 0});
const {coordinate} = useCoordinate();
const {$experiences} = useNuxtApp();
const {switchContact} = useContact();

const map: any = ref(null);
const width = ref(390);
const height = ref(200);
const hoverMeVisible = ref(false);

function hoverMe(value: boolean) {
  hoverMeVisible.value = value;
}

const bounds = computed(() =>
    [
      [0, 0],
      [height.value, width.value],
    ] as L.LatLngBoundsLiteral
);

const updateLoadingProgress = async (increment: number) => {
  let currentIncrement = 0;

  const intervalId = setInterval(() => {
    if (loading.value.percentage + increment - currentIncrement >= 100) {
      loading.value.percentage = 100;
      clearInterval(intervalId);
      loading.value.state = false;
    } else {
      loading.value.percentage += 1;
      currentIncrement += 1;

      if (currentIncrement >= increment) {
        clearInterval(intervalId);
      }
    }
  }, 80);
};

const initializeLoading = async () => {
  await updateLoadingProgress(20);
  if ($experiences()) await updateLoadingProgress(40);
};

const mapInitialized = async () => {
  // const mapObject = map.value.leafletObject;
  await updateLoadingProgress(40);
};

async function markerOnClick(e: any, title: string) {
  openSidebar(title, e.latlng.lat, e.latlng.lng);
}

onMounted(() => {
  initializeLoading();
});
</script>

<template>
  <div style="height:100vh; width:100vw">
    <Loader v-if="loading.state" :percentage="loading.percentage"/>
    <LMap v-if="useSwitchMap().map.value" ref="map"
          :center="[height / 2, width / 2]"
          :max-bounds="bounds"
          :max-zoom="3"
          :min-zoom="2"
          :options="{attributionControl: false, zoomControl: false}"
          :use-global-leaflet="false"
          :zoom="0"
          crs="Simple"
          style="background-color: #e7d6c2; z-index: 4"
          @ready="mapInitialized"
    >

      <LImageOverlay :bounds="bounds" url="/maps/map.jpg"/>

      <LMarker :lat-lng="[coordinate.latitude, coordinate.longitude]">
        <LIcon :icon-size="[755/7, 272/7]" icon-url="/markers/YOU ARE HERE.png"/>
      </LMarker>

      <LMarker :lat-lng="[75, 70]" @click="markerOnClick($event, 'START SAMPLE')">
        <LIcon :icon-size="[935/8, 460/8]" icon-url="/markers/START SAMPLE.png"/>
      </LMarker>

      <LMarker :lat-lng="[60, 125]" @click="markerOnClick($event, 'MODDED MARSH')">
        <LIcon :icon-size="[967/8, 476/8]" icon-url="/markers/MODDED MARSH.png"/>
      </LMarker>

      <LMarker :lat-lng="[115, 90]" @click="markerOnClick($event, 'WASTING WOODS')">
        <LIcon :icon-size="[1010/8, 460/8]" icon-url="/markers/WASTING WOODS.png"/>
      </LMarker>

      <LMarker :lat-lng="[95, 130]" @click="markerOnClick($event, 'LEARNING LAGOON')">
        <LIcon :icon-size="[1096/8, 460/8]" icon-url="/markers/LEARNING LAGOON.png"/>
      </LMarker>

      <LMarker :lat-lng="[155, 173]" @click="markerOnClick($event, 'PALADIUM PEAKS')">
        <LIcon :icon-size="[1037/8, 486/8]" icon-url="/markers/PALADIUM PEAKS.png"/>
      </LMarker>

      <LMarker :lat-lng="[63, 205]" @click="markerOnClick($event, 'RUSTY ROCKS')">
        <LIcon :icon-size="[844/8, 460/8]" icon-url="/markers/RUSTY ROCKS.png"/>
      </LMarker>

      <LMarker :lat-lng="[125, 230]" @click="markerOnClick($event, 'VOLCANIC VENTURES')">
        <LIcon :icon-size="[1214/8, 484/8]" icon-url="/markers/VOLCANIC VENTURES.png"/>
      </LMarker>

      <LMarker :lat-lng="[150, 280]" @click="markerOnClick($event, 'SNOWY SLOW')">
        <LIcon :icon-size="[833/8, 477/8]" icon-url="/markers/SNOWY SLOW.png"/>
      </LMarker>

      <LMarker :lat-lng="[90, 250]" @click="markerOnClick($event, 'TECHNOLOGY TEMPLE')">
        <LIcon :icon-size="[1261/8, 483/8]" icon-url="/markers/TECHNOLOGY TEMPLE.png"/>
      </LMarker>

      <LMarker :lat-lng="[42, 280]" @click="markerOnClick($event, 'OLD OCEAN')">
        <LIcon :icon-size="[710/8, 486/8]" icon-url="/markers/OLD OCEAN.png"/>
      </LMarker>

      <LMarker
          :lat-lng="[50, 338]"
          @mouseout="hoverMe(false)"
          @mouseover="hoverMe(true)">
        <LIcon :icon-size="[1198/6, 301/6]" icon-url="/markers/WAKE ME UP.png"/>
        >
      </LMarker>

      <LMarker
          :lat-lng="[30, 350]"
          @click="switchContact"
          @mouseout="hoverMe(false)"
          @mouseover="hoverMe(true)">
        <LIcon :icon-size="[200/2, 200/2]" :icon-url="hoverMeVisible ? '/mobs/KeyGolemWithStars.gif' : '/mobs/KeyGolem_Diamond_Sleeping.gif'"/>
        >
      </LMarker>

      <LMarker :lat-lng="[118, 320]" @click="markerOnClick($event, 'CASTLE CLIFF')">
        <LIcon :icon-size="[855/8, 483/8]" icon-url="/markers/CASTLE CLIFF.png"/>
      </LMarker>
    </LMap>
    <!-- <LMap v-else ref="map2"
          :center="[height / 2, width / 2]"
          :max-bounds="[[0, 0], [200, 250]]"
          :max-zoom="3"
          :min-zoom="2"
          :options="{attributionControl: false, zoomControl: false}"
          :use-global-leaflet="false"
          :zoom="0"
          crs="Simple"
          style="background-color: #ffffff; z-index: 4"
    >

      <LImageOverlay :bounds="[[0, 0], [200, 250]]" url="/maps/the end.png"/>

      <LMarker :lat-lng="[coordinate.latitude, coordinate.longitude]">
        <LIcon :icon-size="[755/7, 272/7]" icon-url="/markers/YOU ARE HERE.png"/>
      </LMarker>

      <LMarker :lat-lng="[80, 37]" @click="markerOnClick($event, 'INITIATE ISLAND')">
        <LIcon :icon-size="[1001/8, 460/8]" icon-url="/markers/INITIATE ISLAND.png"/>
      </LMarker>

      <LMarker :lat-lng="[45, 150]" @click="markerOnClick($event, 'PRIMARY PROJECT')">
        <LIcon :icon-size="[1104/8, 476/8]" icon-url="/markers/PRIMARY PROJECT.png"/>
      </LMarker>

      <LMarker :lat-lng="[90, 148]" @click="markerOnClick($event, 'PALADIUM INTERNSHIP')">
        <LIcon :icon-size="[1324/8, 485/8]" icon-url="/markers/PALADIUM INTERNSHIP.png"/>
      </LMarker>

      <LMarker :lat-lng="[120, 210]" @click="markerOnClick($event, 'SECONDARY SOFTWARE')">
        <LIcon :icon-size="[1344/8, 476/8]" icon-url="/markers/SECONDARY SOFTWARE.png"/>
      </LMarker>

      <LMarker :lat-lng="[126, 160]" @click="markerOnClick($event, 'INCOMING INTERNSHIP')">
        <LIcon :icon-size="[1308/8, 485/8]" icon-url="/markers/INCOMING INTERNSHIP.png"/>
      </LMarker>

      <LMarker :lat-lng="[148, 105]" @click="markerOnClick($event, 'GRADUATION GATEWAY')">
        <LIcon :icon-size="[1320/8, 482/8]" icon-url="/markers/GRADUATION GATEWAY.png"/>
      </LMarker>
    </LMap> -->
    <Sidebar/>
    <!-- <ChangeMap/> -->
    <Me/>
    <Profil/>
    <Menu/>
    <ContactForm/>
  </div>
</template>

<style scoped>
.active {
  opacity: 1;
}

.disabled {
  opacity: 0;
}
</style>