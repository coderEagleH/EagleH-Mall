<template>
  <div class="goods-info">
    <p>{{ goods.title }}</p>
    <span class="price">{{ goods.price }}</span>
    <span class="old-price">{{ goods.oldPrice }}</span>
    <span
      class="discounts"
      :style="{ backgroundColor: goods.discountsColor }"
      >{{ goods.discounts }}</span
    >
  </div>
</template>

<script>
export default {
  name: "GoodsDetailGoodsInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default: {},
    },
  },
  components: {},
};
</script>

<style scoped>
.goods-info {
  padding: 0 10px;
  background-color: #fff;
}

.goods-info p {
  padding: 10px 0;
  font-size: 14px;
}

.price {
  font-size: 25px;
  color: #f02b2b;
  font-weight: 700;
}

.old-price {
  margin-left: 5px;
  font-size: 12px;
  text-decoration: line-through;
  color: #ccc;
}

.discounts {
  display: inline-block;
  border-radius: 7px;
  padding: 2px;
  margin-left: 5px;
  font-size: 12px;
  color: #fff;
  font-weight: 700;
}
</style>
