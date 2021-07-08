import React from 'react'
import { useProvider, useCreateStore } from "mobx-store-provider";
import { types } from "mobx-state-tree";

const UserStore = types.model({
  name: types.optional(types.string, ''),
});

// http://mobx-store-provider.overfoc.us/api-details-and-examples
// https://mobx-state-tree.js.org/intro/getting-started

import './app.scss'

function App(props) {
  const Provider = useProvider(UserStore);
  const userStore = useCreateStore(UserStore);
  return (
    <Provider value={userStore}>
      {props.children}
    </Provider>
  )
}

export default App
