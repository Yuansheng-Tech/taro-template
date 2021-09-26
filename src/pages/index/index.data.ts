export default [
  {
    name: "YYSearchBar",
    text: "搜索框",
    icon: "https://file.yuanshengyoupin.com/files/search.png",
    data: {
      placeholder: "请输入商户或商品名称",
      actionName: "搜索",
      maxLength: 100,
      value: "",
      fixed: false,
      disabled: false,
      focus: false,
      showActionButton: false,
      inputType: "text",
      onConfirm: function onConfirm(event) {
        _s();
        console.log(
          "onConfirm event",
          event,
          Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(
            /*#__PURE__*/ Object(
              react__WEBPACK_IMPORTED_MODULE_1__["createContext"]
            )(
              new _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_0__[
                "RootStore"
              ]()
            )
          )
        );
      },
      onActionClick: function onActionClick(event) {
        _s2();
        console.log(
          "onConfirm event",
          event,
          Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(
            /*#__PURE__*/ Object(
              react__WEBPACK_IMPORTED_MODULE_1__["createContext"]
            )(
              new _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_0__[
                "RootStore"
              ]()
            )
          )
        );
      },
      onChange: function onChange(value) {
        console.log("onChange value, event", value);
      },
    },
    children: [],
  },
  {
    name: "YYLocation",
    text: "定位",
    icon: "https://file.yuanshengyoupin.com/files/shop-address1.png",
    data: {
      margin: "0px",
      padding: "10px",
      borderRadius: "none",
      locationImage: "https://file.biji77.com/wechat/icon/location.png",
      name: "武汉大学店",
      url: "",
    },
    children: [],
  },
  {
    name: "YYSwiper",
    text: "轮播图",
    icon: "https://file.yuanshengyoupin.com/files/banner.png",
    data: {
      vertical: false,
      items: [
        {
          url: "https://yuanshengyoupin.com",
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          imageStyle: {},
        },
        {
          url: "https://yuanshengyoupin.com",
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          imageStyle: {},
        },
      ],
    },
    children: [],
  },
  {
    name: "YYGrid",
    text: "栅格布局",
    icon: "https://file.yuanshengyoupin.com/files/Grid.png",
    data: {
      mode: "square",
      hasBorder: true,
      columnNum: "4",
      onClick: function onClick(item, index) {
        console.log("item index", item, index);
      },
      data: [
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "炸鸡汉堡",
          url: "https://yuanshengyoupin.com",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "主食正餐",
          url: "https://yuanshengyoupin.com",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "早餐粥类",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "蛋糕甜点",
        },
        {
          image:
            "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
          value: "活动尝鲜",
        },
        {
          image:
            "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
          value: "夜宵烧烤",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "麻辣烫冒菜",
          url: "https://yuanshengyoupin.com",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "轻食奶茶",
          url: "https://yuanshengyoupin.com",
        },
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
  {
    name: "YYContact",
    text: "联系",
    icon: "https://file.yuanshengyoupin.com/files/shop-banner.png",
    data: {
      logo: "http://localhost:3333/static/memo/wechat_footers/我的图标绿.jpg",
      notice: "店长电话18986291021 (微信同 申请加入福利群更多优惠)",
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
    name: "YYSubTitle",
    text: "标题&副标题",
    icon: "https://file.yuanshengyoupin.com/files/titleSub.png",
    data: {
      title: "为您优选",
      subTitle: "",
      more: "查看更多",
      url: "https://yuanshengyoupin.com",
      fontSize: "14px",
      padding: "10px 20px 0px",
      onClick: function onClick() {},
    },
    children: [],
  },
  {
    name: "YYGoodsThree",
    text: "三栏商品",
    icon: "",
    data: {
      hasBorder: true,
      borderRadius: "0px",
      height: "240px",
      imageMode: "scaleToFill",
      textAlign: "left",
      threeType: "right",
      onClick: function onClick(item, index) {
        console.log("item index", item, index);
      },
      data: [
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "领取中心",
          url: "https://yuanshengyoupin.com",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "找折扣",
          url: "https://yuanshengyoupin.com",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "领会员",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "领会员",
        },
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
  {
    name: "YYTabBar",
    text: "标签栏",
    icon: "",
    data: {
      tabList: [
        { title: "综合排序", value: "0" },
        { title: "离我最近", value: "1" },
        { title: "销量最高", value: "2" },
      ],
      onClick: function onClick(data) {
        console.log("onClick data", data);
      },
    },
    children: [],
  },
];
