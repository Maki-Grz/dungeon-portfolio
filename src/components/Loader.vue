<script setup lang="ts">
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
      <NuxtImg src="https://minecraft.wiki/images/thumb/Seravex_Fly_%28Dungeons%29.gif/200px-Seravex_Fly_%28Dungeons%29.gif?f6777" alt="img_loading"/>
      <p>Vous entrez dans la Carte interactive de Maximilien Grzeczka...</p>
      <progress id="file" :value="percentage" max="100"/>
      <span>{{ percentage }}%</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  background-color: #363d4d;
  z-index: 9000;
  display: flex;

  .loader-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    color: #ffffff;
    font-family: Arial, serif;

    img {
      width: 80px;
      margin-bottom: 2rem;
      transform: scaleX(-1);
    }

    progress {
      width: 70%;
    }

    span {
      margin-top: .5rem;
      font-size: .9rem;
      font-style: italic;
    }
  }
}
</style>