<template>
  <div class="hello">
    <ul
      class="list-group mb-5"
      v-for="item in product"
      :key="item.id"
    >
      <li class="list-group-item">
        <h3>Topic: {{ item.topic }}</h3>
      </li>
      <li class="list-group-item">
        <h3>Location: {{ item.location }}</h3>
      </li>
      <li class="list-group-item">
        <h3>Price: {{ item.price }}</h3>
      </li>
      <button @click="emitCustom" class="btn btn-primary">Add to cart</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
   props: {product: Array},
  data() {
    return {
    };
  },
  methods: {
    emitCustom() {
      
      for (let item of this.product){
        let index = this.product.findIndex((p) => p.id === item.id)
        this.$emit('cart-thing', index)

        console.log(item)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: 1px solid #00ffff;
}
</style>
