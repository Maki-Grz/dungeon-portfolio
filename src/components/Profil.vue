<script lang="ts" setup>
import useMe from "../composables/useMe";

const {me} = useMe();
</script>

<template>
  <div v-show="me" class="profil">
    <div class="profil__container">
      <div class="profil__container-card">
        <div class="profil__container-card-content">
          <img alt="Portrait of Maximilien Grzeczka" height="144" width="144" src="/avatar.avif"/>
          <div>
            <h1>Maximilien Grzeczka</h1>
            <p>AI Engineer and Full Stack Rust/SAP Developer based in Chantilly and Paris. I work on generative AI for ERP systems at VINCI Construction, architecting AI agents with SAP Joule, RAG pipelines with SAP AI Core and cloud-native services with CAP on HANA Cloud.</p>
          </div>
        </div>
        <div class="profil__container-card-about">
          <h2>Building useful systems, from local AI to the cloud.</h2>
          <p>I maintain open-source Rust tooling such as geniex-rs for Qualcomm GenieX and explore reliable, high-performance developer experiences across Rust, SAP and AI.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profil {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(48, 48, 48, 0.70);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 98;
  cursor: pointer;
}

.profil__container {
  background-image: url("/maps/old-map.png");
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
    height: 9rem;
    margin: 0 1rem;
    box-shadow: 0 4px 0 #e1bf9d, 0 -4px #CEA984, 4px 0 #c09973, -4px 0 #CEA984;
    filter: drop-shadow(4px 4px 0px rgba(159, 123, 89, 0.7));
    animation: click_loop 800ms infinite;
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

@keyframes click_loop {
  100% {
    box-shadow: 0 4px 0 #e1bf9d, 0 -4px #CEA984, 4px 0 #c09973, -4px 0 #CEA984;
  }

  75% {
    box-shadow: 0 4px 0 white, 0 -4px white, 4px 0 white, -4px 0 white;
  }
}

@media (min-width: 768px) and (max-width: 1228px) {
  .profil__container {
    width: 90vw;
    height: 90vh;
    padding: 1.5rem;
    background-size: contain;
    background-position: center;
  }

  .profil__container-card {
    width: 100%;
    height: 100%;
    gap: 1rem;
    flex-direction: column;
  }

  .profil__container-card-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    img {
      width: 8rem;
      height: 8rem;
      margin: 0 auto;
    }

    div {
      margin: 0;
    }

    h1 {
      font-size: 1.2rem;
      word-break: break-word;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.2rem;
      word-break: break-word;
    }
  }

  .profil__container-card-about {
    h2 {
      font-size: 1rem;
      text-align: center;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.2rem;
      text-align: center;
      word-break: break-word;
    }
  }
}

@media (min-width: 476px) and (max-width: 768px) {
  .profil__container {
    width: 100vw;
    height: 90vh;
    padding: 1.5rem;
    background-size: contain;
    background-position: center;
  }

  .profil__container-card {
    width: 100%;
    height: 100%;
    gap: 1rem;
    flex-direction: column;

    max-width: 90vw;
    max-height: 100%;
    overflow-y: auto;
  }

  .profil__container-card-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    img {
      width: 8rem;
      height: 8rem;
      margin: 0 auto;
    }

    div {
      margin: 0;
    }

    h1 {
      font-size: .9rem;
      word-break: break-word;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.2rem;
      word-break: break-word;
    }
  }

  .profil__container-card-about {
    h2 {
      font-size: .7rem;
      text-align: center;
    }

    p {
      font-size: 0.5rem;
      line-height: 1rem;
      text-align: center;
      word-break: break-word;
    }
  }
}

@media (max-width: 768px) {
  .profil__container {
    background-image: none;
    width: 95%;
    height: 90%;
  }

  .profil__container:before {
    content: "";
    position: absolute;
    background-image: url("/maps/old-map.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 100vh;
    height: 100vw;
  }

  .profil__container-card {
    width: 85%;
    margin: 2rem auto;
  }

  .profil__container-card-content {
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 1rem;
    }
  }

  .profil__container-card-content div {
    margin-left: 0;
    margin-top: 1rem;
  }

  .profil__container-card-content img {
    width: 7rem;
    object-fit: cover;
    object-position: top;
    height: 7rem;
    margin: 0 auto;
  }

  .profil__container-card-about {
    h2 {
      font-size: 1rem;
    }
  }

  .profil__container-card-about p {
    font-size: 0.7rem;
    line-height: 1.2rem;
    text-align: left;
  }

  .profil__container-card-content p {
    font-size: 0.7rem;
    line-height: 1.2rem;
    text-align: left;
  }
}
</style>