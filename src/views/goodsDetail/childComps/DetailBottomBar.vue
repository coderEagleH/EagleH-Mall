<template>
  <div class="bottom-bar">
    <div class="ser">
      <img src="~assets/img/goodsDetail/ser.png" alt="" />
      <div>客服</div>
    </div>
    <div class="shop">
      <img src="~assets/img/goodsDetail/shop.png" alt="" />
      <div>店铺</div>
    </div>
    <div class="collect" @click="changeCollect()">
      <div class="coll" v-if="!isCollect">
        <img src="~assets/img/goodsDetail/in-collect.png" alt="" />
        <div>收藏</div>
      </div>
      <div class="coll" v-else>
        <img src="~assets/img/goodsDetail/collect.png" alt="" />
        <div>取消收藏</div>
      </div>
    </div>
    <div class="in-cart" @click="addToCart()">加入购物车</div>
    <div class="purchase">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {
      isCollect: false,
    };
  },
  methods: {
    changeCollect() {
      this.isCollect = !this.isCollect;
    },
    addToCart() {
      this.$emit("addToCart");
    },
  },
  components: {},
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 49px;
  display: flex;
  border-top: 1px solid #eee;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  text-align: center;
}

.bottom-bar img {
  width: 25px;
}

.ser,
.shop,
.collect {
  flex: 2;
  margin-top: 5px;
  font-size: 12px;
}

.in-cart {
  flex: 4;
  background-color: #f24d0c;
}

.purchase {
  flex: 3;
  background-color: #1296db;
}

.in-cart,
.purchase {
  color: #fff;
  font-size: 14px;
  border-radius: 24px;
  line-height: 39px;
  margin: 5px 2px;
}
</style>
