import Actor from "./Actor";

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
    player: Actor = null;
    pc: Actor = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let script = cc.find("persistNode").getComponent("PersistScript");

        this.player = new Actor();
        this.pc = new Actor();
        this.player.opponent = this.pc;
        this.pc.opponent = this.player;

        cc.log("test");
        this.startBattle(this.player, this.pc);
    }

    // update (dt) {}
    
    // 开始战斗
    startBattle(player:Actor, pc:Actor) {
        player.Hit();
    }
}
