import React from 'react'
import Taro from '@tarojs/taro'
import { RootStoreProvider } from './base/RootStoreProvider'


import './app.scss'

function App(props) {
  // Taro.setStorageSync('API_URL', 'https://api.yuanshengyoupin.com/api')
  Taro.setStorageSync('API_URL', 'http://localhost:3333/api')
  Taro.setStorageSync('APIKey', 'jdpaSAz4m7yV3zXXwx85ashEUycAL5gCrxO6')
  Taro.setStorageSync('wechatId', '8e6ece63-5d3e-465b-9b2a-37108848e8e9')
  Taro.setStorageSync('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3NDkwNmQ5LTk1ZDgtNGVhZS05MTU5LWRjNzFkMzA1MzhjOCIsInVzZXJuYW1lIjoiZnV5aW4iLCJyb2xlIjoic3VwZXJfYWRtaW5pc3RyYXRvciIsImlhdCI6MTYzMTAyNjM3NywiZXhwIjoxNjMxNjMxMTc3fQ.flgZ_s8alBNISmfN3t6np3Jz_kffIdM3Srca8OjAY8A')

  return (
    <RootStoreProvider>
      {props.children}
    </RootStoreProvider>
  )
}

export default App
