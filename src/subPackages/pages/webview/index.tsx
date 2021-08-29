import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import './index.scss';

/**
 * webview
 * DEMO3: /subPackages/pages/webview/index?url=http://memo.com
 */
export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  isHttpUrl(url) {
    return /^http(s?):\/\//ig.test(url)
  }
  isImgUrl(url) {
    return /^http(s?):\/\/(.*)\.(jpg|jpeg|png|svg|icon|bmp|gif)$/i.test(url)
  }
  render () {
    const { params: { url = '' } } = getCurrentInstance().router || {};
    return (
      <View className="web-view">
        {this.isHttpUrl(url) && !this.isImgUrl(url) && (process.env.TARO_ENV === 'weapp') && <web-view src={url}></web-view>}
        {!this.isHttpUrl(url) && <View className="richtext-empty">网页错误</View>}
        {this.isImgUrl(url) &&  <View className='img-view'>
          <Image mode="widthFix" className='img-view-img' src={url} />
        </View>}
      </View>
    )
  }
}