<template>
  <div>
    <ul 
    v-for="item of products" 
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
      <button @click="emitRemove">Remove from cart</button>
    </ul>
  </div>
</template>

<script>
export default {
  props: { products: Array },
  data() {
    return {};
  },
  methods: {
    emitRemove() {
      for (let item of this.products){
        let index = this.products.findIndex((p) => p.id === item.id)
        this.$emit('cart-remove', index)

        console.log(item)
      }
    }
  }
};
</script>
