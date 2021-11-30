export default {
  pages: ["pages/index/index", "pages/guoxue/index", "pages/mine/index"],
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
    color: "#36663c",
    selectedColor: "#bae8e8",
    backgroundColor: "#fff",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        selectedIconPath:
          "./assets/images/footer/https:baby_childhome-hover.png",
        iconPath: "./assets/images/footer/https:baby_childhome.png",
      },
      {
        text: "国学",
        pagePath: "pages/guoxue/index",
        selectedIconPath:
          "./assets/images/footer/https:baby_mychildbook-hover.png",
        iconPath: "./assets/images/footer/https:baby_mychildbook.png",
      },
      {
        text: "我的",
        pagePath: "pages/mine/index",
        selectedIconPath: "./assets/images/footer/https:baby_mychild-hover.png",
        iconPath: "./assets/images/footer/https:baby_mychild.png",
      },
    ],
  },
};
