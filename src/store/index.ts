import { types } from "mobx-state-tree"

export const Data = types.model({
  id: types.identifier,
  name: types.string
});

export const DataStore = types.model({
  data: Data,
  datas: types.map(Data) // types.array(Data)
});

/**
const s = TodoStore.create({ todos: {} })
unprotect(s)
s.todos.set(17, { task: "Grab coffee", id: 17 })
s.todos.put({ task: "Grab cookie", id: 18 }) // put will infer key from the identifier
console.log(s.todos.get(17).task) 
 */