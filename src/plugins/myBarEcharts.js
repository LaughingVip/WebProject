import echarts from "echarts";

export const barEcharts = (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $barEcharts: {
      get() {
        return {
          barCharts: function(id) {
            var dom = document.getElementById(id);
            var myChart = echarts.init(dom);
            var option = {
              xAxis: {
                // data: xData,
                nameRotate: 45,
              },
              yAxis: {
                axisLine: {
                  show: false,
                },
              },

              dataZoom: [
                {
                  type: "slider", //图表下方的伸缩条
                  show: true, //是否显示
                  realtime: true, //拖动时，是否实时更新系列的
                  start: 0, //伸缩条开始位置（1-100），可以随时
                  end: 30, //伸缩条结束位置（1-100），可以随时
                },
              ],
              series: [
                {
                  name: "境外输入",
                  type: "bar",
                  stack: "one",
                  barWidth: "20%",
                  itemStyle: {
                    color: "#EC4C31",
                  },
                  data: [1, 2, 3, 4, 5, 6, 7, 8],
                },
                {
                  name: "本土新增",
                  type: "bar",
                  stack: "one",
                  barWidth: "20%",
                  itemStyle: {
                    color: "#5CACE6",
                  },

                  data: [1, 2, 3, 4, 5, 6, 7, 8],
                },
              ],
            };

            myChart.setOption(option);
          },
        };
      },
    },
  });
};
