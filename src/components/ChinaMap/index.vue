<template>
  <div class="China-map-wrap">
    <div id="ChinaMap"></div>
  </div>
</template>

<script>
import api from "../../api/useFriend";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      data: [],
    };
  },

  watch: {
    title() {
      var covidData = [];
      api.getCityNoCovData().then((res) => {
        if (this.title == "现有确诊") {
          for (let i = 0; i < res.data.newslist.length; i++) {
            let temp = res.data.newslist[i];
            let obj = {
              name: "",
              value: "",
            };
            obj.name = temp.provinceShortName;
            obj.value = temp.currentConfirmedCount;
            covidData.push(obj);
          }
        } else {
          for (let i = 0; i < res.data.newslist.length; i++) {
            let temp = res.data.newslist[i];
            let obj = {
              name: "",
              value: "",
            };
            obj.name = temp.provinceShortName;
            obj.value = temp.confirmedCount;
            covidData.push(obj);
          }
        }
        this.data = covidData;
        this.$echarts.chinaMap("ChinaMap", covidData);
      });
    },
  },

  mounted() {
    console.log(this.title);
    var covidData = [];

    api.getCityNoCovData().then((res) => {
      if (this.title == "现有确诊") {
        for (let i = 0; i < res.data.newslist.length; i++) {
          let temp = res.data.newslist[i];
          let obj = {
            name: "",
            value: "",
          };
          obj.name = temp.provinceShortName;
          obj.value = temp.currentConfirmedCount;
          covidData.push(obj);
        }
      } else {
        for (let i = 0; i < res.data.newslist.length; i++) {
          let temp = res.data.newslist[i];
          let obj = {
            name: "",
            value: "",
          };
          obj.name = temp.provinceShortName;
          obj.value = temp.confirmedCount;
          covidData.push(obj);
        }
      }

      this.data = covidData;

      this.$echarts.chinaMap("ChinaMap", covidData);
    });
  },
};
</script>

<style lang="less" scoped>
.China-map-wrap {
  width: 100%;
  height: 7rem;

  #ChinaMap {
    width: 100%;
    height: 7rem;
  }
}
</style>