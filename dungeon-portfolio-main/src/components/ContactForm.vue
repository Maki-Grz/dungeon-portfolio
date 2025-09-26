<script lang="ts" setup>
import useContact from "../composables/useContactForm";

const {contact, switchContact} = useContact();
</script>

<template>
  <div v-if="contact" class="contact-form-wrapper" @click.self="">
    <form class="contact-form" @submit="">
      <NuxtImg alt="me" format="gif" src="/mobs/KeyGolem_Diamond_Alert.gif"/>
      <h1>Contact</h1>
      <label>
        Name
        <input placeholder="Your name" required type="text"/>
      </label>
      <label>
        Email
        <input placeholder="Your email" required type="email"/>
      </label>
      <label>
        Message
        <textarea placeholder="Your message" required></textarea>
      </label>
      <button class="submit" type="submit">Cast</button>
      <button class="reset" type="reset" @click="switchContact()">Quit</button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-wrapper {
  position: fixed;
  inset: 0;
  background: rgba(48, 51, 48, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110;
  width: 100%;
  height: 100%;
}

.contact-form {
  position: relative;
  background-color: #303330;
  padding: 1rem 2rem;
  box-shadow: 0 4px 0 #404241, 0 -4px #202320, 4px 0 #222120, -4px 0 #42413E;
  filter: drop-shadow(4px 4px 0px rgba(23, 23, 23, 0.7));
  width: 40vw;

  img {
    position: absolute;
    top: -6rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 2.5rem;
    color: white;
  }

  label {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    margin-bottom: 1rem;

    input, textarea {
      margin-top: .8rem;
      border: none;
      box-shadow: 0 4px 0 #9fa4a2, 0 -4px #fdfdfd, 4px 0 #e0e0e0, -4px 0 #8c8c8c;
      cursor: text;
      filter: drop-shadow(4px 4px 0px rgba(255, 255, 255, 0.7));
      resize: vertical;
      padding: .5rem 1rem;
    }
  }
}

button {
  margin-top: 1rem;
  width: 100%;
  padding: 1.20rem 0 1.5rem 0;
  font-family: 'MinecraftTen-VGORe', serif;
  color: #FFFFFF;
  border: none;
  font-size: 1.5rem;
  text-shadow: 3px 3px 0 rgba(23, 23, 23, 0.5);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  filter: drop-shadow(4px 4px 0px rgba(23, 23, 23, 0.7));
}

.submit {
  background: var(--dungeon-kit-primary-green);
  box-shadow: 0 4px 0 #204c2d, 0 -4px #64ca55, 4px 0 #316c42, -4px 0 #316c42;

  &:hover {
    background: #439356;
  }

  &:active {
    filter: none;
    box-shadow: 0 4px 0 #204c2d, 0 -4px #64ca55, 4px 0 #316c42, -4px 0 #316c42, 0 -7px white, 0 7px white, 7px 0 white, -7px 0 white, -7px 3px white, -7px -3px white, 7px 3px white, 7px -3px white, -3px 7px white, 3px 7px white, -3px -7px white, 3px -7px white;
  }
}

.reset {
  background: var(--dungeon-kit-gray);
  box-shadow: 0 4px 0 #444845, 0 -4px #677066, 4px 0 #3c413d, -4px 0 #3a3d3b;

  &:hover {
    background: #5e5e5e;
  }

  &:active {
    filter: none;
    box-shadow: 0 4px 0 #444845, 0 -4px #677066, 4px 0 #3c413d, -4px 0 #3a3d3b, 0 -7px white, 0 7px white, 7px 0 white, -7px 0 white, -7px 3px white, -7px -3px white, 7px 3px white, 7px -3px white, -3px 7px white, 3px 7px white, -3px -7px white, 3px -7px white;
  }
}

@media screen and (max-width: 935px) {
  .contact-form {
    width: 70vw;
  }
}
</style>