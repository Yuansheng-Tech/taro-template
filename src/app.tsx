import React from 'react'
import Taro from '@tarojs/taro'

import { RootStoreProvider } from './base/RootStoreProvider'


import './app.scss'

function App(props) {
  // Taro.setStorageSync('API_URL', '//api.yuansheng.com/api');
  Taro.setStorageSync('API_URL', 'http://localhost:3333/api')
  Taro.setStorageSync('wechatId', '7fd6e8d0-73f0-40ca-86fe-fdb3a8c32c27')
  Taro.setStorageSync('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3NDkwNmQ5LTk1ZDgtNGVhZS05MTU5LWRjNzFkMzA1MzhjOCIsInVzZXJuYW1lIjoiZnV5aW4iLCJyb2xlIjoic3VwZXJfYWRtaW5pc3RyYXRvciIsImlhdCI6MTYyOTcwNzg3MSwiZXhwIjoxNjMwMzEyNjcxfQ.vud079YggwX5WES4LwJjNXXgL8KejcmC5Xig34hTObM')
  // Taro.setStorageSync('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3NDkwNmQ5LTk1ZDgtNGVhZS05MTU5LWRjNzFkMzA1MzhjOCIsInVzZXJuYW1lIjoiZnV5aW4iLCJyb2xlIjoic3VwZXJfYWRtaW5pc3RyYXRvciIsImlhdCI6MTYyNjA5NjQ1NSwiZXhwIjoxNjI2NzAxMjU1fQ.k0ExON2ExfYKlcbF80XWj31z4AfJWIrzjxmP20pcTz0')

  return (
    <RootStoreProvider>
      {props.children}
    </RootStoreProvider>
  )
}

export default App
