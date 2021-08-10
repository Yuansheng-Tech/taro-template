import React, { Component } from "react";
import { YYSwiper, YYCartGood, YYCartAdd, YYHtml, YYCartBuy } from "@ysyp/ui";

export default class Index extends Component {
  render() {
    return (
      <>
        <YYSwiper
          {...{
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
          }}
        />
        <YYCartGood
          {...{
            image: "http://localhost:3333/static/memo/files/hb10.png",
            value: "领取中心",
            url: "https://yuanshengyoupin.com",
            price: 11,
            originalPrice: 12,
            borderRadius: "0px",
            imageMode: "scaleToFill",
            imageWidth: "100px",
            imageHeight: "100%",
            itemPadding: "10px",
            itemMargin: "0px",
          }}
        />
        <YYCartAdd
          {...{
            title: "数量",
            subTitle: "一件起购",
            valueNum: 1,
            stock: 10,
            step: 1,
            min: 1,
            onGetValue:
              "function onGetValue(val) {\n    console.log('onGetValue', val);\n  }",
          }}
        />
        <YYHtml
          {...{
            type: "text",
            url: "",
            text: "<span>aaaaaaaaaaaaaaaaaaaaaaa</span>",
            height: "300px",
            fullScreen: false,
          }}
        />
        <YYCartBuy
          {...{
            addCartText: "加入购物车",
            buyText: "立即购买",
            btnRadius: "40px",
            btnMargin: "10px",
            onAddCart:
              "function onAddCart(e) {\n    console.log('e onAddCart', e);\n  }",
            onBuy: "function onBuy(e) {\n    console.log('e onBuy', e);\n  }",
          }}
        />
      </>
    );
  }
}
