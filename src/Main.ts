import { platform } from './Platform';
import { ThemeAdapter } from './ThemeAdapter';
import { AssetAdapter } from './AssetAdapter';
import { LoadingUI } from './LoadingUI';
import { TouchEventTest } from './test';

export class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();
        this.stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;

        egret.lifecycle.addLifecycleListener(context => {
            // custom lifecycle plugin
        });

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        };

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        };

        // inject the custom material parser
        // 注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation('eui.IAssetAdapter', assetAdapter);
        egret.registerImplementation('eui.IThemeAdapter', new ThemeAdapter());

        this.runGame().catch(e => {
            console.log(e);
        });

        RES.addEventListener(
            RES.ResourceEvent.CONFIG_COMPLETE,
            (e: RES.ResourceEvent) => {
                console.log(e);
            },
            this,
        );
        RES.addEventListener(
            RES.ResourceEvent.GROUP_COMPLETE,
            (e: RES.ResourceEvent) => {
                console.log(e);
            },
            this,
        );
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
        const result = await RES.getResAsync('description_json');
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig('resource/default.res.json', 'resource/');
            await this.loadTheme();
            await RES.loadGroup('preload', 0, loadingView);
            this.stage.removeChild(loadingView);
        } catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            // 加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme('resource/default.thm.json', this.stage);
            theme.addEventListener(
                eui.UIEvent.COMPLETE,
                () => {
                    resolve();
                },
                this,
            );
        });
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        var test = new TouchEventTest();
        this.addChild(test);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: any[]): void { }
}

declare global {
    interface Window {
        Main: typeof Main;
    }
}

window.Main = Main;
