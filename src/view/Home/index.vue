<template>
  <div>
    <HomeHeader />
    <HomeCovidInfo :data="covidInfo" />
    <NationalVirusSummary
      :todayCovidData="todayCovidData"
      :updateTime="updateTime"
    />
    <Tabs :currentIndex="currentIndex" @onIndex="changeIndexHandle">
      <Tab index="1" label="现有确诊">
        <ChinaMap title="现有确诊" />
      </Tab>
      <Tab index="2" label="累计确诊">
        <ChinaMap title="累计确诊" />
      </Tab>
    </Tabs>
    <CompareYesData />
  </div>
</template>

<script>
import HomeHeader from "../../components/PubHeader";
import HomeCovidInfo from "./CovidInfo";
import NationalVirusSummary from "../../components/VirusSummary";
import ChinaMap from "../../components/ChinaMap";
import CompareYesData from "./CompareYesData";
import api from "../../api";
import dateFormatting from "../../utils/dateFormatting";
import { KEY } from "../../constant";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeCovidInfo,
    NationalVirusSummary,
    ChinaMap,
    CompareYesData,
  },
  data() {
    return {
      covidInfo: [], //病毒信息
      todayCovidData: [
        {
          title: "现有确诊",
          count: 0,
          countIncr: 0,
          color: "#ff6a57",
        },
        {
          title: "无症状",
          count: 0,
          countIncr: 0,
          color: "#e86d48",
        },
        {
          title: "现有疑似",
          count: 0,
          countIncr: 0,
          color: "#ec9217",
        },
        {
          title: "现有重症",
          count: 0,
          countIncr: 0,
          color: "#545499",
        },
        {
          title: "累计确诊",
          count: 0,
          countIncr: 0,
          color: "#e83132",
        },
        {
          title: "境外输入",
          count: 0,
          countIncr: 0,
          color: "#476da0",
        },
        {
          title: "累计治愈",
          count: 0,
          countIncr: 0,
          color: "#10aeb5",
        },
        {
          title: "累计死亡",
          count: 0,
          countIncr: 0,
          color: "#4d5054",
        },
      ],
      updateTime: "",
      currentIndex: "1",
    };
  },

  methods: {
    changeIndexHandle(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    api
      .getNcovData({
        key: KEY,
      })
      .then((res) => {
        if (res.status === 200) {
          //1. 添加病毒信息
          let covidDesc = res.data.newslist[0].desc;
          this.covidInfo.push(covidDesc.note1);
          this.covidInfo.push(covidDesc.note2);
          this.covidInfo.push(covidDesc.note3);
          this.covidInfo.push(covidDesc.remark1);
          this.covidInfo.push(covidDesc.remark2);
          this.covidInfo.push(covidDesc.remark3);

          // 2. 添加全国疫情数据
          const {
            confirmedCount,
            confirmedIncr,
            curedCount,
            curedIncr,
            currentConfirmedCount,
            currentConfirmedIncr,
            deadCount,
            deadIncr,
            modifyTime,
            seriousCount,
            seriousIncr,
            suspectedCount,
            suspectedIncr,
          } = res.data.newslist[0].desc;

          this.updateTime = dateFormatting(modifyTime);

          this.todayCovidData[0].count = currentConfirmedCount;
          this.todayCovidData[0].countIncr = currentConfirmedIncr;

          this.todayCovidData[1].count = 0;
          this.todayCovidData[1].countIncr = 0;

          this.todayCovidData[2].count = suspectedCount;
          this.todayCovidData[2].countIncr = suspectedIncr;

          this.todayCovidData[3].count = seriousCount;
          this.todayCovidData[3].countIncr = seriousIncr;

          this.todayCovidData[4].count = confirmedCount;
          this.todayCovidData[4].countIncr = confirmedIncr;

          this.todayCovidData[5].count = 0;
          this.todayCovidData[5].countIncr = 0;

          this.todayCovidData[6].count = curedCount;
          this.todayCovidData[6].countIncr = curedIncr;

          this.todayCovidData[7].count = deadCount;
          this.todayCovidData[7].countIncr = deadIncr;
        }
      });
  },
};
</script>

<style>
</style>