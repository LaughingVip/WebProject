import echarts from "echarts";

export const install = (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $echarts: {
      get() {
        return {
          chinaMap: (id, data) => {
            var dom = document.getElementById(id);
            var myChart = echarts.init(dom);
            var option = {
              tooltip: {
                triggerOn: "click",
                enterable: true,
                formatter: (data) => {
                  return `<div class='map-tooltip'>
                                          <div class='map-tooltip-left'>
                                            <p>地区：${data.name}</p>
                                            <p>确诊：${data.value}</p>
                                          </div>
                                          <div class='map-tooltip-right'>
                                            <a href="/#/chinaCity/${data.name}">详情 &gt;</a>
                                          </div>
                                      </div>`;
                },
                textStyle: {
                  fontSize: 8,
                  color: "#000",
                },
              },
              visualMap: [
                {
                  type: "piecewise",
                  pieces: [
                    { value: 0, color: "#fff", itemSymbol: "rect" },
                    { min: 1, max: 9, label: "1-9", color: "#FFE5DB" },
                    { min: 10, max: 99, label: "10-99", color: "#FF9985" },
                    { min: 100, max: 9999, label: "100-999", color: "#E64546" },
                    { min: 10000, label: ">=10000", color: "#B80909" },
                  ],
                },
              ],
              series: [
                {
                  name: "中国地图",
                  type: "map",
                  map: "china",
                  roam: true,
                  zoom: 1.2,
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: "rgba(0,0,0,1)",
                        fontSize: 9,
                      },
                    },
                  },
                  itemStyle: {
                    normal: {
                      areaColor: "#fff",
                      borderColor: "#CECECE",
                    },
                    emphasis: {
                      areaColor: "#C7FFFD",
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 5,
                      borderWidth: 0,
                      shadowColor: "rgba(0, 0, 0, 0.2)",
                    },
                  },
                  data,
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
