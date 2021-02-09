<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  /* 同时设置左右位置，可以铺满整个宽度 */
  left: 0;
  right: 0;
  height: 49px;
  /* line-height: 49px; */
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(246, 246, 246, 0.6);
}
</style>