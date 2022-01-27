<template>
  <div class="container">
    <h2 class="mb-4">Products</h2>
    <p>In Cart (Store) {{ p_count }}</p>
    <div>
      <p>
        IDs [<span v-for="(p, index) in p_id" :key="index">{{ p }}, </span>]
      </p>
    </div>

    <div class="row m-4">
      <div v-if="errors.length > 0">
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="pname" placeholder="Enter Product Name" />
        <br />
        <input type="text" v-model="price" placeholder="Enter Price" />
        <br />
        <input type="text" v-model="quantity" placeholder="Enter Quantity" />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="product in productData" :key="product.id">
        <div class="card m-2" style="width: 18rem">
          <img :src="product.image" class="card-img-top" alt="Some Cat" />
          <div class="card-body">
            <h5 class="card-title">{{ product.pname }}</h5>
            <p class="card-text">
              Price: <b>{{ product.price }}</b>
              <br />
              Quantity:<b>{{ product.quantity }}</b>
            </p>
            <a
              href="javascript:void(0)"
              class="btn btn-primary mx-2"
              v-on:click="addProduct(product.id)"
              >Add to Cart</a
            >
            <a
              href="javascript:void(0)"
              class="btn btn-danger"
              v-on:click="delProduct(product.id)"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//start vue server: npm run serve
//start the json server: json-server --watch products.json --port 1234
//work on add button

import store from "../store/store";
import * as type from "../store/types";
import { mapState } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      productData: undefined,
      pname: "",
      price: "",
      quantity: "",
      errors: [],
    };
  },
  computed: mapState({
    p_count: (state) => state.p_count,
    p_id: (state) => state.p_id,
  }),
  methods: {
    addProduct(id) {
      // console.log(id);
      // let savingId = id;
      let local_p_count;
      let local_p_id = [];
      // console.log(local_p_id);

      if (localStorage.getItem("pid_count") != undefined) {
        local_p_count = Number(localStorage.getItem("pid_count"));
        localStorage.setItem("pid_count", local_p_count + 1);
      } else {
        localStorage.setItem("pid_count", 1);
      }

      if (localStorage.getItem("pid_array") != undefined) {
        local_p_id = JSON.parse(localStorage.getItem("pid_array"));
        local_p_id.push(id);
        localStorage.setItem("pid_array", JSON.stringify(local_p_id));
      } else {
        local_p_id.push(id);
        localStorage.setItem("pid_array", JSON.stringify(local_p_id));
      }

      store.dispatch({
        type: type.Product_Increment,
        trigger: 1,
      });

      store.dispatch({
        type: type.Product_ID,
        id: id,
      });
    },
    delProduct(id) {
      if (confirm("Are you sure ?")) {
        const URL = "http://localhost:1234/products/";
        axios.delete(`${URL}${id}`).then((res) => {
          console.log(res.data);
        });
        axios.get(URL).then((res) => {
          console.log(res.data);
          this.productData = res.data;
        });
      }
    },
    submitForm() {
      let data = {
        pname: this.pname,
        price: this.price,
        quantity: this.quantity,
      };
      console.log(data);
      this.errors = [];
      if (!this.pname) {
        this.errors.push("Product name is required");
      }
      if (!this.price) {
        this.errors.push("Price is required");
      }
      if (!this.quantity) {
        this.errors.push("Quantity is required");
      }
      if (this.errors.length == 0) {
        // console.log("Perfect");
        this.productData = {
          pname: this.pname,
          price: this.price,
          quantity: this.quantity,
        };
        const URL = "http://localhost:1234/products/";
        axios.post(URL, this.productData);

        this.pname = "";
        this.price = "";
        this.quantity = "";

        axios.get(URL).then((res) => {
          console.log(res.data);
          this.productData = res.data;
        });
      }
    },
  },
  mounted() {
    const URL = "http://localhost:1234/products/";
    axios.get(URL).then((res) => {
      console.log(res.data);
      this.productData = res.data;
    });
  },
};
</script>

<style></style>
