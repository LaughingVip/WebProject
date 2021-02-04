<template>
  <div class="pub-header">
    <p class="title">新型冠状病毒肺炎</p>
    <h1>疫情实时大数据报告</h1>
    <p class="scan-num">共 8,580,797,187 人次已浏览</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.pub-header {
  height: 3rem;
  background: url("../../assets/images/bg-header.jpg") no-repeat center center;
  background-size: cover;
  padding: 1rem 0.5rem;
  color: white;
  letter-spacing: 2px;

  .title {
    opacity: 0.8;
    margin-bottom: 0.05rem;
  }

  h1 {
    font-size: 0.4rem;
    position: relative;

    &::after {
      content: "疫情实时大数据报告";
      position: absolute;
      left: 0;
      top: 0;
      color: #afdade;
      -webkit-mask-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(rgba(0, 0, 255, 0)),
        to(#afdade)
      );
    }
  }

  .scan-num {
    display: inline-block;
    padding: 0.02rem;
    background-color: rgba(9, 149, 167, 0.897);
    font-size: 0.2rem;
  }
}
</style>