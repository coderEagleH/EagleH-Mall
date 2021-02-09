<template>
  <div
    class="detail-recommend-info"
    v-if="Object.keys(recommendInfo).length !== 0"
  >
    <div
      class="recommend-item"
      v-for="(item, index) in recommendInfo"
      :key="index"
      @click="itemClick(item)"
    >
      <div class="image">
        <img :src="item.image" alt="" @load="rImgLoaded()" />
      </div>
      <div class="title">
        {{ item.title }}
      </div>
      <div class="price">￥{{ item.price }}</div>
      <div class="likes">❤{{ item.itemLikes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommendInfo",
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    length() {
      return this.recommendInfo.length;
    },
  },
  methods: {
    rImgLoaded() {
      if (++this.counter === this.length) {
        this.$emit("rImgLoaded");
      }
    },
    itemClick(item) {
      // this.$router.push("/detail/" + item.item_id);
      console.log("没有找到" + item.item_id + "数据");
    },
  },
  components: {},
};
</script>

<style scoped>
.image img {
  width: 100%;
}

.detail-recommend-info {
  display: flex;
  flex-wrap: wrap;
}

.recommend-item {
  position: relative;
  width: 46%;
  height: 330px;
  margin-left: 10px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}

.title {
  padding: 0 5px;
  font-size: 12px;
  /* 限制文字显示2行，多余的用省略号代替 */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.price,
.likes {
  display: inline-block;
}

.price {
  font-size: 20px;
  color: #fa2c19;
  margin-top: 5px;
}
.likes {
  float: right;
  margin-top: 10px;
  margin-right: 5px;
  font-size: 14px;
  color: #1296db;
}
</style>
