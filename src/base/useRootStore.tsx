import React, { useContext } from 'react';

import { RootStore } from './RootStore'

const rootStoreInstance: RootStore = new RootStore();

export const getRootStore = () => rootStoreInstance;

export const RootStoreContext = React.createContext(rootStoreInstance);

export const useRootStore = () => {
  return useContext(RootStoreContext);
};

// 新建组件：通过 Provider 传递上下文中的数据
export const RootStoreProvider = ({ store, children }) => {
  const { Provider } = RootStoreContext;
  return <Provider value={store}>{children}</Provider>;
};

