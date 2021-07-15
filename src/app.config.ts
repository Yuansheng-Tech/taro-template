export default {
  pages: [
    "pages/demo/index",
  ],
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
    color: "#424143",
    selectedColor: "#57adad",
    backgroundColor: "#fff",
    list: [
      {
        text: "鞋元素",
        pagePath: "pages/index/index",
        selectedIconPath:
          "./assets/images/footer/_static_memo_wechat_footers_shoe8-logo.jpeg",
        iconPath:
          "./assets/images/footer/_static_memo_wechat_footers_shoe8-logo.jpeg",
      },
      {
        text: "介绍",
        pagePath: "pages/about/index",
        selectedIconPath:
          "./assets/images/footer/_static_memo_wechat_footers_shoe.png",
        iconPath:
          "./assets/images/footer/_static_memo_wechat_footers_shoe_unselect.png",
      },
      {
        text: "订单",
        pagePath: "pages/menu/index",
        selectedIconPath:
          "./assets/images/footer/_static_memo_wechat_footers_shoe8_order.png",
        iconPath:
          "./assets/images/footer/_static_memo_wechat_footers_shoe8_order_unselect.png",
      },
      {
        text: "我的",
        pagePath: "pages/mine/index",
        selectedIconPath:
          "./assets/images/footer/_static_memo_wechat_footers__footer_order_select.png",
        iconPath:
          "./assets/images/footer/_static_memo_wechat_footers__footer_order.png",
      },
    ],
  },
};
