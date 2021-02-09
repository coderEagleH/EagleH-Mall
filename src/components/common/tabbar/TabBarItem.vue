<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle()"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
    activeStyle() {
      return this.isActive ? { color: "#1296db" } : {};
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  color: #cdcdcd;
  font-size: 14px;
}

.tab-bar-item img {
  width: 20px;
  margin-top: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>