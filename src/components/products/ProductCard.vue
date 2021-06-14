<template>
  <div class="card mb-4 shadow-sm">
    <img v-if="product.images && product.images.length>0" :src="product.images[0].url" class="card-img-top product-image" />
    <div class="card-body">
      <h5 class="card-title text-left">{{ product.title }}</h5>
      <div class="row">
        <router-link
          type="button"
          class="btn btn-primary btn-lg"
          :to="'/details/' + product.title"
        >Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["product"]
};
</script>

<style>
.card .product-image {
  height: 300px;
}
</style>