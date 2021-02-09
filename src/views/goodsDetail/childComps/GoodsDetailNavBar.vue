<template>
  <div class="goods-detail-nav-bar">
    <NavBar>
      <div slot="left" @click="backToHome()"><div class="back"></div></div>
      <div slot="center" class="title">
        <span
          v-for="(item, index) in titles"
          :key="index"
          @click="isClick(index)"
          :class="{ active: currentIndex == index }"
          >{{ item }}</span
        >
      </div>
    </NavBar>
  </div>
</template>

<script >
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "GoodsDetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    isClick(index) {
      this.currentIndex = index;
      this.$emit("navBarClick", index);
    },
    backToHome() {
      this.$router.go(-1);
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.goods-detail-nav-bar {
  background-color: #fff;
}

.title {
  display: flex;
  padding: 0 40px;
}
.title span {
  flex: 1;
  font-size: var(--font-size);
  color: var(--color-text);
}
.back {
  position: relative;
  top: 15px;
  left: 31px;
  height: 14px;
  width: 14px;
  border: 2px solid #666;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(45deg);
}
.active {
  color: var(--color-high-text) !important;
}
</style>