import { Progress, Swiper, SwiperItem, Video, View } from "@tarojs/components"
import React, { Component, useState } from "react"
import Taro from "@tarojs/taro"

import './index.scss'

const VideoPage = (props) => {
  let videoContext = Taro.createVideoContext('video0');
  const [paused, setPaused] = useState(false)
  const [percent, setPercent] = useState({
    currentTime: 0,
    duration: 0
  })

  const onPlay = (e) => {
    videoContext = Taro.createVideoContext('video'+e.detail.current)
    videoContext.play();
    setPaused(false);
    if (e.detail.current > 0) {
      Taro.createVideoContext('video'+(e.detail.current-1)).pause();
      Taro.createVideoContext('video'+(e.detail.current+1)).pause();
    }
  }
  const onPause = (e) => {
    if (paused) {
      videoContext.play();
      setPaused(false);
    } else {
      videoContext.pause();
      setPaused(true);
    }
  }

  const onTimeUpdate = (e) => {
    setPercent(e.detail)
  }

  const onProgress = (e) => {
    const { x } = e.detail
    const { screenWidth } = Taro.getSystemInfoSync()
    videoContext.seek(percent.duration * (x/screenWidth))
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
        return (
          <SwiperItem
            key={v}
            className='discover-video-main'>
            <Video
              id={'video'+k}
              className="discover-video"
              src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
              poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
              initialTime={0}
              controls={false}
              autoplay={k===0 ? true : false}
              loop={false}
              muted={false}
              onClick={onPause}
              autoPauseIfNavigate={true}
              autoPauseIfOpenNative={true}
              onTimeUpdate={onTimeUpdate}
            />
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
              <View className="discover-play-line">
                <Progress
                  className="discover-play-progress"
                  percent={Number(percent.currentTime/percent.duration) * 100}
                  strokeWidth={0.5}
                  color={"#09BB07"}
                  activeColor={"#09BB07"}
                  onClick={onProgress}
                  />
              </View>
            </View>
          </SwiperItem>)
      })}
    </Swiper>
  )
}

export default VideoPage