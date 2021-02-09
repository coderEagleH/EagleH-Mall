<template>
  <div class="ProfileAboutUser">
    <Item>
      <img slot="icon" src="~assets/img/profile/message.png" alt="" />
      <div slot="text">我的消息</div>
    </Item>
    <Item>
      <img slot="icon" src="~assets/img/profile/point.png" alt="" />
      <div slot="text">积分商城</div>
    </Item>
    <Item>
      <img slot="icon" src="~assets/img/profile/vip.png" alt="" />
      <div slot="text">会员卡</div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "ProfileAboutUser",
  data() {
    return {};
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
.ProfileAboutUser {
  border: 1px solid #eee;
  border-width: 15px 0;
}
</style>
