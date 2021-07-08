export default [
  {
    name: "YYGoodsGrid",
    text: "商品栅格",
    icon: "",
    dataSource: {
      hasBorder: false,
      borderRadius: "0px",
      type: "imageLeft",
      inline: false,
      columnNum: "2",
      imageMode: "scaleToFill",
      imageWidth: "60px",
      imageHeight: "80px",
      itemPadding: "10px",
      itemMargin: "5px",
      textAlign: "left",
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
          value: "新品首发",
          price: 0,
          originalPrice: 0,
        },
        {
          image: "http://localhost:3333/static/memo/files/hb10.png",
          value: "领取中心",
          url: "https://yuanshengyoupin.com",
          price: 11,
          originalPrice: 12,
        },
        {
          image: "http://localhost:3333/static/memo/files/hb10.png",
          value: "领取中心",
          url: "https://yuanshengyoupin.com",
          price: 11,
          originalPrice: 12,
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
    name: "YYList",
    text: "列表",
    icon: "http://file.yuansheng.com/static/memo/files/List.png",
    data: {
      hasBorder: false,
      data: [
        {
          title: "标题文字",
          arrow: "right",
          thumb:
            "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
        },
        {
          title: "标题文字",
          arrow: "right",
          thumb:
            "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
        },
      ],
    },
  },
];
