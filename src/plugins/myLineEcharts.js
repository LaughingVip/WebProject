import echarts from "echarts";

export const lineEcharts = (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $lineEcharts: {
      get() {
        return {};
      },
    },
  });
};
