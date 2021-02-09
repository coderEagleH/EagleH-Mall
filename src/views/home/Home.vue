<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">Eagle商城</div></NavBar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      class="tabControl"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isFixed"
    ></TabControl>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrolling"
      :pull-up-load="true"
      @pullingUp="loadMoreItems"
    >
      <HomeSwiper :banners="banners" ref="homeSwiper"></HomeSwiper>
      <HomeRecommendView
        :recommends="recommends"
        ref="homeRecommend"
      ></HomeRecommendView>
      <PopularView ref="homePopular"></PopularView>
      <TabControl
        class="tabControl"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick()" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import PopularView from "./childComps/PopularView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

import { backTopMixin } from "common/mixin";

export default {
  name: "Home",
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isFixed: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    tabControlOffset() {
      if (
        this.$refs.homeSwiper.swiperImgIsLoaded &&
        this.$refs.homeRecommend.recommendsImgIsLoaded &&
        this.$refs.homePopular.popularImgIsLoaded
      ) {
        return this.$refs.tabControl2.$el.offsetTop;
      } else {
        return 0;
      }
    },
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    PopularView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata(),
      // 2.请求商品数据
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    // 3.监听item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    // 事件监听相关
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    scrolling(position) {
      this.isShowBackTop = position.y < -1000;

      this.isFixed = position.y < -this.tabControlOffset;
    },
    loadMoreItems() {
      this.getHomeGoods(this.currentType);
      // 完成上拉加载更多
      this.$refs.scroll.finishUpLoad();
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list); // ...解构数组，然后添加
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  /* margin-top: 44px; */
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  z-index: 9;
}

.tabControl {
  position: relative;
  /* position: fixed;
  top: 621px;
  left: 0;
  right: 0; */
  z-index: 9;
}
</style>