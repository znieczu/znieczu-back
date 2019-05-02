<template>
    <div class="skills">
        <div class="firstIcon">
            <v-icon  class="myIcon" >fas fa-suitcase</v-icon>
            <p class="myIcon"><v-icon class="checkSquareIcon">far fa-square</v-icon> Professionality</p>
        </div>
        <div class="firstIcon">
            <v-icon  class="myIcon2">far fa-edit</v-icon>
            <p class="myIcon2"><v-icon class="checkSquareIcon">far fa-check-square</v-icon> Customizable</p>
        </div>
        <div class="firstIcon">
            <v-icon class="myIcon3">fas fa-mobile-alt</v-icon>
            <p class="myIcon3"><v-icon class="checkSquareIcon">far fa-check-square</v-icon> Multi-Platform</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
    .skills {
        width: 100%;
        height: 50vh;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 40px 30px 8px 0 rgba(0,0,0,.2),0 3px 3px -2px rgba(0,0,0,.12)

    }
    .firstIcon {
        display: flex;
        flex-direction: column;
        animation-fill-mode: ;
    }
      @keyframes fade {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 0.8;
        }
      }
      @keyframes heartbeat {
    0% {
      transform: scale(1.0);
    }
    100% {
      transform: scale(1.5);
    }
  }
    .firstIcon > p {
        color: white;
        font-size: 20px;
    }
    .myIcon, .myIcon2, .myIcon3 {
        color: #fff;
        font-size: 5vh;
        opacity: 0;

    }
    .myIcon {
      animation: fade 5s forwards;

    }
    .checkSquareIcon {
      animation: heartbeat 5s 3s 1;
    }
    .myIcon2 {
      animation: fade 5s forwards;
      animation-delay: 1s;
    }
    .myIcon3 {
      animation: fade 5s forwards;
      animation-delay: 2s;
    }

    @media screen and (max-width: 600px) {
      .skills {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-shadow: 40px 30px 8px 0 rgba(0,0,0,.2),0 3px 3px -2px rgba(0,0,0,.12);
      }
    }
</style>
