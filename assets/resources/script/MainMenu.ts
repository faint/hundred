// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {
    mainScene:cc.Node = null;    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let mainScene = cc.find("Canvas/mainScene");
        cc.loader.loadRes("prefab/pages/Story", function(err, prefab) {
            let node = cc.instantiate(prefab);
            mainScene.addChild(node);
        });
        this.mainScene = mainScene;
        
        cc.log("MainMenu start");
    }
    
    // update (dt) {}

    checkInside() {
        let mainScene = this.mainScene;
        mainScene.removeAllChildren();
        cc.loader.loadRes("prefab/pages/Inside", function(err, prefab) {
            let node = cc.instantiate(prefab);
            mainScene.addChild(node);
        });

        cc.log("check Inside")
    }

    checkOutside() {
        let mainScene = this.mainScene;
        mainScene.removeAllChildren();
        cc.loader.loadRes("prefab/pages/Outside", function(err, prefab) {
            let node = cc.instantiate(prefab);
            mainScene.addChild(node);
        });
        cc.log("check outside");
    }

    checkStory() {
        let mainScene = this.mainScene;
        mainScene.removeAllChildren();
        cc.loader.loadRes("prefab/pages/Story", function(err, prefab) {
            let node = cc.instantiate(prefab);
            mainScene.addChild(node);
        });
        cc.log("check story");
    }

    checkHero() {
        cc.director.loadScene("HeroList");
        cc.log("check hero");
    }

    checkSkill() {
        cc.director.loadScene("SkillList");
        cc.log("check skill");
    }
    
}
