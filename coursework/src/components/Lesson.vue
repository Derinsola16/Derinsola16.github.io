<template>
  <div class="hello">
    <ul
      class="card"
      v-for="item in product"
      :key="item.id"
    >
      <li>
        <h3>Topic: {{ item.topic }}</h3>
      </li>
      <li>
        <h3>Location: {{ item.location }}</h3>
      </li>
      <li>
        <h3>Price: {{ item.price }}</h3>
      </li>
      <button @click="emitCustom">Add to cart</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
   props: {product: Array},
  data() {
    return {
      // products: [],
      // cart: [],
      // newProduct: {},
      // showProduct: true,
    };
  },
  methods: {
    emitCustom() {
      
      for (let item of this.product){
        let index = this.product.findIndex((p) => p.id === item.id)
        this.$emit('cart-thing', index)

        // console.log(item.topic)
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
