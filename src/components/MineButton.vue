<script lang="ts" setup>
import useSwitchMap from "~/composables/useSwitchMap";

defineProps({
  text: String,
  to_second_map: Boolean,
})
</script>

<template>
  <button v-if="to_second_map" @click="useSwitchMap().switchMap">{{ text }}</button>
  <button v-else>{{ text }}</button>
</template>

<style scoped>
button {
  width: 100%;
  padding: 1.20rem 0 1.5rem 0;
  font-family: 'MinecraftTen-VGORe', serif;
  color: #FFFFFF;
  border: none;
  font-size: 1.8rem;
  text-shadow: 3px 3px 0 rgba(23, 23, 23, 0.5);

  background: var(--dungeon-kit-primary-green);
  text-align: center;
  text-decoration: none;
  box-shadow: 0 4px 0 #204c2d, 0 -4px #64ca55, 4px 0 #316c42, -4px 0 #316c42;
  cursor: pointer;
  filter: drop-shadow(4px 4px 0px rgba(23, 23, 23, 0.7));
}

button:hover {
  background: #439356;
}

button:active {
  filter: none;
  box-shadow: 0 4px 0 #204c2d, 0 -4px #64ca55, 4px 0 #316c42, -4px 0 #316c42, 0 -7px white, 0 7px white, 7px 0 white, -7px 0 white, -7px 3px white, -7px -3px white, 7px 3px white, 7px -3px white, -3px 7px white, 3px 7px white, -3px -7px white, 3px -7px white;
}
</style>