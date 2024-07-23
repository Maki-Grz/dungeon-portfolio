<script setup lang="ts">
import useSwitchMap from "~/composables/useSwitchMap";

const defaultImg: string = useSwitchMap().map.value ? '/markers/fight.png' : '/markers/time.png';
</script>

<template>
  <div class="switch">
    <img :src="defaultImg" alt="icon"/>
    <span>{{ useSwitchMap().map.value ? 'UNDERWORLD' : 'THE END ?' }}</span>
    <MineButton @click="useSwitchMap().switchMap" text="CHANGE"/>
  </div>
</template>

<style scoped lang="scss">
.switch {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;

  background-color: #303330;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 4px 0 #404241, 0 -4px #202320, 4px 0 #222120, -4px 0 #42413E;
  cursor: pointer;
  filter: drop-shadow(4px 4px 0px rgba(23, 23, 23, 0.7));
  z-index: 95;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 150px;

  img {
    width: 4rem;
  }

  span {
    font-size: 1.2rem;
    color: #FFFFFF;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
}
</style>