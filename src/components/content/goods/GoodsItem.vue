<template>
  <div class="goods-item" @click="goodsItemClick()">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad()" />
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">❤ {{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 46%;
  height: 330px;
  margin: 20px 5px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
}

.goods-item img {
  width: 100%;
  line-height: 350px;
}

.price {
  float: left;
  margin-top: 5px;
  color: #fa2c19;
  font-size: 20px;
}

.goods-item p {
  padding: 0 5px;
  font-size: 12px;
  /* 限制文字显示两行，多余的用省略号代替 */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.collect {
  float: right;
  margin-top: 5px;
  margin-right: 5px;
  padding-top: 6px;
  font-size: 14px;
  color: var(--color-high-text);
}
</style>