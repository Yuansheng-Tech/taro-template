import { Progress, Swiper, SwiperItem, Audio, View } from "@tarojs/components"
import React, { Component, useState } from "react"
import Taro from "@tarojs/taro"
import AudioPlayer from "./audioPlayer";

const PaoMao = "http://cdn.hixiaoya.com/paomo.mp3";
const DzqImg = "http://cdn.hixiaoya.com/dzq.jpg";

import './index.scss'

const AudioPage = (props) => {
  const [current, setCurrent] = useState(0)
  const onPlay = (e) => {
    console.log('e', e);
    setCurrent(e.detail.current)
  }
  return (
    <Swiper
      className='discover-swiper'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      vertical={true}
      circular={false}
      indicatorDots={false}
      autoplay={false}
      onChange={onPlay}
    >
      {[1,2,3,4].map((v, k) => {
        console.log('current', current, k);
        return (
          <SwiperItem
            key={v}
            className='discover-audio-main'>
            {current === k && <AudioPlayer
              id={'video'+k}
              className='discover-audio'
              current={current}
              src={PaoMao}
              title={"泡沫"}
              author={"FU"}
              poster={"https://file.biji77.com/goods/%E9%85%B8%E5%A5%B6%E8%8A%92%E6%9E%9C%E7%87%95%E9%BA%A6%E7%9B%92%E5%AD%901.jpg"}
              autoplay={true}
            />}
            <View className="discover-header">
              <View className="discover-loading-line"></View>
            </View>
            <View className="discover-actions">
              <View className="discover-action discover-user-icon">
                <View className="discover-action-icon">我</View>
              </View>
              <View className="discover-action discover-like">
                <View className="discover-action-icon">赞</View>
                <View className="discover-action-number">868</View>
              </View>
              <View className="discover-action discover-review">
                <View className="discover-action-icon">评</View>
                <View className="discover-action-number">68</View>
              </View>
              <View className="discover-action discover-forward">
                <View className="discover-action-icon">转</View>
                <View className="discover-action-number">668</View>
              </View>
            </View>
            <View className="discover-footer">
              <View className="discover-user-name">
                @Foooying
              </View>
              <View className="discover-desc">
                买农产品，上原生优品。
              </View>
              <View className="discover-music"></View>
              {/* <View className="discover-play-line">
                <Progress
                  className="discover-play-progress"
                  percent={Number(percent.currentTime/percent.duration) * 100}
                  strokeWidth={0.5}
                  color={"#09BB07"}
                  activeColor={"#09BB07"}
                  />
              </View> */}
            </View>
          </SwiperItem>)
      })}
    </Swiper>
  )
}

export default AudioPage