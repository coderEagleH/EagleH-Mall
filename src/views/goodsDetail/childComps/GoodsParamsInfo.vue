<template>
  <div class="goods-params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="info-size" v-for="item2 in paramsInfo.sizes[0]">
      <table>
        <tbody>
          <tr>
            <td v-for="item3 in item2">{{ item3 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="info-item"
      v-for="(item, index) in paramsInfo.infos"
      :key="index"
    >
      <div class="key">{{ item.key }}</div>
      <div class="value">
        <label>{{ item.value }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsParamsInfo",
  data() {
    return {};
  },
  props: {
    paramsInfo: {
      type: Object,
      default: {},
    },
  },
  components: {},
};
</script>

<style scoped>
.goods-params-info {
  padding: 0 10px;
  background-color: #fff;
}

.info-item,
.info-size {
  width: 100%;
}

.info-item div {
  display: inline-block;
  font-size: 12px;
  padding: 13px 10px;
  vertical-align: middle;
}
.info-item {
  border-top: 1px solid #eee;
}
table {
  height: 40px;
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  line-height: 40px;
  font-size: 13px;
}
.info-size tr {
  width: 100%;
  display: flex;
}
.info-size td {
  flex: 1;
  display: inline-block;
}

.key {
  width: 20%;
  padding-top: 5px;
}

.value {
  width: 80%;
  color: var(--color-tint);
}
</style>
