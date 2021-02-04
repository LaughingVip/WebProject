<template>
  <li :class="isActive ? 'active' : ''" @click="indexToParent(index)">
    {{ this.label }}
  </li>
</template>

<script>
export default {
  name: "Tab",
  props: {
    label: {
      type: String,
      default: "",
    },
    index: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    isActive() {
      return this.index === this.$parent.currentIndex;
    },
  },
  methods: {
    indexToParent(index) {
      this.$parent.fromSonGetIndex(index);
    },
  },
  mounted() {
    this.$parent.contents.push(this);
  },
};
</script>

<style lang="less" scoped>
.active {
  color: rgb(255, 106, 87);
  font-weight: 700;
  background-color: #fff !important;
  border: 1px solid rgb(255, 106, 87) !important;
}
</style>