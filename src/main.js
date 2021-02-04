import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./routes";
import Tabs from "./components/Tabs";

import "../node_modules/echarts/map/js/china";

import { install } from "./plugins/myEcharts";
import { barEcharts } from "./plugins/myBarEcharts";

import "./assets/js/phone";
import "./assets/css/common.css";
import "./assets/css/mapTooltip.css";

Vue.config.productionTip = false;
Vue.use(Tabs);
Vue.use(install);
Vue.use(barEcharts);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
