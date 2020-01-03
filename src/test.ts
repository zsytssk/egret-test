export class TouchEventTest extends egret.DisplayObjectContainer {
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

        console.log(shape);
    }
}
