<template>
    <div class="products">
      <div class="info">
        <h1>Products</h1>
      </div>
      <div class="form">
        <div class="laptop">
          <!--<i class="fas fa-laptop"></i>-->
          <div class="laptopMonitorIconDiv">
            <iframe  class="video"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
          <!--<div class="laptopKeyboardIconDiv">-->
          <!--</div>-->
        </div>
        <div class="solutions">
          <h2>Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="motivation">
          <h2>Why choose Znieczu</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "Products"
}
</script>

<style scoped>
  .products {
    width: 100%;
  }
  .info {
    height: 50vh;
    width: 100%;
  }
  .form {
      background-color: rgba(0, 0, 0, 0.7);
      height: 70vh;
      width: 100%;
      display: flex;
      color: white;
  }
  .laptop {
    width: 50%;
    font-size: 70vh;
    align-self: center;
  }
  .laptop > .laptopMonitorIconDiv > .video{
    width: 100%;
  }
  .laptop > .laptopMonitorIconDiv{
    width: 27vw;
    height: 35vh;
    border: 1vw solid white;
    border-radius: 10px;
    align-self: center;
    margin: auto;
    display: flex;
  }
  .laptop > .laptopKeyboardIconDiv{
    border: 1.5vw solid white;
    width: 80%;
    margin: auto;
    margin-top: 15px;
    border-radius: 5px;
  }
  .solutions {
    width: 50%;

  }
  .solutions > p{
    width: 95%;
    text-align: justify;
  }
  .motivation  {
    height: 50vh;
  }
</style>
