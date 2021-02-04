<template>
  <div class="compare-yes">
    <CompareYesHeader title="昨日新增分布" />
    <Lenged :lenged="lenged" :info="info" />
    <div class="data-chats">
      <div id="charts"></div>
    </div>
    <p class="data-info">该数据不包含港澳台地区的新增确诊病例</p>
  </div>
</template>

<script>
import CompareYesHeader from "../../../components/PubTitle";
import Lenged from "../../../components/ChartsLenged";
export default {
  components: {
    CompareYesHeader,
    Lenged,
  },
  data() {
    return {
      lenged: [
        { id: 1001, title: "本土新增", color: "#ff6700" },
        { id: 1002, title: "境外输入", color: "pink" },
      ],
      info: "昨日新增分布",
    };
  },
  mounted() {
    this.$barEcharts.barCharts("charts");
  },
};
</script>

<style lang="less" scoped>
.compare-yes {
  margin-bottom: 0.2rem;
  .data-chats {
    width: 100%;
    height: 4rem;
    background-color: #bfa;
    #charts {
      width: 100%;
      height: 4rem;
      box-sizing: border-box;
    }
  }

  .data-info {
    padding: 0 0.32rem;
  }
}
</style>