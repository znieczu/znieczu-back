<template>
    <div class="skills">
        <div class="firstIcon">
            <v-icon  class="myIcon">fas fa-suitcase</v-icon>
            <p class="myIcon"><v-icon >far fa-check-square</v-icon> Professionality</p>
        </div>
        <div class="firstIcon">
            <v-icon  class="myIcon">far fa-edit</v-icon>
            <p class="myIcon"><v-icon>far fa-check-square</v-icon> Customizable</p>
        </div>
        <div class="firstIcon">
            <v-icon class="myIcon">fas fa-mobile-alt</v-icon>
            <p class="myIcon"><v-icon>far fa-check-square</v-icon> Multi-Platform</p>
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
    }
    .firstIcon > p {
        color: white;
        font-size: 20px;
    }
    .myIcon {
        color: #fff;
        font-size: 5vh;
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
