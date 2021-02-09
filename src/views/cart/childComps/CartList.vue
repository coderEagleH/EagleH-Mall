<template>
  <div class="CartList">
    <Scroll class="content">
      <div class="cart-item" v-for="(item, index) in cartList" :key="index">
        <CheckBox
          :is-checked="item.checked"
          :check-box-size="25"
          class="check"
          @click.native="checkedClick(index)"
        >
        </CheckBox>

        <div class="item-img"><img :src="item.image" alt="" /></div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
          <div class="item-price">￥{{ item.price }}</div>
          <div class="item-counter">×{{ item.counter }}</div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CheckBox from "components/content/checkBox/CheckBox";

export default {
  name: "CartList",
  data() {
    return {};
  },
  methods: {
    checkedClick(index) {
      this.$store.commit("changeCheckedState", index);
    },
  },
  computed: {
    cartList() {
      return this.$store.state.cartItems;
    },
  },
  components: {
    Scroll,
    CheckBox,
  },
};
</script>

<style scoped>
.CartList {
  height: calc(100% - 49px - 44px - 30px);
}
.content {
  height: 100%;
  overflow: hidden;
}
.cart-item {
  display: flex;
  height: 18vh;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.check {
  flex: 1;
  height: 20%;
  width: 20%;
  text-align: center;
  margin-top: 5vh;
}
.cart-item .item-img {
  border-radius: 5px;
  flex: 2;
  overflow: hidden;
}
.item-img img {
  height: 100%;
  border-radius: 5px;
}
.item-info {
  flex: 6;
  padding: 0 10px;
  display: inline-block;
}
.item-title,
.item-desc {
  /* 限制文字显示1行，多余的用省略号代替 */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.item-title {
  color: #333;
  font-size: 14px;
}
.item-desc {
  margin-top: 2vh;
  font-size: 12px;
}
.item-price {
  display: inline-block;
  margin-top: 3vh;
  font-size: 20px;
  color: #fa2c19;
}
.item-counter {
  margin-top: 3vh;
  font-size: 20px;
  float: right;
  display: inline-block;
  color: var(--color-high-text);
}
</style>
