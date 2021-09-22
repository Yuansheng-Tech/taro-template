import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { fetch } from "@ysyp/utils/dist/fetch";
import { RichText, View } from "@tarojs/components";
import { addClassAndStyle } from "@base/richtext/richtext-format";
import '@base/richtext/richtext.scss';

/**
 * DEMO4: /subPackages/pages/html/index?url=/pages/event/index
 */
export default class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: `<div style="position: absolute;
      height: 100%;
      width: 100%;
      background: #fff;
      padding-top: 40%;
      text-align:center;">加载中...</>`,
    };
  }
  async componentWillMount() {
    const { params: { url } } = getCurrentInstance().router || {};
    if (url) {
      const resultData = (await this.getData(url)) || [];
      const { data = '', name = '' } = resultData[0] || {}
      Taro.setNavigationBarTitle({ title: name })
      this.setState({
        data: data,
      });
    }
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
