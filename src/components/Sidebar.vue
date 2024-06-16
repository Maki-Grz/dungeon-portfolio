<script setup lang="ts">
import MineButton from "~/components/MineButton.vue";
import useCoordinate from "~/composables/useCoordinate";
import data from '~/data/data.json';

const {sidebar, setSidebar}: any = useSidebar();
const {setCoordinate} = useCoordinate();

const mission: any = ref(null);
mission.value = data.find((e: any) => e.title === sidebar.title);
console.log(mission.value.title, sidebar.value.title);

</script>

<template>
  <Transition name="slide">
    <div class="sidebar" v-if="sidebar.showing">
      <div class="sidebar__header">
        <div class="sidebar__header-informations">
          <NuxtImg :src="`/markers/${mission.img}`" alt="donjon"/>
          <span>{{ mission.type }}</span>
          <h1>{{ mission.name }}</h1>
        </div>
        <button @click="() => { setSidebar(false, 'START COAST'); setCoordinate(-100, -100)}">CLOSE</button>
      </div>
      <div class="sidebar__body">
        <div class="sidebar__body-synopsis">
          <NuxtImg :src="mission.img_context" alt="img_context"/>
          <p>{{ mission.description_context }}</p>
        </div>
        <div class="sidebar__body-content" v-for="each in mission.content" :key="each.name">
          <h2>{{ each.title }}</h2>
          <p>{{ each.description }}</p>
        </div>
        <div class="sidebar__body-img">
          <div class="sidebar__body-img-each" v-for="(each, i) in mission.img_content" :key="i">
            <NuxtImg :src="each" alt="img__content"/>
          </div>
        </div>
        <div class="sidebar__body-links">
          <div class="sidebar__body-links-each" v-for="(each, i) in mission.links" :key="i">
            <NuxtLink :to="each" external target="_blank">{{ each }}</NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="mission.map !== 'UNDERWORLD'" class="sidebar__footer">
        <MineButton text="START MISSION" :to_second_map="true"/>
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
  z-index: 98;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  filter: drop-shadow(6px 0px 0px rgba(23, 23, 23, 0.5));
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

.sidebar__body {
  margin: 0.5rem 0;
  overflow-x: scroll;

  .sidebar__body-synopsis {
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;

    img {
      width: 17rem;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 0.5rem;
    }

    p {
      font-weight: 700;
      color: #ffffff;
      font-family: Arial, serif;
      font-size: .9rem;
      margin: 0;
    }
  }

  .sidebar__body-content {
    h2 {
      color: #FFFFFF;
      letter-spacing: 1px;
    }

    p {
      font-weight: 700;
      color: #ffffff;
      font-family: Arial, serif;
      font-size: .9rem;
      margin: 0;
    }
  }

  .sidebar__body-img {
    margin-top: 1rem;
    display: flex;
    overflow-x: auto;
    align-items: center;

    img {
      height: 17rem;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 0.5rem;
    }
  }

  .sidebar__body-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .sidebar__body-links-each {
      margin: .5rem 0.5rem 0.25rem 0;

      a {
        padding: 0.25rem 0.25rem;
        background: #303030;
        color: #FFFFFF;
        border-radius: 2px;
      }
    }
  }
}

.sidebar__footer {
  margin-top: auto;
  width: 100%;
}
</style>