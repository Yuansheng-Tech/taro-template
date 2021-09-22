import React, { ComponentClass, Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Slider, Text, Image } from '@tarojs/components';
import './index.scss';
import {getMinute, getSecond} from "./utils";

const CDN = 'http://cdn2.ibt.tel/';
const playSrc = CDN + 'wordcamp/stu/icon/play_icon.png';
const pauseSrc = CDN + 'wordcamp/stu/icon/pause_icon.png';

/**
 ### Props
| 参数 | 说明 | 类型 | 默认值 | 是否必须 |
|------|------|------|------|------|
| src | 音频资源的地址  | `string` | 无 | 是 |
| draggable | 是否可以拖动进度条 | `boolean` | true | 否 |
| title | 音频名称 | `string` | 无 | 否 |
| author | 音频作者 | `string` | 无 | 否 |
| autoplay | 是否自动播放 | `boolean` | `false`| 否 |
| poster | 音频海报 | `string` | 无 | 否 |
| onPlay | 当开始/继续播放时触发play事件 | `eventHandle` | 无 | 否 
| onPause | 当暂停播放时触发 pause 事件 | `eventHandle` | 无 | 否
| onEnded | 当播放到末尾时触发 ended 事件 | `eventHandle` | 无 | 否
| onTimeUpdate | 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} | `eventHandle` | 无 | 否
| onError | 当发生错误时触发 error 事件，detail = {errMsg:MediaError.code} | `eventHandle` | 无 | 否
 */

interface AudioPlayerProps {
  id?: string,
  src: string,
  current: number,
  title?: string,
  author?: string,
  draggable?: boolean,
  autoplay?: boolean,
  poster?: string,
  className?: string,
  onPlay?: () => void,
  onPause?: () => void,
  onEnded?: () => void,
  onError?: (data: any) => void,
  onTimeUpdate?: (options: {
    currentTime: number,
    duration?: number,
  }) => void
}

interface AudioContext {
  src: string,
  autoplay: boolean,
  readonly currentTime: number,
  readonly onCanplay: void,
  readonly destroy: void,
  readonly duration: number,
  readonly onTimeUpdate: void,
  readonly onEnded: void,
  readonly onStop: void,
  readonly seek: void,
  readonly play: void,
  readonly onPlay: void,
  readonly onPause: void,
  readonly onError: void,
  readonly paused
}

interface StateType {
  readonly  currentTime: number,
  readonly iconSrc: string,
  readonly duration: number,
  readonly showTime1: string,
  readonly showTime2: string
}

//自动播放时，图标应该正确响应
class AudioPlayer extends Component<AudioPlayerProps, any> {
  innerAudioContext = Taro.createInnerAudioContext();
  static defaultProps = {
    autoplay: false,
    draggable: true
  };

  constructor(props) {
    super(props);

    this.sliderChange = this.sliderChange.bind(this);
    this.changeIconSrc = this.changeIconSrc.bind(this);
  }

  state: StateType = {
    currentTime: 0, //当前播放时间，单位s
    iconSrc: playSrc,
    duration: 0,  // 默认播放总时长，单位s
    showTime1: '00:00',
    showTime2: '00:00'
  };

