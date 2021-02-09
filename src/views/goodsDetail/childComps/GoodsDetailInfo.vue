<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-detail-info">
    <div class="info-desc">
      <div class="desc">{{ detailInfo.desc }}</div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        @load="infoLoaded()"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetailInfo",
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default: {},
    },
  },
  computed: {
    imagesLength() {
      return this.detailInfo.detailImage[0].list.length;
    },
  },
  methods: {
    infoLoaded() {
      if (++this.counter === this.imagesLength) {
        this.$emit("infoLoaded");
      }
    },
  },
};
</script>

<style scoped>
.desc {
  padding: 20px 10px;
  margin: 5px 0 2px 0;
  border: 2px dotted #1296db;
  border-width: 3px 0;
  background-color: #fff;
  font-size: 13px;
  text-indent: 2em;
  line-height: 20px;
  color: #1296db;
}

.info-key {
  font-size: 14px;
  text-align: center;
  background-color: #fff;
  padding: 10px 10px;
}

.info-list img {
  width: 100%;
}
</style>
