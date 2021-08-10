import React, { Component } from "react";
import {
  YYSwiper,
  YYSpaceline,
  YYContact,
  YYLocationSwitch,
  YYTabBar,
  YYLoadMoreGoodsGrid,
} from "@ysyp/ui";

export default class Index extends Component {
  render() {
    return (
      <>
        <YYSwiper
          {...{
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
        <YYContact
          {...{
            logo: "https://file.biji77.com/wechat/icon/logo_index.png",
            notice:
              "10点至20点营业；店长电话18986291021(微信同 申请加入福利群更多优惠)",
            phone: "17610340225",
            telImage: "https://file.biji77.com/wechat/icon/tel.png",
            wxImage: "https://file.biji77.com/files/wx_share.png",
            margin: "0",
            borderRadius: "0px",
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
        <YYLocationSwitch
          {...{
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
        <YYTabBar
          {...{
            tabList: [
              { title: "清洗养护", value: "1" },
              { title: "修复翻新", value: "2" },
            ],
            onClick:
              "function onClick(data) {\n    console.log('onClick data', data);\n  }",
          }}
        />
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "2px",
            backgroundColor: "#eee",
            textAlign: "center",
            options: { skip: "0" },
          }}
        />
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "1px",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        />
        <YYLoadMoreGoodsGrid
          {...{
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
