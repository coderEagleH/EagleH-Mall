<template>
  <div class="cart-nav-bar">
    <NavBar>
      <div slot="center" class="nav-bar-center">购物车 ({{ cartLength }})</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Vue",
  data() {
    return {};
  },
  computed: {
    cartLength() {
      return this.$store.state.cartItems.length;
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.cart-nav-bar {
  background-color: #1296db;
}
.nav-bar-center {
  color: #fff;
  font-weight: 700;
}
</style>
