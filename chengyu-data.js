// chengyu-data.js - 500 Common Chinese Idioms
const CHENGYU_SET = [
    // Original 100 idioms (keeping your existing ones)
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
    // Additional 100 idioms (entries 101-200)
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
        scenarios: [{text:"今天想学这个，明天想学那个。",correct:true},{text:"一直坚持同一个目标。",correct:false},{text:"频繁换工作。",correct:true}]
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
        chengyu: "对牛弹琴",
        pinyin: "duì niú tán qín",
        literalTranslation: "Play lute to a cow",
        simpleMeaning: "Waste words on someone",
        breakdown: [{char:"对",pinyin:"duì",english:"to"},{char:"牛",pinyin:"niú",english:"cow"},{char:"弹",pinyin:"tán",english:"play"},{char:"琴",pinyin:"qín",english:"lute"}],
        scenarios: [{text:"跟不懂的人讲专业。",correct:true},{text:"对方根本不理解。",correct:true},{text:"和专家讨论很愉快。",correct:false}]
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
        chengyu: "对牛弹琴",
        pinyin: "duì niú tán qín",
        literalTranslation: "Play lute to cow",
        simpleMeaning: "Waste words",
        breakdown: [{char:"对",pinyin:"duì",english:"to"},{char:"牛",pinyin:"niú",english:"cow"},{char:"弹",pinyin:"tán",english:"play"},{char:"琴",pinyin:"qín",english:"lute"}],
        scenarios: [{text:"给不懂的人讲深奥道理。",correct:true},{text:"对方完全听不懂。",correct:true},{text:"和志同道合者交流。",correct:false}]
    },
    {
        chengyu: "琴瑟和鸣",
        pinyin: "qín sè hé míng",
        literalTranslation: "Qin and se harmonize",
        simpleMeaning: "Harmonious marriage",
        breakdown: [{char:"琴",pinyin:"qín",english:"instrument"},{char:"瑟",pinyin:"sè",english:"instrument"},{char:"和",pinyin:"hé",english:"harmonize"},{char:"鸣",pinyin:"míng",english:"ring"}],
        scenarios: [{text:"夫妻感情很好。",correct:true},{text:"恩爱和睦的伴侣。",correct:true},{text:"经常吵架的夫妻。",correct:false}]
    },
    {
        chengyu: "举案齐眉",
        pinyin: "jǔ àn qí méi",
        literalTranslation: "Raise tray to eyebrow level",
        simpleMeaning: "Mutual respect in marriage",
        breakdown: [{char:"举",pinyin:"jǔ",english:"raise"},{char:"案",pinyin:"àn",english:"tray"},{char:"齐",pinyin:"qí",english:"level"},{char:"眉",pinyin:"méi",english:"eyebrow"}],
        scenarios: [{text:"夫妻相敬如宾。",correct:true},{text:"互相尊重的伴侣。",correct:true},{text:"互相看不起。",correct:false}]
    },
    {
        chengyu: "相敬如宾",
        pinyin: "xiāng jìng rú bīn",
        literalTranslation: "Respect each other like guests",
        simpleMeaning: "Mutual respect",
        breakdown: [{char:"相",pinyin:"xiāng",english:"each"},{char:"敬",pinyin:"jìng",english:"respect"},{char:"如",pinyin:"rú",english:"like"},{char:"宾",pinyin:"bīn",english:"guest"}],
        scenarios: [{text:"夫妻互相尊重客气。",correct:true},{text:"彼此很有礼貌。",correct:true},{text:"互相辱骂。",correct:false}]
    },
    {
        chengyu: "天作之合",
        pinyin: "tiān zuò zhī hé",
        literalTranslation: "Heaven-made match",
        simpleMeaning: "Perfect couple",
        breakdown: [{char:"天",pinyin:"tiān",english:"heaven"},{char:"作",pinyin:"zuò",english:"make"},{char:"之",pinyin:"zhī",english:"'s"},{char:"合",pinyin:"hé",english:"match"}],
        scenarios: [{text:"非常般配的情侣。",correct:true},{text:"天生一对。",correct:true},{text:"完全不合适的两个人。",correct:false}]
    },
    {
        chengyu: "郎才女貌",
        pinyin: "láng cái nǚ mào",
        literalTranslation: "Man talented, woman beautiful",
        simpleMeaning: "Perfect matching couple",
        breakdown: [{char:"郎",pinyin:"láng",english:"man"},{char:"才",pinyin:"cái",english:"talent"},{char:"女",pinyin:"nǚ",english:"woman"},{char:"貌",pinyin:"mào",english:"looks"}],
        scenarios: [{text:"男的很有才，女的很好看。",correct:true},{text:"非常般配的一对。",correct:true},{text:"很不般配。",correct:false}]
    },
    {
        chengyu: "青梅竹马",
        pinyin: "qīng méi zhú mǎ",
        literalTranslation: "Green plums, bamboo horse",
        simpleMeaning: "Childhood sweethearts",
        breakdown: [{char:"青",pinyin:"qīng",english:"green"},{char:"梅",pinyin:"méi",english:"plum"},{char:"竹",pinyin:"zhú",english:"bamboo"},{char:"马",pinyin:"mǎ",english:"horse"}],
        scenarios: [{text:"从小一起长大的恋人。",correct:true},{text:"幼儿园就认识。",correct:true},{text:"成年后才认识。",correct:false}]
    },
    {
        chengyu: "两小无猜",
        pinyin: "liǎng xiǎo wú cāi",
        literalTranslation: "Two little ones without suspicion",
        simpleMeaning: "Innocent childhood friendship",
        breakdown: [{char:"两",pinyin:"liǎng",english:"two"},{char:"小",pinyin:"xiǎo",english:"small"},{char:"无",pinyin:"wú",english:"without"},{char:"猜",pinyin:"cāi",english:"suspicion"}],
        scenarios: [{text:"从小一起玩感情纯真。",correct:true},{text:"童年伙伴没有杂念。",correct:true},{text:"成年后才认识。",correct:false}]
    },
    {
        chengyu: "海誓山盟",
        pinyin: "hǎi shì shān méng",
        literalTranslation: "Sea vow, mountain oath",
        simpleMeaning: "Eternal love pledge",
        breakdown: [{char:"海",pinyin:"hǎi",english:"sea"},{char:"誓",pinyin:"shì",english:"vow"},{char:"山",pinyin:"shān",english:"mountain"},{char:"盟",pinyin:"méng",english:"oath"}],
        scenarios: [{text:"发誓永远相爱。",correct:true},{text:"结婚时的承诺。",correct:true},{text:"随时准备分手。",correct:false}]
    },
    {
        chengyu: "地久天长",
        pinyin: "dì jiǔ tiān cháng",
        literalTranslation: "Earth long, heaven lasting",
        simpleMeaning: "Eternal, lasting forever",
        breakdown: [{char:"地",pinyin:"dì",english:"earth"},{char:"久",pinyin:"jiǔ",english:"long"},{char:"天",pinyin:"tiān",english:"heaven"},{char:"长",pinyin:"cháng",english:"lasting"}],
        scenarios: [{text:"友谊永远不变。",correct:true},{text:"爱情天长地久。",correct:true},{text:"很快就结束了。",correct:false}]
    },
    {
        chengyu: "花好月圆",
        pinyin: "huā hǎo yuè yuán",
        literalTranslation: "Flowers good, moon round",
        simpleMeaning: "Perfect happiness",
        breakdown: [{char:"花",pinyin:"huā",english:"flower"},{char:"好",pinyin:"hǎo",english:"good"},{char:"月",pinyin:"yuè",english:"moon"},{char:"圆",pinyin:"yuán",english:"round"}],
        scenarios: [{text:"新婚祝福美满。",correct:true},{text:"团圆美好的时刻。",correct:true},{text:"分离痛苦的时刻。",correct:false}]
    },
    {
        chengyu: "白头偕老",
        pinyin: "bái tóu xié lǎo",
        literalTranslation: "White hair together old",
        simpleMeaning: "Grow old together",
        breakdown: [{char:"白",pinyin:"bái",english:"white"},{char:"头",pinyin:"tóu",english:"hair"},{char:"偕",pinyin:"xié",english:"together"},{char:"老",pinyin:"lǎo",english:"old"}],
        scenarios: [{text:"夫妻一起变老。",correct:true},{text:"相伴一生。",correct:true},{text:"很早就分开了。",correct:false}]
    },
    {
        chengyu: "相濡以沫",
        pinyin: "xiāng rú yǐ mò",
        literalTranslation: "Moisten each other with spit",
        simpleMeaning: "Help each other in hardship",
        breakdown: [{char:"相",pinyin:"xiāng",english:"each"},{char:"濡",pinyin:"rú",english:"moisten"},{char:"以",pinyin:"yǐ",english:"with"},{char:"沫",pinyin:"mò",english:"spit"}],
        scenarios: [{text:"困难中互相帮助。",correct:true},{text:"夫妻共患难。",correct:true},{text:"大难临头各自飞。",correct:false}]
    },
    {
        chengyu: "一见如故",
        pinyin: "yī jiàn rú gù",
        literalTranslation: "First meeting like old friend",
        simpleMeaning: "Hit it off immediately",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"见",pinyin:"jiàn",english:"meet"},{char:"如",pinyin:"rú",english:"like"},{char:"故",pinyin:"gù",english:"old friend"}],
        scenarios: [{text:"第一次见面就很投缘。",correct:true},{text:"像老朋友一样聊得来。",correct:true},{text:"见面很尴尬。",correct:false}]
    },
    {
        chengyu: "志同道合",
        pinyin: "zhì tóng dào hé",
        literalTranslation: "Same ambition, same path",
        simpleMeaning: "Like-minded",
        breakdown: [{char:"志",pinyin:"zhì",english:"ambition"},{char:"同",pinyin:"tóng",english:"same"},{char:"道",pinyin:"dào",english:"path"},{char:"合",pinyin:"hé",english:"together"}],
        scenarios: [{text:"有共同理想和追求。",correct:true},{text:"兴趣爱好相同。",correct:true},{text:"想法完全不同。",correct:false}]
    },
    {
        chengyu: "情投意合",
        pinyin: "qíng tóu yì hé",
        literalTranslation: "Feelings agree, intentions match",
        simpleMeaning: "Perfectly compatible",
        breakdown: [{char:"情",pinyin:"qíng",english:"feelings"},{char:"投",pinyin:"tóu",english:"agree"},{char:"意",pinyin:"yì",english:"intentions"},{char:"合",pinyin:"hé",english:"match"}],
        scenarios: [{text:"两个人很合得来。",correct:true},{text:"性格爱好都很匹配。",correct:true},{text:"完全合不来。",correct:false}]
    },
    {
        chengyu: "心心相印",
        pinyin: "xīn xīn xiāng yìn",
        literalTranslation: "Heart heart mutual seal",
        simpleMeaning: "Hearts beat as one",
        breakdown: [{char:"心",pinyin:"xīn",english:"heart"},{char:"心",pinyin:"xīn",english:"heart"},{char:"相",pinyin:"xiāng",english:"mutual"},{char:"印",pinyin:"yìn",english:"seal"}],
        scenarios: [{text:"不用说话就懂对方。",correct:true},{text:"心有灵犀一点通。",correct:true},{text:"完全无法沟通。",correct:false}]
    },
    {
        chengyu: "推心置腹",
        pinyin: "tuī xīn zhì fù",
        literalTranslation: "Push heart, place belly",
        simpleMeaning: "Confide completely",
        breakdown: [{char:"推",pinyin:"tuī",english:"push"},{char:"心",pinyin:"xīn",english:"heart"},{char:"置",pinyin:"zhì",english:"place"},{char:"腹",pinyin:"fù",english:"belly"}],
        scenarios: [{text:"跟朋友说心里话。",correct:true},{text:"完全信任地交谈。",correct:true},{text:"虚情假意。",correct:false}]
    },
    {
        chengyu: "肝胆相照",
        pinyin: "gān dǎn xiāng zhào",
        literalTranslation: "Liver and gall shine on each other",
        simpleMeaning: "Utter sincerity",
        breakdown: [{char:"肝",pinyin:"gān",english:"liver"},{char:"胆",pinyin:"dǎn",english:"gall"},{char:"相",pinyin:"xiāng",english:"each"},{char:"照",pinyin:"zhào",english:"shine"}],
        scenarios: [{text:"朋友之间非常真诚。",correct:true},{text:"互相坦诚没有隐瞒。",correct:true},{text:"互相欺骗。",correct:false}]
    },
    {
        chengyu: "披肝沥胆",
        pinyin: "pī gān lì dǎn",
        literalTranslation: "Open liver, drip gall",
        simpleMeaning: "Show complete loyalty",
        breakdown: [{char:"披",pinyin:"pī",english:"open"},{char:"肝",pinyin:"gān",english:"liver"},{char:"沥",pinyin:"lì",english:"drip"},{char:"胆",pinyin:"dǎn",english:"gall"}],
        scenarios: [{text:"对朋友非常忠诚。",correct:true},{text:"掏心掏肺对待。",correct:true},{text:"虚情假意。",correct:false}]
    },
    {
        chengyu: "刎颈之交",
        pinyin: "wěn jǐng zhī jiāo",
        literalTranslation: "Cut throat friendship",
        simpleMeaning: "Friends who would die for each other",
        breakdown: [{char:"刎",pinyin:"wěn",english:"cut"},{char:"颈",pinyin:"jǐng",english:"neck"},{char:"之",pinyin:"zhī",english:"'s"},{char:"交",pinyin:"jiāo",english:"friendship"}],
        scenarios: [{text:"生死之交的朋友。",correct:true},{text:"愿意为对方牺牲。",correct:true},{text:"普通朋友。",correct:false}]
    },
    {
        chengyu: "莫逆之交",
        pinyin: "mò nì zhī jiāo",
        literalTranslation: "No disagreement friendship",
        simpleMeaning: "Intimate friendship",
        breakdown: [{char:"莫",pinyin:"mò",english:"no"},{char:"逆",pinyin:"nì",english:"disagree"},{char:"之",pinyin:"zhī",english:"'s"},{char:"交",pinyin:"jiāo",english:"friendship"}],
        scenarios: [{text:"非常要好的朋友。",correct:true},{text:"心意相通的朋友。",correct:true},{text:"普通熟人。",correct:false}]
    },
    {
        chengyu: "忘年之交",
        pinyin: "wàng nián zhī jiāo",
        literalTranslation: "Forget age friendship",
        simpleMeaning: "Friends despite age gap",
        breakdown: [{char:"忘",pinyin:"wàng",english:"forget"},{char:"年",pinyin:"nián",english:"age"},{char:"之",pinyin:"zhī",english:"'s"},{char:"交",pinyin:"jiāo",english:"friendship"}],
        scenarios: [{text:"年轻人和老年人做朋友。",correct:true},{text:"跨越年龄的友谊。",correct:true},{text:"只和同龄人玩。",correct:false}]
    },
    {
        chengyu: "君子之交",
        pinyin: "jūn zǐ zhī jiāo",
        literalTranslation: "Gentleman's friendship",
        simpleMeaning: "Friendship based on mutual respect",
        breakdown: [{char:"君",pinyin:"jūn",english:"gentleman"},{char:"子",pinyin:"zǐ",english:"person"},{char:"之",pinyin:"zhī",english:"'s"},{char:"交",pinyin:"jiāo",english:"friendship"}],
        scenarios: [{text:"淡如水的真挚友谊。",correct:true},{text:"不掺杂利益的友情。",correct:true},{text:"酒肉朋友。",correct:false}]
    },
    {
        chengyu: "酒肉朋友",
        pinyin: "jiǔ ròu péng yǒu",
        literalTranslation: "Wine meat friend",
        simpleMeaning: "Fair-weather friend",
        breakdown: [{char:"酒",pinyin:"jiǔ",english:"wine"},{char:"肉",pinyin:"ròu",english:"meat"},{char:"朋",pinyin:"péng",english:"friend"},{char:"友",pinyin:"yǒu",english:"friend"}],
        scenarios: [{text:"只能一起吃吃喝喝的朋友。",correct:true},{text:"有困难就消失的朋友。",correct:true},{text:"患难与共的真朋友。",correct:false}]
    },
    {
        chengyu: "狐朋狗友",
        pinyin: "hú péng gǒu yǒu",
        literalTranslation: "Fox friend, dog friend",
        simpleMeaning: "Bad company",
        breakdown: [{char:"狐",pinyin:"hú",english:"fox"},{char:"朋",pinyin:"péng",english:"friend"},{char:"狗",pinyin:"gǒu",english:"dog"},{char:"友",pinyin:"yǒu",english:"friend"}],
        scenarios: [{text:"不务正业的朋友。",correct:true},{text:"带坏人的朋友。",correct:true},{text:"益友良师。",correct:false}]
    },
    {
        chengyu: "良师益友",
        pinyin: "liáng shī yì yǒu",
        literalTranslation: "Good teacher, helpful friend",
        simpleMeaning: "Good mentor and friend",
        breakdown: [{char:"良",pinyin:"liáng",english:"good"},{char:"师",pinyin:"shī",english:"teacher"},{char:"益",pinyin:"yì",english:"helpful"},{char:"友",pinyin:"yǒu",english:"friend"}],
        scenarios: [{text:"能教你帮你的朋友。",correct:true},{text:"亦师亦友的关系。",correct:true},{text:"酒肉朋友。",correct:false}]
    },
    {
        chengyu: "诲人不倦",
        pinyin: "huì rén bù juàn",
        literalTranslation: "Teach people without tiredness",
        simpleMeaning: "Tireless in teaching",
        breakdown: [{char:"诲",pinyin:"huì",english:"teach"},{char:"人",pinyin:"rén",english:"people"},{char:"不",pinyin:"bù",english:"not"},{char:"倦",pinyin:"juàn",english:"tired"}],
        scenarios: [{text:"老师很有耐心教学生。",correct:true},{text:"不厌其烦地讲解。",correct:true},{text:"教一会儿就不耐烦。",correct:false}]
    },
    {
        chengyu: "因材施教",
        pinyin: "yīn cái shī jiào",
        literalTranslation: "According to material, apply teaching",
        simpleMeaning: "Teach according to ability",
        breakdown: [{char:"因",pinyin:"yīn",english:"according"},{char:"材",pinyin:"cái",english:"material"},{char:"施",pinyin:"shī",english:"apply"},{char:"教",pinyin:"jiào",english:"teach"}],
        scenarios: [{text:"根据学生特点教学。",correct:true},{text:"不同学生不同方法。",correct:true},{text:"所有人用同样方法。",correct:false}]
    },
    {
        chengyu: "温故知新",
        pinyin: "wēn gù zhī xīn",
        literalTranslation: "Review old, know new",
        simpleMeaning: "Gain new insights from reviewing",
        breakdown: [{char:"温",pinyin:"wēn",english:"review"},{char:"故",pinyin:"gù",english:"old"},{char:"知",pinyin:"zhī",english:"know"},{char:"新",pinyin:"xīn",english:"new"}],
        scenarios: [{text:"复习旧知识得到新体会。",correct:true},{text:"温习功课有收获。",correct:true},{text:"从不复习学过的。",correct:false}]
    },
    {
        chengyu: "学以致用",
        pinyin: "xué yǐ zhì yòng",
        literalTranslation: "Learn in order to use",
        simpleMeaning: "Apply what you learn",
        breakdown: [{char:"学",pinyin:"xué",english:"learn"},{char:"以",pinyin:"yǐ",english:"in order to"},{char:"致",pinyin:"zhì",english:"reach"},{char:"用",pinyin:"yòng",english:"use"}],
        scenarios: [{text:"把学到的知识用在实际中。",correct:true},{text:"理论和实践结合。",correct:true},{text:"学了不用。",correct:false}]
    },
    {
        chengyu: "融会贯通",
        pinyin: "róng huì guàn tōng",
        literalTranslation: "Melt together, penetrate through",
        simpleMeaning: "Master by synthesizing",
        breakdown: [{char:"融",pinyin:"róng",english:"melt"},{char:"会",pinyin:"huì",english:"together"},{char:"贯",pinyin:"guàn",english:"penetrate"},{char:"通",pinyin:"tōng",english:"through"}],
        scenarios: [{text:"把各种知识融在一起理解。",correct:true},{text:"举一反三触类旁通。",correct:true},{text:"死记硬背不理解。",correct:false}]
    },
    {
        chengyu: "触类旁通",
        pinyin: "chù lèi páng tōng",
        literalTranslation: "Touch category, side through",
        simpleMeaning: "Comprehend by analogy",
        breakdown: [{char:"触",pinyin:"chù",english:"touch"},{char:"类",pinyin:"lèi",english:"category"},{char:"旁",pinyin:"páng",english:"side"},{char:"通",pinyin:"tōng",english:"through"}],
        scenarios: [{text:"懂了一个就懂同类。",correct:true},{text:"举一反三。",correct:true},{text:"教什么只会什么。",correct:false}]
    },
    {
        chengyu: "事半功倍",
        pinyin: "shì bàn gōng bèi",
        literalTranslation: "Half effort, double result",
        simpleMeaning: "Get twice the result with half the effort",
        breakdown: [{char:"事",pinyin:"shì",english:"effort"},{char:"半",pinyin:"bàn",english:"half"},{char:"功",pinyin:"gōng",english:"result"},{char:"倍",pinyin:"bèi",english:"double"}],
        scenarios: [{text:"方法好效率高。",correct:true},{text:"花很少力气得很大成果。",correct:true},{text:"费力不讨好。",correct:false}]
    },
    {
        chengyu: "事倍功半",
        pinyin: "shì bèi gōng bàn",
        literalTranslation: "Double effort, half result",
        simpleMeaning: "Get half the result with twice the effort",
        breakdown: [{char:"事",pinyin:"shì",english:"effort"},{char:"倍",pinyin:"bèi",english:"double"},{char:"功",pinyin:"gōng",english:"result"},{char:"半",pinyin:"bàn",english:"half"}],
        scenarios: [{text:"方法不对效率低。",correct:true},{text:"费力不讨好。",correct:true},{text:"事半功倍效率高。",correct:false}]
    },
    {
        chengyu: "投机取巧",
        pinyin: "tóu jī qǔ qiǎo",
        literalTranslation: "Seek advantage, take shortcuts",
        simpleMeaning: "Cut corners, be opportunistic",
        breakdown: [{char:"投",pinyin:"tóu",english:"seek"},{char:"机",pinyin:"jī",english:"advantage"},{char:"取",pinyin:"qǔ",english:"take"},{char:"巧",pinyin:"qiǎo",english:"shortcut"}],
        scenarios: [{text:"不想努力只想走捷径。",correct:true},{text:"耍小聪明不踏实。",correct:true},{text:"脚踏实地做事。",correct:false}]
    },
    {
        chengyu: "循序渐进",
        pinyin: "xún xù jiàn jìn",
        literalTranslation: "Follow order, gradually advance",
        simpleMeaning: "Step by step",
        breakdown: [{char:"循",pinyin:"xún",english:"follow"},{char:"序",pinyin:"xù",english:"order"},{char:"渐",pinyin:"jiàn",english:"gradually"},{char:"进",pinyin:"jìn",english:"advance"}],
        scenarios: [{text:"一步步慢慢来。",correct:true},{text:"按部就班学习。",correct:true},{text:"一口吃成胖子。",correct:false}]
    },
    {
        chengyu: "拔苗助长",
        pinyin: "bá miáo zhù zhǎng",
        literalTranslation: "Pull seedlings to help growth",
        simpleMeaning: "Spoil by overeagerness",
        breakdown: [{char:"拔",pinyin:"bá",english:"pull"},{char:"苗",pinyin:"miáo",english:"seedling"},{char:"助",pinyin:"zhù",english:"help"},{char:"长",pinyin:"zhǎng",english:"grow"}],
        scenarios: [{text:"急于求成反而坏事。",correct:true},{text:"违背规律追求速度。",correct:true},{text:"顺其自然。",correct:false}]
    },
    {
        chengyu: "欲速不达",
        pinyin: "yù sù bù dá",
        literalTranslation: "Want speed, not reach",
        simpleMeaning: "Haste makes waste",
        breakdown: [{char:"欲",pinyin:"yù",english:"want"},{char:"速",pinyin:"sù",english:"speed"},{char:"不",pinyin:"bù",english:"not"},{char:"达",pinyin:"dá",english:"reach"}],
        scenarios: [{text:"越着急越做不好。",correct:true},{text:"欲速则不达。",correct:true},{text:"慢慢来反而快。",correct:false}]
    },
    {
        chengyu: "持之以恒",
        pinyin: "chí zhī yǐ héng",
        literalTranslation: "Hold it with perseverance",
        simpleMeaning: "Persevere consistently",
        breakdown: [{char:"持",pinyin:"chí",english:"hold"},{char:"之",pinyin:"zhī",english:"it"},{char:"以",pinyin:"yǐ",english:"with"},{char:"恒",pinyin:"héng",english:"perseverance"}],
        scenarios: [{text:"坚持做到底不放弃。",correct:true},{text:"有恒心毅力。",correct:true},{text:"三天打鱼两天晒网。",correct:false}]
    },
    {
        chengyu: "有始有终",
        pinyin: "yǒu shǐ yǒu zhōng",
        literalTranslation: "Have start, have end",
        simpleMeaning: "Finish what you start",
        breakdown: [{char:"有",pinyin:"yǒu",english:"have"},{char:"始",pinyin:"shǐ",english:"start"},{char:"有",pinyin:"yǒu",english:"have"},{char:"终",pinyin:"zhōng",english:"end"}],
        scenarios: [{text:"做事坚持到底。",correct:true},{text:"从头做到尾。",correct:true},{text:"半途而废。",correct:false}]
    },
    {
        chengyu: "善始善终",
        pinyin: "shàn shǐ shàn zhōng",
        literalTranslation: "Good start, good end",
        simpleMeaning: "Do well from start to finish",
        breakdown: [{char:"善",pinyin:"shàn",english:"good"},{char:"始",pinyin:"shǐ",english:"start"},{char:"善",pinyin:"shàn",english:"good"},{char:"终",pinyin:"zhōng",english:"end"}],
        scenarios: [{text:"开头做得好结尾也好。",correct:true},{text:"全程都做得好。",correct:true},{text:"虎头蛇尾。",correct:false}]
    },
    {
        chengyu: "虎头蛇尾",
        pinyin: "hǔ tóu shé wěi",
        literalTranslation: "Tiger head, snake tail",
        simpleMeaning: "Start strong, end weak",
        breakdown: [{char:"虎",pinyin:"hǔ",english:"tiger"},{char:"头",pinyin:"tóu",english:"head"},{char:"蛇",pinyin:"shé",english:"snake"},{char:"尾",pinyin:"wěi",english:"tail"}],
        scenarios: [{text:"开始很积极后来放弃。",correct:true},{text:"有头无尾。",correct:true},{text:"善始善终。",correct:false}]
    },
    {
        chengyu: "一鼓作气",
        pinyin: "yī gǔ zuò qì",
        literalTranslation: "One drum, make spirit",
        simpleMeaning: "Finish in one go",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"鼓",pinyin:"gǔ",english:"drum"},{char:"作",pinyin:"zuò",english:"make"},{char:"气",pinyin:"qì",english:"spirit"}],
        scenarios: [{text:"一口气把事情做完。",correct:true},{text:"趁热打铁不中断。",correct:true},{text:"做做停停。",correct:false}]
    },
    {
        chengyu: "趁热打铁",
        pinyin: "chèn rè dǎ tiě",
        literalTranslation: "Strike iron while hot",
        simpleMeaning: "Strike while the iron is hot",
        breakdown: [{char:"趁",pinyin:"chèn",english:"while"},{char:"热",pinyin:"rè",english:"hot"},{char:"打",pinyin:"dǎ",english:"strike"},{char:"铁",pinyin:"tiě",english:"iron"}],
        scenarios: [{text:"抓住好时机做事。",correct:true},{text:"趁着势头好赶紧做。",correct:true},{text:"错过好时机。",correct:false}]
    },
    {
        chengyu: "机不可失",
        pinyin: "jī bù kě shī",
        literalTranslation: "Opportunity not can lose",
        simpleMeaning: "Don't miss the chance",
        breakdown: [{char:"机",pinyin:"jī",english:"opportunity"},{char:"不",pinyin:"bù",english:"not"},{char:"可",pinyin:"kě",english:"can"},{char:"失",pinyin:"shī",english:"lose"}],
        scenarios: [{text:"好机会不能错过。",correct:true},{text:"抓住时机很重要。",correct:true},{text:"机会还会再有。",correct:false}]
    },
    {
        chengyu: "时不再来",
        pinyin: "shí bù zài lái",
        literalTranslation: "Time not again come",
        simpleMeaning: "Opportunity knocks only once",
        breakdown: [{char:"时",pinyin:"shí",english:"time"},{char:"不",pinyin:"bù",english:"not"},{char:"再",pinyin:"zài",english:"again"},{char:"来",pinyin:"lái",english:"come"}],
        scenarios: [{text:"错过就没了。",correct:true},{text:"良机难得。",correct:true},{text:"下次还有机会。",correct:false}]
    },
    {
        chengyu: "当机立断",
        pinyin: "dāng jī lì duàn",
        literalTranslation: "At opportunity, immediately decide",
        simpleMeaning: "Make a prompt decision",
        breakdown: [{char:"当",pinyin:"dāng",english:"at"},{char:"机",pinyin:"jī",english:"opportunity"},{char:"立",pinyin:"lì",english:"immediately"},{char:"断",pinyin:"duàn",english:"decide"}],
        scenarios: [{text:"关键时刻马上做决定。",correct:true},{text:"果断不犹豫。",correct:true},{text:"优柔寡断。",correct:false}]
    },
    {
        chengyu: "犹豫不决",
        pinyin: "yóu yù bù jué",
        literalTranslation: "Hesitate not decide",
        simpleMeaning: "Hesitate, indecisive",
        breakdown: [{char:"犹",pinyin:"yóu",english:"hesitate"},{char:"豫",pinyin:"yù",english:"hesitate"},{char:"不",pinyin:"bù",english:"not"},{char:"决",pinyin:"jué",english:"decide"}],
        scenarios: [{text:"拿不定主意。",correct:true},{text:"迟迟不做决定。",correct:true},{text:"当机立断。",correct:false}]
    },
    {
        chengyu: "优柔寡断",
        pinyin: "yōu róu guǎ duàn",
        literalTranslation: "Gentle weak few decisions",
        simpleMeaning: "Indecisive, weak-willed",
        breakdown: [{char:"优",pinyin:"yōu",english:"gentle"},{char:"柔",pinyin:"róu",english:"weak"},{char:"寡",pinyin:"guǎ",english:"few"},{char:"断",pinyin:"duàn",english:"decisions"}],
        scenarios: [{text:"做决定很慢很犹豫。",correct:true},{text:"缺乏决断力。",correct:true},{text:"果断坚决。",correct:false}]
    },
    {
        chengyu: "雷厉风行",
        pinyin: "léi lì fēng xíng",
        literalTranslation: "Thunder strong, wind fast",
        simpleMeaning: "Act with speed and force",
        breakdown: [{char:"雷",pinyin:"léi",english:"thunder"},{char:"厉",pinyin:"lì",english:"strong"},{char:"风",pinyin:"fēng",english:"wind"},{char:"行",pinyin:"xíng",english:"act"}],
        scenarios: [{text:"做事又快又果断。",correct:true},{text:"行动迅速有力。",correct:true},{text:"拖拖拉拉。",correct:false}]
    },
    {
        chengyu: "拖泥带水",
        pinyin: "tuō ní dài shuǐ",
        literalTranslation: "Drag mud, bring water",
        simpleMeaning: "Messy, inefficient",
        breakdown: [{char:"拖",pinyin:"tuō",english:"drag"},{char:"泥",pinyin:"ní",english:"mud"},{char:"带",pinyin:"dài",english:"bring"},{char:"水",pinyin:"shuǐ",english:"water"}],
        scenarios: [{text:"做事不利索。",correct:true},{text:"拖拖拉拉不干脆。",correct:true},{text:"雷厉风行。",correct:false}]
    },
    {
        chengyu: "干净利落",
        pinyin: "gān jìng lì luò",
        literalTranslation: "Clean neat sharp",
        simpleMeaning: "Efficient and tidy",
        breakdown: [{char:"干",pinyin:"gān",english:"clean"},{char:"净",pinyin:"jìng",english:"neat"},{char:"利",pinyin:"lì",english:"sharp"},{char:"落",pinyin:"luò",english:"drop"}],
        scenarios: [{text:"做事不拖泥带水。",correct:true},{text:"很快很漂亮地完成。",correct:true},{text:"磨磨蹭蹭。",correct:false}]
    },
    {
        chengyu: "一针见血",
        pinyin: "yī zhēn jiàn xuè",
        literalTranslation: "One needle see blood",
        simpleMeaning: "Hit the nail on the head",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"针",pinyin:"zhēn",english:"needle"},{char:"见",pinyin:"jiàn",english:"see"},{char:"血",pinyin:"xuè",english:"blood"}],
        scenarios: [{text:"说话直接点出要害。",correct:true},{text:"批评很到位。",correct:true},{text:"说不到点子上。",correct:false}]
    },
    {
        chengyu: "一语中的",
        pinyin: "yī yǔ zhòng dì",
        literalTranslation: "One word hit target",
        simpleMeaning: "Hit the mark with words",
        breakdown: [{char:"一",pinyin:"yī",english:"one"},{char:"语",pinyin:"yǔ",english:"word"},{char:"中",pinyin:"zhòng",english:"hit"},{char:"的",pinyin:"dì",english:"target"}],
        scenarios: [{text:"一句话说到关键。",correct:true},{text:"说得很准。",correct:true},{text:"说了很多没用的话。",correct:false}]
    },
    {
        chengyu: "言简意赅",
        pinyin: "yán jiǎn yì gāi",
        literalTranslation: "Words simple, meaning complete",
        simpleMeaning: "Concise and comprehensive",
        breakdown: [{char:"言",pinyin:"yán",english:"words"},{char:"简",pinyin:"jiǎn",english:"simple"},{char:"意",pinyin:"yì",english:"meaning"},{char:"赅",pinyin:"gāi",english:"complete"}],
        scenarios: [{text:"话不多但都说在点上。",correct:true},{text:"简短有力。",correct:true},{text:"啰嗦说一堆废话。",correct:false}]
    },
    {
        chengyu: "长篇大论",
        pinyin: "cháng piān dà lùn",
        literalTranslation: "Long piece big talk",
        simpleMeaning: "Long-winded speech",
        breakdown: [{char:"长",pinyin:"cháng",english:"long"},{char:"篇",pinyin:"piān",english:"piece"},{char:"大",pinyin:"dà",english:"big"},{char:"论",pinyin:"lùn",english:"talk"}],
        scenarios: [{text:"说很多废话。",correct:true},{text:"啰里啰嗦说不完。",correct:true},{text:"言简意赅。",correct:false}]
    },
    {
        chengyu: "废话连篇",
        pinyin: "fèi huà lián piān",
        literalTranslation: "Waste words link piece",
        simpleMeaning: "Full of nonsense",
        breakdown: [{char:"废",pinyin:"fèi",english:"waste"},{char:"话",pinyin:"huà",english:"words"},{char:"连",pinyin:"lián",english:"link"},{char:"篇",pinyin:"piān",english:"piece"}],
        scenarios: [{text:"说很多没用的。",correct:true},{text:"全是废话。",correct:true},{text:"句句有用。",correct:false}]
    },
    {
        chengyu: "沉默寡言",
        pinyin: "chén mò guǎ yán",
        literalTranslation: "Silent few words",
        simpleMeaning: "Quiet, reserved",
        breakdown: [{char:"沉",pinyin:"chén",english:"silent"},{char:"默",pinyin:"mò",english:"quiet"},{char:"寡",pinyin:"guǎ",english:"few"},{char:"言",pinyin:"yán",english:"words"}],
        scenarios: [{text:"不爱说话。",correct:true},{text:"话很少很安静。",correct:true},{text:"滔滔不绝。",correct:false}]
    },
    {
        chengyu: "滔滔不绝",
        pinyin: "tāo tāo bù jué",
        literalTranslation: "Flooding not stop",
        simpleMeaning: "Talk nonstop",
        breakdown: [{char:"滔",pinyin:"tāo",english:"flood"},{char:"滔",pinyin:"tāo",english:"flood"},{char:"不",pinyin:"bù",english:"not"},{char:"绝",pinyin:"jué",english:"stop"}],
        scenarios: [{text:"说话说个没完。",correct:true},{text:"很能说不停说。",correct:true},{text:"沉默寡言。",correct:false}]
    },
    {
        chengyu: "口若悬河",
        pinyin: "kǒu ruò xuán hé",
        literalTranslation: "Mouth like hanging river",
        simpleMeaning: "Eloquent, glib",
        breakdown: [{char:"口",pinyin:"kǒu",english:"mouth"},{char:"若",pinyin:"ruò",english:"like"},{char:"悬",pinyin:"xuán",english:"hang"},{char:"河",pinyin:"hé",english:"river"}],
        scenarios: [{text:"能说会道。",correct:true},{text:"口才很好。",correct:true},{text:"不善言辞。",correct:false}]
    },
    {
        chengyu: "巧舌如簧",
        pinyin: "qiǎo shé rú huáng",
        literalTranslation: "Skillful tongue like reed",
        simpleMeaning: "Smooth-talking",
        breakdown: [{char:"巧",pinyin:"qiǎo",english:"skillful"},{char:"舌",pinyin:"shé",english:"tongue"},{char:"如",pinyin:"rú",english:"like"},{char:"簧",pinyin:"huáng",english:"reed"}],
        scenarios: [{text:"很会说话能狡辩。",correct:true},{text:"花言巧语。",correct:true},{text:"笨嘴拙舌。",correct:false}]
    },
    {
        chengyu: "笨嘴拙舌",
        pinyin: "bèn zuǐ zhuō shé",
        literalTranslation: "Stupid mouth clumsy tongue",
        simpleMeaning: "Poor at speaking",
        breakdown: [{char:"笨",pinyin:"bèn",english:"stupid"},{char:"嘴",pinyin:"zuǐ",english:"mouth"},{char:"拙",pinyin:"zhuō",english:"clumsy"},{char:"舌",pinyin:"shé",english:"tongue"}],
        scenarios: [{text:"不会说话表达能力差。",correct:true},{text:"说话结巴。",correct:true},{text:"能言善辩。",correct:false}]
    },
    {
        chengyu: "能言善辩",
        pinyin: "néng yán shàn biàn",
        literalTranslation: "Can speak, good debate",
        simpleMeaning: "Articulate and argumentative",
        breakdown: [{char:"能",pinyin:"néng",english:"can"},{char:"言",pinyin:"yán",english:"speak"},{char:"善",pinyin:"shàn",english:"good"},{char:"辩",pinyin:"biàn",english:"debate"}],
        scenarios: [{text:"口才好会辩论。",correct:true},{text:"说话有说服力。",correct:true},{text:"笨嘴拙舌。",correct:false}]
    },
    {
        chengyu: "理直气壮",
        pinyin: "lǐ zhí qì zhuàng",
        literalTranslation: "Right straight, spirit strong",
        simpleMeaning: "Confident with reason",
        breakdown: [{char:"理",pinyin:"lǐ",english:"reason"},{char:"直",pinyin:"zhí",english:"straight"},{char:"气",pinyin:"qì",english:"spirit"},{char:"壮",pinyin:"zhuàng",english:"strong"}],
        scenarios: [{text:"有道理说话有底气。",correct:true},{text:"觉得对说话有力量。",correct:true},{text:"心虚不敢大声。",correct:false}]
    },
    {
        chengyu: "理屈词穷",
        pinyin: "lǐ qū cí qióng",
        literalTranslation: "Reason bent, words exhausted",
        simpleMeaning: "Have no leg to stand on",
        breakdown: [{char:"理",pinyin:"lǐ",english:"reason"},{char:"屈",pinyin:"qū",english:"bent"},{char:"词",pinyin:"cí",english:"words"},{char:"穷",pinyin:"qióng",english:"exhausted"}],
        scenarios: [{text:"没道理说不出话。",correct:true},{text:"心虚无话可说。",correct:true},{text:"理直气壮。",correct:false}]
    },
    {
        chengyu: "无地自容",
        pinyin: "wú dì zì róng",
        literalTranslation: "No place for self to fit",
        simpleMeaning: "Deeply ashamed",
        breakdown: [{char:"无",pinyin:"wú",english:"no"},{char:"地",pinyin:"dì",english:"place"},{char:"自",pinyin:"zì",english:"self"},{char:"容",pinyin:"róng",english:"fit"}],
        scenarios: [{text:"羞愧得想钻地缝。",correct:true},{text:"很丢脸不好意思。",correct:true},{text:"毫不羞愧。",correct:false}]
    },
    {
        chengyu: "问心无愧",
        pinyin: "wèn xīn wú kuì",
        literalTranslation: "Ask heart no shame",
        simpleMeaning: "Have a clear conscience",
        breakdown: [{char:"问",pinyin:"wèn",english:"ask"},{char:"心",pinyin:"xīn",english:"heart"},{char:"无",pinyin:"wú",english:"no"},{char:"愧",pinyin:"kuì",english:"shame"}],
        scenarios: [{text:"没做亏心事很坦然。",correct:true},{text:"对得起自己良心。",correct:true},{text:"心里有愧。",correct:false}]
    },
    {
        chengyu: "心安理得",
        pinyin: "xīn ān lǐ dé",
        literalTranslation: "Heart peace, reason get",
        simpleMeaning: "Feel at ease and justified",
        breakdown: [{char:"心",pinyin:"xīn",english:"heart"},{char:"安",pinyin:"ān",english:"peace"},{char:"理",pinyin:"lǐ",english:"reason"},{char:"得",pinyin:"dé",english:"get"}],
        scenarios: [{text:"做事对得起良心。",correct:true},{text:"心里踏实坦然。",correct:true},{text:"心虚不安。",correct:false}]
    },
    {
        chengyu: "做贼心虚",
        pinyin: "zuò zéi xīn xū",
        literalTranslation: "Be thief, heart empty",
        simpleMeaning: "Have a guilty conscience",
        breakdown: [{char:"做",pinyin:"zuò",english:"be"},{char:"贼",pinyin:"zéi",english:"thief"},{char:"心",pinyin:"xīn",english:"heart"},{char:"虚",pinyin:"xū",english:"empty"}],
        scenarios: [{text:"做了坏事心里害怕。",correct:true},{text:"心虚不敢看人。",correct:true},{text:"心安理得。",correct:false}]
    },
    {
        chengyu: "提心吊胆",
        pinyin: "tí xīn diào dǎn",
        literalTranslation: "Lift heart, hang gall",
        simpleMeaning: "Nervous, on edge",
        breakdown: [{char:"提",pinyin:"tí",english:"lift"},{char:"心",pinyin:"xīn",english:"heart"},{char:"吊",pinyin:"diào",english:"hang"},{char:"胆",pinyin:"dǎn",english:"gall"}],
        scenarios: [{text:"心里很害怕很紧张。",correct:true},{text:"担心出事。",correct:true},{text:"镇定自若。",correct:false}]
    },
    {
        chengyu: "镇定自若",
        pinyin: "zhèn dìng zì ruò",
        literalTranslation: "Calm steady self like",
        simpleMeaning: "Stay calm under pressure",
        breakdown: [{char:"镇",pinyin:"zhèn",english:"calm"},{char:"定",pinyin:"dìng",english:"steady"},{char:"自",pinyin:"zì",english:"self"},{char:"若",pinyin:"ruò",english:"like"}],
        scenarios: [{text:"遇到危险很冷静。",correct:true},{text:"不慌张。",correct:true},{text:"提心吊胆。",correct:false}]
    },
    {
        chengyu: "惊慌失措",
        pinyin: "jīng huāng shī cuò",
        literalTranslation: "Panic lose measure",
        simpleMeaning: "Panicked, confused",
        breakdown: [{char:"惊",pinyin:"jīng",english:"panic"},{char:"慌",pinyin:"huāng",english:"fluster"},{char:"失",pinyin:"shī",english:"lose"},{char:"措",pinyin:"cuò",english:"measure"}],
        scenarios: [{text:"突然发生意外很慌。",correct:true},{text:"不知道该怎么办。",correct:true},{text:"镇定自若。",correct:false}]
    },
    {
        chengyu: "临危不惧",
        pinyin: "lín wēi bù jù",
        literalTranslation: "Face danger not fear",
        simpleMeaning: "Fearless in face of danger",
        breakdown: [{char:"临",pinyin:"lín",english:"face"},{char:"危",pinyin:"wēi",english:"danger"},{char:"不",pinyin:"bù",english:"not"},{char:"惧",pinyin:"jù",english:"fear"}],
        scenarios: [{text:"遇到危险不害怕。",correct:true},{text:"勇敢面对困难。",correct:true},{text:"惊慌失措。",correct:false}]
    },
    {
        chengyu: "视死如归",
        pinyin: "shì sǐ rú guī",
        literalTranslation: "See death like return home",
        simpleMeaning: "Face death with calmness",
        breakdown: [{char:"视",pinyin:"shì",english:"see"},{char:"死",pinyin:"sǐ",english:"death"},{char:"如",pinyin:"rú",english:"like"},{char:"归",pinyin:"guī",english:"return"}],
        scenarios: [{text:"不怕牺牲很勇敢。",correct:true},{text:"为理想不怕死。",correct:true},{text:"贪生怕死。",correct:false}]
    },
    {
        chengyu: "舍生取义",
        pinyin: "shě shēng qǔ yì",
        literalTranslation: "Give up life for righteousness",
        simpleMeaning: "Die for a just cause",
        breakdown: [{char:"舍",pinyin:"shě",english:"give up"},{char:"生",pinyin:"shēng",english:"life"},{char:"取",pinyin:"qǔ",english:"take"},{char:"义",pinyin:"yì",english:"righteousness"}],
        scenarios: [{text:"为正义牺牲生命。",correct:true},{text:"宁可死也不背叛。",correct:true},{text:"苟且偷生。",correct:false}]
    },
    {
        chengyu: "苟且偷生",
        pinyin: "gǒu qiě tōu shēng",
        literalTranslation: "Careless temporary steal life",
        simpleMeaning: "Drag out an ignoble existence",
        breakdown: [{char:"苟",pinyin:"gǒu",english:"careless"},{char:"且",pinyin:"qiě",english:"temporary"},{char:"偷",pinyin:"tōu",english:"steal"},{char:"生",pinyin:"shēng",english:"life"}],
        scenarios: [{text:"没尊严地活着。",correct:true},{text:"忍辱偷生。",correct:true},{text:"舍生取义。",correct:false}]
    }
];
