<template>
  <div>
    <Content :contents="contents" />
    <ul class="tab-bar">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import Content from "./Content";
export default {
  name: "Tabs",
  components: {
    Content,
  },
  data() {
    return {
      contents: [],
    };
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    fromSonGetIndex(index) {
      this.$emit("onIndex", index);
    },
  },
};
</script>
<style lang="less" scoped>
.tab-bar {
  width: 100%;
  height: 0.8rem;
  padding: 0 0.32rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.2rem;
  li {
    width: 25%;
    height: 0.7rem;
    line-height: 0.7rem;
    background-color: #f1f1f1;
    text-align: center;
    letter-spacing: 1px;
    border: 2px solid transparent;
  }
}
.active {
  background-color: #fff;
  border-color: 2px solid rgb(232, 49, 50) !important;
}
</style>