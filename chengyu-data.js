// chengyu-data.js - 243 Common Chinese Idioms
const CHENGYU_SET = [
    {
        chengyu: "画蛇添足",
        pinyin: "huà shé tiān zú",
        literalTranslation: "Draw a snake, add feet",
        simpleMeaning: "To overdo something and ruin it",
        breakdown: [{char:"画",pinyin:"huà",english:"draw"},{char:"蛇",pinyin:"shé",english:"snake"},{char:"添",pinyin:"tiān",english:"add"},{char:"足",pinyin:"zú",english:"foot"}],
        scenarios: [{text:"他给完美的画又加了几笔，反而不好看了。",correct:true},{text:"她认真复习，考试得了满分。",correct:false},{text:"演讲稿已经很好了，他又加了一堆废话。",correct:true}]
    },
    {
        chengyu: "对牛弹琴",
        pinyin: "duì niú tán qín",
        literalTranslation: "Play lute to a cow",
        simpleMeaning: "Talk to someone who doesn't understand",
        breakdown: [{char:"对",pinyin:"duì",english:"to"},{char:"牛",pinyin:"niú",english:"cow"},{char:"弹",pinyin:"tán",english:"play"},{char:"琴",pinyin:"qín",english:"lute"}],
        scenarios: [{text:"给不懂代码的人解释算法，他完全听不懂。",correct:true},{text:"老师讲解难题，学生很快理解了。",correct:false},{text:"跟从不听古典乐的人讲贝多芬。",correct:true}]
    },
    {
        chengyu: "守株待兔",
        pinyin: "shǒu zhū dài tù",
        literalTranslation: "Guard stump, wait for rabbit",
        simpleMeaning: "Wait for luck instead of working",
        breakdown: [{char:"守",pinyin:"shǒu",english:"guard"},{char:"株",pinyin:"zhū",english:"stump"},{char:"待",pinyin:"dài",english:"wait"},{char:"兔",pinyin:"tù",english:"rabbit"}],
        scenarios: [{text:"公司不创新，天天坐等老客户。",correct:true},{text:"他每天勤奋工作，主动找机会。",correct:false},{text:"上次蒙对题，这次不复习还想靠运气。",correct:true}]
    },
    {
        chengyu: "井底之蛙",
        pinyin: "jǐng dǐ zhī wā",
        literalTranslation: "Frog at bottom of well",
        simpleMeaning: "Narrow-minded person",
        breakdown: [{char:"井",pinyin:"jǐng",english:"well"},{char:"底",pinyin:"dǐ",english:"bottom"},{char:"之",pinyin:"zhī",english:"'s"},{char:"蛙",pinyin:"wā",english:"frog"}],
        scenarios: [{text:"从没出过省，觉得家乡是全世界最好。",correct:true},{text:"环游世界后分享各地见闻。",correct:false},{text:"只懂自己专业，看不起其他领域。",correct:true}]
    },
    {
        chengyu: "未雨绸缪",
        pinyin: "wèi yǔ chóu móu",
        literalTranslation: "Before rain, bind windows",
        simpleMeaning: "Prepare in advance",
        breakdown: [{char:"未",pinyin:"wèi",english:"not yet"},{char:"雨",pinyin:"yǔ",english:"rain"},{char:"绸缪",pinyin:"chóu móu",english:"bind"}],
        scenarios: [{text:"每月存钱以防生病或失业。",correct:true},{text:"花光所有积蓄，生病没钱看病。",correct:false},{text:"台风来前提前加固门窗。",correct:true}]
    },
    {
        chengyu: "杯弓蛇影",
        pinyin: "bēi gōng shé yǐng",
        literalTranslation: "See snake in cup",
        simpleMeaning: "Suspicious and fearful",
        breakdown: [{char:"杯",pinyin:"bēi",english:"cup"},{char:"弓",pinyin:"gōng",english:"bow"},{char:"蛇",pinyin:"shé",english:"snake"},{char:"影",pinyin:"yǐng",english:"shadow"}],
        scenarios: [{text:"听到一声响就吓得以为是贼。",correct:true},{text:"冷静分析问题找到真相。",correct:false},{text:"看到影子就以为是鬼。",correct:true}]
    },
    {
        chengyu: "亡羊补牢",
        pinyin: "wáng yáng bǔ láo",
        literalTranslation: "Lost sheep, fix pen",
        simpleMeaning: "Fix problem before it's too late",
        breakdown: [{char:"亡",pinyin:"wáng",english:"lost"},{char:"羊",pinyin:"yáng",english:"sheep"},{char:"补",pinyin:"bǔ",english:"fix"},{char:"牢",pinyin:"láo",english:"pen"}],
        scenarios: [{text:"考试失败后开始认真复习。",correct:true},{text:"发现漏洞后及时修补。",correct:true},{text:"明知有问题却不管。",correct:false}]
    },
    {
        chengyu: "掩耳盗铃",
        pinyin: "yǎn ěr dào líng",
        literalTranslation: "Cover ears, steal bell",
        simpleMeaning: "Deceive oneself",
        breakdown: [{char:"掩",pinyin:"yǎn",english:"cover"},{char:"耳",pinyin:"ěr",english:"ear"},{char:"盗",pinyin:"dào",english:"steal"},{char:"铃",pinyin:"líng",english:"bell"}],
        scenarios: [{text:"作弊以为老师看不见。",correct:true},{text:"犯错后假装没发生。",correct:true},{text:"承认错误并改正。",correct:false}]
    },
    {
        chengyu: "滥竽充数",
        pinyin: "làn yú chōng shù",
        literalTranslation: "Pretend to play yu",
        simpleMeaning: "Fake it in a group",
        breakdown: [{char:"滥",pinyin:"làn",english:"false"},{char:"竽",pinyin:"yú",english:"instrument"},{char:"充",pinyin:"chōng",english:"pretend"},{char:"数",pinyin:"shù",english:"count"}],
        scenarios: [{text:"团队里不干活只拿工资。",correct:true},{text:"不懂装懂混在专家里。",correct:true},{text:"靠真本事获得职位。",correct:false}]
    },
    {
        chengyu: "买椟还珠",
        pinyin: "mǎi dú huán zhū",
        literalTranslation: "Buy box, return pearl",
        simpleMeaning: "Choose form over substance",
        breakdown: [{char:"买",pinyin:"mǎi",english:"buy"},{char:"椟",pinyin:"dú",english:"box"},{char:"还",pinyin:"huán",english:"return"},{char:"珠",pinyin:"zhū",english:"pearl"}],
        scenarios: [{text:"只看包装漂亮就买，不管质量。",correct:true},{text:"选工作只看薪水不看发展。",correct:true},{text:"重视产品实际功能。",correct:false}]
    },
    {
        chengyu: "塞翁失马",
        pinyin: "sài wēng shī mǎ",
        literalTranslation: "Old man lost horse",
        simpleMeaning: "Bad luck may bring good",
        breakdown: [{char:"塞",pinyin:"sài",english:"border"},{char:"翁",pinyin:"wēng",english:"old man"},{char:"失",pinyin:"shī",english:"lose"},{char:"马",pinyin:"mǎ",english:"horse"}],
        scenarios: [{text:"丢了钱包，但因此没赶上出事的车。",correct:true},{text:"被裁员后找到了更好的工作。",correct:true},{text:"坏事没有任何转机。",correct:false}]
    },
    {
        chengyu: "愚公移山",
        pinyin: "yú gōng yí shān",
        literalTranslation: "Foolish old man moves mountain",
        simpleMeaning: "Perseverance pays off",
        breakdown: [{char:"愚",pinyin:"yú",english:"foolish"},{char:"公",pinyin:"gōng",english:"old man"},{char:"移",pinyin:"yí",english:"move"},{char:"山",pinyin:"shān",english:"mountain"}],
        scenarios: [{text:"每天坚持学英语，终于能流利交流。",correct:true},{text:"遇到困难就放弃。",correct:false},{text:"花十年时间完成一个大项目。",correct:true}]
    },
    {
        chengyu: "叶公好龙",
        pinyin: "yè gōng hào lóng",
        literalTranslation: "Lord Ye loves dragons",
        simpleMeaning: "Fake love for something",
        breakdown: [{char:"叶",pinyin:"yè",english:"Ye"},{char:"公",pinyin:"gōng",english:"lord"},{char:"好",pinyin:"hào",english:"love"},{char:"龙",pinyin:"lóng",english:"dragon"}],
        scenarios: [{text:"嘴上说喜欢户外，从不去徒步。",correct:true},{text:"自称爱读书但一本书没读完。",correct:true},{text:"真正热爱并坚持爱好。",correct:false}]
    },
    {
        chengyu: "狐假虎威",
        pinyin: "hú jiǎ hǔ wēi",
        literalTranslation: "Fox borrows tiger's might",
        simpleMeaning: "Bully using others' power",
        breakdown: [{char:"狐",pinyin:"hú",english:"fox"},{char:"假",pinyin:"jiǎ",english:"borrow"},{char:"虎",pinyin:"hǔ",english:"tiger"},{char:"威",pinyin:"wēi",english:"power"}],
        scenarios: [{text:"仗着老板的关系欺负同事。",correct:true},{text:"靠自己的实力赢得尊重。",correct:false},{text:"借着领导的名义发号施令。",correct:true}]
    },
    {
        chengyu: "胸有成竹",
        pinyin: "xiōng yǒu chéng zhú",
        literalTranslation: "Have bamboo in chest",
        simpleMeaning: "Well-prepared, confident",
        breakdown: [{char:"胸",pinyin:"xiōng",english:"chest"},{char:"有",pinyin:"yǒu",english:"have"},{char:"成",pinyin:"chéng",english:"ready"},{char:"竹",pinyin:"zhú",english:"bamboo"}],
        scenarios: [{text:"考前复习充分，信心满满。",correct:true},{text:"演讲前准备很久，不紧张。",correct:true},{text:"毫无准备就去面试。",correct:false}]
    },
    {
        chengyu: "指鹿为马",
        pinyin: "zhǐ lù wéi mǎ",
        literalTranslation: "Call deer a horse",
        simpleMeaning: "Deliberately misrepresent",
        breakdown: [{char:"指",pinyin:"zhǐ",english:"point"},{char:"鹿",pinyin:"lù",english:"deer"},{char:"为",pinyin:"wéi",english:"as"},{char:"马",pinyin:"mǎ",english:"horse"}],
        scenarios: [{text:"明明错了，硬说对。",correct:true},{text:"颠倒黑白，混淆是非。",correct:true},{text:"诚实承认事实。",correct:false}]
    },
    {
        chengyu: "三心二意",
        pinyin: "sān xīn èr yì",
        literalTranslation: "Three hearts two minds",
        simpleMeaning: "Indecisive, unfocused",
        breakdown: [{char:"三",pinyin:"sān",english:"three"},{char:"心",pinyin:"xīn",english:"heart"},{char:"二",pinyin:"èr",english:"two"},{char:"意",pinyin:"yì",english:"mind"}],
        scenarios: [{text:"同时做几件事，一件都没做好。",correct:true},{text:"今天想学这个，明天又想学那个。",correct:true},{text:"专注做完一件事再做下一件。",correct:false}]
    },
    {
        chengyu: "一心一意",
        pinyin: "yī xīn yī yì",
        literalTranslation: "One heart one mind",
        simpleMeaning: "Single-minded, focused",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"心",pinyin:"xīn",english:"heart"},{char:"一",pinyin:"yī",english:"one"},{char:"意",pinyin:"yì",english:"mind"}],
        scenarios: [{text:"专心学习不玩手机。",correct:true},{text:"做完这件事才做下一件。",correct:true},{text:"一边工作一边刷视频。",correct:false}]
    },
    {
        chengyu: "目瞪口呆",
        pinyin: "mù dèng kǒu dāi",
        literalTranslation: "Eyes wide, mouth frozen",
        simpleMeaning: "Stunned speechless",
        breakdown: [{char:"目",pinyin:"mù",english:"eye"},{char:"瞪",pinyin:"dèng",english:"stare"},{char:"口",pinyin:"kǒu",english:"mouth"},{char:"呆",pinyin:"dāi",english:"dumb"}],
        scenarios: [{text:"看到惊人的消息愣在原地。",correct:true},{text:"魔术太神奇看呆了。",correct:true},{text:"早有心理准备很平静。",correct:false}]
    },
    {
        chengyu: "画龙点睛",
        pinyin: "huà lóng diǎn jīng",
        literalTranslation: "Draw dragon, dot eyes",
        simpleMeaning: "Add crucial finishing touch",
        breakdown: [{char:"画",pinyin:"huà",english:"draw"},{char:"龙",pinyin:"lóng",english:"dragon"},{char:"点",pinyin:"diǎn",english:"dot"},{char:"睛",pinyin:"jīng",english:"eye"}],
        scenarios: [{text:"报告最后加了一句关键总结。",correct:true},{text:"一句话让整个演讲升华了。",correct:true},{text:"加了很多没用的话反而乱了。",correct:false}]
    },
    {
        chengyu: "开门见山",
        pinyin: "kāi mén jiàn shān",
        literalTranslation: "Open door, see mountain",
        simpleMeaning: "Get straight to the point",
        breakdown: [{char:"开",pinyin:"kāi",english:"open"},{char:"门",pinyin:"mén",english:"door"},{char:"见",pinyin:"jiàn",english:"see"},{char:"山",pinyin:"shān",english:"mountain"}],
        scenarios: [{text:"开会直接说问题，不绕弯子。",correct:true},{text:"说话直奔主题不闲聊。",correct:true},{text:"说了半小时废话才进入正题。",correct:false}]
    },
    {
        chengyu: "九牛一毛",
        pinyin: "jiǔ niú yī máo",
        literalTranslation: "One hair from nine cows",
        simpleMeaning: "A tiny fraction",
        breakdown: [{char:"九",pinyin:"jiǔ",english:"nine"},{char:"牛",pinyin:"niú",english:"cow"},{char:"一",pinyin:"yī",english:"one"},{char:"毛",pinyin:"máo",english:"hair"}],
        scenarios: [{text:"损失很大但对公司只是九牛一毛。",correct:true},{text:"捐的钱对总需求微不足道。",correct:true},{text:"花了大部分积蓄所剩无几。",correct:false}]
    },
    {
        chengyu: "一箭双雕",
        pinyin: "yī jiàn shuāng diāo",
        literalTranslation: "One arrow, two eagles",
        simpleMeaning: "Kill two birds with one stone",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"箭",pinyin:"jiàn",english:"arrow"},{char:"双",pinyin:"shuāng",english:"double"},{char:"雕",pinyin:"diāo",english:"eagle"}],
        scenarios: [{text:"出差同时拜访客户和旅游。",correct:true},{text:"锻炼身体又能减肥。",correct:true},{text:"做一件事只得到一个好处。",correct:false}]
    },
    {
        chengyu: "千篇一律",
        pinyin: "qiān piān yī lǜ",
        literalTranslation: "Thousand pieces, same rule",
        simpleMeaning: "Boringly repetitive",
        breakdown: [{char:"千",pinyin:"qiān",english:"thousand"},{char:"篇",pinyin:"piān",english:"piece"},{char:"一",pinyin:"yī",english:"one"},{char:"律",pinyin:"lǜ",english:"rule"}],
        scenarios: [{text:"所有文章都是一个套路。",correct:true},{text:"每集剧情都一样。",correct:true},{text:"每篇作品都有新意。",correct:false}]
    },
    {
        chengyu: "独一无二",
        pinyin: "dú yī wú èr",
        literalTranslation: "Only one, no second",
        simpleMeaning: "Unique, one of a kind",
        breakdown: [{char:"独",pinyin:"dú",english:"only"},{char:"一",pinyin:"yī",english:"one"},{char:"无",pinyin:"wú",english:"without"},{char:"二",pinyin:"èr",english:"second"}],
        scenarios: [{text:"全世界只有这一件艺术品。",correct:true},{text:"他的风格没人能模仿。",correct:true},{text:"量产的商品到处都有。",correct:false}]
    },
    {
        chengyu: "顺手牵羊",
        pinyin: "shùn shǒu qiān yáng",
        literalTranslation: "Conveniently take sheep",
        simpleMeaning: "Take something opportunistically",
        breakdown: [{char:"顺",pinyin:"shùn",english:"convenient"},{char:"手",pinyin:"shǒu",english:"hand"},{char:"牵",pinyin:"qiān",english:"lead"},{char:"羊",pinyin:"yáng",english:"sheep"}],
        scenarios: [{text:"去同事家顺手拿了支笔。",correct:true},{text:"趁没人注意拿走了小东西。",correct:true},{text:"光明正大买东西。",correct:false}]
    },
    {
        chengyu: "水到渠成",
        pinyin: "shuǐ dào qú chéng",
        literalTranslation: "Water flows, canal forms",
        simpleMeaning: "Things happen naturally",
        breakdown: [{char:"水",pinyin:"shuǐ",english:"water"},{char:"到",pinyin:"dào",english:"arrive"},{char:"渠",pinyin:"qú",english:"canal"},{char:"成",pinyin:"chéng",english:"form"}],
        scenarios: [{text:"努力够了，成功自然来。",correct:true},{text:"条件成熟问题就解决了。",correct:true},{text:"什么都不做等着天上掉馅饼。",correct:false}]
    },
    {
        chengyu: "班门弄斧",
        pinyin: "bān mén nòng fǔ",
        literalTranslation: "Show off axe at Lu Ban's door",
        simpleMeaning: "Show off in front of expert",
        breakdown: [{char:"班",pinyin:"bān",english:"Lu Ban"},{char:"门",pinyin:"mén",english:"door"},{char:"弄",pinyin:"nòng",english:"play"},{char:"斧",pinyin:"fǔ",english:"axe"}],
        scenarios: [{text:"在钢琴家面前炫琴技。",correct:true},{text:"给专家讲他的专业知识。",correct:true},{text:"向前辈虚心请教。",correct:false}]
    },
    {
        chengyu: "走马观花",
        pinyin: "zǒu mǎ guān huā",
        literalTranslation: "Ride horse, glance at flowers",
        simpleMeaning: "Superficial observation",
        breakdown: [{char:"走",pinyin:"zǒu",english:"ride"},{char:"马",pinyin:"mǎ",english:"horse"},{char:"观",pinyin:"guān",english:"view"},{char:"花",pinyin:"huā",english:"flower"}],
        scenarios: [{text:"旅游下车拍照不深入体验。",correct:true},{text:"读书只翻目录不细读。",correct:true},{text:"仔细研究每个细节。",correct:false}]
    },
    {
        chengyu: "鸟语花香",
        pinyin: "niǎo yǔ huā xiāng",
        literalTranslation: "Birds sing, flowers fragrant",
        simpleMeaning: "Beautiful spring scenery",
        breakdown: [{char:"鸟",pinyin:"niǎo",english:"bird"},{char:"语",pinyin:"yǔ",english:"sing"},{char:"花",pinyin:"huā",english:"flower"},{char:"香",pinyin:"xiāng",english:"fragrant"}],
        scenarios: [{text:"春天公园里非常美好。",correct:true},{text:"描述田园风光。",correct:true},{text:"描述城市堵车。",correct:false}]
    },
    {
        chengyu: "心花怒放",
        pinyin: "xīn huā nù fàng",
        literalTranslation: "Heart flowers burst open",
        simpleMeaning: "Extremely happy",
        breakdown: [{char:"心",pinyin:"xīn",english:"heart"},{char:"花",pinyin:"huā",english:"flower"},{char:"怒",pinyin:"nù",english:"burst"},{char:"放",pinyin:"fàng",english:"bloom"}],
        scenarios: [{text:"收到录取通知书非常开心。",correct:true},{text:"中奖后激动不已。",correct:true},{text:"丢了钱包很难过。",correct:false}]
    },
    {
        chengyu: "兴高采烈",
        pinyin: "xìng gāo cǎi liè",
        literalTranslation: "High spirits, strong color",
        simpleMeaning: "In high spirits",
        breakdown: [{char:"兴",pinyin:"xìng",english:"spirit"},{char:"高",pinyin:"gāo",english:"high"},{char:"采",pinyin:"cǎi",english:"color"},{char:"烈",pinyin:"liè",english:"strong"}],
        scenarios: [{text:"去游乐园玩得很开心。",correct:true},{text:"朋友聚会欢声笑语。",correct:true},{text:"考试没考好很沮丧。",correct:false}]
    },
    {
        chengyu: "垂头丧气",
        pinyin: "chuí tóu sàng qì",
        literalTranslation: "Hang head, lose spirit",
        simpleMeaning: "Dejected, disappointed",
        breakdown: [{char:"垂",pinyin:"chuí",english:"hang"},{char:"头",pinyin:"tóu",english:"head"},{char:"丧",pinyin:"sàng",english:"lose"},{char:"气",pinyin:"qì",english:"spirit"}],
        scenarios: [{text:"输了比赛很失落。",correct:true},{text:"面试失败后很沮丧。",correct:true},{text:"升职加薪很高兴。",correct:false}]
    },
    {
        chengyu: "眉开眼笑",
        pinyin: "méi kāi yǎn xiào",
        literalTranslation: "Eyebrows open, eyes smile",
        simpleMeaning: "Beaming with joy",
        breakdown: [{char:"眉",pinyin:"méi",english:"eyebrow"},{char:"开",pinyin:"kāi",english:"open"},{char:"眼",pinyin:"yǎn",english:"eye"},{char:"笑",pinyin:"xiào",english:"smile"}],
        scenarios: [{text:"见到老朋友很开心。",correct:true},{text:"收到礼物满脸笑容。",correct:true},{text:"被批评后很沮丧。",correct:false}]
    },
    {
        chengyu: "怒发冲冠",
        pinyin: "nù fà chōng guān",
        literalTranslation: "Hair stands up with anger",
        simpleMeaning: "Extremely angry",
        breakdown: [{char:"怒",pinyin:"nù",english:"angry"},{char:"发",pinyin:"fà",english:"hair"},{char:"冲",pinyin:"chōng",english:"rise"},{char:"冠",pinyin:"guān",english:"hat"}],
        scenarios: [{text:"被骗后非常愤怒。",correct:true},{text:"被冤枉时火冒三丈。",correct:true},{text:"中奖后很开心。",correct:false}]
    },
    {
        chengyu: "心惊肉跳",
        pinyin: "xīn jīng ròu tiào",
        literalTranslation: "Heart scared, flesh jumps",
        simpleMeaning: "Terrified",
        breakdown: [{char:"心",pinyin:"xīn",english:"heart"},{char:"惊",pinyin:"jīng",english:"scared"},{char:"肉",pinyin:"ròu",english:"flesh"},{char:"跳",pinyin:"tiào",english:"jump"}],
        scenarios: [{text:"看恐怖片很害怕。",correct:true},{text:"差点出车祸吓得要命。",correct:true},{text:"听相声哈哈大笑。",correct:false}]
    },
    {
        chengyu: "欢天喜地",
        pinyin: "huān tiān xǐ dì",
        literalTranslation: "Happy sky, pleased earth",
        simpleMeaning: "Overjoyed",
        breakdown: [{char:"欢",pinyin:"huān",english:"happy"},{char:"天",pinyin:"tiān",english:"sky"},{char:"喜",pinyin:"xǐ",english:"pleased"},{char:"地",pinyin:"dì",english:"earth"}],
        scenarios: [{text:"过年全家人团聚很开心。",correct:true},{text:"结婚那天非常喜庆。",correct:true},{text:"丢了工作很失落。",correct:false}]
    },
    {
        chengyu: "泪如雨下",
        pinyin: "lèi rú yǔ xià",
        literalTranslation: "Tears like rain fall",
        simpleMeaning: "Cry heavily",
        breakdown: [{char:"泪",pinyin:"lèi",english:"tear"},{char:"如",pinyin:"rú",english:"like"},{char:"雨",pinyin:"yǔ",english:"rain"},{char:"下",pinyin:"xià",english:"fall"}],
        scenarios: [{text:"听到噩耗痛哭流涕。",correct:true},{text:"亲人离世非常悲伤。",correct:true},{text:"中彩票大笑。",correct:false}]
    },
    {
        chengyu: "恍然大悟",
        pinyin: "huǎng rán dà wù",
        literalTranslation: "Suddenly realize",
        simpleMeaning: "Sudden realization",
        breakdown: [{char:"恍",pinyin:"huǎng",english:"sudden"},{char:"然",pinyin:"rán",english:"-ly"},{char:"大",pinyin:"dà",english:"great"},{char:"悟",pinyin:"wù",english:"realize"}],
        scenarios: [{text:"听完解释突然明白了。",correct:true},{text:"原来答案这么简单。",correct:true},{text:"一直不懂后来才懂。",correct:false}]
    },
    {
        chengyu: "若有所思",
        pinyin: "ruò yǒu suǒ sī",
        literalTranslation: "Seems to be thinking",
        simpleMeaning: "Lost in thought",
        breakdown: [{char:"若",pinyin:"ruò",english:"seem"},{char:"有",pinyin:"yǒu",english:"have"},{char:"所",pinyin:"suǒ",english:"that which"},{char:"思",pinyin:"sī",english:"think"}],
        scenarios: [{text:"看着窗外发呆在想事。",correct:true},{text:"开会时神情专注在思考。",correct:true},{text:"倒头就睡。",correct:false}]
    },
    {
        chengyu: "心不在焉",
        pinyin: "xīn bù zài yān",
        literalTranslation: "Heart not in it",
        simpleMeaning: "Distracted, inattentive",
        breakdown: [{char:"心",pinyin:"xīn",english:"heart"},{char:"不",pinyin:"bù",english:"not"},{char:"在",pinyin:"zài",english:"in"},{char:"焉",pinyin:"yān",english:"it"}],
        scenarios: [{text:"上课时一直想别的事。",correct:true},{text:"开会时魂不守舍。",correct:true},{text:"专心听讲。",correct:false}]
    },
    {
        chengyu: "全神贯注",
        pinyin: "quán shén guàn zhù",
        literalTranslation: "Whole spirit concentrated",
        simpleMeaning: "Fully focused",
        breakdown: [{char:"全",pinyin:"quán",english:"whole"},{char:"神",pinyin:"shén",english:"spirit"},{char:"贯",pinyin:"guàn",english:"concentrate"},{char:"注",pinyin:"zhù",english:"focus"}],
        scenarios: [{text:"下棋时非常专注。",correct:true},{text:"考试时全神贯注答题。",correct:true},{text:"边工作边玩手机。",correct:false}]
    },
    {
        chengyu: "聚精会神",
        pinyin: "jù jīng huì shén",
        literalTranslation: "Gather energy, meet spirit",
        simpleMeaning: "Concentrate intently",
        breakdown: [{char:"聚",pinyin:"jù",english:"gather"},{char:"精",pinyin:"jīng",english:"energy"},{char:"会",pinyin:"huì",english:"meet"},{char:"神",pinyin:"shén",english:"spirit"}],
        scenarios: [{text:"看电影时目不转睛。",correct:true},{text:"听课非常认真。",correct:true},{text:"分心做别的事。",correct:false}]
    },
    {
        chengyu: "无精打采",
        pinyin: "wú jīng dǎ cǎi",
        literalTranslation: "No energy, low spirit",
        simpleMeaning: "Listless, lethargic",
        breakdown: [{char:"无",pinyin:"wú",english:"no"},{char:"精",pinyin:"jīng",english:"energy"},{char:"打",pinyin:"dǎ",english:"hit"},{char:"采",pinyin:"cǎi",english:"spirit"}],
        scenarios: [{text:"熬夜后很没精神。",correct:true},{text:"生病时萎靡不振。",correct:true},{text:"运动后精力充沛。",correct:false}]
    },
    {
        chengyu: "精神抖擞",
        pinyin: "jīng shén dǒu sǒu",
        literalTranslation: "Spirit shakes",
        simpleMeaning: "Energetic, vigorous",
        breakdown: [{char:"精",pinyin:"jīng",english:"energy"},{char:"神",pinyin:"shén",english:"spirit"},{char:"抖",pinyin:"dǒu",english:"shake"},{char:"擞",pinyin:"sǒu",english:"revive"}],
        scenarios: [{text:"早上起床很有精神。",correct:true},{text:"运动员状态很好。",correct:true},{text:"生病后虚弱无力。",correct:false}]
    },
    {
        chengyu: "筋疲力尽",
        pinyin: "jīn pí lì jìn",
        literalTranslation: "Muscles tired, strength exhausted",
        simpleMeaning: "Exhausted",
        breakdown: [{char:"筋",pinyin:"jīn",english:"muscle"},{char:"疲",pinyin:"pí",english:"tired"},{char:"力",pinyin:"lì",english:"strength"},{char:"尽",pinyin:"jìn",english:"exhaust"}],
        scenarios: [{text:"跑完马拉松很累。",correct:true},{text:"加班到深夜累瘫了。",correct:true},{text:"睡了十小时很有精神。",correct:false}]
    },
    {
        chengyu: "小心翼翼",
        pinyin: "xiǎo xīn yì yì",
        literalTranslation: "Careful, careful",
        simpleMeaning: "Very cautious",
        breakdown: [{char:"小",pinyin:"xiǎo",english:"small"},{char:"心",pinyin:"xīn",english:"heart"},{char:"翼",pinyin:"yì",english:"wing"},{char:"翼",pinyin:"yì",english:"wing"}],
        scenarios: [{text:"端一碗热汤走路很小心。",correct:true},{text:"拿易碎品轻拿轻放。",correct:true},{text:"横冲直撞。",correct:false}]
    },
    {
        chengyu: "粗心大意",
        pinyin: "cū xīn dà yì",
        literalTranslation: "Rough heart, big intent",
        simpleMeaning: "Careless, negligent",
        breakdown: [{char:"粗",pinyin:"cū",english:"rough"},{char:"心",pinyin:"xīn",english:"heart"},{char:"大",pinyin:"dà",english:"big"},{char:"意",pinyin:"yì",english:"intent"}],
        scenarios: [{text:"考试漏了一道题。",correct:true},{text:"出门忘了带钥匙。",correct:true},{text:"仔细检查每个细节。",correct:false}]
    },
    {
        chengyu: "马马虎虎",
        pinyin: "mǎ mǎ hǔ hǔ",
        literalTranslation: "Horse horse, tiger tiger",
        simpleMeaning: "So-so, careless",
        breakdown: [{char:"马",pinyin:"mǎ",english:"horse"},{char:"马",pinyin:"mǎ",english:"horse"},{char:"虎",pinyin:"hǔ",english:"tiger"},{char:"虎",pinyin:"hǔ",english:"tiger"}],
        scenarios: [{text:"工作做得不仔细，凑合着及格。",correct:true},{text:"她做事很认真，每个细节都完美。",correct:false},{text:"考试复习得一般，大概能过。",correct:true}]
    },
    {
        chengyu: "乱七八糟",
        pinyin: "luàn qī bā zāo",
        literalTranslation: "Chaotic seven eight messy",
        simpleMeaning: "Messy, disorganized",
        breakdown: [{char:"乱",pinyin:"luàn",english:"chaotic"},{char:"七",pinyin:"qī",english:"seven"},{char:"八",pinyin:"bā",english:"eight"},{char:"糟",pinyin:"zāo",english:"messy"}],
        scenarios: [{text:"房间衣服扔得到处都是。",correct:true},{text:"桌面收拾得很整齐。",correct:false},{text:"事情安排得毫无条理。",correct:true}]
    },
    {
        chengyu: "一见钟情",
        pinyin: "yī jiàn zhōng qíng",
        literalTranslation: "One look, fall in love",
        simpleMeaning: "Love at first sight",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"见",pinyin:"jiàn",english:"see"},{char:"钟",pinyin:"zhōng",english:"bell"},{char:"情",pinyin:"qíng",english:"feelings"}],
        scenarios: [{text:"他们第一次见面就相爱了。",correct:true},{text:"认识很多年才在一起。",correct:false},{text:"看到对方就心跳加速。",correct:true}]
    },
    {
        chengyu: "举一反三",
        pinyin: "jǔ yī fǎn sān",
        literalTranslation: "Raise one, infer three",
        simpleMeaning: "Learn from analogy",
        breakdown: [{char:"举",pinyin:"jǔ",english:"raise"},{char:"一",pinyin:"yī",english:"one"},{char:"反",pinyin:"fǎn",english:"infer"},{char:"三",pinyin:"sān",english:"three"}],
        scenarios: [{text:"学会一道题就能做同类题。",correct:true},{text:"老师讲什么就只学什么。",correct:false},{text:"举一反三能力很强。",correct:true}]
    },
    {
        chengyu: "朝三暮四",
        pinyin: "zhāo sān mù sì",
        literalTranslation: "Morning three, evening four",
        simpleMeaning: "Changeable, fickle",
        breakdown: [{char:"朝",pinyin:"zhāo",english:"morning"},{char:"三",pinyin:"sān",english:"three"},{char:"暮",pinyin:"mù",english:"evening"},{char:"四",pinyin:"sì",english:"four"}],
        scenarios: [{text:"今天想学这个，明天又想学那个。",correct:true},{text:"一直坚持同一个目标。",correct:false},{text:"频繁换工作。",correct:true}]
    },
    {
        chengyu: "半途而废",
        pinyin: "bàn tú ér fèi",
        literalTranslation: "Half way, then abandon",
        simpleMeaning: "Give up halfway",
        breakdown: [{char:"半",pinyin:"bàn",english:"half"},{char:"途",pinyin:"tú",english:"way"},{char:"而",pinyin:"ér",english:"then"},{char:"废",pinyin:"fèi",english:"abandon"}],
        scenarios: [{text:"学了一个月就放弃了。",correct:true},{text:"坚持到最后成功了。",correct:false},{text:"项目做一半就不做了。",correct:true}]
    },
    {
        chengyu: "坚持不懈",
        pinyin: "jiān chí bù xiè",
        literalTranslation: "Persist without stopping",
        simpleMeaning: "Persevere continuously",
        breakdown: [{char:"坚",pinyin:"jiān",english:"firm"},{char:"持",pinyin:"chí",english:"hold"},{char:"不",pinyin:"bù",english:"not"},{char:"懈",pinyin:"xiè",english:"slack"}],
        scenarios: [{text:"每天练琴从不间断。",correct:true},{text:"遇到困难就放弃。",correct:false},{text:"坚持了三年终于成功。",correct:true}]
    },
    {
        chengyu: "纸上谈兵",
        pinyin: "zhǐ shàng tán bīng",
        literalTranslation: "Discuss war on paper",
        simpleMeaning: "Theoretical but impractical",
        breakdown: [{char:"纸",pinyin:"zhǐ",english:"paper"},{char:"上",pinyin:"shàng",english:"on"},{char:"谈",pinyin:"tán",english:"discuss"},{char:"兵",pinyin:"bīng",english:"war"}],
        scenarios: [{text:"只会理论不会实践。",correct:true},{text:"光说不练假把式。",correct:true},{text:"理论和实践都很强。",correct:false}]
    },
    {
        chengyu: "脚踏实地",
        pinyin: "jiǎo tà shí dì",
        literalTranslation: "Feet step on solid ground",
        simpleMeaning: "Down-to-earth, steady",
        breakdown: [{char:"脚",pinyin:"jiǎo",english:"foot"},{char:"踏",pinyin:"tà",english:"step"},{char:"实",pinyin:"shí",english:"solid"},{char:"地",pinyin:"dì",english:"ground"}],
        scenarios: [{text:"一步一个脚印做事。",correct:true},{text:"不好高骛远。",correct:true},{text:"只想走捷径。",correct:false}]
    },
    {
        chengyu: "锦上添花",
        pinyin: "jǐn shàng tiān huā",
        literalTranslation: "Add flowers to brocade",
        simpleMeaning: "Add to something already good",
        breakdown: [{char:"锦",pinyin:"jǐn",english:"brocade"},{char:"上",pinyin:"shàng",english:"on"},{char:"添",pinyin:"tiān",english:"add"},{char:"花",pinyin:"huā",english:"flower"}],
        scenarios: [{text:"已经很好了，还能更好。",correct:true},{text:"在成功基础上再创佳绩。",correct:true},{text:"雪中送炭帮助急需的人。",correct:false}]
    },
    {
        chengyu: "雪中送炭",
        pinyin: "xuě zhōng sòng tàn",
        literalTranslation: "Send charcoal in snow",
        simpleMeaning: "Help in time of need",
        breakdown: [{char:"雪",pinyin:"xuě",english:"snow"},{char:"中",pinyin:"zhōng",english:"in"},{char:"送",pinyin:"sòng",english:"send"},{char:"炭",pinyin:"tàn",english:"charcoal"}],
        scenarios: [{text:"朋友困难时伸出援手。",correct:true},{text:"在别人最需要时帮助。",correct:true},{text:"锦上添花不是雪中送炭。",correct:false}]
    },
    {
        chengyu: "如鱼得水",
        pinyin: "rú yú dé shuǐ",
        literalTranslation: "Like fish getting water",
        simpleMeaning: "In one's element",
        breakdown: [{char:"如",pinyin:"rú",english:"like"},{char:"鱼",pinyin:"yú",english:"fish"},{char:"得",pinyin:"dé",english:"get"},{char:"水",pinyin:"shuǐ",english:"water"}],
        scenarios: [{text:"到了新岗位发挥很好。",correct:true},{text:"做自己喜欢的事很开心。",correct:true},{text:"处处受限制很难受。",correct:false}]
    },
    {
        chengyu: "对答如流",
        pinyin: "duì dá rú liú",
        literalTranslation: "Answer like flowing water",
        simpleMeaning: "Answer fluently",
        breakdown: [{char:"对",pinyin:"duì",english:"answer"},{char:"答",pinyin:"dá",english:"reply"},{char:"如",pinyin:"rú",english:"like"},{char:"流",pinyin:"liú",english:"flow"}],
        scenarios: [{text:"面试问题回答很流畅。",correct:true},{text:"被问到专业对答如流。",correct:true},{text:"支支吾吾说不出来。",correct:false}]
    },
    {
        chengyu: "唇亡齿寒",
        pinyin: "chún wáng chǐ hán",
        literalTranslation: "Lips gone, teeth feel cold",
        simpleMeaning: "Mutually dependent",
        breakdown: [{char:"唇",pinyin:"chún",english:"lip"},{char:"亡",pinyin:"wáng",english:"gone"},{char:"齿",pinyin:"chǐ",english:"tooth"},{char:"寒",pinyin:"hán",english:"cold"}],
        scenarios: [{text:"邻居有难自己也会受影响。",correct:true},{text:"合作伙伴倒闭自己也会损失。",correct:true},{text:"事不关己高高挂起。",correct:false}]
    },
    {
        chengyu: "坐井观天",
        pinyin: "zuò jǐng guān tiān",
        literalTranslation: "Sit in well, view sky",
        simpleMeaning: "Limited perspective",
        breakdown: [{char:"坐",pinyin:"zuò",english:"sit"},{char:"井",pinyin:"jǐng",english:"well"},{char:"观",pinyin:"guān",english:"view"},{char:"天",pinyin:"tiān",english:"sky"}],
        scenarios: [{text:"从没出过远门见识少。",correct:true},{text:"只知道自己那一亩三分地。",correct:true},{text:"环游世界见多识广。",correct:false}]
    },
    {
        chengyu: "开卷有益",
        pinyin: "kāi juàn yǒu yì",
        literalTranslation: "Open book, have benefit",
        simpleMeaning: "Reading is always beneficial",
        breakdown: [{char:"开",pinyin:"kāi",english:"open"},{char:"卷",pinyin:"juàn",english:"book"},{char:"有",pinyin:"yǒu",english:"have"},{char:"益",pinyin:"yì",english:"benefit"}],
        scenarios: [{text:"多读书总有好处。",correct:true},{text:"每天看书能学到东西。",correct:true},{text:"读书浪费时间。",correct:false}]
    },
    {
        chengyu: "学富五车",
        pinyin: "xué fù wǔ chē",
        literalTranslation: "Knowledge fills five carts",
        simpleMeaning: "Very learned",
        breakdown: [{char:"学",pinyin:"xué",english:"knowledge"},{char:"富",pinyin:"fù",english:"rich"},{char:"五",pinyin:"wǔ",english:"five"},{char:"车",pinyin:"chē",english:"cart"}],
        scenarios: [{text:"读了非常多书知识渊博。",correct:true},{text:"教授学问很深。",correct:true},{text:"没读过什么书。",correct:false}]
    },
    {
        chengyu: "才高八斗",
        pinyin: "cái gāo bā dǒu",
        literalTranslation: "Talent high eight measures",
        simpleMeaning: "Extremely talented",
        breakdown: [{char:"才",pinyin:"cái",english:"talent"},{char:"高",pinyin:"gāo",english:"high"},{char:"八",pinyin:"bā",english:"eight"},{char:"斗",pinyin:"dǒu",english:"measure"}],
        scenarios: [{text:"非常有才华的诗人。",correct:true},{text:"文采斐然才华横溢。",correct:true},{text:"没什么特长。",correct:false}]
    },
    {
        chengyu: "人山人海",
        pinyin: "rén shān rén hǎi",
        literalTranslation: "People mountain people sea",
        simpleMeaning: "Huge crowd",
        breakdown: [{char:"人",pinyin:"rén",english:"people"},{char:"山",pinyin:"shān",english:"mountain"},{char:"人",pinyin:"rén",english:"people"},{char:"海",pinyin:"hǎi",english:"sea"}],
        scenarios: [{text:"节日广场上人非常多。",correct:true},{text:"地铁站挤满了人。",correct:true},{text:"空荡荡没人。",correct:false}]
    },
    {
        chengyu: "车水马龙",
        pinyin: "chē shuǐ mǎ lóng",
        literalTranslation: "Cars like water, horses like dragons",
        simpleMeaning: "Heavy traffic",
        breakdown: [{char:"车",pinyin:"chē",english:"car"},{char:"水",pinyin:"shuǐ",english:"water"},{char:"马",pinyin:"mǎ",english:"horse"},{char:"龙",pinyin:"lóng",english:"dragon"}],
        scenarios: [{text:"市中心交通非常繁忙。",correct:true},{text:"大街上车流不断。",correct:true},{text:"偏僻小路没什么车。",correct:false}]
    },
    {
        chengyu: "门庭若市",
        pinyin: "mén tíng ruò shì",
        literalTranslation: "Door courtyard like market",
        simpleMeaning: "Very busy place",
        breakdown: [{char:"门",pinyin:"mén",english:"door"},{char:"庭",pinyin:"tíng",english:"courtyard"},{char:"若",pinyin:"ruò",english:"like"},{char:"市",pinyin:"shì",english:"market"}],
        scenarios: [{text:"这家店客人非常多。",correct:true},{text:"来拜访的人络绎不绝。",correct:true},{text:"冷冷清清没人来。",correct:false}]
    },
    {
        chengyu: "鸦雀无声",
        pinyin: "yā què wú shēng",
        literalTranslation: "Crow sparrow no sound",
        simpleMeaning: "Dead silent",
        breakdown: [{char:"鸦",pinyin:"yā",english:"crow"},{char:"雀",pinyin:"què",english:"sparrow"},{char:"无",pinyin:"wú",english:"no"},{char:"声",pinyin:"shēng",english:"sound"}],
        scenarios: [{text:"教室里安静得掉根针都能听见。",correct:true},{text:"大家都不说话。",correct:true},{text:"非常吵闹。",correct:false}]
    },
    {
        chengyu: "红红火火",
        pinyin: "hóng hóng huǒ huǒ",
        literalTranslation: "Red red fire fire",
        simpleMeaning: "Prosperous, flourishing",
        breakdown: [{char:"红",pinyin:"hóng",english:"red"},{char:"红",pinyin:"hóng",english:"red"},{char:"火",pinyin:"huǒ",english:"fire"},{char:"火",pinyin:"huǒ",english:"fire"}],
        scenarios: [{text:"生意做得很好。",correct:true},{text:"日子过得兴旺。",correct:true},{text:"事业衰败。",correct:false}]
    },
    {
        chengyu: "明明白白",
        pinyin: "míng míng bái bái",
        literalTranslation: "Bright bright white white",
        simpleMeaning: "Perfectly clear",
        breakdown: [{char:"明",pinyin:"míng",english:"bright"},{char:"明",pinyin:"míng",english:"bright"},{char:"白",pinyin:"bái",english:"white"},{char:"白",pinyin:"bái",english:"white"}],
        scenarios: [{text:"事情说得很清楚。",correct:true},{text:"道理显而易见。",correct:true},{text:"含混不清。",correct:false}]
    },
    {
        chengyu: "糊里糊涂",
        pinyin: "hú lǐ hú tú",
        literalTranslation: "Muddled inside muddled",
        simpleMeaning: "Confused, muddled",
        breakdown: [{char:"糊",pinyin:"hú",english:"muddled"},{char:"里",pinyin:"lǐ",english:"inside"},{char:"糊",pinyin:"hú",english:"muddled"},{char:"涂",pinyin:"tú",english:"muddled"}],
        scenarios: [{text:"不知道发生了什么事。",correct:true},{text:"脑子不清醒迷糊。",correct:true},{text:"思路很清晰。",correct:false}]
    },
    {
        chengyu: "勤勤恳恳",
        pinyin: "qín qín kěn kěn",
        literalTranslation: "Diligent diligent earnest earnest",
        simpleMeaning: "Diligent and conscientious",
        breakdown: [{char:"勤",pinyin:"qín",english:"diligent"},{char:"勤",pinyin:"qín",english:"diligent"},{char:"恳",pinyin:"kěn",english:"earnest"},{char:"恳",pinyin:"kěn",english:"earnest"}],
        scenarios: [{text:"工作非常努力认真。",correct:true},{text:"任劳任怨。",correct:true},{text:"偷懒敷衍。",correct:false}]
    },
    {
        chengyu: "浩浩荡荡",
        pinyin: "hào hào dàng dàng",
        literalTranslation: "Vast vast surging surging",
        simpleMeaning: "Impressive and powerful",
        breakdown: [{char:"浩",pinyin:"hào",english:"vast"},{char:"浩",pinyin:"hào",english:"vast"},{char:"荡",pinyin:"dàng",english:"surging"},{char:"荡",pinyin:"dàng",english:"surging"}],
        scenarios: [{text:"队伍浩浩荡荡地前进。",correct:true},{text:"声势很浩大。",correct:true},{text:"稀稀拉拉几个人。",correct:false}]
    }
];
