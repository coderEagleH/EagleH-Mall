<template>
  <div class="CheckBox">
    <div class="checked" v-if="isChecked">
      <img
        :style="{ width: checkBoxSize + 'px' }"
        src="~assets/img/checkBox/checked.png"
        alt=""
      />
      <slot name="checked"></slot>
    </div>
    <div class="checked" v-else>
      <img
        :style="{ width: checkBoxSize + 'px' }"
        src="~assets/img/checkBox/unchecked.png"
        alt=""
      />
      <slot name="unchecked"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean | Number,
      default: false,
    },
    checkBoxSize: {
      type: Number,
      default: 20,
    },
  },
  created() {},
  methods: {},
  components: {},
};
</script>

<style scoped>
img {
  vertical-align: middle;
}
</style>
