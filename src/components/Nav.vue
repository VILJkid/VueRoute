<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" to="/"
            >Home</router-link
          >
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/courses"
            >Courses {{ courseStatus }}</router-link
          >
          <router-link class="nav-link" to="/redirectToHome"
            >Redirect to Home (Alias)</router-link
          >
          <router-link class="nav-link" to="/redirectToAbout"
            >Redirect to About (Full redirect)</router-link
          >
          <router-link class="nav-link" to="/computedExample"
            >Computed Example</router-link
          >
          <router-link class="nav-link" to="/products">Products</router-link>
          <!-- <router-link class="nav-link" to="/courses/JS">JS</router-link> -->
          <!-- <a class="nav-link" href="#">Pricing</a>
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          > -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      courseStatus: "(Locked)",
    };
  },
  mounted() {
    if (localStorage.getItem("uid") != undefined) {
      this.courseStatus = "";
    }
  },
};
</script>

<style></style>
