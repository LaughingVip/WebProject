<template>
  <div class="covid-infos">
    <CovidInfoTitle title="病毒信息" />
    <ul class="covid-info">
      <li v-for="(info, index) in data" :key="index">
        {{ info }}
      </li>
    </ul>
  </div>
</template>

<script>
import CovidInfoTitle from "../../../components/PubTitle";
export default {
  components: {
    CovidInfoTitle,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.covid-infos {
  width: 100%;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #f1f1f1;

  .covid-info {
    padding: 0 0.32rem;

    li {
      line-height: 0.5rem;
      text-align: justify;
      &::before {
        content: "";
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
        background: #0ea6ac;
        vertical-align: middle;
        border-radius: 50%;
        margin-right: 0.05rem;
        margin-top: -0.08rem;
      }
    }
  }
}
</style>