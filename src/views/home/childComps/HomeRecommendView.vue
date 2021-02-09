<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoadFinish()" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  data() {
    return {
      recommendsImgIsLoaded: false,
    };
  },
  props: {
    recommends: {
      type: Array,
    },
  },
  methods: {
    imgLoadFinish() {
      if (!this.recommendsImgIsLoaded) {
        this.recommendsImgIsLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  background-color: #fff;
}

.recommend-item {
  flex: 1;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend img {
  width: 70px;
  margin-bottom: 10px;
}

.recommend a {
  color: var(--color-text);
  font-size: 16px;
  text-decoration: none;
}
</style>