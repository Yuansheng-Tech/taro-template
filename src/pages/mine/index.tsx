import React, { Component } from "react";
import { YYSpaceline, YYLoginAvatar, YYGrid, YYList, YYImage } from "@ysyp/ui";

export default class Index extends Component {
  render() {
    return (
      <>
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "50px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        />
        <YYLoginAvatar
          {...{
            title: "立即登录",
            image: "",
            backgroundColor: "#fff",
            color: "#000",
          }}
        />
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "10px",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        />
        <YYGrid
          {...{
            mode: "square",
            hasBorder: true,
            columnNum: "4",
            onClick:
              "function onClick(item, index) {\n    console.log('item index', item, index);\n  }",
            data: [
              {
                image: "http://localhost:3333/static/memo/files/hb10.png",
                value: "领取中心",
                url: "https://yuanshengyoupin.com",
              },
              {
                image: "http://localhost:3333/static/memo/files/hb10.png",
                value: "找折扣",
                url: "https://yuanshengyoupin.com",
              },
              {
                image: "http://localhost:3333/static/memo/files/hb10.png",
                value: "领会员",
              },
              {
                image: "http://localhost:3333/static/memo/files/hb10.png",
                value: "新品首发",
              },
            ],
          }}
        />
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "10px",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        />
        <YYList
          {...{
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
            ],
          }}
        />
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "10px",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        />
        <YYImage
          {...{
            src: "http://localhost:3333/static/memo/files/hb10.png",
            mode: "widthFix",
            width: "100%",
            height: "100px",
            borderRadius: "10px",
          }}
        />
      </>
    );
  }
}
