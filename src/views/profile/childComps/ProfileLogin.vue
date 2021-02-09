<template>
  <div class="ProfileLogin">
    <div class="user-head">
      <img src="~assets/img/profile/user-head.png" alt="" />
    </div>
    <div class="user-log">
      <div class="login">登录/注册</div>
      <div class="tel">
        <div class="tel-icon">
          <img src="~assets/img/profile/phone.png" alt="" />
        </div>
        <div class="tel-num">暂无绑定手机号</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLogin",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.ProfileLogin {
  display: flex;
  padding: 0 20px;
}
.user-head {
  flex: 1;
  height: 100%;
  width: 100%;
  text-align: center;
}
.user-head img {
  height: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  border-radius: 50%;
}
.user-log {
  flex: 4;
  height: 100%;
  padding-top: 30px;
  margin-left: 20px;
  color: #e6e6e6;
}
.login {
  font-size: 18px;
}
.tel-icon,
.tel-num {
  display: inline-block;
  font-size: 14px;
}
.tel-icon img {
  width: 16px;
  margin-right: 2px;
  margin-left: -2px;
  vertical-align: bottom;
}
.ProfileLogin::after {
  content: "";
  height: 10px;
  width: 10px;
  margin-top: 42px;
  border: 2px solid #eee;
  border-color: #eee #eee transparent transparent;
  transform: rotate(45deg);
}
</style>
