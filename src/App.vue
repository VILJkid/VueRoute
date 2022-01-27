<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav />
    <div class="container">
      <section class="main">
        <router-view></router-view>

        <!-- <div>
          <p>Count: {{ counter }} {{ message }}</p>
        </div> -->
      </section>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
    // HelloWorld
  },
  data() {
    return {
      counter: 0,
      message: "",
    };
  },

  // Created: Creates stuffs when the vue is instantiated, before any component is loaded.
  // Mounted: When the component is loaded
  // Updated: Whenever the instance XP any change, it triggers.
  //          If used with created, and you changing something something in updated/created, it'll be triggered once min.
  //          If used with created and mounted, it'll trigger twice min.
  //          If used with created and mounted, plus you're updating it in updated, it'll trigger thrice min.

  // created() {
  //   console.log("Created Counter: " + this.counter);
  //   // setInterval(() => {
  //   //   this.counter++;
  //   // }, 3000);
  // },
  // mounted() {
  //   this.message = "Hello";
  //   console.log("Mounted Message: " + this.message);
  // },
  // updated() {
  //   this.message = "World";
  //   console.log("Updated Message: " + this.message);
  // },
  // destroyed() {
  //   this.$destroy();
  //   console.log("Destroyed everything. Hahahaha");
  // },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
