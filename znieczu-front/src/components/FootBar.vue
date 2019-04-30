<template>
  <div>
    <footer>
      <div class="links">
        <div id="link1">
          <h3>Company</h3>
          <ul>
            <li>
              <router-link to="/history" tag="li">History</router-link>
            </li>
            <li>Mission</li>
            <li>Scope</li>
          </ul>
        </div>
        <div id="link2">
          <h3>Our Products</h3>
          <ul>
            <li>Company Walfare</li>
            <ul>
              <li>Demo</li>
              <li>Plans</li>
              <li>Booking</li>
            </ul>
          </ul>
        </div>
        <div  id="link3">
          <h3>Contacts</h3>
          <ul>
            <li>Email</li>
            <li>Telephone</li>
          </ul>
        </div>
        <!--<div class="logo-pos">-->
        <!--<img src="../assets/logo-vena.png" width="120" height="120">-->
        <!--</div>-->
      </div>
      <div class="maps">
        <div>
          <img src="../assets/earth-map3.png" height="200px">
        </div>
        <div class="social-icons">
          <v-icon  class="myIcon">fab fa-facebook</v-icon>
          <v-icon  class="myIcon">fab fa-instagram</v-icon>
          <v-icon  class="myIcon">fab fa-twitter</v-icon>
          <v-icon  class="myIcon">fab fa-linkedin</v-icon>
        </div>
      </div>
    </footer>
    <div class="terms">
      <a>
        Terms of Service
      </a>
      <a>
        Privacy
      </a>
      <a>
        Cookies © 2019 Znieczu.com
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootBar'
}
</script>

<style scoped>
    ul  {
        margin: 0;
        list-style-position: outside;
        text-align: left;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        line-height: 20px;
    }
    ul >li {
        margin-bottom:7px;
    }
    footer {
        width: 100%;
        display: flex;
    }
    footer > .links {
        width: 60%;
        height: 60vh;
        color: #000;
        display: flex;
        justify-content: space-around;
    }
    footer > .links > div > h3 {
        color: grey;
    }
    footer > .links > #link1 {
        margin-top: 6vh;
    }
    footer > .links > #link2 {
        margin-top: 12vh;
    }
    footer > .links > #link3 {
        margin-top: 18vh;
    }
    footer > .maps {
        width: 40%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 30px;
    }
    footer > .maps > .social-icons {
      width: 70%;
      display: flex;
      justify-content: space-around;
    }
    .maps > div {
        width: 100%;
        align-self: center;
    }
    .maps > div > img {
    }
    .myIcon {
      font-size: 30px;
    }
  .logo-pos {
    position: absolute;
    left:50px;
    bottom:-800px;
  }
  .terms {
    background-color: rgba(0,0,0,0.6);
    color: white;
    display: flex;
    justify-content: center;
    height: 5vh;
    align-items: center;
  }
  .terms > a {
    margin-left: 10px;
  }

    @media screen and (max-width: 600px) {
      ul  {
        margin: 0;
        list-style-position: outside;
        text-align: center;
        margin-inline-end: unset;
        padding-inline-start: unset;
        line-height: 20px;
      }
      ul >li {
        margin-bottom:7px;
      }
      footer {
        width: 100%;
        height: unset;
        flex-direction: column;

      }
      footer > .links {
        width: 100%;
        height: unset;
        color: #000;
        display: flex;
        flex-direction: column;
      }
      footer > .links > #link1 {
        margin-top: 6vh;
      }
      footer > .links > #link2 {
        margin-top: 6vh;
      }
      footer > .links > #link3 {
        margin-top: 6vh;
      }
      .maps > div {
        display: none;
      }
      footer > .maps {
        width: 100%;
        margin-top: 50px;
        height: unset;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-bottom: 30px;
      }
    }
</style>
