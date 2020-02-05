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
export default class Battle extends cc.Component {
    persistScript: cc.Component = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let script = cc.find("persistNode").getComponent("PersistScript");
        cc.log(script);
        cc.log("in battle");
        script.test();

        this.startBattle();
    }

    // update (dt) {}
    
    // 开始战斗
    startBattle() {
        
    }
}
