<template>
  <div>
    <ul 
    v-for="item of products" 
    :key="item.id" 
    class="list-group mb-5"
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
      <button @click="emitRemove" class="btn btn-danger">Remove from cart</button>
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
        let index = this.products.findIndex((p) => p === item)
        this.$emit('cart-remove', index)

        console.log(item)
      }
    }
  }
};
</script>
