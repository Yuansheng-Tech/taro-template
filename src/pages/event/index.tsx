import React, { Component } from "react";
import { RichText, View } from "@tarojs/components";
import text from './index.data';
import { addClassAndStyle } from "@base/richtext/richtext-format";
import '@base/richtext/richtext.scss';

export default class Index extends Component {
  render() {;
    return (
      <View className="rich-text">
        <RichText nodes={addClassAndStyle(text)}></RichText>
      </View>
    );
  }
}
