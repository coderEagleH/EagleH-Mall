<template>
  <div class="popular-view">
    <a href="https://act.mogujie.com/zzlx67">
      <img
        src="~assets/img/home/popular_view.jpg"
        alt=""
        @load="imgLoadFinish()"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "PopularView",
  data() {
    return {
      popularImgIsLoaded: false,
    };
  },
  methods: {
    imgLoadFinish() {
      if (!this.popularImgIsLoaded) {
        this.popularImgIsLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
.popular-view img {
  width: 100%;
}
</style>