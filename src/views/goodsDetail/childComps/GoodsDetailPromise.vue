<template>
  <div class="goods-detail-promise">
    <span v-for="index in services.length" :key="index">
      <img :src="services[index - 1].icon" alt="" />
      {{ services[index - 1].name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "GoodsDetailPromise",
  data() {
    return {};
  },
  computed: {},
  props: {
    services: {
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
.goods-detail-promise {
  display: flex;
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 5px;
  font-size: 12px;
}

.goods-detail-promise span {
  flex: 1;
  text-align: center;
  padding: 0 5px;
}

.goods-detail-promise img {
  width: 12px;
}
</style>
