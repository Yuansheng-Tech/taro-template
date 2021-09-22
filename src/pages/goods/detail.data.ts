export default [
  {
    name: "YYSwiper",
    text: "轮播图",
    icon: "",
    data: {
      vertical: false,
      items: [
        {
          url: "https://yuanshengyoupin.com",
          image:
            "https://file.biji77.com/goods/%E9%85%B8%E5%A5%B6%E8%8A%92%E6%9E%9C%E7%87%95%E9%BA%A6%E7%9B%92%E5%AD%901.jpg",
          imageStyle: {},
        },
        {
          url: "https://yuanshengyoupin.com",
          image:
            "https://file.biji77.com/goods/%E9%85%B8%E5%A5%B6%E8%8A%92%E6%9E%9C%E7%87%95%E9%BA%A6%E7%9B%92%E5%AD%901.jpg",
          imageStyle: {},
        },
      ],
    },
  },
  {
    name: "YYCartGood",
    text: "单个商品",
    icon: "",
    data: {
      image:
        "https://file.biji77.com/goods/%E9%85%B8%E5%A5%B6%E8%8A%92%E6%9E%9C%E7%87%95%E9%BA%A6%E7%9B%92%E5%AD%901.jpg",
      value: "领取中心",
      url: "https://yuanshengyoupin.com",
      price: 11,
      originalPrice: 12,
      borderRadius: "0px",
      imageMode: "scaleToFill",
      imageWidth: "100px",
      imageHeight: "100%",
      itemPadding: "10px",
      itemMargin: "0px",
    },
  },
  {
    name: "YYCartAdd",
    text: "添加按钮",
    icon: "",
    data: {
      title: "数量",
      subTitle: "一件起购",
      valueNum: 1,
      stock: 10,
      step: 1,
      min: 1,
      onGetValue: function onGetValue(val) {
        console.log("onGetValue", val);
      },
    },
  },
  {
    name: "YYHtml",
    text: "富文本",
    icon: "",
    data: {
      type: "text",
      url: "",
      text: "<span>aaaaaaaaaaaaaaaaaaaaaaa</span>",
      height: "300px",
      fullScreen: false,
    },
  },
  {
    name: "YYCartBuy",
    text: "加购按钮",
    icon: "",
    data: {
      addCartText: "加入购物车",
      buyText: "立即购买",
      btnRadius: "40px",
      btnMargin: "10px",
      onAddCart: function onAddCart(e) {
        console.log("e onAddCart", e);
      },
      onBuy: function onBuy(e) {
        console.log("e onBuy", e);
      },
    },
  },
];
