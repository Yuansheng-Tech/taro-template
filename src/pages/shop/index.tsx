import React, { Component } from "react";
import { YYShopList, YYLoadMore } from "@ysyp/ui";

export default class Index extends Component {
  render() {
    return (
      <>
        <YYShopList
          {...{
            backgroundColor: "#eee",
            data: [
              {
                id: "1",
                name: "materiel 1",
                status: "关店",
                address: "湖北省武汉市江夏区藏龙岛银河湾",
                start_time: "09:30",
                end_time: "9:30",
                distanceSpace: 3,
              },
              {
                id: "2",
                name: "materiel 2",
                status: "营业中",
                address: "湖北省武汉市江夏区藏龙岛银河湾",
                start_time: "09:30",
                end_time: "9:30",
                distanceSpace: 3,
              },
              {
                id: "3",
                name: "materiel 3",
                status: "打烊",
                address: "湖北省武汉市江夏区藏龙岛银河湾",
                start_time: "09:30",
                end_time: "9:30",
                distanceSpace: 3,
              },
              {
                id: "1",
                name: "materiel 1",
                status: "关店",
                address: "湖北省武汉市江夏区藏龙岛银河湾",
                start_time: "09:30",
                end_time: "9:30",
                distanceSpace: 3,
              },
              {
                id: "1",
                name: "materiel 1",
                status: "关店",
                address: "湖北省武汉市江夏区藏龙岛银河湾",
                start_time: "09:30",
                end_time: "9:30",
                distanceSpace: 3,
              },
              {
                id: "1",
                name: "materiel 1",
                status: "关店",
                address: "湖北省武汉市江夏区藏龙岛银河湾",
                start_time: "09:30",
                end_time: "9:30",
                distanceSpace: 3,
              },
              {
                id: "1",
                name: "materiel 1",
                status: "关店",
                address: "湖北省武汉市江夏区藏龙岛银河湾",
                start_time: "09:30",
                end_time: "9:30",
                distanceSpace: 3,
              },
            ],
          }}
        />
        <YYLoadMore
          {...{
            height: "40px",
            moreText: "加载更多",
            loadingText: "加载中",
            noMoreText: "没有更多",
            moreBtnStyle: "",
            noMoreTextStyle: "",
          }}
        />
      </>
    );
  }
}
