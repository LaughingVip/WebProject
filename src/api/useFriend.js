import axios from "../utils/useFriendHttpRequrest";

const base = {
  baseUrl: "/api",
  citynCoV: "/apis/dst/ncov/spreadQuery", //抗击疫情
};

const api = {
  //获取省份以及城市疫情数据
  getCityNoCovData() {
    return axios.get(base.baseUrl + base.citynCoV);
  },
};

export default api;
