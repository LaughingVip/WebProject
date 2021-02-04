module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.yonyoucloud.com",
        changeOrigin: true,
        pathRewrite: {
          // pathRewrite 重写路径
          "^/api": "",
        },
      },
    },
  },
};
