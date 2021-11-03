export default {
  pages: [
    "pages/index/index",
    "pages/help/index",
    "pages/job/detail/2",
    "pages/job/apply/success",
    "pages/job/detail/1",
    "pages/job/detail/3",
    "pages/job/apply",
    "pages/job/detail/4",
    "pages/job/detail/5",
    "pages/job/detail/6",
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
    color: "#cdcdcd",
    selectedColor: "#1296db",
    backgroundColor: "#fff",
    list: [
      {
        text: "梦企传媒",
        pagePath: "pages/index/index",
        selectedIconPath: "./assets/images/footer/https:files_home2.png",
        iconPath: "./assets/images/footer/https:files_home1.png",
      },
      {
        text: "帮助",
        pagePath: "pages/help/index",
        selectedIconPath: "./assets/images/footer/https:files_help2.png",
        iconPath: "./assets/images/footer/https:files_help1.png",
      },
    ],
  },
};
