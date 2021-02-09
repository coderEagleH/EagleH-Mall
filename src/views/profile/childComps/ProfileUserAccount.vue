<template>
  <div class="ProfileUserAccount">
    <div class="balance">
      <span class="balance-num">{{ balance.toFixed(2) }}</span
      >元
      <div>我的余额</div>
    </div>
    <div class="discounts">
      <span class="discounts-num">{{ discounts }}</span
      >个
      <div>我的优惠</div>
    </div>
    <div class="point">
      <span class="point-num">{{ point }}</span
      >分
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserAccount",
  data() {
    return {
      balance: 0,
      discounts: 0,
      point: 0,
    };
  },
  components: {},
};
</script>

<style scoped>
.ProfileUserAccount {
  display: flex;
  height: 80px;
  padding: 20px 0;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
}
.ProfileUserAccount div {
  flex: 1;
}
.balance-num,
.point-num,
.discounts-num {
  font-size: 20px;
  color: rgb(255, 102, 0);
}
.balance {
  border-right: 2px solid #eee;
}
</style>
