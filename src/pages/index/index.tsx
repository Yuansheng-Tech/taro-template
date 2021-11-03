import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { observer } from "mobx-react";
import * as YYUI from "@ysyp/ui/dist/src/index";
import { fetch } from "@ysyp/utils/dist/fetch";
import { useRootStore } from "@base/RootStoreProvider";

class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  onShareAppMessage(res) {
    return {
      title: "梦企传媒",
      path: "/pages/index/index",
    };
  }
  async componentWillMount() {
    const data = (await this.getData("/pages/index/index")) || {};
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

export default observer(Index);
