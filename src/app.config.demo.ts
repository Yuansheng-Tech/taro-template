let pages = [
]

export const subpackages = [
  {
    "root": "subPackages",
    "name": "subPackages",
    "pages": [
      'pages/audio/index',
      'pages/html/index',
      'pages/webview/index',
      'pages/video/index'
    ]
  }
]
if (process.env.TARO_ENV === 'h5') {
  pages = [
    ...pages
  ]
}
if (process.env.TARO_ENV === 'weapp') {
  pages = [
    ...pages
  ]
}

const appConfig = {
  pages,
  subpackages
}

Object.assign(appConfig, {
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "",
    "navigationBarTextStyle": "black"
  },
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  },
  "tabBar": {
    "color": "#6B6B6B",
    "selectedColor": "#006e46",
    "backgroundColor": "#fff",
    "list": [
    ]
  }
})

export default appConfig;