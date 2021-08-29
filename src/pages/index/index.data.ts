export default [
  {
    name: "YYSwiper",
    text: "轮播图",
    icon: "http://localhost:3333/static/memo/files/banner.png",
    data: {
      vertical: false,
      items: [
        {
          url: "https://yuanshengyoupin.com",
          image: "http://localhost:3333/static/memo/files/hb10.png",
          imageStyle: {},
        },
        {
          url: "https://yuanshengyoupin.com",
          image: "http://localhost:3333/static/memo/files/hb10.png",
          imageStyle: {},
        },
      ],
    },
    children: [],
  },
  {
    name: "YYLoadMoreGoodsGrid",
    text: "商品栅格（loadmore）",
    icon: "http://localhost:3333/static/memo/files/goodGrid.png",
    data: {
      goodUrl: "/goods",
      skip: 0,
      take: 10,
      hasBorder: true,
      borderRadius: "0px",
      backgroundColor: "#fff",
      type: "imageLeft",
      inline: false,
      columnNum: 1,
      imageMode: "scaleToFill",
      imageWidth: "100px",
      imageHeight: "100px",
      itemPadding: "5px",
      itemMargin: "5px",
      textAlign: "left",
      cartImage: "",
      onClick: function onClick(item, index) {
        console.log("item index", item, index);
      },
      data: [
        {
          id: "xxx1",
          icon: "http://localhost:3333/static/memo/files/hb10.png",
          name: "领取中心",
          price_min: 11,
          original_price: 12,
        },
        {
          id: "xxx2",
          icon: "http://localhost:3333/static/memo/files/hb10.png",
          name: "找折扣",
          url: "https://yuanshengyoupin.com",
          price_min: 11,
          original_price: 12,
        },
        {
          id: "xxx3",
          icon: "http://localhost:3333/static/memo/files/hb10.png",
          name: "领会员",
          price_min: 11,
          original_price: 0,
        },
        {
          id: "xxx4",
          icon: "http://localhost:3333/static/memo/files/hb10.png",
          name: "新品首发",
          price_min: 0,
          original_price: 0,
        },
      ],
    },
    children: [],
  },
];
