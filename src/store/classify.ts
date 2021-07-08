import { types } from "mobx-state-tree";
// import { values } from 'mobx';

const Classify = types.model('Classify', {
  id:	types.optional(types.string, ""),
  updateId:	types.optional(types.string, ""),
  name:	types.optional(types.string, ""),
  banner:	types.optional(types.string, ""),
  icon:	types.optional(types.string, ""),
  summary:	types.optional(types.string, ""),
  description:	types.optional(types.string, ""),
  level:	types.optional(types.number, 0),
  status:	types.optional(types.number, 0),
  type:	types.optional(types.string, ""),
});

const Classifies = types.model('Classifies', {
  data:	Classify,
  datas: types.optional(types.map(Classify), {}) // types.array(Classify), // types.map(Classify)
}).actions(self => ({
  setData(data) {
    self.data = Classify.create(data);
  },
  setDatas(datas) {
    self.datas = datas;
  },
  addDatas(data) { // map
    self.datas.set(data.id, Classify.create(data))
  }
}))

export default Classifies;