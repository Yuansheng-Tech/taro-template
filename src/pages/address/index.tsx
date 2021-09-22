import React, { Component } from "react";
import Taro from "@tarojs/taro";
import * as YYUI from "@ysyp/ui/dist/src/index";
import { fetch } from "@ysyp/utils/dist/fetch";
import { useRootStore } from "@base/RootStoreProvider";

export default class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  onShareAppMessage(res) {
    return {
      title: "个人地址",
      path: "/pages/address/index",
    };
  }
  async componentWillMount() {
    const data = (await this.getData("/pages/address/index")) || {};
    this.setState({
      data: !data[0] ? [] : JSON.parse(data[0].data || "[]"),
    });
  }
  async getData(path) {
    const { data } =
      (await fetch({
        url: "/wechat/pages",
        method: "GET",
        data: {
          where: {
            path,
            wechat: {
              id: Taro.getStorageSync("wechatId"),
            },
          },
        },
      })) || {};
    return data;
  }
  render() {
    const { data } = this.state;
    return (
      <>
        {data.map((v) => {
          return React.createElement(
            YYUI[v.name],
            {
              ...v.data,
              useRootStore,
            },
            null
          );
        })}
      </>
    );
  }
}
