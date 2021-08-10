import React from 'react'
import Taro from '@tarojs/taro'

// import { RootStore } from './base/RootStore';
// import { RootStoreProvider } from './base/useRootStore';


import './app.scss'
import { View } from '@tarojs/components';

function App(props) {
  // const rootStore = new RootStore()
  Taro.setStorageSync('API_URL', '//api.yuansheng.com/api');
  // Taro.setStorageSync('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3NDkwNmQ5LTk1ZDgtNGVhZS05MTU5LWRjNzFkMzA1MzhjOCIsInVzZXJuYW1lIjoiZnV5aW4iLCJyb2xlIjoic3VwZXJfYWRtaW5pc3RyYXRvciIsImlhdCI6MTYyNjA5NjQ1NSwiZXhwIjoxNjI2NzAxMjU1fQ.k0ExON2ExfYKlcbF80XWj31z4AfJWIrzjxmP20pcTz0')

  return (
    // <RootStoreProvider store={rootStore} >
    <View className="container">
      {props.children}
    </View>
    // </RootStoreProvider>
  )
}

export default App
