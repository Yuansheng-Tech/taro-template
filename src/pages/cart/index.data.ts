export default [
  {
    name: "YYCartTitle",
    text: "购物车店铺标题",
    icon: "https://file.yuanshengyoupin.com/files/titleSub.png",
    data: {
      icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
      title: "沙拉店铺",
      subTitle: "",
      more: "〉",
      url: "https://yuanshengyoupin.com",
      fontSize: "14px",
      padding: "10px",
      deleteIcon: true,
    },
    children: [],
  },
  {
    name: "YYCartList",
    text: "购物车列表",
    icon: "",
    data: {
      list: [
        {
          icon: "https://file.yuanshengyoupin.com/files/hb10.png",
          name: "商品1",
          summary: "商品1",
          des: [],
          orderPrice: 10,
          num: 10,
          seleted: true,
        },
        {
          icon: "https://file.yuanshengyoupin.com/files/hb10.png",
          name: "商品2",
          summary: "商品2",
          des: [],
          orderPrice: 12,
          num: 1,
          seleted: false,
        },
      ],
    },
    children: [],
  },
  {
    name: "YYList",
    text: "列表",
    icon: "https://file.yuanshengyoupin.com/files/List.png",
    data: {
      hasBorder: false,
      data: [
        { title: "餐盒费", arrow: "", extraText: "¥1.3", note: "", thumb: "" },
        {
          isSwitch: false,
          title: "新用户优惠",
          arrow: "",
          extraText: "-¥1",
          note: "",
          thumb: "",
        },
        { title: "配送费", arrow: "", extraText: "¥1.3", note: "", thumb: "" },
      ],
    },
    children: [],
  },
  {
    name: "YYCartSumBuy",
    text: "购物车结算",
    icon: "",
    data: {
      delivery_price: 10,
      total_price: 22,
      buyText: "去凑单",
      onAddCart: function onAddCart(e) {
        console.log("e onAddCart", e);
      },
      onBuy: function onBuy(e) {
        console.log("e onBuy", e);
      },
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
      height: "10px",
      backgroundColor: "#eee",
      textAlign: "center",
    },
    children: [],
  },
  {
    name: "YYCartTitle",
    text: "购物车店铺标题1",
    icon: "https://file.yuanshengyoupin.com/files/titleSub.png",
    data: {
      icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
      title: "沙拉店铺2",
      subTitle: "",
      more: "〉",
      url: "https://yuanshengyoupin.com",
      fontSize: "14px",
      padding: "10px",
      deleteIcon: true,
    },
    children: [],
  },
  {
    name: "YYCartList",
    text: "购物车列表",
    icon: "",
    data: {
      list: [
        {
          icon: "https://file.yuanshengyoupin.com/files/hb10.png",
          name: "商品1",
          summary: "商品1",
          des: [],
          orderPrice: 10,
          num: 10,
          seleted: true,
        },
        {
          icon: "https://file.yuanshengyoupin.com/files/hb10.png",
          name: "商品2",
          summary: "商品2",
          des: [],
          orderPrice: 12,
          num: 1,
          seleted: false,
        },
      ],
    },
    children: [],
  },
  {
    name: "YYList",
    text: "列表",
    icon: "https://file.yuanshengyoupin.com/files/List.png",
    data: {
      hasBorder: false,
      data: [
        { title: "餐盒费", arrow: "", extraText: "¥1.3", note: "", thumb: "" },
        {
          isSwitch: false,
          title: "新用户优惠",
          arrow: "",
          extraText: "-¥1",
          note: "",
          thumb: "",
        },
        { title: "配送费", arrow: "", extraText: "¥1.3", note: "", thumb: "" },
      ],
    },
    children: [],
  },
  {
    name: "YYCartSumBuy",
    text: "购物车结算",
    icon: "",
    data: {
      delivery_price: 10,
      total_price: 22,
      buyText: "去凑单",
      onAddCart: function onAddCart(e) {
        console.log("e onAddCart", e);
      },
      onBuy: function onBuy(e) {
        console.log("e onBuy", e);
      },
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
      height: "10px",
      backgroundColor: "#eee",
      textAlign: "center",
    },
    children: [],
  },
];
