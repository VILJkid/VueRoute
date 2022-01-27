<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCounter()">Increase by 3</button>
    <button @click="subCounter()">Decrease by 2</button>
  </div>
</template>

<script>
import store from "../store/store";
import * as type from "../store/types";
import { mapState } from "vuex";

export default {
  name: "Counter",
  computed: mapState({
    count: (state) => state.count,
  }),
  methods: {
    addCounter() {
      store.dispatch({
        type: type.Increment,
        amount: 3,
      });
    },
    subCounter() {
      store.dispatch({
        type: type.Decrement,
        amount: 2,
      });
    },
  },
};
</script>

<style></style>
