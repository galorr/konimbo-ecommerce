<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="navbar-brand" to="/">konimbo-store</router-link>
        <div class="filter" data-app>       
         <v-combobox solo dense
          :items="categories"
          @change="getProducts"
           label="קטגוריה"></v-combobox>
        </div>
         <img
                src="../assets/search.png"
                width="25"
                alt
              />
        <div class="ml-auto">
          <div>
            <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
              <img
                src="../assets/shopping_cart.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Base",
  computed: {
    ...mapGetters("product", ["cart", "categories", ""]),
  },
   methods: {
    ...mapActions("product", ["getAllProducts", "getProducts"]),
  },
  mounted() {
    this.getAllProducts();
  }
};
</script>

<style>
nav {
  background-color: teal;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  /* font-family: Comic; */
  color: #ffffff !important;
}
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 81px;
}
.filter {
margin-left: 10px;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: teal;
  border: teal;
}
.btn:hover {
  background: #00b4b4;
}
input {
  border-radius: 0%;
}
.btn:focus {
  background: teal;
}
</style>