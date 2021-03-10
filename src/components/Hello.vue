<template>
  <div>
    <button @click="showCheckout" class="btn btn-outline-success btn-lg mb-5">Checkout</button>
    <lesson
    v-if="showProduct" 
    :product="products"
    @cart-thing="addToCart"
    />
    <cart
    v-else
    :products="cart"
    @cart-remove="removeFromCart"
    />
  </div>
</template>
<script>
import Lesson from './Lesson'
import Cart from './Cart'

export default {
  name: "HelloWorld",
   components: {Lesson, Cart},
  data() {
    return {
      products: [],
      cart: [],
      newProduct: {},
      showProduct: true,
    };
  },
  methods: {
    addToCart: function(id) {
      try {
        let tempCart = this.cart;
        // this.cart = [];
        tempCart.push(this.products[id]);
        this.cart = tempCart;
      } catch (err) {
        console.log(err);
      }
    },
    removeFromCart(id){
      let remove = this.cart.slice(id)
      this.cart = remove
    },
    showCheckout: function() {
      this.showProduct = this.showProduct ? false : true;
    },
  },
  created: function() {
    fetch("http://localhost:3000/lessons")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
};
</script>