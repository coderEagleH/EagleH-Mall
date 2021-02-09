<template>
  <div class="back-top">↑</div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  position: absolute;
  z-index: 9;
  bottom: 55px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  color: #1296db;
  font-weight: 700;
  /* border: 1px solid #1296db; */
}
</style>