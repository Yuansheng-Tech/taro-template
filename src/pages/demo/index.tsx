// index.ts
import React from 'react';
import Taro from '@tarojs/taro';
import { $requestAnimationFrame as requestAnimationFrame, $window as window, Clock, PerspectiveCamera, PLATFORM, Scene, sRGBEncoding, TextureLoader, WebGL1Renderer, WebGLRenderTarget, REVISION, Color, BoxBufferGeometry, MeshBasicMaterial, Mesh } from 'three-platformize'
import { WechatPlatform } from 'three-platformize/src/WechatPlatform'
import { GLTFLoader } from 'three-platformize/examples/jsm/loaders/GLTFLoader'
import { DemoDeps, Demo, DemoGLTFLoader, DemoThreeSpritePlayer, DemoDeviceOrientationControls, DemoRGBELoader, DemoSVGLoader, DemoOBJLoader, DemoMeshOpt, DemoEXRLoader, DemoHDRPrefilterTexture, DemoMTLLoader, DemoLWOLoader, DemoFBXLoader, DemoBVHLoader, DemoColladaLoader, DemoMeshQuantization, DemoTTFLoader, DemoSTLLoader, DemoPDBLoader, DemoTGALoader, DemoMemoryTest } from 'three-platformize-demo/src/index'
import { screenshot } from 'three-platformize/tools/screenshot'
import { Canvas, CoverView, View } from '@tarojs/components';

import './index.scss'
console.log('THREE Version', REVISION)

const DEMO_MAP = {
  // BasisLoader: DemoBasisLoader,
  MemoryTest: DemoMemoryTest,

  MeshOpt: DemoMeshOpt,
  TGALoader: DemoTGALoader,
  PDBLoader: DemoPDBLoader,
  STLLoader: DemoSTLLoader,
  TTFLoader: DemoTTFLoader,
  BVHLoader: DemoBVHLoader,
  FBXLoader: DemoFBXLoader,
  LWOLoader: DemoLWOLoader,
  MTLLoader: DemoMTLLoader,
  EXRLoader: DemoEXRLoader,
  OBJLoader: DemoOBJLoader,
  SVGLoader: DemoSVGLoader,
  RGBELoader: DemoRGBELoader,
  GLTFLoader: DemoGLTFLoader,
  ColladaLoader: DemoColladaLoader,
  MeshQuantization: DemoMeshQuantization,
  ThreeSpritePlayer: DemoThreeSpritePlayer,
  HDRPrefilterTexture: DemoHDRPrefilterTexture,
  DeviceOrientationControls: DemoDeviceOrientationControls
}

const getNode = (id) => new Promise(r => Taro.createSelectorQuery().select(id).node().exec(r))

