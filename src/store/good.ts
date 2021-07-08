import { types } from "mobx-state-tree";
// import { values } from 'mobx';

const Good = types.model('Good', {
  id:	types.optional(types.string, ""),
  updateId:	types.optional(types.string, ""),
  name:	types.optional(types.string, ""),
  type:	types.optional(types.string, ""),
  status:	types.optional(types.number, 0),
  icon:	types.optional(types.string, ""),
  summary:	types.optional(types.string, ""),
  description:	types.optional(types.string, ""),
  price_min:	types.optional(types.string, ""),
  stock:	types.optional(types.number, 0),
  total_sale:	types.optional(types.number, 0),
  special_price:	types.optional(types.boolean, false),
  weight:	types.optional(types.number, 0),
  unit:	types.optional(types.string, ""),
  vip_channel:	types.optional(types.string, ""),
  wow:	types.optional(types.string, ""),
  // vlog:	[...]
  // album:	[...]
  // materiels:	[...]
  // product_introduction_imgs:	[...]
  // menu_imgs:	[...]
  // test_report_imgs:	[...]
  // recommends:	[...]
  // source:	SourceEntity{...}
  // tags:	[...]
});

const Goods = types.model('Goods', {
  data:	Good,
  datas: types.optional(types.map(Good), {})
}).actions(self => ({
  setData(data) {
    self.data = Good.create(data);
  },
  setDatas(datas) {
    self.datas = datas;
  },
  addDatas(data) { // map
    self.datas.set(data.id, Good.create(data))
  }
}))

export default Goods;