<script lang="ts" setup>
import useSidebar from "~/composables/useSidebar";

const {openSidebar} = useSidebar();
</script>

<template>
  <div class="mobile-menu">
    <span @click="openSidebar('START SAMPLE', 75, 70)">START SAMPLE</span>
    <span @click="openSidebar('MODDED MARSH', 60, 125)">MODDED MARSH</span>
    <span @click="openSidebar('WASTING WOODS', 115, 90)">WASTING WOODS</span>
    <span @click="openSidebar('LEARNING LAGOON', 95, 130)">LEARNING LAGOON</span>
    <span @click="openSidebar('PALADIUM PEAKS', 155, 173)">PALADIUM PEAKS</span>
    <span @click="openSidebar('RUSTY ROCKS', 63, 205)">RUSTY ROCKS</span>
    <span @click="openSidebar('VOLCANIC VENTURES', 125, 230)">VOLCANIC VENTURES</span>
    <span @click="openSidebar('SNOWY SLOW', 150, 280)">SNOWY SLOW</span>
    <span @click="openSidebar('TECHNOLOGY TEMPLE', 90, 250)">TECHNOLOGY TEMPLE</span>
    <span @click="openSidebar('OLD OCEAN', 42, 280)">OLD OCEAN</span>
    <span @click="openSidebar('CASTLE CLIFF', 118, 320)">CASTLE CLIFF</span>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem .8rem;
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

  /* width & Height */

  &::-webkit-scrollbar {
    height: 6px;
  }

  /* Track */

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  /* Handle */

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }

  /* Handle on hover */

  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }

  span {
    font-size: 1.2rem;
    color: #FFFFFF;
    cursor: pointer;
    text-wrap: nowrap;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e1bf9d;

    &:hover {
      color: #e1bf9d;
    }

    &:active {
      filter: none;
      box-shadow: 0 4px 0 #404241, 0 -4px #202320, 4px 0 #222120, -4px 0 #42413E, 0 -7px white, 0 7px white, 7px 0 white, -7px 0 white, -7px 3px white, -7px -3px white, 7px 3px white, 7px -3px white, -3px 7px white, 3px 7px white, -3px -7px white, 3px -7px white;
    }
  }
}
</style>