<template>
  <div class="login">
    <h2>Login</h2>
    <div class="loginForm">
      <input type="text" class="inputs" placeholder="Username.." v-model="username">
      <input type="password" class="inputs"  placeholder="Password.." v-model="password">
      <a id="loginButton" @click="handleLogin()">Log In</a>
    </div>
    <h5 style="color: red;" v-show="isError">{{ messageError }}</h5>
    <h5 style="color: green;" v-show="isSuccess">{{ messageSuccess }}</h5>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: '',
      messageSuccess: '',
      messageError: '',
      isSuccess: false,
      isError: false
    }
  },
  methods: {
    handleLogin () {
      console.log(this.username)
      var app = this
      axios
        .post('http://127.0.0.1:8000/api/auth/login/', {
          username: this.username,
          password: this.password
        }
        )
        .then(function (response) {
          app.messageSuccess = 'Key  ' + response.data['key']
          app.isSuccess = true
          app.isError = false
        })
        .catch(function (error) {
          console.log(error)
          app.messageError = 'Unable to log in with provided credentials.'
          app.isError = true
          app.isSuccess = false
        })
    }
  }
}
</script>

<style scoped>
  .login {
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .loginForm {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  #loginButton {
    font-size: 20px;
    border-style: none;
    border-radius: 5px;
    background-color: rgba(0,0,0, 0.6);
    color: white;
    padding:10px;
    cursor:pointer;
  }
  .inputs {
    font-size: 15px;
    border-top: none;
    border-right: none;
    border-left-color: rgba(0,0,0, 0.6);
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0,0,0, 0.6);
    margin: 10px;
  }
  .inputs:focus {
    border-left-color: blue;
    border-bottom-color: blue;
  }
</style>
