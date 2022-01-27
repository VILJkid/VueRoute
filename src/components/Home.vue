<template>
  <div>
    <h2>This is home</h2>
    <button class="btn btn-primary" @click="setData()">Set localStorage</button>
    <button class="btn btn-danger m-3" @click="delData()">
      Delete localStorage
    </button>

    <p>{{ reverseMessage }}</p>
    <div>
      <p>
        Computed Random (Irrespective of no of calls, it runs once, and stores
        the value and returns the same value everytime.)
      </p>
      <p>Once {{ getRandomNumber }}</p>
      <p>Twice {{ getRandomNumber }}</p>
      <p>Thrice {{ getRandomNumber }}</p>
    </div>
    <div>
      <p>
        Normal Random (Will run the method each time it's called, returning
        random values everytime.)
      </p>
      <p>Once {{ getRandomNumber1() }}</p>
      <p>Twice {{ getRandomNumber1() }}</p>
      <p>Thrice {{ getRandomNumber1() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
    getRandomNumber() {
      return Math.random();
    },
  },
  data() {
    return {
      message: "A random message",
    };
  },
  methods: {
    getRandomNumber1() {
      return Math.random();
    },
    setData() {
      localStorage.setItem("uid", "exampleUID");
      alert("Achivement Unlocked !");
    },
    delData() {
      if (confirm("Are you sure ?")) {
        localStorage.removeItem("uid");
        alert("Badge removed.");
      }
    },
  },
};
</script>

<style></style>
