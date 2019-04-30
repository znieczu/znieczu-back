<template>
    <div class="home">
        <div class="container">
            <div class="carrols-image">
                <carousel-3d :controlsVisible="true" :autoplay="true" :autoplayTimeout=5000>
                    <slide :index="0" :height="700">
                        <img src="../assets/dubai.jpg" :height="300">
                    </slide>
                    <slide :index="1" :height="700">
                        <img src="../assets/london.jpg" :height="300">
                    </slide>
                    <slide :index="2" :height="700">
                        <img src="../assets/newyork.jpg" :height="300">>
                    </slide>
                </carousel-3d>
            </div>
            <div class="info">
                <br><br>
                <div class="description" :class="$mq">
                    <p >
                      <b>"Znieczu" </b> is a new Italian start-up, founded by two young guys with the passion on tech
                      and services. It was born with the idea and concept to help companies to grow up and improve
                      the relationship between a Company and their employees. Searching for the real satisfaction
                      and thoughts of a singular employee about its role in its company and the company itself.<br>
                      Our Firm means to contribute into companies and employees walfare. ... more ...
                      <br>
                      The company's name 'Znieczu' is taken from a Polish word that is 'znieczulenia',
                      literally english translation is 'anesthesia'. The strong meaning is related to our goal, that,
                      as still said before, it's to help companies to improve and fix some inside issues like an anesthetization, that helps to
                      relieve the pain.
                      <br>
                    </p>
                </div>
                <div class="logInUp">
                    <button class="signUpButton">Sign Up</button>
                    <h4>Or</h4>
                    <button class="loginButton">Login</button>
                </div>
            </div>
        </div>
        <Skills/>

    </div>
</template>

<script>
import Skills from './HomeComponents/Skills'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'Home',
  components: {
    Skills,
    Carousel3d,
    Slide
  }
}
</script>

<style lang="postcss">
    .container {
        width:100%;
        height: 70vh;
        background-color: white;
        display: flex;
    }
    .carrols-image, .info {
        width: 50%;
        height: 50vh;
        margin: 20px;
    }
    .info {
        background-color: white;
        font-size: 13px;
        text-align: center;
        margin: 20px;
        flex-direction:column;
    }
    .info > .description{
      text-align: justify;
    }
    .logInUp {
        align-items: flex-end;
    }

    .loginButton, .signUpButton {
        background-color: rgba(0,0,0,0.7);
        color: white;
        padding: 3vh 7vh 3vh 7vh;
    }
    .signUpButton {
        background-color: #3a5180;
    }

    @media screen and (max-width: 992px) {
      .container {
        width:100%;
        background-color: white;
        display: flex;
        flex-direction: column;
      }
    }

    @media screen and (max-width: 600px) {
      .container {
        width:100%;
        margin: 0;
        height: unset;

      }
      .carrols-image, .info {
        width:100%;
        margin:0;
        height: unset;
      }
      .info {
        width:100%;

        background-color: white;
        font-size: 13px;
        text-align: center;
      }
      .logInUp {
        display: none;

        align-items: center;
        justify-content: center;
      }

      .loginButton, .signUpButton {
        background-color: rgba(0,0,0,0.7);
        color: white;
        padding: 3vh 7vh 3vh 7vh;
      }
      .signUpButton {
        background-color: #3a5180;
      }
    }
</style>