  componentDidMount() {
    const { autoplay = false, src = '' } = this.props;
    console.log('this.props', autoplay);
    this.innerAudioContext.autoplay = autoplay;
    this.innerAudioContext.src = src;

    if (autoplay) {
      this.setState({
        iconSrc: pauseSrc
      })
    } else {
      this.setState({iconSrc: playSrc})
    }

    let min: string;
    let sec: string;
    let duration: number;

    this.innerAudioContext.onCanplay(() => {
      //延时获取音频真正的duration
      duration = this.innerAudioContext.duration; //单位秒

      min = getMinute(duration);
      sec = getSecond(duration);

      this.setState({duration: duration, showTime2: `${min}:${sec}`});

      //刷新时间
      const interval = setInterval(() => {
        duration = this.innerAudioContext.duration; //单位秒
        if (duration) {
          min = getMinute(duration);
          sec = getSecond(duration);
          this.setState({duration: duration, showTime2: `${min}:${sec}`});
          clearInterval(interval)
        }
      }, 150)

    });
    this.innerAudioContext.onTimeUpdate(() => {
      const currentTime = this.innerAudioContext.currentTime;
      const duration = this.innerAudioContext.duration;
      min = getMinute(currentTime);
      sec = getSecond(currentTime);
      this.setState({showTime1: `${min}:${sec}`, currentTime: currentTime});
      this.props.onTimeUpdate && this.props.onTimeUpdate({
        currentTime,
        duration
      });
    });

    this.innerAudioContext.onPlay(() => {
      console.log('current', this.props.current)
      duration = this.innerAudioContext.duration; //单位秒
      min = getMinute(duration);
      sec = getSecond(duration);
      this.setState({duration: duration, showTime2: `${min}:${sec}`});
      this.props.onPlay && this.props.onPlay();
    });

    this.innerAudioContext.onPause(() => {
      //有时，手机息屏之后会暂停播放音频  修改图标啊
      this.setState({
        iconSrc: playSrc
      });
      this.props.onPause && this.props.onPause();
    });

    this.innerAudioContext.onError((res) => {
      console.log(res.errMsg);
      console.log(res.errCode);
      Taro.showModal({title: '出错了', content: res.errMsg});
      this.props.onError && this.props.onError(res);
    });

    this.innerAudioContext.onEnded(() => {
      this.setState({
        iconSrc: playSrc
      })
      this.props.onEnded && this.props.onEnded()
    })

    this.innerAudioContext.onStop(() => {
      //修改图标啊
      this.setState({
        iconSrc: playSrc
      });
    })

  }

  componentWillUnmount() {
    if (this.innerAudioContext) {
      this.innerAudioContext.destroy();
    }
  }

  //播放暂停
  changeIconSrc() {
    let iconSrc = this.state.iconSrc;
    if (iconSrc === playSrc) {
      iconSrc = pauseSrc;
      this.innerAudioContext.play();
    } else {
      iconSrc = playSrc;
      this.innerAudioContext.pause();
    }

    this.setState({
      iconSrc: iconSrc
    })

  }

  //改变进度条
  sliderChange(event) {

    const min: string = getMinute(event.detail.value);
    const sec: string = getSecond(event.detail.value);
    this.setState({
      currentTime: event.detail.value,
      showTime1: `${min}:${sec}`
    });
    this.innerAudioContext.seek(event.detail.value);
    if (this.innerAudioContext.paused) {

    } else {
      this.innerAudioContext.play();
    }
  }

  // 正在拖动的过程中
  sliderChangeIng() {

  }


  render() {
    const { currentTime, showTime2, showTime1, duration, iconSrc } = this.state;
    const { poster, title, author, draggable, className } = this.props;
    return (
      <View className={'co-audio-wrap ' + className}>
        {
          poster && (
            <View className='poster-wrap'>
              <Image src={poster} className='poster' mode='widthFix' />
            </View>
          )
        }

        <View className='text-wrap'>
          {
            title && (
              <View className='audio-draggable'>
                <Text>{title}</Text>
              </View>
            )
          }
          {
            author && (
              <View className='audio-author'>
                <Text>{author}</Text>
              </View>
            )
          }

        </View>


        <View className='player'>
          <Image src={iconSrc} onClick={this.changeIconSrc} />
          <View className='slider'>
            <Slider
              onChange={this.sliderChange}
              min={0}
              step={1}
              max={duration}
              block-size={12} value={currentTime}
              onChanging={this.sliderChangeIng}
              disabled={!draggable}
            />
          </View>
          <View className='time'>
            {showTime1}/{showTime2}
          </View>
        </View>
      </View>

    )
  }
}


export default AudioPlayer as ComponentClass;
