import { request } from "./request";

// 获取详情页对应数据
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    }
  })
}

// 获取详情页推荐商品内容
export function getRecommendInfo(id) {
  return request({
    url: "/recommend",
    params: {
    }
  })
}

// 商品信息 
export class Goods {
  constructor(goodsInfo) {
    this.title = goodsInfo.title;
    this.price = goodsInfo.price;
    this.lowNowPrice = goodsInfo.lowNowPrice;
    this.oldPrice = goodsInfo.oldPrice;
    this.discounts = goodsInfo.discountDesc;
    this.discountsColor = goodsInfo.discountBgColor;
  }
}

// 店铺信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

//商品详情
export class GoodsInfo {
  constructor(info, rule) {
    this.image = info.image ? info.image[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

// 用户评价
export class Comments {
  constructor(rate) {
    this.user = rate.list[0].user;
    this.content = rate.list[0].content;
    this.data = rate.list[0].created;
    this.style = rate.list[0].style;
    this.images = rate.list[0].images;
  }
}
