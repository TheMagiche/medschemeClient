const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API_URL,
        ws: true,
        changeOrigin: true
      }
    }
  },
  outputDir: path.resolve(__dirname, "../public")
};
