export default [
  {
    name: "YYSpaceline",
    text: "占位线",
    icon: "",
    data: {
      content: "",
      color: "#ed3f14",
      fontSize: "16px",
      height: "40px",
      backgroundColor: "transparent",
      textAlign: "center",
    },
    children: [],
  },
  {
    name: "YYLoginAvatar",
    text: "登录头像",
    icon: "https://file.yuanshengyoupin.com/files/Login.png",
    data: {
      title: "立即登录",
      defaultAvatar: "",
      backgroundColor: "#fff",
      color: "#FFFFFF",
      url: "/pages/login/index",
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
          value: "领会员",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/hb10.png",
          value: "新品首发",
        },
        {
          image:
            "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
          value: "领京豆",
        },
        {
          image:
            "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
          value: "手机馆",
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
        {
          title: "标题文字",
          arrow: "right",
          thumb:
            "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
        },
      ],
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
];
