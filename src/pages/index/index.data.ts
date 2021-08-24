export default [
  {
    name: "YYSwiper",
    text: "轮播图",
    icon: "http://file.yuansheng.com/static/memo/files/banner.png",
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
    name: "YYNoticebar",
    text: "通告栏",
    icon: "",
    data: {
      title:
        "这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",
      icon: "volume-plus",
      marquee: true,
    },
    children: [],
  },
  {
    name: "YYContact",
    text: "联系",
    icon: "http://file.yuansheng.com/static/memo/files/shop-banner.png",
    data: {
      logo: "https://file.biji77.com/wechat/icon/logo_index.png",
      notice:
        "10点至20点营业；店长电话18986291021(微信同 申请加入福利群更多优惠)",
      phone: "17610340225",
      telImage: "https://file.biji77.com/wechat/icon/tel.png",
      wxImage: "https://file.biji77.com/files/wx_share.png",
      margin: "10px",
      borderRadius: "10px",
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
    name: "YYLocationSwitch",
    text: "切换店铺",
    icon: "http://file.yuansheng.com/static/memo/files/shop-address1.png",
    data: {
      margin: "10px",
      borderRadius: "10px",
      locationImage: "https://file.biji77.com/wechat/icon/location.png",
      shop: { name: "鞋元素", status: "营业中", distanceSpace: 10 },
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
];
