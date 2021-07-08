export default [
  {
    name: "YYTabBar",
    text: "标签栏",
    icon: "",
    data: {
      tabList: [
        { title: "待支付", value: "0" },
        { title: "已完成", value: "1" },
        { title: "待完成", value: "2" },
      ],
      onClick: function onClick(data) {
        console.log("onClick data", data);
      },
    },
  },
  {
    name: "YYGoodsGrid",
    text: "商品栅格",
    icon: "",
    data: {
      url: "",
      hasBorder: true,
      borderRadius: "0px",
      backgroundColor: "#eee",
      type: "imageLeft",
      inline: false,
      columnNum: "1",
      imageMode: "scaleToFill",
      imageWidth: "160px",
      imageHeight: "80px",
      itemPadding: "5px",
      itemMargin: "5px",
      textAlign: "left",
      cartImage: "",
      onClick: function onClick(item, index) {
        console.log("item index", item, index);
      },
      data: [
        {
          image: "http://localhost:3333/static/memo/files/hb10.png",
          value: "领取中心",
          url: "https://yuanshengyoupin.com",
          price: 11,
          originalPrice: 12,
        },
        {
          image: "http://localhost:3333/static/memo/files/hb10.png",
          value: "找折扣",
          url: "https://yuanshengyoupin.com",
          price: 11,
          originalPrice: 12,
        },
        {
          image: "http://localhost:3333/static/memo/files/hb10.png",
          value: "领会员",
          price: 11,
          originalPrice: 0,
        },
        {
          image: "http://localhost:3333/static/memo/files/hb10.png",
          value: "领取中心",
          url: "https://yuanshengyoupin.com",
          price: 11,
          originalPrice: 12,
        },
      ],
    },
  },
  {
    name: "YYLoadMore",
    text: "加载更多",
    icon: "",
    data: {
      height: "40px",
      moreText: "查看更多",
      loadingText: "加载中",
      noMoreText: "没有更多",
      moreBtnStyle: "",
      noMoreTextStyle: "",
    },
  },
];
