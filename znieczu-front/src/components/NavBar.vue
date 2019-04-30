<template>
    <div class="navbar">
      <img id="logo" src="../assets/znieczu-logo.png" width="80" height="80">
      <v-icon  class="myIcon" @click="showButtons = !showButtons">fab fa-elementor</v-icon>

      <div class="navbar-buttons" v-show="showButtons">
            <router-link to="/" tag="button">Home</router-link>
            <router-link to="/about-us" tag="button">About Us</router-link>
            <img src="../assets/znieczu-logo.png" width="80" height="80">
            <button>Our Products</button>
            <button>Contacts</button>
        </div>

    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      showButtons: false,
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  methods: {
    handleResize: function() {
      if (window.innerWidth <= 600) {
        this.showButtons = false;
      } else {
        this.showButtons = true;
      }
    }
  }
}
</script>

<style scoped>
  #logo {
    display: none;
  }
    .myIcon{
      display: none;
    }
    .navbar {
        border-bottom: solid 1px #EBEAEA;
        padding: 30px;
        font-weight: bold;
    }

    button {
        background-color: white;
        border: None;
        margin: 10px;
        font-size: 15px;
        font-weight: bold;
    }
    .button-znieczu {
        background-color: rgba(0,0,0,0.7);
        color: #fff;
        padding: 30px;
    }
    .navbar-buttons {
        display: flex;
        justify-content: space-around;

    }

    @media screen and (max-width: 600px) {
      .myIcon {
        display: unset;
        filter: invert(100%);
        mix-blend-mode: difference;
        z-index: 1;
        font-size: 5vh;
        position: fixed;
        right:3vh
      }
      .navbar {
        border-bottom: solid 1px #EBEAEA;
        padding: unset;
        font-weight: bold;
      }
      .navbar-buttons {
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 2vh;
        z-index: 1;
        background-color: rgba(0,0,0,0.5);
      }
      .navbar-buttons > img {
        display: none;
      }
      .button-znieczu {
        background-color: rgba(0,0,0,0.7);
        color: #fff;
        padding: 30px;
      }
      #logo {
        display: unset;
      }
    }
</style>
