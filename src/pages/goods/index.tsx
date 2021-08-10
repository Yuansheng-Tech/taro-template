import React, { Component } from "react";
import { YYH1, YYP, YYImg, YYGoodsGrid } from "@ysyp/ui";

export default class Index extends Component {
  render() {
    return (
      <>
        <YYH1 {...{ content: "这是一级标题这是一级标题" }} />
        <YYP
          {...{
            content:
              "这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }}
        />
        <YYImg
          {...{
            src: "http://localhost:3333/static/memo/files/hb10.png",
            mode: "widthFix",
            height: "200px",
          }}
        />
        <YYGoodsGrid
          {...{
            url: "/goods",
            options: { skip: 0, take: 10 },
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
            onClick:
              "function onClick(item, index) {\n    console.log('item index', item, index);\n  }",
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
          }}
        />
      </>
    );
  }
}