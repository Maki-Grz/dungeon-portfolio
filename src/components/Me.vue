<script lang="ts" setup>
import useMe from "~/composables/useMe";

const {switchMe} = useMe();
</script>

<template>
  <div class="me" @click="switchMe()">
    <img alt="icon" src="/minecraft-profil.png"/>
    <span>Maximilien Grzeczka</span>
  </div>
</template>

<style scoped>
.me {
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  z-index: 99;

  background-color: #303330;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 4px 0 #404241, 0 -4px #202320, 4px 0 #222120, -4px 0 #42413E;
  cursor: pointer;
  filter: drop-shadow(4px 4px 0px rgba(23, 23, 23, 0.7));

  display: flex;
  align-items: center;

  img {
    width: 1.5rem;
    margin-right: .5rem;
    color: #FFFFFF;
  }

  span {
    font-size: 1.2rem;
    color: #FFFFFF;
  }
}

.me:hover {
  background: #3a3a3a;
}

.me:active {
  filter: none;
  box-shadow: 0 4px 0 #404241, 0 -4px #202320, 4px 0 #222120, -4px 0 #42413E, 0 -7px white, 0 7px white, 7px 0 white, -7px 0 white, -7px 3px white, -7px -3px white, 7px 3px white, 7px -3px white, -3px 7px white, 3px 7px white, -3px -7px white, 3px -7px white;
}
</style>