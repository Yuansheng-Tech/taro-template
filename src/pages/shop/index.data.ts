export default [
  {
    name: "YYSearchBar",
    text: "搜索框",
    icon: "https://file.yuanshengyoupin.com/files/search.png",
    data: {
      placeholder: "",
      actionName: "搜索",
      maxLength: 100,
      value: "",
      fixed: false,
      disabled: false,
      focus: false,
      showActionButton: false,
      inputType: "text",
      onConfirm: function onConfirm(event) {
        _s();
        console.log(
          "onConfirm event",
          event,
          Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(
            /*#__PURE__*/ Object(
              react__WEBPACK_IMPORTED_MODULE_1__["createContext"]
            )(
              new _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_0__[
                "RootStore"
              ]()
            )
          )
        );
      },
      onActionClick: function onActionClick(event) {
        _s2();
        console.log(
          "onConfirm event",
          event,
          Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(
            /*#__PURE__*/ Object(
              react__WEBPACK_IMPORTED_MODULE_1__["createContext"]
            )(
              new _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_0__[
                "RootStore"
              ]()
            )
          )
        );
      },
      onChange: function onChange(value) {
        console.log("onChange value, event", value);
      },
    },
    children: [],
  },
  {
    name: "YYShopWithGoodsList",
    text: "店铺列表2",
    icon: "",
    data: {
      backgroundColor: "#eee",
      data: [
        {
          id: "1",
          icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
          name: "materiel 1",
          status: "关店",
          start_time: "09:30",
          end_time: "9:30",
          distanceSpace: 3,
          total_sale: "3000",
          dilivery_start_price: "20",
          dilivery_price: "1",
          distanceTime: 30,
          goods: [
            {
              id: "1",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
            {
              id: "2",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
            {
              id: "3",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
          ],
        },
        {
          id: "2",
          icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
          name: "materiel 2",
          status: "营业中",
          start_time: "09:30",
          end_time: "9:30",
          distanceSpace: 3,
          total_sale: "3000",
          dilivery_start_price: "20",
          dilivery_price: "1",
          distanceTime: 30,
          goods: [
            {
              id: "1",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
            {
              id: "2",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
            {
              id: "3",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
            {
              id: "4",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
          ],
        },
        {
          id: "3",
          icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
          name: "materiel 3",
          status: "打烊",
          start_time: "09:30",
          end_time: "9:30",
          distanceSpace: 3,
          total_sale: "3000",
          dilivery_start_price: "20",
          dilivery_price: "1",
          distanceTime: 30,
          goods: [
            {
              id: "1",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
            {
              id: "2",
              icon: "http://file.yuansheng.com/static/memo/logos/19151604.png",
              name: "商品1",
              price: "20.00",
              original_price: "22.00",
            },
          ],
        },
      ],
    },
    children: [],
  },
];
