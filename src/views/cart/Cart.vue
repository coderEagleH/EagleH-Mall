<template>
  <div id="cart">
    <CartNavBar></CartNavBar>
    <CartList></CartList>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import CartNavBar from "./childComps/CartNavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

export default {
  name: "Cart",
  components: {
    CartNavBar,
    CartList,
    CartBottomBar,
  },
};
</script>

<style>
#cart {
  height: 100vh;
}
</style>