import { createBitmapByName } from './utils';

export class TouchEventTest extends egret.DisplayObjectContainer {
    //绘制文本
    private txt: egret.TextField;
    public constructor() {
        super();
        this.addEventListener(
            egret.Event.ADDED_TO_STAGE,
            this.onAddToStage,
            this,
        );
    }
    private onAddToStage(event: egret.Event) {
        const shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 500, 400);
        shape.graphics.endFill();
        this.addChild(shape);

        const img = createBitmapByName('egret_icon_png');
        this.addChild(img);
        img.fillMode = egret.BitmapFillMode.SCALE;
        img.width *= 2;
        img.height *= 3;
        console.log(1);
    }

    private drawText(): void {
        this.txt = new egret.TextField();
        this.txt.size = 12;
        this.txt.x = 250;
        this.txt.width = 200;
        this.txt.height = 200;
        this.txt.text = '事件文字';
        this.addChild(this.txt);
    }
}
