<template>
  <div class="goods">
    <GoodsItem :goodsItem="item" v-for="(item, index) in goods" :key="index">
    </GoodsItem>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";

export default {
  name: "GoodsList",
  components: {
    GoodsItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  padding-left: 8px;
  display: flex;
  flex-wrap: wrap;
}
</style>