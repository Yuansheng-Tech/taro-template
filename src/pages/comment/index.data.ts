export default [
  {
    name: "YYShopItemTop",
    text: "店铺详情头部",
    icon: "",
    data: {
      backgroundColor: "#fff",
      color: "#000",
      id: "1",
      icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
      dilivery_start_price: "20",
      dilivery_price: "1",
      distanceTime: 30,
      notice: "关闭店铺了",
    },
    children: [],
  },
  {
    name: "YYSpaceline",
    text: "占位线",
    icon: "",
    data: {
      content: "",
      color: "#ed3f14",
      fontSize: "16px",
      height: "5px",
      backgroundColor: "#eee",
      textAlign: "center",
    },
    children: [],
  },
  {
    name: "YYTabBar",
    text: "标签栏",
    icon: "",
    data: {
      defaultValue: "1",
      tabList: [
        { title: "商品", value: "0", url: "/pages/goods/index" },
        { title: "评论", value: "1", url: "/pages/comment/index" },
        { title: "店铺", value: "2", url: "/pages/shop/detail" },
      ],
    },
    children: [],
  },
];
