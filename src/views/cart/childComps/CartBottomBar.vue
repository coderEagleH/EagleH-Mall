<template>
  <div class="CartBottomBar">
    <CheckBox
      class="bottom-bar-check-box"
      :check-box-size="25"
      :is-checked="ischeckedAll"
      @click.native="checkedAll()"
    >
      <span slot="unchecked">全选</span>
      <span slot="checked">取消全选</span></CheckBox
    >
    <div class="total-price">合计：￥{{ totallyPrice }}</div>
    <div class="account" @click="toAccount()">结算</div>
  </div>
</template>

<script>
import CheckBox from "components/content/checkBox/CheckBox";

export default {
  name: "CartBottomBar",
  data() {
    return {};
  },
  computed: {
    totallyPrice() {
      return this.$store.state.cartItems
        .filter((item) => item.checked === true)
        .reduce((preV, item) => {
          return item.price * item.counter + preV;
        }, 0)
        .toFixed(2);
    },
    ischeckedAll() {
      return (
        this.$store.state.cartItems.length &&
        !this.$store.state.cartItems.find((item) => !item.checked)
      );
    },
  },
  components: {
    CheckBox,
  },
  methods: {
    checkedAll() {
      let newState = !this.ischeckedAll;
      for (let item of this.$store.state.cartItems) {
        item.checked = newState;
      }
    },
    toAccount() {
      if (!this.$store.state.cartItems.find((item) => item.checked)) {
        this.$toast.show("请选择进行结算的商品");
      }
    },
  },
};
</script>

<style scoped>
.CartBottomBar {
  display: flex;
  height: 30px;
  width: 100%;
  background-color: #f9f9f9;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
}
.bottom-bar-check-box {
  flex: 1;
  display: inline-block;
  text-align: left;
  margin: auto 10px;
}
.bottom-bar-check-box span {
  font-size: 12px;
}
.CartBottomBar .total-price {
  flex: 2;
  display: inline-block;
  font-size: 14px;
  color: #1296db;
}
.CartBottomBar .account {
  flex: 1;
  display: inline-block;
  background-color: #1296db;
  font-size: 16px;
  color: #fff;
}
</style>
