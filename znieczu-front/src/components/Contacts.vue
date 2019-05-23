<template>
    <div class="contacts">
      <div class="info">
        <h1>Contacts</h1>
      </div>

      <div class="form">
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.2167517262237!2d9.753606376992922!3d45.52584359451316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478146d86dbc9f09%3A0x42235cbd86bee0be!2sViale+Montecatini%2C+24058+Romano+di+Lombardia+BG!5e0!3m2!1sit!2sit!4v1557436037318!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="mailForm">
            <label>Subject</label>
            <input type="text" />
            <label>First Name</label>
            <input type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Phone</label>
            <input type="text" />
            <label>Message</label>
            <textarea></textarea>
            <a class="formButton">Send</a>
        </div>
      </div>

      <div class="founders">
        <h2>Founders</h2>
        <div class="introduce">
          <div class="firstFounder">
            <v-icon class="myIcon">fas fa-user-circle</v-icon>
            <h3>Gianluca Lombardo</h3>
            <h5><i>Co-Founder & IT Manager</i></h5>
          </div>
          <div class="secondFounder">
            <v-icon class="myIcon">fas fa-user-circle</v-icon>
            <h3>Tommaso Bellini</h3>
            <h5><i>Co-Founder & Software Manager</i></h5>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
  .contacts {
    width: 100%;
  }
  .info {
    height: 50vh;
    width: 100%;
  }
  .form {
      background-color: rgba(0, 0, 0, 0.7);
      height: vh;
      width: 100%;
      display: flex;
  }
  .form > .map {
    width: 50%;
    align-items: center;
    display: flex;
  }
  .form > .map > iframe{
    width: 90%;
    height: 90%;
    margin: auto;
  }
  .form > .mailForm {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    color: white;
    text-align: left;
  }
  .form > .mailForm > input {
    margin-bottom: 10px;
    height: 3vh;

  }
  .formButton {
    margin-top: 10px;
  }
  textarea {
    height: 100px;
  }

  .founders {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
  }
  .founders > .introduce {
    display: flex;

  }
  .myIcon {
    font-size: 150px;
  }
  .firstFounder {
    width: 50%;
  }
  .secondFounder {
    width: 50%;
  }
</style>
