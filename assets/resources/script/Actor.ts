import Card from "./Card";
import Status from "./Status";

export default class Actor {
    opponent: Actor = null;

    private _hpMax: Number = 0; // 生命上限
    get hpMax(): Number {
        return this._hpMax;
    }
    set hpMax(hpMax: Number) {
        this._hpMax = hpMax;
    }

    private _hp: Number = 0; // 当前生命
    get hp(): Number {
        return this._hp;
    }
    set hp(hp: Number) {
        if (this._hp > hp) { // 伤害
            // 检测反击
            // 检测伤害减比
            // 检测伤害加比
            // 检测斩杀
            // 检测伤害吸收
            this._hp = hp;
        } else if (this._hp < hp) { // 治疗
            // 检测禁止治疗
            // 检测治疗减比
            // 检测治疗加比
            // 检测过量转换为护盾
            this._hp = hp;
        } else { // 相等

        }
    }

    private _mp: Number = 0; // 魂力
    get mp(): Number {
        return this._mp;
    }
    set mp(mp: Number) {
        this._mp = mp;
        if (this._mp > mp) { // mp减少
            this._mp = mp;
        } else if (this._mp < mp) { // mp增加
            this._mp = mp;
        } else { // 相等

        }
    }

    private _atk: Number = 0; // 攻击
    get atk(): Number {
        return this._atk;
    }
    set atk(atk: Number) {
        this._atk = atk;
    }

    private _def: Number = 0; // 防御
    get def(): Number {
        return this._def;
    }
    set def(def: Number) {
        this._def = def;
    }

    private _pre: Number = 0; // 会心
    get pre(): Number {
        return this._pre;
    }
    set pre(pre:Number) {
        this._pre = pre;
    }

    private _tgh: Number = 0; // 韧性
    get tgh(): Number {
        return this._tgh;
    }
    set tgh(tgh: Number) {
        this._tgh = tgh;
    }

    private _deck: Card[] = null; // 牌组
    private _hand: Card[] = null; // 手牌
    private _status: Status[] = null;  // 状态
    private _drawNumber: Number = 3; // 抽卡数量

    constructor(hpMax:Number, hp:Number, mp:Number, atk:Number, def:Number, pre:Number, tgh:Number, deck:Card[]){

    }

    checkStatus(occasion: Number) { // 检查并处理该时机生效的状态
        // 负面状态
        // 正面状态
        // 装备
    }

    drawCard(number: Number, type: String, subType: String) { // 自deck中抽若干张至手牌,可选指定类型和子类型
        // 如果卡牌组小等于3，则塞入普通攻击直到3张
        // 如果有指定类型，则缩小候选库

        
        // 处理废弃
        
    }

    checkHand() { // 检查手牌是否可用
        
    }

    playCard() { // 出牌

    }

    BeAttacked() { // 受击

    }

}
