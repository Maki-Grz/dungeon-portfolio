<script setup lang="ts">
const {me} = useMe();
</script>

<template>
  <div v-show="me" class="profil">
    <div class="profil__container">
      <div class="profil__container-card">
        <div class="profil__container-card-content">
          <NuxtImg src="https://www.maxgrz.fr/maximilien.jpg" alt="me"/>
          <div>
            <h1>Maximilien Grzeczka</h1>
            <p>I'm a Web Developer working at Paladium Games. I graduated from the BTS SIO program at Lycée Jean-Rostand (Chantilly, France) in 2025. In the past, I've worked on
              Modded
              (website & IN-GAME menu).</p>
          </div>
        </div>
        <div class="profil__container-card-about">
          <h2>What am I like outside of work? I'm glad you asked.</h2>
          <p>Upon having an idea, I am dedicated to bringing it to fruition regardless of the time required, evident in projects like this portfolio. Exploring solo gaming
            experiences such as Minecraft or Subnautica is another passion of mine. Furthermore, I commit a substantial amount of time to expanding my knowledge base through
            certifications from industry leaders like Microsoft and ScyllaDB.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profil {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(48, 48, 48, 0.70);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 98;
  cursor: pointer;
}

.profil__container {
  background-image: url("/maps/old map.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 70%;
  height: 70%;
  margin: auto;
  box-sizing: border-box;
  padding: 4rem 1rem;
  position: relative;
}

.profil__container-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  margin: 4rem auto;
}

.profil__container-card-content {
  display: flex;

  img {
    width: 6rem;
    margin: 0 1rem;
    box-shadow: 0 4px 0 #e1bf9d, 0 -4px #CEA984, 4px 0 #c09973, -4px 0 #CEA984;
    filter: drop-shadow(4px 4px 0px rgba(159, 123, 89, 0.7));;
  }

  div {
    margin-left: 1rem;
  }

  h1 {
    margin-top: 0;
    color: #303030;
  }

  p {
    font-weight: 800;
    color: rgba(48, 48, 48, 0.90);
    font-family: Arial, serif;
    font-size: .9rem;
  }
}

.profil__container-card-about {
  p {
    font-weight: 800;
    color: rgba(48, 48, 48, 0.90);
    font-size: .8rem;
    font-family: Arial, serif;
  }
}
</style>