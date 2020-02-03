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
export default class FloatMenu extends cc.Component {

    @property(cc.Sprite)
    bag: cc.Sprite = null;

    @property(cc.Sprite)
    quest: cc.Sprite = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}

    start () {
        if (this.bag != null) {
            this.bag.node.on(cc.Node.EventType.TOUCH_END, function() {
                cc.director.loadScene("Bag");
            });
        }

        if (this.quest != null) {
            this.quest.node.on(cc.Node.EventType.TOUCH_END, function() {
                cc.director.loadScene("Quest");
            });
        }
    }


}
