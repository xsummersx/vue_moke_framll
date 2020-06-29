module.exports = {
  lintOnSave: false, //忽略Eslint
  publicPath: '',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/mock/': {
        target: 'http://localhost:8080',
        ws: false,
        changeOrigin: false,
      },
    },
    // proxy: {
    //   '/proxy/': {
    //     target: 'https://www.tianqiapi.com', //天气接口地址
    //     secure: false, // false为http访问，true为https访问
    //     changeOrigin: true, // 跨域访问设置，true代表跨域
    //     pathRewrite: {
    //       // 路径改写规则
    //       '^/proxy': '', // 以/proxy/为开头的改写为''
    //     },
    //   },
    // },
  },
}
