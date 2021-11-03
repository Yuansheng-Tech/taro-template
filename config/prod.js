var outputRoot = ''
switch(process.env.TARO_ENV){
  case 'weapp':
    outputRoot= 'build'
    break
  case 'h5':
    outputRoot='build_h5'
    break
  case 'alipay':
    outputRoot='build_alipay'
    break
  case 'tt':
    outputRoot= 'build_tt'
    break
  case 'kwai':
    outputRoot= 'build_kwai'
    break
  case 'rn':
    outputRoot= 'build_rn'
    break
  default:
    outputRoot= 'build'
}

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  outputRoot,
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
