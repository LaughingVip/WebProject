import axios from "../utils/request";

const base = {
  baseUrl: "http://api.tianapi.com",
  ncov: "/txapi/ncov/index", //抗击疫情

  other:
    "https://www.tianqiapi.com/api?version=epidemic&appid=23035354&appsecret=8YvlPNrz",
};

const api = {
  // 获取抗击疫情数据 --- 包含 新冠病毒信息，疫情数据
  getNcovData(params) {
    return axios.get(base.baseUrl + base.ncov, {
      params,
    });
  },
};

export default api;
