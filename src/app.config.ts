export default {
  pages: ["pages/demo/index", "pages/play/index"],
  subpackages: [
    { root: "subPackages", name: "subPackages", pages: ["pages/demo/index"] },
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
    selectedColor: "#006e46",
    backgroundColor: "#fff",
    list: [
      {
        text: "3D",
        pagePath: "pages/demo/index",
        selectedIconPath:
          "./assets/images/footer/_static_memo_wechat_footers_19151604.png",
        iconPath:
          "./assets/images/footer/_static_memo_wechat_footers_19151604.png",
      },
      {
        text: "Play",
        pagePath: "pages/play/index",
        selectedIconPath:
          "./assets/images/footer/_static_memo_wechat_footers_19151604.png",
        iconPath:
          "./assets/images/footer/_static_memo_wechat_footers_19151604.png",
      },
    ],
  },
};
