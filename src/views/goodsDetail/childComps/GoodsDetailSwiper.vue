<template>
  <Swiper>
    <SwiperItem
      class="swiper-item"
      v-for="(item, index) in banners"
      :key="index"
    >
      <img :src="item" alt="" @load="imgLoaded()" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "GoodsDetailSwiper",
  data() {
    return {
      isLoaded: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoaded() {
      if (!this.isLoaded) {
        this.$emit("imgLoaded");
        this.isLoaded = true;
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
</style>
