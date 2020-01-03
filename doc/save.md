## todo

- @ques egret pro 怎么创建新项目

## 命令

- 编译 `egret run -sourcemap -a`

## api

- 创建图片

```ts
const img = new eui.Image();
img.source = RES.getRes("xxx");
img.source = "xxx";
```

- egret.DisplayObjectContainer vs eui.UILayer

```txt
ui项目 Main基于 eui.UILayer
game项目 Main基于 egret.DisplayObjectContainer
两个的区别在于game项目使用事件侦听来监控场景加载到舞台上
this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
而ui项目使用createChildren函数
```

- @bug Egret UI Editor 卡死
