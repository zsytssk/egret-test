[新手引导](https://developer.egret.com/cn/docs/page/136)(响应用户操作)

- https://www.jianshu.com/p/4ca22d734831
- Main.ts startAnimation

* @todo egret 搭建一个完整的项目..

## 2020-01-03 09:44:57

- @ques 怎么将发布流程

学习发布流程

## 分享

webpack-dev-server 的 js 的目录

## 2020-01-02 09:37:56

如何使用 js

使用 esmodule

## 2019-12-31 09:30:59

- @ques build 和 run 的区别

  - 我能不能用 run

- 异步加载的资源怎么添加到页面上的

- @ques 事件的 bubbles + cancelable

## 2019-12-30 09:44:40

年底之前将所有的新手引导做一遍...

egret.Event.ADDED_TO_STAGE | Remove ?

- @ques hitTestPoint 精确碰撞? 什么鬼 有没有用现在？

- @ques scrollRect 到底是干什么的

## 2019-12-23 09:38:45

- egret 编辑器太难用了

  - 不能嵌套 ui
  - 不好选中
  - 经常卡死
  - 更新 ui 之后就无法显示了

- @ques egret 艺术字 ArtNumber

  - 自己写？？

- @ques RES.ResourceEvent.CONFIG_COMPLETE | RES.ResourceEvent.GROUP_COMPLETE

  - 这两个的区别分别是做什么的？

- @ques setChildIndex 只有在设置的那一点有效吗 那有什么意义

- @ques RES type 有哪些,,,

## 2019-12-17 09:29:48

- @todo 深入游戏的逻辑

- @ques egret 中的文字字体怎么处理...

- @todo 对局弹出层的显示样式

- @ques egret 能不能不打包某些 js
  - 好像不行
  - 报错无法打开
  - 因为 原来的 egret 都是全局的 定义的 被包在 webpack 中就无法相互访问了
  - 可以将 egret 文件独立出来不适用 webpack...

## 2019-12-16 09:33:40

- @ques assetAdapter ThemeAdapter ?

- @ques 怎么把 panel 变成一个弹出层...
  - 本身就是一个弹出层
    - LayerManager.UI_Popup

* @ques lifecycle.addLifecycleListener

* @ques 微信小游戏 无法加载 fnt 文件怎么处理。。

## save

- @ques hoosky 是什么东西

  - 在 git 命令前自动执行代码...

- @ques egret 是通过什么方式组织代码的

  - 项目从零架构的能力

- @ques 音频文件 如何添加到页面中...

- @ques game|gui|eui 有什么区别

- @opt localTest

  - 禁用 “离开屏幕停止渲染”
  - 添加 ts-lint

- @opt 编译
  - Log.debug 直接创建函数...

## 2019-12-11 09:36:34

- @ques egret 好像也能用 webpack 打包的 我以前试过。。

- @todo 了解 egret 的接口

  - egret.DisplayObjectContainer
  - eui.UILayer
  - button.horizontalCenter | verticalCenter 居中对齐的位置

- @ques RES.getRes 获取的到底是什么东西

* @ques 渲染图片的方式 @前端

  - egret.Bitmap -> egret.Texture 有什么易用的 api
  - new eui.Image(); source=RES.getRes(...)|''

- @ques egret.DisplayObjectContainer vs eui.UILayer

```txt
ui项目 Main基于 eui.UILayer
game项目 Main基于 egret.DisplayObjectContainer
两个的区别在于game项目使用事件侦听来监控场景加载到舞台上
this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
而ui项目使用createChildren函数
```

- @ques egret run 之后 source map 没有了

  - @erget Official

- @ques egret 创建项目之后如何 修改项目的熟悉。。。

- @ques 能不能独立升级 ts 版本。。

  - 应该不行因为这是 egret 内置的功能

* @ques create_app 是干什么的

* @ques egret upgrade | make | apitest | publish | create_lib

* @ques 每次发布的时候就用 publish 发布？

* @sum egret run -a

  - 监听文件修改自动编译

* @ques egret 的 node 的常用方法
  - createChildren

## 2019-12-10 11:32:36

- egret 的新手引导 全部做一遍

* @ques egret 怎么 取消 “离开屏幕停止渲染”

  - -@opt localTest 禁用这个功能

* @ques egret 怎么手动编译

* @opt egret 自动监听文件修改

  - 自己写一个就可以了。。。
  - 防止同时多次促发 自动刷新页面。。。
  - 可以在 url 上添加?localTest=1 促发 socket..., index.html 解析这一段。。。

* @ques 每次都需要 f5 吗

* @ques 失去焦点不渲染 是在什么地方处理的？

* @opt prettier ts-lint...

- 做完之后给 boss 看看

* @todo egret build.. 没有 map
