<template>
  <div class="goods-detail-columns">
    <span v-for="(item, index) in columns" :key="index">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: "GoodsDetailColums",
  data() {
    return {};
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>

<style scoped>
.goods-detail-columns {
  display: flex;
  padding: 20px 0 5px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
}

.goods-detail-columns span {
  flex: 1;
  font-size: 12px;
  color: #999;
}
</style>
