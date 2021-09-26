export default {
  pages: [
    "pages/index/index",
    "pages/mine/index",
    "pages/dilivery/floor",
    "pages/cart/index",
    "pages/search/index",
    "pages/dilivery/index",
    "pages/dilivery/basket",
    "pages/login/index",
    "pages/comment/index",
    "pages/goods/index",
    "pages/shop/detail",
    "pages/shop/index",
    "pages/location/index",
  ],
  subpackages: [
    {
      root: "subPackages",
      name: "subPackages",
      pages: [
        "pages/audio/index",
        "pages/html/index",
        "pages/webview/index",
        "pages/video/index",
      ],
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "",
    navigationBarTextStyle: "black",
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
  tabBar: {
    color: "#ffd803",
    selectedColor: " #006e46",
    backgroundColor: "#fff",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        selectedIconPath:
          "./assets/images/footer/http:static_memo_wechat_footers_19151604.png",
        iconPath:
          "./assets/images/footer/http:static_memo_wechat_footers_19151604.png",
      },
      {
        text: "我的",
        pagePath: "pages/mine/index",
        selectedIconPath:
          "./assets/images/footer/http:static_memo_wechat_footers_19151604.png",
        iconPath:
          "./assets/images/footer/http:static_memo_wechat_footers_19151604.png",
      },
    ],
  },
};
