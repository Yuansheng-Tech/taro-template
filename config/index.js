const path = require('path');
const versionConfig = require('../version.config.json')
const config = {
  projectName: 'template',
  date: '2021-6-25',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    "@base": path.resolve(__dirname, '..', 'src/base'),
    // "@ysyp/ui/dist/src": path.resolve(__dirname, '../../..', 'packages/components/src'),
    // "@ysyp/utils/dist": path.resolve(__dirname, '../../..', 'packages/utils/src'),
    // "@ysyp/stores/dist": path.resolve(__dirname, '../../..', 'packages/stores/src'),
  },
  plugins: [
    '@tarojs/plugin-html',
    // [
    //   "@tarojs/plugin-mini-ci",
    //   {
    //       weapp: {
    //           appid: versionConfig.appid,
    //           privateKeyPath: versionConfig.privateKeyPath,
    //       },
    //       // tt: {
    //       //   email: "字节小程序邮箱",
    //       //   password: "字节小程序密码"
    //       // },
    //       // alipay: {
    //       //   appId: "支付宝小程序appId",
    //       //   toolId: "工具id",
    //       //   privateKeyPath: "密钥文件相对项目根目录的相对路径，例如 key/pkcs8-private-pem"
    //       // },
    //       // swan: {
    //       //   token: "鉴权需要的token令牌"
    //       // },
    //       // 版本号
    //       version: versionConfig.version,
    //       // 版本发布描述
    //       desc: versionConfig.desc
    //   }
    // ],
  ],
  defineConstants: {
    LOCATION_APIKEY: JSON.stringify('3WHBZ-RQEC4-2O5UY-DISRN-4KQFH-5IBR6')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    webpackChain (chain, webpack) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);
      
      chain.merge({
        optimization: {
          sideEffects: true
        }
      });
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
