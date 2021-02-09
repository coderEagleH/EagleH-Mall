<template>
  <div class="ProfileNavBar">
    <NavBar>
      <div class="title" slot="center">我的</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "ProfileNavBar",
  data() {
    return {};
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.ProfileNavBar {
  background-color: #1296db;
  font-weight: 700;
  color: #fff;
}
</style>
