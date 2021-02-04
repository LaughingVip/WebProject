<template>
  <div class="virus-summary">
    <VirusSummaryHeader title="全国疫情" />
    <div class="virus-data-desc">
      <p>数据更新至 {{ updateTime }}</p>
      <span @click="clickHandle">数据说明</span>
    </div>
    <ShowVirusData :todayCovidData="todayCovidData" />
  </div>
</template>

<script>
/**
 *
 */
import "vant/lib/dialog/style";
import { Dialog } from "vant";
import VirusSummaryHeader from "../PubTitle";
import ShowVirusData from "./showVirusData";
export default {
  components: {
    VirusSummaryHeader,
    ShowVirusData,
    [Dialog.Component.name]: Dialog.Component,
  },
  props: {
    todayCovidData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    updateTime: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    clickHandle() {
      Dialog.alert({
        title: "数据说明",
        message:
          "数据来源为国家卫健委、各省市区卫健委、各省市区政府、港澳台官方渠道公开数据；疑似病例数来自国家卫健委数据，目前为全国数据，未分省市自治区等",
      }).then(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
.virus-summary {
  padding-bottom: 0.4rem;
}
.virus-data-desc {
  width: 100%;
  padding: 0 0.32rem;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;

  p {
    opacity: 0.8;
  }

  span {
    cursor: pointer;
  }
}
</style>

