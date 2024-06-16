<script setup lang="ts">
import MineButton from "~/components/MineButton.vue";
import useCoordinate from "~/composables/useCoordinate";

const {sidebar, setSidebar} = useSidebar();
const {setCoordinate} = useCoordinate();
</script>

<template>
  <Transition name="slide">
    <div class="sidebar" v-if="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__header-informations">
          <NuxtImg src="/markers/donjon.png" alt="donjon"/>
          <span>STORY</span>
          <h1>START COAST</h1>
        </div>
        <button @click="() => { setSidebar(false); setCoordinate(-100, -100)}">CLOSE</button>
      </div>
      <div class="sidebar__body">
        <p>Welcome to my portfolio! I'm a full stack web developer. Discover my awesome skills and projects showcased in an interactive map that draws inspiration from the
          legendary
          Minecraft Dungeon!</p>
      </div>
      <div class="sidebar__footer">
        <MineButton text="START MISSION"/>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 500ms ease-in 0s
}

.sidebar {
  background-image: url("/background sidebar.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  width: 40vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 1rem;
  z-index: 99;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  button {
    padding: .25rem .5rem .5rem .5rem;
    background: transparent;
    font-family: 'MinecraftTen-VGORe', serif;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1.25rem;
    box-shadow: 0 2px 0 #FFFFFF, 0 -2px #FFFFFF, 2px 0 #FFFFFF, -2px 0 #FFFFFF;
  }

  button:hover {
    color: #171717;
    background: #FFFFFF;
  }
}

.sidebar__header-informations {
  display: flex;
  flex-direction: column;

  img {
    width: 8rem;
  }

  span {
    font-family: Arial, serif;
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 500;
    color: #FFFFFF;
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: #FFFFFF;
  }
}

.sidebar__footer {
  margin-top: auto;
  width: 100%;
}
</style>