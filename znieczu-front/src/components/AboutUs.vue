<template>
  <div class="aboutus">
    <div id="history" class="ourcompany">
      <h1>About Our Company</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="righttext">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
    <div class="mission">
      <div class="missionicon">
        <v-icon  class="myIcon">fas fa-desktop</v-icon>
      </div>
      <div class="missiontext">
        <h2>Mission</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
    <br><br>
    <div class="scope">
      <h2>Scope</h2>
      <ul>
        <li>Scope 1</li>
        <li>Scope 2</li>
        <li>Scope 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs.vue'
}
</script>

<style scoped>
  .aboutus {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

  }
  .ourcompany {
    width: 50%;
    height: 70vh;
    margin:auto;
    text-align: justify;
  }
  .ourcompany > h1 {
    text-align: center;
  }
  .ourcompany > .righttext {
    text-align: right;
  }
  .mission {
    width: 100%;
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-around;
    box-shadow: 40px 30px 8px 0 rgba(0,0,0,.2),0 3px 3px -2px rgba(0,0,0,.12)
  }
  .missionicon, .missiontext {
    width: 50%;
    color: aliceblue;
  }
  .missionicon > .myIcon{
    font-size: 70vh;
  }
  .scope {
    background-color: floralwhite;
  }
  .scope > ul {
    text-align: left;
    list-style-type: square;
    line-height: 5;
    margin-left: 50px;
  }

  @media screen and (max-width: 600px) {
    .ourcompany {
      width: 100%;
      height: unset;
      margin:unset;
      text-align: left;
    }
    .ourcompany > h1 {
      text-align: center;
      font-size: large;
    }
    .ourcompany > .righttext {
      text-align: right;
    }

    .mission {
      width: 100%;
      height: unset;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      box-shadow: 40px 30px 8px 0 rgba(0,0,0,.2),0 3px 3px -2px rgba(0,0,0,.12)
    }
    .missionicon, .missiontext {
      width: 100%;
      color: aliceblue;
    }
    .missionicon > .myIcon{
      font-size: 80vw;
    }
  }
</style>
