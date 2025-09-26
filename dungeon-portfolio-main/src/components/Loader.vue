<script lang="ts" setup>
interface Props {
  percentage?: number
}

withDefaults(defineProps<Props>(), {
  percentage: 50
});
</script>

<template>
  <div class="loader">
    <div class="loader-box">
      <NuxtImg alt="img_loading" src="https://minecraft.wiki/images/thumb/Seravex_Fly_%28Dungeons%29.gif/200px-Seravex_Fly_%28Dungeons%29.gif?f6777"/>
      <p>Chargement du monde...</p>
      <div v-if="percentage" class="loader-box-progress">
        <progress id="file" :value="percentage" max="100"/>
      </div>
      <span>{{ percentage }}%</span>
    </div>
  </div>
</template>

<style scoped>
.loader {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  background-color: #363d4d;
  z-index: 9000;
  display: flex;
  font-family: 'MinecraftTenVGORe', sans-serif;

  .loader-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: #ffffff;

    p {
      font-size: 1.5rem;
    }

    img {
      width: 80px;
      margin-bottom: 2rem;
      transform: scaleX(-1);
    }

    .loader-box-progress {
      background-color: transparent;
      border: 3px solid white;
      padding: 2px;
      display: flex;
      justify-content: center;
      align-items: center;

      progress {
        width: calc(100vh - 10rem);
        background-color: transparent;
      }

      progress::-webkit-progress-value {
        background: white;
      }
    }

    span {
      margin-top: .5rem;
      font-size: 2rem;
    }
  }
}

@media (max-width: 1228px) {
  .loader .loader-box {
    p {
      font-size: 1.2rem;
    }

    img {
      width: 60px;
      margin-bottom: 1.5rem;
    }

    .loader-box-progress progress {
      width: calc(80vw - 4rem);
    }

    span {
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 768px) {
  .loader .loader-box {
    p {
      font-size: 1rem;
      text-align: center;
    }

    img {
      width: 50px;
      margin-bottom: 1rem;
    }

    .loader-box-progress progress {
      width: calc(90vw - 2rem);
    }

    span {
      font-size: 1.2rem;
    }
  }
}
</style>
