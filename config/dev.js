var outputRoot = ''
switch(process.env.TARO_ENV){
  case 'weapp':
    outputRoot= 'dist'
    break
  case 'h5':
    outputRoot='dist_h5'
    break
  case 'alipay':
    outputRoot='dist_alipay'
    break
  case 'tt':
    outputRoot= 'dist_tt'
    break
  case 'rn':
    outputRoot= 'build_rn'
    break
  default:
    outputRoot= 'dist'
}

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  outputRoot,
  mini: {},
  h5: {}
}