class _C extends React.Component<any, any> {
  disposing = !1
  switchingItem = !1
  deps = {}
  currDemo = null
  platform = null
  helperCanvas = null
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      showCanvas: false,
      currItem: -1,
      menuList: [
        'GLTFLoader',
        'ThreeSpritePlayer',
        'DeviceOrientationControls',
        'RGBELoader',
        'SVGLoader',
        'OBJLoader',
        'MeshOpt',
        'EXRLoader',
        'HDRPrefilterTexture',
        'MTLLoader',
        'LWOLoader',
        'FBXLoader',
        'BVHLoader',
        'ColladaLoader',
        'MeshQuantization',
        'TTFLoader',
        'STLLoader',
        'PDBLoader',
        'TGALoader',
        'MemoryTest',
        // 'BasisLoader(TODO)',
        // 'Raycaster(TODO)',
        // 'Geometry(TODO)',
      ]
    }
  }
  onReady() {
    this.onCanvasReady()
  }

  onCanvasReady() {
    console.log('onCanvasReady')
    Promise.all([
      getNode('#gl'),
      getNode('#canvas'),
    ]).then(([glRes, canvasRes]) => {
      // @ts-ignore
      this.initCanvas(glRes[0].node, canvasRes[0].node)
    })
  }

  initCanvas = (canvas, helperCanvas) => {
    const platform = new WechatPlatform(canvas);
    this.platform = platform;
    // platform.enableDeviceOrientation('game');
    PLATFORM.set(platform);

    console.log(window.innerWidth, window.innerHeight)
    console.log(canvas.width, canvas.height)

    const renderer = new WebGL1Renderer({ canvas, antialias: true, alpha: false });
    const camera = new PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    const scene = new Scene();
    const clock = new Clock();
    const gltfLoader = new GLTFLoader();
    const textureLoader = new TextureLoader();

    this.deps = { renderer, camera, scene, clock, gltfLoader, textureLoader }
    this.helperCanvas = helperCanvas;

    scene.position.z = -3;
    scene.background = new Color(0xffffff);
    renderer.outputEncoding = sRGBEncoding;
    renderer.setPixelRatio(2);
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.width, canvas.height);

    const render = () => {
      if (this.disposing) return
      requestAnimationFrame(render);
      (this.currDemo as Demo)?.update()
      renderer.render(scene, camera);
    }

    render()
    console.log('canvas inited')
  }

  onMenuClick = () => {
    const showMenu = !this.state.showMenu
    if (showMenu) {
      this.setState({ showMenu, showCanvas: false })
    } else {
      this.setState({ showMenu })
      setTimeout(() => {
        this.setState({ showCanvas: true })
      }, 330)
    }
  }

  onMenuItemClick = async (e) => {
    const { i, item } = e.currentTarget.dataset;
    Taro.showLoading({ mask: false, title: '加载中' })
    if (this.switchingItem || !DEMO_MAP[item]) return

    (this.currDemo as Demo)?.dispose();
    this.switchingItem = true;
    this.currDemo = null as unknown as Demo;

    const demo = new (DEMO_MAP[item])(this.deps) as Demo;
    await demo.init();
    this.currDemo = demo;
    this.setState({ currItem: i })
    this.onMenuClick()
    this.switchingItem = false
    Taro.hideLoading()
  }

  onTX = (e) => {
    this.platform.dispatchTouchEvent(e);
    this.platform.dispatchTouchEvent(e);
  }

  screenshot = () => {
    const { renderer, scene, camera } = this.deps
    const [data, w, h] = screenshot(renderer, scene, camera, WebGLRenderTarget);
    const ctx = this.helperCanvas.getContext('2d')
    const imgData = this.helperCanvas.createImageData(data, w, h);
    this.helperCanvas.height = imgData.height;
    this.helperCanvas.width = imgData.width;
    ctx.putImageData(imgData, 0, 0);
    const imgDataFromCanvas = ctx.getImageData(0, 0, w, h)
    const hasPixel = imgDataFromCanvas.data.some(i => i !== 0)
    console.log('hasPixel', hasPixel)
    Taro.canvasToTempFilePath({
      // @ts-ignore
      canvas: this.helperCanvas,
      success(res) {
        Taro.previewImage({
          urls: [res.tempFilePath],
        })
      }
    })
  }

  screenrecord= async () => {
    console.log('screenrecord clicked')
    const fps = 20
    const canvas = this.deps.renderer.domElement;
    const recorder = Taro.createMediaRecorder(canvas, {
      fps,
      videoBitsPerSecond: 600,
      duration: 5,
    })

    await new Promise(resolve => {
      recorder.on('start', resolve)
      recorder.start()
    })
    console.log('start')

    let frames = fps * 5
    while (frames--) {
      await new Promise(resolve => recorder.requestFrame(resolve))
      await new Promise(resolve => setTimeout(resolve, 1000 / fps))
      console.log(frames)
      // render()
    }

    const { tempFilePath } = await new Promise(resolve => {
      recorder.on('stop', resolve)
      recorder.stop()
    })
    console.log(tempFilePath)

    recorder.destroy()

    Taro.previewMedia({
      sources: [{
        url: tempFilePath,
        type: "video"
      }]
    })
  }

  onUnload= () => {
    this.disposing = true;
    (this.currDemo as Demo)?.dispose()
    PLATFORM.dispose()
  }

  onShareAppMessage= () => { }
  render() {
    const { showMenu, currItem, idx, menuList, showCanvas } = this.state
    return (
      <View className="page">
        <View className="nav-bar">
          <View className="title">Three-Platformize 微信小程序</View>
          <View className="menu" onClick={this.onMenuClick}>
            示例
          </View>
        </View>
        <View className={'menu-can ' + (showMenu ? 'active' : '')}>
          {menuList.map((item, idx) => {
            return (
              <View
                className={'menu-item ' + (currItem === idx ? 'active' : '')}
                data-i={idx}
                key={item.idx}
                data-item={item}
                onClick={this.onMenuItemClick}
              >
                {item}
              </View>
            )
          })}
        </View>
        <Canvas
          className={'canvas ' + (showCanvas ? '' : 'hide')}
          id="gl"
          type="webgl"
          onTouchStart={this.onTX}
          onTouchMove={this.onTX}
          onTouchEnd={this.onTX}
        >
        </Canvas>
        <Canvas className="helper-canvas" type="2d" id="canvas"></Canvas>
        
        <CoverView className="btn-screenshot" onClick={this.screenshot}>
          截图
        </CoverView>
        <CoverView className="btn-screenrecord" onClick={this.screenrecord}>
          录屏
        </CoverView>
      </View>
    )
  }
}

export default _C
