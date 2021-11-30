export default [
  {
    name: "YYSwiper",
    text: "轮播图",
    icon: "https://file.yuanshengyoupin.com/files/banner.png",
    data: {
      vertical: false,
      items: [
        {
          url: "https://yuanshengyoupin.com",
          image:
            "https://images.unsplash.com/photo-1631427984596-5b3412779d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpbGRyZW4sc3VuLGJvb2t8fHx8fHwxNjM4MDY2NTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=375",
          imageStyle: {},
        },
        {
          url: "https://yuanshengyoupin.com",
          image:
            "https://images.unsplash.com/photo-1526639395060-7afe9a493e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VuLGJvb2t8fHx8fHwxNjM4MDY2NzMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=375",
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
      columnNum: "5",
      onClick: function onClick(item, index) {
        console.log("item index", item, index);
      },
      data: [
        {
          image:
            "https://file.yuanshengyoupin.com/files/%E6%96%87%E7%AB%A0.png",
          value: "故事",
          url: "/pages/article/index",
        },
        {
          image:
            "https://file.yuanshengyoupin.com/files/%E8%AF%AD%E9%9F%B3.png",
          value: "语音",
          url: "/pages/voice/index",
        },
        {
          image:
            "https://file.yuanshengyoupin.com/files/%E5%8F%A4%E4%B9%A6.png",
          value: "国学",
          url: "https://yuanshengyoupin.com",
        },
        {
          image:
            "https://file.yuanshengyoupin.com/files/%E8%A7%86%E9%A2%91.png",
          value: "视频",
          url: "/pages/video/index",
        },
        {
          image: "https://file.yuanshengyoupin.com/files/music.png",
          value: "儿歌",
          url: "/pages/song/index",
        },
      ],
    },
    children: [],
  },
];
