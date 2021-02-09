<template>
  <div class="Item">
    <div class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.Item {
  display: flex;
  height: 5vh;
  padding: 0 20px;
  border-bottom: 1px dotted #eee;
  background-color: #fff;
  line-height: 5vh;
}
.item-icon {
  flex: 1;
  height: 100%;
  text-align: center;
}
.item-icon img {
  margin-top: 0.5vh;
  height: 60%;
}
.item-text {
  flex: 9;
  font-size: 14px;
  padding-left: 10px;
}
</style>
