<template>
  <div class="lenged-desc">
    <div class="left">{{ info }}</div>
    <div class="right">
      <div v-for="(item, index) in lenged" :key="index">
        <span :style="{ background: item.color }"></span>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lenged: {
      type: Array,
      default: () => [],
    },
    info: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.lenged-desc {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.32rem;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  .left {
    width: 2rem;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      align-items: center;
      margin-right: 0.2rem;
      span {
        display: block;
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>