<template>
  <div id="detail">
    <GoodsDetailNavBar
      @navBarClick="navBarClick"
      ref="navBar"
    ></GoodsDetailNavBar>
    <Scroll
      class="content"
      :pullUpLoad="true"
      ref="scroll"
      :probe-type="3"
      @scroll="getPosition"
    >
      <GoodsDetailSwiper
        :banners="topImages"
        @imgLoaded="imgLoaded"
      ></GoodsDetailSwiper>
      <GoodsDetailGoodsInfo :goods="goodsInfo"></GoodsDetailGoodsInfo>
      <GoodsDetailColums :columns="columns"></GoodsDetailColums>
      <GoodsDetailPromise :services="services"></GoodsDetailPromise>
      <GoodsDetailShopInfo :shop="shopInfo"></GoodsDetailShopInfo>
      <GoodsDetailInfo
        :detail-info="detailInfo"
        @infoLoaded="imgLoaded"
      ></GoodsDetailInfo>
      <GoodsParamsInfo :paramsInfo="paramsInfo" ref="params"></GoodsParamsInfo>
      <GoodsDetailComments
        :comments-info="commentsInfo"
        ref="comments"
      ></GoodsDetailComments>
      <DetailRecommendInfo
        :recommend-info="recommendInfo"
        @rImageLoad="imgLoaded"
        ref="recommends"
      ></DetailRecommendInfo>
    </Scroll>
    <BackTop @click.native="backClick()" v-show="isShowBackTop"></BackTop>
    <DetailBottomBar @addToCart="addCart"></DetailBottomBar>
  </div>
</template>

<script>
import GoodsDetailNavBar from "./childComps/GoodsDetailNavBar";
import GoodsDetailSwiper from "./childComps/GoodsDetailSwiper";
import GoodsDetailShopInfo from "./childComps/GoodsDetailShopInfo";
import GoodsDetailGoodsInfo from "./childComps/GoodsDetailGoodsInfo";
import GoodsDetailColums from "./childComps/GoodsDetailColumns";
import GoodsDetailPromise from "./childComps/GoodsDetailPromise";
import GoodsDetailInfo from "./childComps/GoodsDetailInfo";
import GoodsParamsInfo from "./childComps/GoodsParamsInfo";
import GoodsDetailComments from "./childComps/GoodsDetailComments";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils";

import {
  getDetail,
  getRecommendInfo,
  Shop,
  Goods,
  GoodsInfo,
  Comments,
} from "network/detail";
import { backTopMixin } from "common/mixin";

export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      columns: [],
      shopInfo: {},
      goodsInfo: {},
      services: [],
      detailInfo: {},
      paramsInfo: {},
      commentsInfo: {},
      recommendInfo: [],
      navBarLinkerTo: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    // 1.获取商品id
    this.iid = this.$route.params.iid;

    // 2.请求商品数据
    getDetail(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
      this.columns = res.result.columns;
      this.services = res.result.shopInfo.services;
      // 创建商品信息对象
      this.goodsInfo = new Goods(res.result.itemInfo);

      // 创建店铺信息的对象
      this.shopInfo = new Shop(res.result.shopInfo);

      // 保存商品详情信息
      this.detailInfo = res.result.detailInfo;

      // 创建商品尺寸详情对象
      this.paramsInfo = new GoodsInfo(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      // 创建用户评价对象
      res.result.rate.list &&
        (this.commentsInfo = new Comments(res.result.rate));

      // 消抖
      this.getThemeTopY = debounce(() => {
        this.navBarLinkerTo = [];
        this.navBarLinkerTo.push(0);
        this.$refs.params.$el &&
          this.navBarLinkerTo.push(this.$refs.params.$el.offsetTop - 44);
        this.$refs.comments.$el &&
          this.navBarLinkerTo.push(this.$refs.comments.$el.offsetTop - 44);
        this.$refs.recommends.$el &&
          this.navBarLinkerTo.push(this.$refs.recommends.$el.offsetTop - 44);
      }, 500);
    });

    // 3.请求推荐内容
    getRecommendInfo().then((res) => {
      this.recommendInfo = res.data.list;
    });
  },
  methods: {
    imgLoaded() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navBarLinkerTo[index], 200);
    },
    getPosition(position) {
      let nArr = this.navBarLinkerTo;
      nArr.push(Number.MAX_VALUE);
      const length = nArr.length;
      for (let i = 0; i < length - 1; i++) {
        if (i !== this.currentIndex) {
          if (-position.y >= nArr[i] && -position.y < nArr[i + 1]) {
            this.currentIndex = i;
            this.$refs.navBar.currentIndex = this.currentIndex;
          }
        }
        // if (i !== this.currentIndex) {
        //   if (
        //     (-position.y >= this.navBarLinkerTo[i] &&
        //       -position.y < this.navBarLinkerTo[i + 1]) ||
        //     (i == length - 1 && -position.y >= this.navBarLinkerTo[i])
        //   ) {
        //     this.currentIndex = i;
        //     this.$refs.navBar.currentIndex = this.currentIndex;
        //   }
        // }
      }

      // 回到顶部
      this.isShowBackTop = position.y < -1000;
    },
    addCart() {
      // 获取要展示到购物车的信息
      const cartProduct = {};
      cartProduct.image = this.topImages[0];
      cartProduct.title = this.goodsInfo.title;
      cartProduct.desc = this.detailInfo.desc;
      cartProduct.price = this.goodsInfo.lowNowPrice;
      cartProduct.iid = this.iid;

      this.$store.dispatch("addCart", cartProduct).then((res) => {
        this.$toast.show(res, 1500);
      });
    },
  },
  components: {
    GoodsDetailNavBar,
    GoodsDetailSwiper,
    GoodsDetailShopInfo,
    GoodsDetailGoodsInfo,
    GoodsDetailColums,
    GoodsDetailPromise,
    GoodsDetailInfo,
    GoodsParamsInfo,
    GoodsDetailComments,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: var(--color-background);
  height: 100vh;
}

#detail .content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>