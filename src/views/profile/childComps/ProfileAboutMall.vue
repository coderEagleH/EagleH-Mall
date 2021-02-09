<template>
  <div class="ProfileAboutMall">
    <Item>
      <img slot="icon" src="~assets/img/profile/cart.png" alt="" />
      <div slot="text">我的购物车</div>
    </Item>
    <Item>
      <img slot="icon" src="~assets/img/profile/download.png" alt="" />
      <div slot="text">下载购物App</div>
    </Item>
    <Item>
      <img slot="icon" src="~assets/img/profile/setting.png" alt="" />
      <div slot="text">设置</div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "ProfileAboutMall",
  data() {
    return {};
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
</style>
