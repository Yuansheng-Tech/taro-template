import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { RichText, View } from "@tarojs/components";
import { observer } from "mobx-react";
import { addClassAndStyle } from "@base/richtext/richtext-format";
import { fetch } from "@ysyp/utils/dist/fetch";

import "@base/richtext/richtext.scss";

class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  onShareAppMessage(res) {
    return {
      title: "帮助文档",
      path: "undefined",
    };
  }
  async componentWillMount() {
    const data = (await this.getData("undefined")) || {};
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
      <View className="rich-text">
        <RichText nodes={addClassAndStyle(data)}></RichText>
      </View>
    );
  }
}
export default observer(Index);
