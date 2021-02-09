<template>
  <div class="profile">
    <ProfileNavBar></ProfileNavBar>
    <ProfileLogin class="login"></ProfileLogin>
    <ProfileUserAccount></ProfileUserAccount>
    <ProfileAboutUser></ProfileAboutUser>
    <ProfileAboutMall></ProfileAboutMall>
  </div>
</template>

<script>
import ProfileNavBar from "./childComps/ProfileNavBar";
import ProfileLogin from "./childComps/ProfileLogin";
import ProfileUserAccount from "./childComps/ProfileUserAccount";
import ProfileAboutUser from "./childComps/ProfileAboutUser";
import ProfileAboutMall from "./childComps/ProfileAboutMall";

export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    ProfileLogin,
    ProfileUserAccount,
    ProfileAboutUser,
    ProfileAboutMall,
  },
};
</script>

<style scoped>
.profile {
  background-color: #fff;
  height: 100vh;
}
.login {
  height: 100px;
  background-color: #1296db;
}
</style>