<script lang="ts" setup>
import useSidebar from "~/composables/useSidebar";

const {openSidebar} = useSidebar();
</script>

<template>
  <div class="mobile-menu">
    <span @click="openSidebar('START SAMPLE', 75, 70)">Start Sample</span>
    <span @click="openSidebar('WASTING WOODS', 115, 90)">Wasting Woods</span>
    <span @click="openSidebar('MODDED MARSH', 60, 125)">Modded Marsh</span>
    <span @click="openSidebar('PALADIUM PEAKS', 155, 173)">Paladium Peaks</span>
    <span @click="openSidebar('OLD OCEAN', 42, 280)">Old Ocean</span>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem;
  z-index: 97;
  max-width: 80vw;
  margin: auto;
  gap: .5rem;
  background-color: #303330;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 4px 0 #404241, 0 -4px #202320, 4px 0 #222120, -4px 0 #42413E;
  filter: drop-shadow(4px 4px 0px rgba(23, 23, 23, 0.7));

  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;

  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  span {
    font-size: 1.2rem;
    color: #FFFFFF;
    cursor: pointer;
    text-wrap: nowrap;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e1bf9d;

    &:hover {
      background: #3a3a3a;
    }

    &:active {
      filter: none;
      box-shadow: 0 4px 0 #404241, 0 -4px #202320, 4px 0 #222120, -4px 0 #42413E, 0 -7px white, 0 7px white, 7px 0 white, -7px 0 white, -7px 3px white, -7px -3px white, 7px 3px white, 7px -3px white, -3px 7px white, 3px 7px white, -3px -7px white, 3px -7px white;
    }
  }
}
</style>