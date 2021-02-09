<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shop.logo" alt="" />
    </div>
    <label class="shop-name">{{ shop.name }}</label>
    <div class="shop-detail">
      <div class="shop-sell">
        <label>{{ sells }}万</label>
        <div>总销量</div>
      </div>
      <div class="shop-goods-count">
        <label>{{ shop.goodsCount }}</label>
        <div>全部宝贝</div>
      </div>
      <div class="shop-score">
        <div v-for="(item, index) in shop.score" :key="index">
          <label>{{ shop.score[index].name }}</label>
          <label
            :style="
              shop.score[index].isBetter ? { color: 'red' } : { color: 'green' }
            "
            >{{ shop.score[index].score.toFixed(2) }}</label
          >
          <label
            v-if="shop.score[index].isBetter"
            style="background-color: red; color: #fff"
            >高</label
          >
          <label v-else style="background-color: green; color: #fff">低</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default: {},
    },
  },
  computed: {
    sells() {
      return (this.shop.sells / 10000).toFixed(1);
    },
  },
  components: {},
};
</script>

<style scoped>
.shop-info {
  background-color: #fff;
  padding: 0 10px 20px;
}

.shop-logo {
  display: inline-block;
  height: 50px;
  width: 50px;
  margin: 20px 0;
  border: 2px solid #ddd;
  border-radius: 25px;
  overflow: hidden;
  vertical-align: middle;
}

.shop-logo img {
  height: 46px;
}

.shop-name {
  margin-left: 10px;
}

.shop-detail {
  display: flex;
}

.shop-sell,
.shop-goods-count {
  flex: 1;
  display: inline-block;
  padding: 0 0px;
  margin: 10px 0;
  text-align: center;
}

.shop-sell label,
.shop-goods-count label {
  font-size: 20px;
}

.shop-sell div,
.shop-goods-count div {
  padding-top: 8px;
  font-size: 12px;
}

.shop-goods-count {
  border-right: 1px solid #ccc;
}

.shop-score {
  flex: 2;
  display: inline-block;
  /* margin-left: 30px; */
  text-align: center;
  font-size: 12px;
}

.shop-score label {
  margin-right: 10%;
}

.shop-score div {
  margin-bottom: 8px;
}
</style>
