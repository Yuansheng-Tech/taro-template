export default [
  {
    name: "YYSwiper",
    text: "轮播图",
    icon: "",
    data: {
      vertical: false,
      items: [
        {
          url: "/pages/event/index",
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
  },
  {
    name: "YYContact",
    text: "联系",
    icon: "",
    data: {
      logo: "https://file.biji77.com/wechat/icon/logo_index.png",
      notice:
        "10点至20点营业；店长电话18986291021(微信同 申请加入福利群更多优惠)",
      phone: "17610340225",
      telImage: "https://file.biji77.com/wechat/icon/tel.png",
      wxImage: "https://file.biji77.com/files/wx_share.png",
      margin: "0",
      borderRadius: "0px",
    },
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
  },
  {
    name: "YYLocationSwitch",
    text: "切换店铺",
    icon: "",
    data: {
      margin: "0",
      borderRadius: "0px",
      locationImage: "https://file.biji77.com/wechat/icon/location.png",
      shop: { name: "Shop Name", status: "营业中", distanceSpace: 10 },
      address: {
        area: "湖北",
        city: "武汉",
        full_address: "江夏区藏龙岛",
        contacts: "付引",
        phone: "17610340225",
      },
      buttonHide: false,
      switchLists: [
        { name: "自取", value: "self_pick", url: "" },
        { name: "外卖", value: "take_out", url: "" },
      ],
      backgroundColor: "transparent",
    },
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
  },
];
