import React, { Component } from "react";
import { YYSpaceline, YYH1, YYInfo, YYP, YYImg } from "@ysyp/ui";

export default class Index extends Component {
  render() {
    return (
      <>
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "10px",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
        />
        <YYH1 {...{ content: "这是一级标题这是一级标题" }} />
        <YYInfo {...{ content: "2017-05-07  付引" }} />
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
            height: "150px",
          }}
        />
        <YYP
          {...{
            content:
              "这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }}
        />
        <YYP
          {...{
            content:
              "这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }}
        />
      </>
    );
  }
}
