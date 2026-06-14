// chengyu-data.js - Common Chinese Idioms
const CHENGYU_SET = [
    // Original idioms
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
        chengyu: "对答如流",
        pinyin: "duì dá rú liú",
        literalTranslation: "Answer like flowing water",
        simpleMeaning: "Answer fluently",
        breakdown: [{char:"对",pinyin:"duì",english:"answer"},{char:"答",pinyin:"dá",english:"reply"},{char:"如",pinyin:"rú",english:"like"},{char:"流",pinyin:"liú",english:"flow"}],
        scenarios: [{text:"面试时问题都答得很流畅。",correct:true},{text:"被问专业问题，回答清楚。",correct:true},{text:"支支吾吾说不出话。",correct:false}]
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
    // Additional idioms
    {
        chengyu: "马马虎虎",
        pinyin: "mǎ mǎ hǔ hǔ",
        literalTranslation: "Horse horse, tiger tiger",
        simpleMeaning: "So-so, careless, not very good",
        breakdown: [{char:"马",pinyin:"mǎ",english:"horse"},{char:"马",pinyin:"mǎ",english:"horse"},{char:"虎",pinyin:"hǔ",english:"tiger"},{char:"虎",pinyin:"hǔ",english:"tiger"}],
        scenarios: [{text:"工作做得不仔细，凑合着及格。",correct:true},{text:"她做事很认真，每个细节都完美。",correct:false},{text:"考试复习得一般，大概能过。",correct:true}]
    },
    {
        chengyu: "乱七八糟",
        pinyin: "luàn qī bā zāo",
        literalTranslation: "Chaotic seven eight messy",
        simpleMeaning: "Messy, disorganized, chaotic",
        breakdown: [{char:"乱",pinyin:"luàn",english:"chaotic"},{char:"七",pinyin:"qī",english:"seven"},{char:"八",pinyin:"bā",english:"eight"},{char:"糟",pinyin:"zāo",english:"messy"}],
        scenarios: [{text:"房间衣服扔得到处都是。",correct:true},{text:"桌面收拾得很整齐。",correct:false},{text:"事情安排得毫无条理。",correct:true}]
    },
    {
        chengyu: "整整齐齐",
        pinyin: "zhěng zhěng qí qí",
        literalTranslation: "Neat neat tidy tidy",
        simpleMeaning: "Neat and tidy",
        breakdown: [{char:"整",pinyin:"zhěng",english:"neat"},{char:"整",pinyin:"zhěng",english:"neat"},{char:"齐",pinyin:"qí",english:"tidy"},{char:"齐",pinyin:"qí",english:"tidy"}],
        scenarios: [{text:"书架上的书摆得很整齐。",correct:true},{text:"房间打扫得一尘不染。",correct:true},{text:"东西扔得乱七八糟。",correct:false}]
    },
    {
        chengyu: "匆匆忙忙",
        pinyin: "cōng cōng máng máng",
        literalTranslation: "Hurry hurry busy busy",
        simpleMeaning: "In a great hurry",
        breakdown: [{char:"匆",pinyin:"cōng",english:"hurry"},{char:"匆",pinyin:"cōng",english:"hurry"},{char:"忙",pinyin:"máng",english:"busy"},{char:"忙",pinyin:"máng",english:"busy"}],
        scenarios: [{text:"赶火车时跑得气喘吁吁。",correct:true},{text:"上班要迟到了很着急。",correct:true},{text:"悠闲地散步。",correct:false}]
    },
    {
        chengyu: "慢慢吞吞",
        pinyin: "màn màn tūn tūn",
        literalTranslation: "Slow slow swallow swallow",
        simpleMeaning: "Very slow, sluggish",
        breakdown: [{char:"慢",pinyin:"màn",english:"slow"},{char:"慢",pinyin:"màn",english:"slow"},{char:"吞",pinyin:"tūn",english:"swallow"},{char:"吞",pinyin:"tūn",english:"swallow"}],
        scenarios: [{text:"吃饭吃了两个小时还没吃完。",correct:true},{text:"动作太慢了让人着急。",correct:true},{text:"做事雷厉风行。",correct:false}]
    },
    {
        chengyu: "高高兴兴",
        pinyin: "gāo gāo xìng xìng",
        literalTranslation: "High high happy happy",
        simpleMeaning: "Cheerful, joyful",
        breakdown: [{char:"高",pinyin:"gāo",english:"high"},{char:"高",pinyin:"gāo",english:"high"},{char:"兴",pinyin:"xìng",english:"happy"},{char:"兴",pinyin:"xìng",english:"happy"}],
        scenarios: [{text:"收到礼物很开心。",correct:true},{text:"周末去游乐园玩得很愉快。",correct:true},{text:"考试不及格很难过。",correct:false}]
    },
    {
        chengyu: "开开心心",
        pinyin: "kāi kāi xīn xīn",
        literalTranslation: "Open open heart heart",
        simpleMeaning: "Happy and carefree",
        breakdown: [{char:"开",pinyin:"kāi",english:"open"},{char:"开",pinyin:"kāi",english:"open"},{char:"心",pinyin:"xīn",english:"heart"},{char:"心",pinyin:"xīn",english:"heart"}],
        scenarios: [{text:"和朋友聚会很快乐。",correct:true},{text:"过生日非常开心。",correct:true},{text:"被老板批评后很沮丧。",correct:false}]
    },
    {
        chengyu: "平平安安",
        pinyin: "píng píng ān ān",
        literalTranslation: "Peace peace safe safe",
        simpleMeaning: "Safe and sound",
        breakdown: [{char:"平",pinyin:"píng",english:"peace"},{char:"平",pinyin:"píng",english:"peace"},{char:"安",pinyin:"ān",english:"safe"},{char:"安",pinyin:"ān",english:"safe"}],
        scenarios: [{text:"一路顺风到达目的地。",correct:true},{text:"全家健康没有病痛。",correct:true},{text:"出了车祸受伤了。",correct:false}]
    },
    {
        chengyu: "干干净净",
        pinyin: "gān gān jìng jìng",
        literalTranslation: "Dry dry clean clean",
        simpleMeaning: "Spotlessly clean",
        breakdown: [{char:"干",pinyin:"gān",english:"dry"},{char:"干",pinyin:"gān",english:"dry"},{char:"净",pinyin:"jìng",english:"clean"},{char:"净",pinyin:"jìng",english:"clean"}],
        scenarios: [{text:"大扫除后房间一尘不染。",correct:true},{text:"衣服洗得很干净。",correct:true},{text:"地上全是垃圾。",correct:false}]
    },
    {
        chengyu: "认认真真",
        pinyin: "rèn rèn zhēn zhēn",
        literalTranslation: "Recognize recognize true true",
        simpleMeaning: "Seriously, conscientiously",
        breakdown: [{char:"认",pinyin:"rèn",english:"recognize"},{char:"认",pinyin:"rèn",english:"recognize"},{char:"真",pinyin:"zhēn",english:"true"},{char:"真",pinyin:"zhēn",english:"true"}],
        scenarios: [{text:"工作一丝不苟。",correct:true},{text:"学习很用功。",correct:true},{text:"马马虎虎应付了事。",correct:false}]
    },
    {
        chengyu: "踏踏实实",
        pinyin: "tà tà shí shí",
        literalTranslation: "Step step solid solid",
        simpleMeaning: "Steady, reliable",
        breakdown: [{char:"踏",pinyin:"tà",english:"step"},{char:"踏",pinyin:"tà",english:"step"},{char:"实",pinyin:"shí",english:"solid"},{char:"实",pinyin:"shí",english:"solid"}],
        scenarios: [{text:"一步一个脚印做事。",correct:true},{text:"做人诚实可靠。",correct:true},{text:"好高骛远不踏实。",correct:false}]
    },
    {
        chengyu: "原原本本",
        pinyin: "yuán yuán běn běn",
        literalTranslation: "Original original root root",
        simpleMeaning: "From beginning to end, exactly as is",
        breakdown: [{char:"原",pinyin:"yuán",english:"original"},{char:"原",pinyin:"yuán",english:"original"},{char:"本",pinyin:"běn",english:"root"},{char:"本",pinyin:"běn",english:"root"}],
        scenarios: [{text:"把事情经过全部说出来。",correct:true},{text:"从头到尾讲清楚。",correct:true},{text:"隐瞒部分事实。",correct:false}]
    },
    {
        chengyu: "陆陆续续",
        pinyin: "lù lù xù xù",
        literalTranslation: "Land land continuous continuous",
        simpleMeaning: "One after another",
        breakdown: [{char:"陆",pinyin:"lù",english:"land"},{char:"陆",pinyin:"lù",english:"land"},{char:"续",pinyin:"xù",english:"continue"},{char:"续",pinyin:"xù",english:"continue"}],
        scenarios: [{text:"客人一个接一个到来。",correct:true},{text:"学生陆续走进教室。",correct:true},{text:"所有人同时到达。",correct:false}]
    },
    {
        chengyu: "断断续续",
        pinyin: "duàn duàn xù xù",
        literalTranslation: "Break break continue continue",
        simpleMeaning: "Intermittent",
        breakdown: [{char:"断",pinyin:"duàn",english:"break"},{char:"断",pinyin:"duàn",english:"break"},{char:"续",pinyin:"xù",english:"continue"},{char:"续",pinyin:"xù",english:"continue"}],
        scenarios: [{text:"信号时有时无。",correct:true},{text:"断断续续下了几天雨。",correct:true},{text:"持续不断地下雨。",correct:false}]
    },
    {
        chengyu: "家家户户",
        pinyin: "jiā jiā hù hù",
        literalTranslation: "Home home door door",
        simpleMeaning: "Every household",
        breakdown: [{char:"家",pinyin:"jiā",english:"home"},{char:"家",pinyin:"jiā",english:"home"},{char:"户",pinyin:"hù",english:"door"},{char:"户",pinyin:"hù",english:"door"}],
        scenarios: [{text:"整个小区都停电了。",correct:true},{text:"每家每户都有电视。",correct:true},{text:"只有少数几家有。",correct:false}]
    },
    {
        chengyu: "风风雨雨",
        pinyin: "fēng fēng yǔ yǔ",
        literalTranslation: "Wind wind rain rain",
        simpleMeaning: "Hardships, difficulties",
        breakdown: [{char:"风",pinyin:"fēng",english:"wind"},{char:"风",pinyin:"fēng",english:"wind"},{char:"雨",pinyin:"yǔ",english:"rain"},{char:"雨",pinyin:"yǔ",english:"rain"}],
        scenarios: [{text:"经历了很多困难。",correct:true},{text:"一路走来不容易。",correct:true},{text:"一帆风顺没有挫折。",correct:false}]
    },
    {
        chengyu: "日日夜夜",
        pinyin: "rì rì yè yè",
        literalTranslation: "Day day night night",
        simpleMeaning: "Day and night",
        breakdown: [{char:"日",pinyin:"rì",english:"day"},{char:"日",pinyin:"rì",english:"day"},{char:"夜",pinyin:"yè",english:"night"},{char:"夜",pinyin:"yè",english:"night"}],
        scenarios: [{text:"连续工作了很长时间。",correct:true},{text:"不分昼夜地努力。",correct:true},{text:"只工作了一小时。",correct:false}]
    },
    {
        chengyu: "祖祖辈辈",
        pinyin: "zǔ zǔ bèi bèi",
        literalTranslation: "Ancestor ancestor generation generation",
        simpleMeaning: "For many generations",
        breakdown: [{char:"祖",pinyin:"zǔ",english:"ancestor"},{char:"祖",pinyin:"zǔ",english:"ancestor"},{char:"辈",pinyin:"bèi",english:"generation"},{char:"辈",pinyin:"bèi",english:"generation"}],
        scenarios: [{text:"家族世代务农。",correct:true},{text:"老一辈传下来的手艺。",correct:true},{text:"这代才开始做。",correct:false}]
    },
    {
        chengyu: "口口声声",
        pinyin: "kǒu kǒu shēng shēng",
        literalTranslation: "Mouth mouth voice voice",
        simpleMeaning: "Keep saying repeatedly",
        breakdown: [{char:"口",pinyin:"kǒu",english:"mouth"},{char:"口",pinyin:"kǒu",english:"mouth"},{char:"声",pinyin:"shēng",english:"voice"},{char:"声",pinyin:"shēng",english:"voice"}],
        scenarios: [{text:"嘴上一直说个不停。",correct:true},{text:"反复强调同一件事。",correct:true},{text:"从来不提。",correct:false}]
    },
    {
        chengyu: "三三两两",
        pinyin: "sān sān liǎng liǎng",
        literalTranslation: "Three three two two",
        simpleMeaning: "In small groups",
        breakdown: [{char:"三",pinyin:"sān",english:"three"},{char:"三",pinyin:"sān",english:"three"},{char:"两",pinyin:"liǎng",english:"two"},{char:"两",pinyin:"liǎng",english:"two"}],
        scenarios: [{text:"几个人结伴而行。",correct:true},{text:"学生三五个一起走。",correct:true},{text:"单独一人。",correct:false}]
    },
    {
        chengyu: "千山万水",
        pinyin: "qiān shān wàn shuǐ",
        literalTranslation: "Thousand mountains ten-thousand waters",
        simpleMeaning: "Long distance, far away",
        breakdown: [{char:"千",pinyin:"qiān",english:"thousand"},{char:"山",pinyin:"shān",english:"mountain"},{char:"万",pinyin:"wàn",english:"ten-thousand"},{char:"水",pinyin:"shuǐ",english:"water"}],
        scenarios: [{text:"距离非常遥远。",correct:true},{text:"走了很远的路。",correct:true},{text:"就在隔壁很近。",correct:false}]
    },
    {
        chengyu: "四面八方",
        pinyin: "sì miàn bā fāng",
        literalTranslation: "Four sides eight directions",
        simpleMeaning: "From all directions",
        breakdown: [{char:"四",pinyin:"sì",english:"four"},{char:"面",pinyin:"miàn",english:"side"},{char:"八",pinyin:"bā",english:"eight"},{char:"方",pinyin:"fāng",english:"direction"}],
        scenarios: [{text:"人们从各处涌来。",correct:true},{text:"四面八方的声音。",correct:true},{text:"只从一个方向来。",correct:false}]
    },
    {
        chengyu: "七上八下",
        pinyin: "qī shàng bā xià",
        literalTranslation: "Seven up eight down",
        simpleMeaning: "Nervous, uneasy",
        breakdown: [{char:"七",pinyin:"qī",english:"seven"},{char:"上",pinyin:"shàng",english:"up"},{char:"八",pinyin:"bā",english:"eight"},{char:"下",pinyin:"xià",english:"down"}],
        scenarios: [{text:"心里很不安。",correct:true},{text:"忐忑不安。",correct:true},{text:"心里很踏实。",correct:false}]
    },
    {
        chengyu: "九死一生",
        pinyin: "jiǔ sǐ yī shēng",
        literalTranslation: "Nine deaths one life",
        simpleMeaning: "Narrow escape from death",
        breakdown: [{char:"九",pinyin:"jiǔ",english:"nine"},{char:"死",pinyin:"sǐ",english:"death"},{char:"一",pinyin:"yī",english:"one"},{char:"生",pinyin:"shēng",english:"life"}],
        scenarios: [{text:"经历了很多危险终于活下来。",correct:true},{text:"从灾难中幸存。",correct:true},{text:"平安无事。",correct:false}]
    },
    {
        chengyu: "十全十美",
        pinyin: "shí quán shí měi",
        literalTranslation: "Ten complete ten beautiful",
        simpleMeaning: "Perfect in every way",
        breakdown: [{char:"十",pinyin:"shí",english:"ten"},{char:"全",pinyin:"quán",english:"complete"},{char:"十",pinyin:"shí",english:"ten"},{char:"美",pinyin:"měi",english:"beautiful"}],
        scenarios: [{text:"没有任何缺点。",correct:true},{text:"完美无瑕。",correct:true},{text:"有很多问题。",correct:false}]
    },
    {
        chengyu: "百发百中",
        pinyin: "bǎi fā bǎi zhòng",
        literalTranslation: "Hundred shots hundred hits",
        simpleMeaning: "Perfect accuracy",
        breakdown: [{char:"百",pinyin:"bǎi",english:"hundred"},{char:"发",pinyin:"fā",english:"shoot"},{char:"百",pinyin:"bǎi",english:"hundred"},{char:"中",pinyin:"zhòng",english:"hit"}],
        scenarios: [{text:"射击全部命中目标。",correct:true},{text:"每次预测都很准。",correct:true},{text:"经常失误。",correct:false}]
    },
    {
        chengyu: "千变万化",
        pinyin: "qiān biàn wàn huà",
        literalTranslation: "Thousand changes ten-thousand transformations",
        simpleMeaning: "Constantly changing",
        breakdown: [{char:"千",pinyin:"qiān",english:"thousand"},{char:"变",pinyin:"biàn",english:"change"},{char:"万",pinyin:"wàn",english:"ten-thousand"},{char:"化",pinyin:"huà",english:"transform"}],
        scenarios: [{text:"景象变化多端。",correct:true},{text:"天气变幻莫测。",correct:true},{text:"一成不变。",correct:false}]
    },
    {
        chengyu: "一举两得",
        pinyin: "yī jǔ liǎng dé",
        literalTranslation: "One action two gains",
        simpleMeaning: "Kill two birds with one stone",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"举",pinyin:"jǔ",english:"action"},{char:"两",pinyin:"liǎng",english:"two"},{char:"得",pinyin:"dé",english:"gain"}],
        scenarios: [{text:"做一件事得到两个好处。",correct:true},{text:"锻炼身体又能减肥。",correct:true},{text:"只得到一个好处。",correct:false}]
    },
    {
        chengyu: "一石二鸟",
        pinyin: "yī shí èr niǎo",
        literalTranslation: "One stone two birds",
        simpleMeaning: "Kill two birds with one stone",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"石",pinyin:"shí",english:"stone"},{char:"二",pinyin:"èr",english:"two"},{char:"鸟",pinyin:"niǎo",english:"bird"}],
        scenarios: [{text:"出差顺便旅游。",correct:true},{text:"一举两得。",correct:true},{text:"只做一件事。",correct:false}]
    },
    {
        chengyu: "四通八达",
        pinyin: "sì tōng bā dá",
        literalTranslation: "Four connects eight reaches",
        simpleMeaning: "Accessible from all directions",
        breakdown: [{char:"四",pinyin:"sì",english:"four"},{char:"通",pinyin:"tōng",english:"connect"},{char:"八",pinyin:"bā",english:"eight"},{char:"达",pinyin:"dá",english:"reach"}],
        scenarios: [{text:"交通非常便利。",correct:true},{text:"很多路都通这里。",correct:true},{text:"只有一条路能到。",correct:false}]
    },
    {
        chengyu: "五光十色",
        pinyin: "wǔ guāng shí sè",
        literalTranslation: "Five light ten colors",
        simpleMeaning: "Bright and colorful",
        breakdown: [{char:"五",pinyin:"wǔ",english:"five"},{char:"光",pinyin:"guāng",english:"light"},{char:"十",pinyin:"shí",english:"ten"},{char:"色",pinyin:"sè",english:"color"}],
        scenarios: [{text:"霓虹灯颜色很漂亮。",correct:true},{text:"风景五彩斑斓。",correct:true},{text:"灰蒙蒙一片。",correct:false}]
    },
    {
        chengyu: "六神无主",
        pinyin: "liù shén wú zhǔ",
        literalTranslation: "Six spirits without master",
        simpleMeaning: "Panicked, confused",
        breakdown: [{char:"六",pinyin:"liù",english:"six"},{char:"神",pinyin:"shén",english:"spirit"},{char:"无",pinyin:"wú",english:"without"},{char:"主",pinyin:"zhǔ",english:"master"}],
        scenarios: [{text:"吓得不知所措。",correct:true},{text:"惊慌失措。",correct:true},{text:"冷静沉着。",correct:false}]
    },
    {
        chengyu: "七嘴八舌",
        pinyin: "qī zuǐ bā shé",
        literalTranslation: "Seven mouth eight tongue",
        simpleMeaning: "Everyone talking at once",
        breakdown: [{char:"七",pinyin:"qī",english:"seven"},{char:"嘴",pinyin:"zuǐ",english:"mouth"},{char:"八",pinyin:"bā",english:"eight"},{char:"舌",pinyin:"shé",english:"tongue"}],
        scenarios: [{text:"大家纷纷发表意见。",correct:true},{text:"争论不休。",correct:true},{text:"安静没人说话。",correct:false}]
    },
    {
        chengyu: "八仙过海",
        pinyin: "bā xiān guò hǎi",
        literalTranslation: "Eight immortals cross sea",
        simpleMeaning: "Each shows their own skill",
        breakdown: [{char:"八",pinyin:"bā",english:"eight"},{char:"仙",pinyin:"xiān",english:"immortal"},{char:"过",pinyin:"guò",english:"cross"},{char:"海",pinyin:"hǎi",english:"sea"}],
        scenarios: [{text:"各显神通。",correct:true},{text:"每个人用自己擅长的方式做事。",correct:true},{text:"都用同样的方法。",correct:false}]
    },
    {
        chengyu: "九牛二虎",
        pinyin: "jiǔ niú èr hǔ",
        literalTranslation: "Nine cows two tigers",
        simpleMeaning: "Tremendous effort",
        breakdown: [{char:"九",pinyin:"jiǔ",english:"nine"},{char:"牛",pinyin:"niú",english:"cow"},{char:"二",pinyin:"èr",english:"two"},{char:"虎",pinyin:"hǔ",english:"tiger"}],
        scenarios: [{text:"费了很大力气。",correct:true},{text:"使出全身力气。",correct:true},{text:"轻而易举。",correct:false}]
    },
    {
        chengyu: "十拿九稳",
        pinyin: "shí ná jiǔ wěn",
        literalTranslation: "Ten grasp nine steady",
        simpleMeaning: "Almost certain",
        breakdown: [{char:"十",pinyin:"shí",english:"ten"},{char:"拿",pinyin:"ná",english:"grasp"},{char:"九",pinyin:"jiǔ",english:"nine"},{char:"稳",pinyin:"wěn",english:"steady"}],
        scenarios: [{text:"有九成把握。",correct:true},{text:"几乎确定能成功。",correct:true},{text:"毫无把握。",correct:false}]
    },
    {
        chengyu: "人山人海",
        pinyin: "rén shān rén hǎi",
        literalTranslation: "People mountain people sea",
        simpleMeaning: "Huge crowd of people",
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
        chengyu: "熙熙攘攘",
        pinyin: "xī xī rǎng rǎng",
        literalTranslation: "Busy busy noisy noisy",
        simpleMeaning: "Bustling with activity",
        breakdown: [{char:"熙",pinyin:"xī",english:"busy"},{char:"熙",pinyin:"xī",english:"busy"},{char:"攘",pinyin:"rǎng",english:"noisy"},{char:"攘",pinyin:"rǎng",english:"noisy"}],
        scenarios: [{text:"火车站人来人往很热闹。",correct:true},{text:"商业街非常繁华。",correct:true},{text:"空荡荡很安静。",correct:false}]
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
        chengyu: "万籁俱寂",
        pinyin: "wàn lài jù jì",
        literalTranslation: "Ten-thousand sounds all silent",
        simpleMeaning: "All sounds are still",
        breakdown: [{char:"万",pinyin:"wàn",english:"ten-thousand"},{char:"籁",pinyin:"lài",english:"sounds"},{char:"俱",pinyin:"jù",english:"all"},{char:"寂",pinyin:"jì",english:"silent"}],
        scenarios: [{text:"深夜一片寂静。",correct:true},{text:"没有任何声音。",correct:true},{text:"热闹非凡。",correct:false}]
    },
    {
        chengyu: "热闹非凡",
        pinyin: "rè nào fēi fán",
        literalTranslation: "Lively not ordinary",
        simpleMeaning: "Extremely lively",
        breakdown: [{char:"热",pinyin:"rè",english:"lively"},{char:"闹",pinyin:"nào",english:"noisy"},{char:"非",pinyin:"fēi",english:"not"},{char:"凡",pinyin:"fán",english:"ordinary"}],
        scenarios: [{text:"庙会上人声鼎沸。",correct:true},{text:"节日气氛很浓厚。",correct:true},{text:"冷冷清清。",correct:false}]
    },
    {
        chengyu: "冷冷清清",
        pinyin: "lěng lěng qīng qīng",
        literalTranslation: "Cold cold clear clear",
        simpleMeaning: "Desolate, quiet",
        breakdown: [{char:"冷",pinyin:"lěng",english:"cold"},{char:"冷",pinyin:"lěng",english:"cold"},{char:"清",pinyin:"qīng",english:"clear"},{char:"清",pinyin:"qīng",english:"clear"}],
        scenarios: [{text:"商场里没什么人。",correct:true},{text:"非常冷清。",correct:true},{text:"人山人海很热闹。",correct:false}]
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
        chengyu: "风风火火",
        pinyin: "fēng fēng huǒ huǒ",
        literalTranslation: "Wind wind fire fire",
        simpleMeaning: "Hasty, energetic",
        breakdown: [{char:"风",pinyin:"fēng",english:"wind"},{char:"风",pinyin:"fēng",english:"wind"},{char:"火",pinyin:"huǒ",english:"fire"},{char:"火",pinyin:"huǒ",english:"fire"}],
        scenarios: [{text:"她做事风风火火效率很高。",correct:true},{text:"跑来跑去很着急的样子。",correct:true},{text:"慢慢吞吞不着急。",correct:false}]
    },
    {
        chengyu: "浩浩荡荡",
        pinyin: "hào hào dàng dàng",
        literalTranslation: "Vast vast surging surging",
        simpleMeaning: "Impressive and powerful",
        breakdown: [{char:"浩",pinyin:"hào",english:"vast"},{char:"浩",pinyin:"hào",english:"vast"},{char:"荡",pinyin:"dàng",english:"surging"},{char:"荡",pinyin:"dàng",english:"surging"}],
        scenarios: [{text:"队伍浩浩荡荡地前进。",correct:true},{text:"声势很浩大。",correct:true},{text:"稀稀拉拉几个人。",correct:false}]
    },
    {
        chengyu: "轰轰烈烈",
        pinyin: "hōng hōng liè liè",
        literalTranslation: "Boom boom strong strong",
        simpleMeaning: "Vigorous, dynamic",
        breakdown: [{char:"轰",pinyin:"hōng",english:"boom"},{char:"轰",pinyin:"hōng",english:"boom"},{char:"烈",pinyin:"liè",english:"strong"},{char:"烈",pinyin:"liè",english:"strong"}],
        scenarios: [{text:"大革命轰轰烈烈地展开。",correct:true},{text:"事业做得很有声势。",correct:true},{text:"平平淡淡。",correct:false}]
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
    }
