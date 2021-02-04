<template>
  <div class="pub-title">
    <p>
      <i></i>
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../../assets/less/variable.less");
.pub-title {
  padding: 0.32rem;
  background-color: #fff;
  p {
    font-size: 0.34rem;

    i {
      display: inline-block;
      width: 0.08rem;
      height: 0.44rem;
      margin-right: 0.06rem;
      vertical-align: middle;
      background: @baseColor;
    }
  }
}
</style>