export default [
  {
    name: "YYSearchBar",
    text: "搜索框",
    icon: "",
    data: {
      placeholder: "",
      actionName: "搜索",
      maxLength: 100,
      value: "",
      fixed: false,
      disabled: false,
      focus: false,
      showActionButton: false,
      inputType: "text",
      onConfirm: function onConfirm(event) {
        console.log("onConfirm event", event);
      },
      onActionClick: function onActionClick(event) {
        console.log("onConfirm event", event);
      },
      onChange: function onChange(value) {
        console.log("onChange value, event", value, event);
      },
    },
  },
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
  {
    name: "YYTabBar",
    text: "标签栏",
    icon: "",
    data: {
      tabList: [
        { title: "清洗养护", value: "1" },
        { title: "修复翻新", value: "2" },
      ],
      onClick: function onClick(data) {
        console.log("onClick data", data);
      },
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
      height: "2px",
      backgroundColor: "#eee",
      textAlign: "center",
      options: { skip: "0" },
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
      height: "1px",
      backgroundColor: "#eee",
      textAlign: "center",
    },
  },
  {
    name: "YYLoadMoreGoodsGrid",
    text: "商品栅格（loadmore）",
    icon: "http://file.yuansheng.com/static/memo/files/goodGrid.png",
    data: {
      url: "/goods",
      skip: "0",
      take: "10",
      hasBorder: true,
      borderRadius: "0px",
      backgroundColor: "#fff",
      type: "imageLeft",
      inline: false,
      columnNum: "1",
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
