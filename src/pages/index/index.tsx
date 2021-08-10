import React, { Component } from "react";
import {
  YYSwiper,
  YYNoticebar,
  YYContact,
  YYSpaceline,
  YYLocationSwitch,
  YYTabGoods,
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
        <YYNoticebar
          {...{
            title:
              "这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",
            icon: "volume-plus",
            marquee: true,
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
            margin: "10px",
            borderRadius: "10px",
          }}
        />
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "5px",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        />
        <YYLocationSwitch
          {...{
            margin: "10px",
            borderRadius: "10px",
            locationImage: "https://file.biji77.com/wechat/icon/location.png",
            shop: { name: "鞋元素", status: "营业中", distanceSpace: 10 },
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
          }}
        />
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "5px",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        />
        <YYTabGoods
          {...{
            tabDirection: "vertical",
            flexDirection: "row",
            tabs: {
              store: "classifyStore",
              url: "/classifies",
              take: 10,
              skip: 0,
              current: 0,
              tabDirection: "horizontal",
              tabList: [
                { id: "1", name: "待办事项", value: "0", title: "待办事项" },
                { id: "2", name: "拍照", value: "1", title: "拍照" },
                { id: "3", name: "通讯录", value: "2", title: "通讯录" },
              ],
            },
            goods: {
              url: "/goods",
              skip: 0,
              take: 10,
              hasBorder: true,
              borderRadius: "0px",
              backgroundColor: "#fff",
              type: "imageLeft",
              inline: false,
              columnNum: 1,
              imageMode: "scaleToFill",
              imageWidth: "100px",
              imageHeight: "100px",
              itemPadding: "5px",
              itemMargin: "5px",
              textAlign: "left",
              cartImage: "",
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
            },
          }}
        />
      </>
    );
  }
}