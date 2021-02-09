import Vue from "vue"
import Vuex from "vuex"

// 1.安装插件
Vue.use(Vuex);

// 注册Vuex实例
const store = new Vuex.Store({
  state: {
    cartItems: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.counter++;
    },
    addToCart(state, payload) {
      payload.counter = 1;
      payload.checked = true;
      state.cartItems.push(payload);
    },
    changeCheckedState(state, payload) {
      state.cartItems[payload].checked = !state.cartItems[payload].checked;
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let product = context.state.cartItems.find(item => item.iid === payload.iid);
        if (product) {
          context.commit("addCounter", product);
          resolve("商品数量+1！");
        } else {
          context.commit("addToCart", payload);
          resolve("商品添加购物车成功！");
        }
      })






      // 用find方法查找cartItems数组中是否有相同iid的商品 find函数返回值为数组中找到的对应元素 找不到则返回undefined
      // let product = context.state.cartItems.find(item => item.iid === payload.iid);

      // 判断 若已经有该商品 商品count加一 若没有则向cartItems数组中新增该商品 并给该商品添加属性count 赋值为1
      // if (product) {
      //   context.commit("addCounter", product);
      // } else {
      //   context.commit("addToCart", payload)
      // }

    }
  },
  modules: {

  }
})

export default store;