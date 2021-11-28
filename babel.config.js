/* eslint-disable import/no-commonjs */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  // plugins: [
    // [
    //   'import',
    //   {
    //     libraryName: '@ysyp/ui',
    //     libraryDirectory: 'dist',
    //     camel2DashComponentName: false
    //   },
    //   'import @ysyp/ui'
    // ],
    // [
    //   'import',
    //   {
    //     libraryName: '@ysyp/stores',
    //     libraryDirectory: 'dist',
    //     camel2DashComponentName: false
    //   },
    //   'import @ysyp/stores'
    // ],
    // ['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }, 'import lodash'],
    // [
    //   'import',
    //   { libraryName: 'react-use', libraryDirectory: 'esm', camel2DashComponentName: false },
    //   'import react-use',
    // ],
  // ]
}
