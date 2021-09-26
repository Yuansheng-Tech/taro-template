export default [
  {
    name: "YYTabBar",
    text: "标签栏",
    icon: "",
    data: {
      defaultValue: "2",
      tabList: [
        { title: "出单商户", value: "0", url: "" },
        { title: "中转站", value: "1", url: "" },
        { title: "送往楼号", value: "2", url: "" },
      ],
    },
    children: [],
  },
  {
    name: "YYImgBgGrid",
    text: "背景栅格",
    icon: "https://file.yuanshengyoupin.com/files/Grid.png",
    data: {
      mode: "square",
      hasBorder: true,
      height: "100px",
      columnNum: "4",
      data: [
        {
          image: "//file.yuansheng.com/static/memo/files/house%203.png",
          title: "楼层",
          value: "1",
          url: "",
        },
        {
          image: "//file.yuansheng.com/static/memo/files/house%203.png",
          title: "楼层",
          value: "1",
          url: "",
        },
        {
          image: "//file.yuansheng.com/static/memo/files/house%203.png",
          title: "楼层",
          value: "1",
          url: "",
        },
        {
          image: "//file.yuansheng.com/static/memo/files/house%203.png",
          title: "楼层",
          value: "1",
          url: "",
        },
        {
          image: "//file.yuansheng.com/static/memo/files/house%203.png",
          title: "楼层",
          value: "1",
          url: "",
        },
        {
          image: "//file.yuansheng.com/static/memo/files/house%203.png",
          title: "楼层",
          value: "1",
          url: "",
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
      height: "10px",
      backgroundColor: "#eee",
      textAlign: "center",
    },
    children: [],
  },
];
