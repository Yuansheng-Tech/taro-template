import i18next from 'i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend'; // fallback http load
// import Fetch from 'i18next-fetch-backend';
import Taro from '@tarojs/taro';
import Storage from './common/utils/storage'
import { T_URL } from './base/url.config'

i18next
  .use(Backend)
  .init({
    // lng: 'MetaStoryMedia',
    debug: true,

    // 浏览器语言检测
    load: 'languageOnly', // en-GB 使用 en
    lng: navigator.language || navigator.userLanguage,

    // resources: {
    //   yuanshengyoupin: {
    //     zh: JSON.parse(Taro.getStorageSync('i18next_yuanshengyoupin-zh') || "{}")
    //   }
    // },
    fallbackLng: ['zh'],
    preload: ['zh'],
    ns: ['MetaStoryMedia'],
    defaultNS: 'MetaStoryMedia',
    keySeparator: false, // Allow usage of dots in keys
    nsSeparator: false,
    initImmediate: false,
    backend: {
      backends: [
        LocalStorageBackend,  // primary
        HttpApi               // fallback
      ],
      backendOptions: [{
        // prefix for stored languages
        prefix: 'i18next_',

        // expiration
        expirationTime: 7*24*60*60*1000,

        // Version applied to all languages, can be overriden using the option `versions`
        defaultVersion: '0.0.1',

        // language versions
        versions: { en: 'v1.2', zh: 'v1.2' },

        // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
        store: Storage //window.localStorage
      }, {
        // path where resources get loaded from, or a function
        // returning a path:
        // function(lngs, namespaces) { return customPath; }
        // the returned path will interpolate lng, ns if provided like giving a static path
        loadPath: `${T_URL}/locales/{{lng}}/{{ns}}.json`, // xhr load path for my own fallback
        // loadPath: '/locales/{{lng}}/{{ns}}.json',

        // parse data after it has been fetched
        // in example use https://www.npmjs.com/package/json5
        // here it removes the letter a from the json (bad idea)
        parse: function(data) { 
          return data;
        },

        // path to post missing resources with i18next-fs-backend
        // addPath: 'locales/add/{{lng}}/{{ns}}',

        // define how to stringify the data when adding missing resources
        stringify: JSON.stringify,

        // your backend server supports multiloading
        // /locales/resources.json?lng=de+en&ns=ns1+ns2
        allowMultiLoading: false, // set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading

        multiSeparator: '+',

        // fetch: Taro.request,

        // init option for fetch, for example
        requestOptions: {
          mode: 'cors',
          credentials: 'same-origin',
          cache: 'default',
        },

        // define a custom fetch function
        request: async function (options, url, payload, callback) {
          return await Taro.request({
            url,
            ...options,
            fail: (err, res) => {
              return callback(new Error('fetch json fail;', true), {
                code: 400,
                data: null
              })
            },
            success: (res, err) => {
              return callback(null, {
                ...res,
                status: res.statusCode,
              });
            }
          })
        },
      }]
    }
  }, (err, t) => {
    if (err) return console.error(err)
    // Taro._ = t
    // i18next.reloadResources();
  });

// i18next.on('missingKey', function(lngs, namespace, key, res) {
//   if (key.trim() !== key) {
//     console.log('注意内容前后空格')
//   }
//   if ((key.toLowerCase() !== key) || (key.toUpperCase() !== key)) {
//     console.log('请注意大小写')
//   }
//   return key
// })