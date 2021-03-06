export default class Card {
    /*
    普通攻击	造成100%攻击力的伤害。
    紫檀寸劲	有几率攻击1至4次，每次攻击造成50%攻击力的伤害。
    惊神刺	造成100%攻击力的伤害，并有几率在接下来的2回合内使敌方眩晕；但灵魂境界低于对方时，技能无效。
    杀戮剑道	造成90%攻击力的伤害，并使自己获得一层煞气。
    万煞生死轮	造成150%攻击力的伤害，并会引爆身上所有煞气，使伤害翻煞气的倍数。
    八曲飞烟	免疫下次遭受的普通伤害（属性伤害无法免疫）。
    极雷剑意	造成100%攻击力伤害，并附加50%攻击力的雷属性伤害，命中后，将在敌人身上留下剑意。
    天剑	引爆目标身上所有叠加的剑意，造成80%攻击力的倍数伤害。
    */
    /* 时机整理
    你的回合开始时
    每使用2张攻击牌时
    获得法力时
    每使用1张攻击牌时
    闪避时
    对自己造成伤害时
    你的回合结束时
    对自己造成伤害时
    抽牌时
    */
    /* 效果整理
    复制1张临时牌加入手牌
    伤害翻倍
    
    已损失生命每有5点，伤害+1
    造成6点穿刺伤害
    下回合少抽1张牌
    每装备1件装备，额外造成2点伤害
    移除
    
    敌方生命低于30%时，造成10倍伤害
    破坏敌方1张装备牌，如果成功，则对敌方造成3点伤害
    下回合额外抽1张牌
    将2张恶作剧牌洗入敌方的牌组
    随机丢弃1张牌
    获得x点速度
    获得x点韧性
    获得x点防御
    恢复x点生命
    获得x点魂力
    获得x点会心
    获得x点韧性
    */
    
    id: Number = 0;
    name: String = "";
    type: Number = 0; // 牌的类型：攻击、行动、装备、魂力、法术、反制、特殊
    subType: Number = 0; // 牌的子类型：护甲、武器等
    max: Number = 3; // 最大进卡组数量
    percent: Number = 0; // 技能触发概率
    
    // 技能触发条件(如果不满足条件，技能不会触发)
    // 临时标记： 生效后消失，不会回到牌组


    // drawCard: Number = 0; // 获得卡牌
    // drawCardType: Number = 0; // 获得类型，不指定时，则全牌组获得
    // drawCardSubType: Number = 0; // 获得子类型：如装备牌下的护甲、武器，不指定时，则全类型获得


    attachStatus: String = ""; // 获得什么状态
    attachDisplay: Boolean = false; // 状态是否显示
    attachProbability: Number = 0; // 获得状态的几率
    attachTarget: Number = 0; // 获得状态的目标
    attachValue: Number[] = []; // 获得状态的参数
    attachType: Number = 0; // 获得状态的类型
    attachRepeat: Number = 0; // 获得状态的次数
    occasion: Number = 0; // 触发状态的时机: 0:立刻
    elapse: Number = 0; // 持续回合
    removed: Boolean = false; // 移除
    //

    
    // 技能附加该状态的几率

    // 技能消耗（行动力，魂力）

    // 消耗附加状态
    // 消耗附加状态层数，达到什么效果

    // 监听行为：攻击、受击、生命
    // 监听次数
    // 满足后触发

    // 复制加入手牌
    // 复制次数
    // 复制目标

    // 给予护甲

    // 获得手牌
    // 随机、指定、抽取
    // 数量
}
// 状态的效果