import React, { Component } from "react";
import { YYSpaceline, YYMap, YYShopList } from "@ysyp/ui";

export default class Index extends Component {
  render() {
    return (
      <>
        <YYSpaceline
          {...{
            content: "",
            color: "#ed3f14",
            fontSize: "16px",
            height: "2px",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        />
        <YYMap
          {...{
            id: 1,
            name: "Map",
            latitude: 30.423697237617844,
            longitude: 114.4123094431305,
            markerImage: "",
            locationImage: "",
            scale: 10,
            style: "",
          }}
        />
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
            ],
          }}
        />
      </>
    );
  }
}
