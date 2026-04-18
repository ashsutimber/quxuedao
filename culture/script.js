const solarTermsData = {
    lichun: {
        name: '立春',
        englishName: 'Beginning of Spring',
        scientific: 'Solar Term',
        icon: '🌸',
        tags: ['春季', '农耕', '万物复苏'],
        date: '公历2月3-5日',
        description: '立春是二十四节气之首，标志着春季的开始。此时万物复苏，大地回春，气温逐渐回升，是农耕生产的重要时节。人们会举行迎春活动，祈求一年的丰收和好运。',
        poet: '杜甫',
        poem: '律回岁晚冰霜少，春到人间草木知。',
        location: '中国各地',
        history: '立春起源于周代，是古代帝王祭祀的重要节气，已有数千年历史',
        significance: '标志着春季的开始，指导春耕生产，象征新的希望',
        period: '周代至今',
        features: '气温回升，万物复苏，春耕开始，阳气渐生',
        influence: '影响农业生产和民俗活动，是中国传统农耕文化的重要组成部分',
        time: '太阳黄经315°',
        customs: '吃春饼、鞭春牛、迎春祭祀、踏青',
        background: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80',
        image: 'picture/24节气/立春.png'
    },
    yushui: {
        name: '雨水',
        englishName: 'Rain Water',
        scientific: 'Solar Term',
        icon: '💧',
        tags: ['春季', '降雨', '农耕'],
        date: '公历2月18-20日',
        description: '雨水节气表示降雨开始，雨量渐增。此时气温回升，冰雪融化，降水增多，有利于农作物的生长。大地开始呈现出一派生机勃勃的景象。',
        poet: '杜甫',
        poem: '好雨知时节，当春乃发生。',
        location: '中国各地',
        history: '雨水节气源于古代农耕文明，是春季第二个节气，反映了古代劳动人民对自然规律的观察',
        significance: '标志着降雨增多，有利于春耕生产，为农作物生长提供水分',
        period: '汉代至今',
        features: '气温回升，冰雪融化，降水增多，万物萌动',
        influence: '指导春耕播种，影响农业生产，是传统农业社会的重要时间节点',
        time: '太阳黄经330°',
        customs: '祭祀雨神、准备春耕、注意防寒、吃春笋',
        background: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80',
        image: 'picture/24节气/雨水.png'
    },
    jingzhe: {
        name: '惊蛰',
        englishName: 'Awakening of Insects',
        scientific: 'Solar Term',
        icon: '🐛',
        tags: ['春季', '春雷', '昆虫'],
        date: '公历3月5-7日',
        description: '惊蛰时节，春雷始鸣，惊醒蛰伏于地下冬眠的昆虫。此时天气转暖，春雷乍动，万物生机盎然。',
        poet: '孟浩然',
        poem: '微雨众卉新，一雷惊蛰始。',
        location: '中国各地',
        history: '惊蛰节气源于古代对自然现象的观察，是春季第三个节气',
        significance: '标志着春雷始鸣，万物复苏',
        period: '汉代至今',
        features: '春雷始鸣，气温回升，昆虫苏醒',
        influence: '指导春耕生产，影响民俗文化',
        time: '太阳黄经345°',
        customs: '祭祀雷神、驱虫防病、春耕开始',
        background: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80',
        image: 'picture/24节气/惊蛰.png'
    },
    chunfen: {
        name: '春分',
        englishName: 'Spring Equinox',
        scientific: 'Solar Term',
        icon: '🌓',
        tags: ['春季', '昼夜平分', '天文'],
        date: '公历3月20-22日',
        description: '春分这一天，太阳直射赤道，昼夜平分。此后北半球昼长夜短，气温逐渐升高，是春耕的重要时节。',
        poet: '杜牧',
        poem: '仲春初四日，春色正中分。',
        location: '中国各地',
        history: '春分是古代重要的天文节气，昼夜平分点',
        significance: '标志着春季过半，昼夜平分',
        period: '周代至今',
        features: '昼夜平分，气温回升，春耕繁忙',
        influence: '指导农业生产，影响天文观测',
        time: '太阳黄经0°',
        customs: '立蛋游戏、祭祀太阳、踏青赏春',
        background: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80',
        image: 'picture/24节气/春分.png'
    },
    qingming: {
        name: '清明',
        englishName: 'Qingming Festival',
        scientific: 'Solar Term & Festival',
        icon: '🌿',
        tags: ['春季', '祭祀', '踏青'],
        date: '公历4月4-6日',
        description: '清明时节，气候清爽，草木繁茂。既是节气又是传统节日，人们会扫墓祭祖，踏青赏春。',
        poet: '杜牧',
        poem: '清明时节雨纷纷，路上行人欲断魂。',
        location: '中国各地',
        history: '清明源于寒食节，是重要的祭祀节日',
        significance: '既是节气又是传统节日，扫墓祭祖',
        period: '唐代至今',
        features: '气候清爽，草木繁茂，祭祀踏青',
        influence: '影响民俗文化，传承孝道精神',
        time: '太阳黄经15°',
        customs: '扫墓祭祖、踏青赏春、放风筝、吃青团',
        background: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80',
        image: 'picture/24节气/清明.png'
    },
    guyu: {
        name: '谷雨',
        englishName: 'Grain Rain',
        scientific: 'Solar Term',
        icon: '🌱',
        tags: ['春季', '雨水', '谷物'],
        date: '公历4月19-21日',
        description: '谷雨是春季最后一个节气，雨量充足而及时，谷类作物茁壮成长。此时天气温和，雨水增多，利于农作物生长。',
        poet: '杜甫',
        poem: '谷雨如丝复似尘，煮瓶浮蜡正尝新。',
        location: '中国各地',
        history: '谷雨源于古代农耕文明，是春季最后一个节气',
        significance: '标志着降雨充足，有利于谷物生长',
        period: '汉代至今',
        features: '雨量充足，气温温和，谷物生长',
        influence: '指导春耕播种，影响农业生产',
        time: '太阳黄经30°',
        customs: '祭祀谷神、采茶制茶、准备夏种',
        background: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80',
        image: 'picture/24节气/谷雨.png'
    },
    lixia: {
        name: '立夏',
        date: '公历5月5-7日',
        description: '立夏标志着夏季的开始，万物繁茂。此时气温明显升高，雷雨增多，农作物进入生长旺季。',
        poet: '杨万里',
        poem: '绿树阴浓夏日长，楼台倒影入池塘。',
        location: '中国各地',
        history: '立夏是夏季的第一个节气，源于古代农耕文明',
        significance: '标志着夏季的开始，万物生长旺盛',
        period: '周代至今',
        features: '气温升高，雷雨增多，农作物生长旺季',
        influence: '指导夏季农业生产，影响民俗活动',
        time: '太阳黄经45°',
        customs: '吃立夏饭、称体重、防暑降温',
        background: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
        image: 'picture/24节气/立夏.png'
    },
    xiaoman: {
        name: '小满',
        date: '公历5月20-22日',
        description: '小满时节，夏熟作物的籽粒开始灌浆饱满，但还未成熟。此时气候温和，雨水充沛，有利于作物生长。',
        poet: '范成大',
        poem: '夜莺啼绿柳，皓月醒长空。',
        location: '中国各地',
        history: '小满源于古代农耕文明，是夏季第二个节气',
        significance: '标志着夏熟作物开始灌浆，但未完全成熟',
        period: '汉代至今',
        features: '气候温和，雨水充沛，作物灌浆',
        influence: '指导夏季农业生产，观察作物生长',
        time: '太阳黄经60°',
        customs: '祭祀蚕神、采桑养蚕、准备夏收',
        background: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
        image: 'picture/24节气/小满.png'
    },
    mangzhong: {
        name: '芒种',
        date: '公历6月5-7日',
        description: '芒种时节，有芒的麦子快收，有芒的稻子可种。此时气温显著升高，雨量充沛，是农耕的重要时节。',
        poet: '陆游',
        poem: '时雨及芒种，四野皆插秧。',
        location: '中国各地',
        history: '芒种源于古代农耕文明，是夏季第三个节气',
        significance: '标志着麦收稻种的农忙时节',
        period: '汉代至今',
        features: '气温升高，雨量充沛，农事繁忙',
        influence: '指导夏季农业生产，影响农事安排',
        time: '太阳黄经75°',
        customs: '收割小麦、插秧种稻、祭祀农神',
        background: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
        image: 'picture/24节气/芒种.png'
    },
    xiazhi: {
        name: '夏至',
        date: '公历6月21-22日',
        description: '夏至这一天，太阳直射北回归线，北半球白昼最长。此后白昼逐渐变短，气温达到全年最高。',
        poet: '刘禹锡',
        poem: '昼晷已云极，宵漏自此长。',
        location: '中国各地',
        history: '夏至是古代重要的天文节气，白昼最长点',
        significance: '标志着夏季过半，白昼最长',
        period: '周代至今',
        features: '白昼最长，气温最高，日照充足',
        influence: '指导农业生产，影响天文观测',
        time: '太阳黄经90°',
        customs: '吃夏至面、祭祀太阳、防暑降温',
        background: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
        image: 'picture/24节气/夏至.png'
    },
    xiaoshu: {
        name: '小暑',
        date: '公历7月6-8日',
        description: '小暑时节，天气开始炎热，但还未达到最热。此时雷雨频繁，农作物生长迅速，需注意防暑降温。',
        poet: '白居易',
        poem: '倏忽温风至，因循小暑来。',
        location: '中国各地',
        history: '小暑源于古代农耕文明，是夏季第五个节气',
        significance: '标志着天气开始炎热，但未到最热',
        period: '汉代至今',
        features: '天气炎热，雷雨频繁，作物生长迅速',
        influence: '指导夏季农业生产，注意防暑降温',
        time: '太阳黄经105°',
        customs: '吃伏面、喝绿豆汤、防暑降温',
        background: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
        image: 'picture/24节气/小暑.png'
    },
    dashu: {
        name: '大暑',
        date: '公历7月22-24日',
        description: '大暑是一年中最热的时节，气温达到最高点。此时农作物生长旺盛，需注意防暑降温和病虫害防治。',
        poet: '杜甫',
        poem: '大暑运金气，荆扬不知秋。',
        location: '中国各地',
        history: '大暑源于古代农耕文明，是夏季最后一个节气',
        significance: '标志着一年中最热的时节',
        period: '汉代至今',
        features: '气温最高，农作物生长旺盛，需防暑',
        influence: '指导夏季农业生产，注意防暑降温',
        time: '太阳黄经120°',
        customs: '吃伏茶、喝绿豆汤、防暑降温',
        background: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
        image: 'picture/24节气/大暑.png'
    },
    liqiu: {
        name: '立秋',
        date: '公历8月7-9日',
        description: '立秋标志着秋季的开始，暑去凉来。此时天气逐渐转凉，昼夜温差加大，农作物开始成熟。',
        poet: '刘禹锡',
        poem: '空山新雨后，天气晚来秋。',
        location: '中国各地',
        history: '立秋是秋季的第一个节气，源于古代农耕文明',
        significance: '标志着秋季的开始，天气转凉',
        period: '周代至今',
        features: '天气转凉，农作物成熟，收获季节',
        influence: '指导秋季农业生产，影响民俗活动',
        time: '太阳黄经135°',
        customs: '贴秋膘、吃秋桃、祭祀秋神',
        background: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
        image: 'picture/24节气/立秋.png'
    },
    chushu: {
        name: '处暑',
        date: '公历8月22-24日',
        description: '处暑表示炎热的夏天即将过去，暑气渐消。此时天气转凉，秋高气爽，是收获的好时节。',
        poet: '白居易',
        poem: '离离暑云散，袅袅凉风起。',
        location: '中国各地',
        history: '处暑源于古代农耕文明，是秋季第二个节气',
        significance: '标志着暑气消退，天气转凉',
        period: '汉代至今',
        features: '暑气消退，天气转凉，秋高气爽',
        influence: '指导秋季农业生产，影响民俗活动',
        time: '太阳黄经150°',
        customs: '吃鸭子、放河灯、祭祀秋神',
        background: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80',
        image: 'picture/24节气/处暑.png'
    },
    bailu: {
        name: '白露',
        date: '公历9月7-9日',
        description: '白露时节，天气转凉，清晨时分草木上会出现露水。此时秋意渐浓，是收获的季节。',
        poet: '杜甫',
        poem: '露从今夜白，月是故乡明。',
        location: '中国各地',
        history: '白露源于古代农耕文明，是秋季第三个节气',
        significance: '标志着天气转凉，露水出现',
        period: '汉代至今',
        features: '天气转凉，露水出现，秋意渐浓',
        influence: '指导秋季农业生产，影响民俗活动',
        time: '太阳黄经165°',
        customs: '吃白露茶、采白露水、祭祀秋神',
        background: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80',
        image: 'picture/24节气/白露.png'
    },
    qiufen: {
        name: '秋分',
        date: '公历9月22-24日',
        description: '秋分这一天，太阳直射赤道，昼夜平分。此后北半球昼短夜长，气温逐渐下降，是收获的重要时节。',
        poet: '杜牧',
        poem: '银烛秋光冷画屏，轻罗小扇扑流萤。',
        location: '中国各地',
        history: '秋分是古代重要的天文节气，昼夜平分点',
        significance: '标志着秋季过半，昼夜平分',
        period: '周代至今',
        features: '昼夜平分，气温下降，秋收繁忙',
        influence: '指导农业生产，影响天文观测',
        time: '太阳黄经180°',
        customs: '吃秋菜、祭月、竖蛋游戏',
        background: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80',
        image: 'picture/24节气/秋分.png'
    },
    hanlu: {
        name: '寒露',
        date: '公历10月8-9日',
        description: '寒露时节，气温比白露时更低，地面的露水更冷，快要凝结成霜。此时秋高气爽，是收获的季节。',
        poet: '李白',
        poem: '空庭得秋长漫漫，寒露入暮愁衣单。',
        location: '中国各地',
        history: '寒露源于古代农耕文明，是秋季第五个节气',
        significance: '标志着气温更低，露水变凉',
        period: '汉代至今',
        features: '气温更低，露水变凉，秋意更浓',
        influence: '指导秋季农业生产，影响民俗活动',
        time: '太阳黄经195°',
        customs: '吃芝麻、赏菊花、防寒保暖',
        background: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
        image: 'picture/24节气/寒露.png'
    },
    shuangjiang: {
        name: '霜降',
        date: '公历10月23-24日',
        description: '霜降是秋季最后一个节气，天气渐冷，开始有霜。此时昼夜温差大，农作物收获完毕，准备过冬。',
        poet: '杜牧',
        poem: '月落乌啼霜满天，江枫渔火对愁眠。',
        background: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
        image: 'picture/24节气/霜降.png'
    },
    lidong: {
        name: '立冬',
        date: '公历11月7-8日',
        description: '立冬标志着冬季的开始，万物收藏。此时气温下降，开始进入寒冷季节，人们开始准备过冬。',
        poet: '陆游',
        poem: '冻笔新诗懒写，寒炉美酒时温。',
        background: 'https://images.unsplash.com/photo-1483664852095-d6cc68707056?w=1920&q=80',
        image: 'picture/24节气/立冬.png'
    },
    xiaoxue: {
        name: '小雪',
        date: '公历11月22-23日',
        description: '小雪时节，气温下降，开始降雪，但雪量不大。此时天气寒冷，需注意防寒保暖。',
        poet: '白居易',
        poem: '花雪随风不厌看，更多还肯失林峦。',
        background: 'https://images.unsplash.com/photo-1483664852095-d6cc68707056?w=1920&q=80',
        image: 'picture/24节气/小雪.png'
    },
    daxue: {
        name: '大雪',
        date: '公历12月6-8日',
        description: '大雪时节，天气更冷，降雪的可能性比小雪时更大。此时严寒降临，需做好防寒保暖工作。',
        poet: '柳宗元',
        poem: '大雪纷纷何所似，撒盐空中差可拟。',
        background: 'https://images.unsplash.com/photo-1483664852095-d6cc68707056?w=1920&q=80',
        image: 'picture/24节气/大雪.png'
    },
    dongzhi: {
        name: '冬至',
        date: '公历12月21-23日',
        description: '冬至这一天，太阳直射南回归线，北半球白昼最短。此后白昼逐渐变长，是重要的传统节日。',
        poet: '白居易',
        poem: '天时人事日相催，冬至阳生春又来。',
        background: 'https://images.unsplash.com/photo-1483664852095-d6cc68707056?w=1920&q=80',
        image: 'picture/24节气/冬至.png'
    },
    xiaohan: {
        name: '小寒',
        date: '公历1月5-7日',
        description: '小寒时节，天气寒冷，但还未达到最冷。此时气温很低，需注意防寒保暖，做好冬季防护。',
        poet: '王安石',
        poem: '小寒连大吕，欢鹊垒新巢。',
        background: 'https://images.unsplash.com/photo-1483664852095-d6cc68707056?w=1920&q=80',
        image: 'picture/24节气/小寒.png'
    },
    dahan: {
        name: '大寒',
        date: '公历1月20-21日',
        description: '大寒是二十四节气中最后一个节气，也是一年中最冷的时期。此时严寒至极，但春天即将到来。',
        poet: '杜甫',
        poem: '旧雪未及消，新雪又拥户。',
        background: 'https://images.unsplash.com/photo-1483664852095-d6cc68707056?w=1920&q=80',
        image: 'picture/24节气/大寒.png'
    }
};

const landmarksData = {
    changcheng: {
        name: '长城',
        englishName: 'Great Wall',
        scientific: 'Ancient Chinese Military Defense',
        icon: '🏔️',
        tags: ['世界文化遗产', '军事防御工程', '中华民族象征'],
        description: '长城是中国古代的军事防御工程，是世界文化遗产和世界新七大奇迹之一。它始建于春秋战国时期，历经多个朝代的修建和扩建，总长度超过2.1万公里，像一条巨龙蜿蜒在中国北方的山脉和草原上。',
        location: '北京、河北、山西等地',
        history: '始建于公元前7世纪，现存主要为明长城，是中国古代劳动人民智慧和勇气的结晶',
        significance: '中华民族的象征，世界文化遗产，展示了中国古代军事防御体系的杰出成就',
        period: '春秋战国至今',
        features: '雄伟壮观，工程浩大，历史悠久，文化内涵丰富',
        influence: '成为中华民族的精神象征，吸引全球游客前来参观',
        image: 'picture/名胜古迹/长城.png'
    },
    gugong: {
        name: '故宫',
        englishName: 'Forbidden City',
        scientific: 'Imperial Palace of Ming and Qing Dynasties',
        icon: '🏛️',
        tags: ['世界文化遗产', '皇家宫殿', '木质建筑群'],
        description: '故宫是明清两代的皇家宫殿，位于北京中轴线的中心，是世界上现存规模最大、保存最为完整的木质结构古建筑群之一，被誉为世界五大宫之一。',
        location: '北京市中心',
        history: '建于1406-1420年，明清两代24位皇帝在此居住，见证了中国封建王朝的兴衰',
        significance: '世界文化遗产，中国宫廷建筑的典范，反映了中国古代建筑艺术的最高成就',
        period: '明代至清代',
        features: '建筑宏伟，布局严谨，文物丰富，历史价值极高',
        influence: '展现了中国古代建筑艺术的精髓，是研究明清历史的重要资料',
        image: 'picture/名胜古迹/故宫.png'
    },
    bingmayong: {
        name: '兵马俑',
        englishName: 'Terracotta Army',
        scientific: 'Qin Shi Huang Mausoleum',
        icon: '🗿',
        tags: ['世界文化遗产', '秦始皇陵', '考古发现'],
        description: '兵马俑是秦始皇陵的陪葬坑，被誉为世界第八大奇迹。这些陶俑规模宏大，造型逼真，展现了秦代军队的编制和装备，是中国古代雕塑艺术的杰出代表。',
        location: '陕西省西安市',
        history: '建于公元前246-208年，1974年被农民发现，是20世纪最重大的考古发现之一',
        significance: '世界文化遗产，秦代军事文化的见证，中国古代雕塑艺术的瑰宝',
        period: '秦代',
        features: '数量众多，形态各异，工艺精湛，历史价值极高',
        influence: '为研究秦代军事、艺术和社会生活提供了珍贵资料',
        image: 'picture/名胜古迹/兵马俑.png'
    },
    xihu: {
        name: '西湖',
        englishName: 'West Lake',
        scientific: 'Cultural Landscape of Hangzhou',
        icon: '🌊',
        tags: ['世界文化遗产', '风景名胜', '江南园林'],
        description: '西湖是中国著名的风景名胜区，以其秀美的湖光山色和众多的名胜古迹而闻名，被誉为人间天堂。西湖的自然风光与人文景观融为一体，形成了独特的江南水乡特色。',
        location: '浙江省杭州市',
        history: '唐宋时期开始闻名，历代文人墨客留下众多诗篇和画作，是中国传统文化的重要载体',
        significance: '世界文化遗产，江南园林的典范，中国古典美学的体现',
        period: '唐宋至今',
        features: '湖光山色，亭台楼阁，人文景观，历史悠久',
        influence: '成为中国古典园林的重要代表，吸引无数游客前来观赏',
        image: 'picture/名胜古迹/西湖.png'
    },
    huangshan: {
        name: '黄山',
        englishName: 'Mount Huang',
        scientific: 'Huangshan Mountain Range',
        icon: '🏞️',
        tags: ['世界双遗产', '奇松怪石', '云海温泉'],
        description: '黄山以奇松、怪石、云海、温泉四绝著称，是中国最著名的山岳风景区之一，被誉为天下第一奇山。黄山的自然景观壮丽奇特，云海变幻莫测，给人以仙境般的感受。',
        location: '安徽省黄山市',
        history: '唐代开始闻名，明代徐霞客曾两次登临，留下"五岳归来不看山，黄山归来不看岳"的赞誉',
        significance: '世界文化与自然双重遗产，中国山岳风景的代表',
        period: '自古至今',
        features: '奇松怪石，云海温泉，壮丽山峰，自然奇观',
        influence: '成为中国山水画的重要题材，对中国传统美学产生深远影响',
        image: 'picture/名胜古迹/黄山.png'
    },
    budalagong: {
        name: '布达拉宫',
        englishName: 'Potala Palace',
        scientific: 'Tibetan Buddhist Palace',
        icon: '🏯',
        tags: ['世界文化遗产', '藏式建筑', '佛教圣地'],
        description: '布达拉宫是世界上海拔最高的宏伟建筑，是西藏的象征，也是藏传佛教的圣地。它依山而建，气势恢宏，融合了藏式建筑艺术的精华。',
        location: '西藏自治区拉萨市',
        history: '始建于7世纪，17世纪重建，是松赞干布为迎娶文成公主而建',
        significance: '世界文化遗产，藏式建筑的杰出代表，藏传佛教的重要圣地',
        period: '唐代至今',
        features: '依山而建，气势恢宏，藏式建筑风格，文化底蕴深厚',
        influence: '是藏传佛教的重要圣地，也是西藏文化的象征',
        image: 'picture/名胜古迹/布达拉宫.png'
    },
    guilinshanshui: {
        name: '桂林山水',
        englishName: 'Guilin Landscape',
        scientific: 'Karst Topography of Guilin',
        icon: '🌅',
        tags: ['喀斯特地貌', '山水画廊', '自然奇观'],
        description: '桂林山水以其独特的喀斯特地貌而闻名，山青、水秀、洞奇、石美，被誉为"山水甲天下"。这里的山峰挺拔秀丽，江水清澈见底，构成了一幅天然的山水画卷。',
        location: '广西壮族自治区桂林市',
        history: '唐代开始闻名，历代文人留下众多诗画赞美，是中国传统山水文化的重要载体',
        significance: '中国自然风光的代表，世界著名的旅游胜地',
        period: '自古至今',
        features: '喀斯特地貌，山水相依，风景秀丽，如诗如画',
        influence: '成为中国山水画的重要题材，吸引无数游客前来观赏',
        image: 'picture/名胜古迹/桂林山水.png'
    },
    yiheyuan: {
        name: '颐和园',
        englishName: 'Summer Palace',
        scientific: 'Imperial Garden of Qing Dynasty',
        icon: '🏮',
        tags: ['世界文化遗产', '皇家园林', '古典园林'],
        description: '颐和园是中国现存规模最大、保存最完整的皇家园林，集传统造园艺术之大成，被誉为"皇家园林博物馆"。它融合了江南园林的精巧和北方园林的大气。',
        location: '北京市海淀区',
        history: '始建于1750年，原为清代皇家园林，是慈禧太后晚年的主要居所',
        significance: '世界文化遗产，中国古典园林的杰作，传统造园艺术的典范',
        period: '清代至今',
        features: '山水天成，亭台楼阁，园林艺术，文化内涵丰富',
        influence: '展现了中国古典园林的艺术成就，是中国园林文化的重要代表',
        image: 'picture/名胜古迹/颐和园.png'
    },
    taishan: {
        name: '泰山',
        englishName: 'Mount Tai',
        scientific: 'Sacred Mountain of China',
        icon: '🌋',
        tags: ['世界双遗产', '五岳之首', '帝王封禅'],
        description: '泰山是五岳之首，历代帝王封禅祭祀的圣地，以其雄伟壮丽的自然景观和丰富的人文内涵而著称。泰山被视为中华民族的象征，有"泰山安，四海皆安"的说法。',
        location: '山东省泰安市',
        history: '自古为帝王封禅之地，历史文化积淀深厚，留下了众多的碑刻和文物',
        significance: '世界文化与自然双重遗产，中国名山的代表，中华民族的精神象征',
        period: '自古至今',
        features: '雄伟壮丽，历史悠久，文化底蕴深厚，自然景观优美',
        influence: '成为中华民族的精神象征，"登泰山而小天下"的文化内涵影响深远',
        image: 'picture/名胜古迹/泰山.png'
    }
};

const historyData = {
    wuqiannian: {
        name: '五千年文明',
        englishName: '5,000 Years of Civilization',
        scientific: 'Chinese Civilization',
        icon: '📜',
        tags: ['文明史', '朝代更替', '文化遗产'],
        description: '中华文明源远流长，从夏商周到明清，历经多个朝代的兴衰更替，创造了灿烂的文化遗产。中国是世界上唯一从未中断的古代文明，展现了强大的生命力和文化韧性。',
        period: '公元前2070年至今',
        features: '连续性强、包容性广、创新性突出、影响深远',
        influence: '对东亚文化圈产生深远影响，是世界文明的重要组成部分',
        history: '从夏朝建立开始，历经商、周、秦、汉、三国、晋、南北朝、隋、唐、五代十国、宋、元、明、清等朝代，形成了独特的文明体系',
        image: 'picture/历史文化/五千年文明.png'
    },
    chuantongwenhua: {
        name: '传统文化',
        englishName: 'Traditional Culture',
        scientific: 'Cultural Heritage',
        icon: '🏺',
        tags: ['儒家', '道家', '佛教'],
        description: '包括儒家思想、道家哲学、佛教文化等，构成了中华文化的精神内核，影响着中国人的价值观和行为方式。传统文化强调和谐、中庸、仁义礼智信等核心价值观。',
        period: '先秦时期至今',
        features: '多元一体、兼容并蓄、与时俱进、博大精深',
        influence: '塑造了中华民族的精神特质，为人类文明提供了独特的价值体系',
        history: '起源于先秦时期的百家争鸣，经秦汉、魏晋南北朝、隋唐、宋元明清等时期的发展，形成了以儒家为主、道家和佛教为辅的传统文化体系',
        image: 'picture/历史文化/传统文化.png'
    },
    minzujingshen: {
        name: '民族精神',
        englishName: 'National Spirit',
        scientific: 'Ethos',
        icon: '🎭',
        tags: ['爱国主义', '集体主义', '和谐理念'],
        description: '勤劳勇敢、自强不息、团结统一、爱好和平，是中华民族的精神特质，也是中华文化的重要内涵。民族精神是中华民族凝聚力和向心力的重要源泉。',
        period: '自古以来',
        features: '爱国主义、集体主义、和谐理念、自强不息',
        influence: '凝聚民族力量，推动社会发展，是中华民族生生不息的精神动力',
        history: '在中华民族的历史发展中逐渐形成，经过长期的社会实践和文化传承，成为中华民族的精神支柱',
        image: 'picture/历史文化/民族精神.png'
    },
    sidafaming: {
        name: '四大发明',
        englishName: 'Four Great Inventions',
        scientific: 'Technological Innovations',
        icon: '🏛️',
        tags: ['科技', '发明', '世界影响'],
        description: '造纸术、印刷术、指南针、火药是中国古代的重大发明，对世界文明发展产生了深远影响。这些发明推动了人类社会的进步，体现了中国古代人民的智慧。',
        period: '汉代至宋代',
        features: '技术创新、实用性强、影响广泛、意义深远',
        influence: '推动世界科技和文化进步，为人类文明做出了重要贡献',
        history: '造纸术发明于汉代，印刷术发明于隋唐时期，指南针发明于宋代，火药发明于唐代，这些发明先后传入世界各地，对人类文明发展产生了深远影响',
        image: 'picture/历史文化/四大发明.png'
    },
    zhuzibaijia: {
        name: '诸子百家',
        englishName: 'Hundred Schools of Thought',
        scientific: 'Philosophical Schools',
        icon: '📚',
        tags: ['思想', '哲学', '百家争鸣'],
        description: '春秋战国时期的思想大繁荣，儒家、道家、法家、墨家等学派百家争鸣，奠定了中国思想文化的基础。这一时期的思想成果对中国乃至东亚文化产生了深远影响。',
        period: '春秋战国时期',
        features: '思想多元、辩论激烈、影响深远、智慧璀璨',
        influence: '塑造了中国传统文化的基本格局，为后世思想发展提供了丰富资源',
        history: '春秋战国时期，社会动荡，诸侯争霸，各种思想流派纷纷涌现，形成了百家争鸣的局面，其中以儒家、道家、法家、墨家、兵家等学派最为著名',
        image: 'picture/历史文化/诸子百家.png'
    },
    sichouzhilu: {
        name: '丝绸之路',
        englishName: 'Silk Road',
        scientific: 'Trade Route',
        icon: '🛣️',
        tags: ['贸易', '文化交流', '国际合作'],
        description: '丝绸之路是连接东西方的贸易通道，促进了中国与中亚、欧洲的文化交流和经济发展。它不仅是商品贸易的通道，也是文化、科技、宗教传播的桥梁。',
        period: '汉代至明代',
        features: '贸易往来、文化交流、技术传播、和平合作',
        influence: '推动世界文明交流互鉴，促进了人类文明的共同发展',
        history: '汉武帝时期，张骞两次出使西域，开辟了以长安为起点，连接中亚、西亚和欧洲的贸易通道，因丝绸是主要贸易商品而得名',
        image: 'picture/历史文化/丝绸之路.png'
    },
    gudaiducheng: {
        name: '古代都城',
        englishName: 'Ancient Capitals',
        scientific: 'Urban History',
        icon: '🏰',
        tags: ['城市规划', '建筑艺术', '历史见证'],
        description: '长安、洛阳、开封、南京、北京等古代都城见证了中国王朝的兴衰更替，是历史文化的重要载体。这些都城的规划和建筑体现了中国古代的城市建设智慧。',
        period: '夏商周至明清',
        features: '规划严谨、建筑宏伟、文化丰富、历史厚重',
        influence: '体现中国古代城市规划和建筑艺术的最高成就，为现代城市建设提供借鉴',
        history: '中国古代都城的建设历史悠久，从夏朝的阳城开始，历经商周的镐京、洛邑，秦汉的咸阳、长安，隋唐的长安、洛阳，宋元明清的开封、杭州、南京、北京等，形成了独特的都城建设体系',
        image: 'picture/历史文化/古代都城.png'
    },
    junshiwenhua: {
        name: '军事文化',
        englishName: 'Military Culture',
        scientific: 'Strategic Thought',
        icon: '⚔️',
        tags: ['兵法', '战略', '军事理论'],
        description: '孙子兵法、三十六计等军事思想体现了中国古代的智慧和战略思维，对世界军事理论产生重要影响。中国古代军事文化强调谋略、仁义和和平。',
        period: '春秋战国时期至今',
        features: '谋略性强、实用性高、哲学深刻、影响广泛',
        influence: '世界军事理论的重要源泉，为现代战略思维提供智慧',
        history: '中国古代军事文化起源于春秋战国时期，以孙子兵法为代表的军事著作相继问世，经过秦汉、隋唐、宋元明清等时期的发展，形成了独特的军事文化体系',
        image: 'picture/历史文化/军事文化.png'
    },
    kejuzhidu: {
        name: '科举制度',
        englishName: 'Imperial Examination System',
        scientific: 'Educational System',
        icon: '📖',
        tags: ['教育', '选官', '公平竞争'],
        description: '科举制度是中国古代选拔官员的制度，延续1300多年，通过考试选拔人才，打破了世族垄断，促进了社会流动，对东亚各国的教育体系产生深远影响。',
        period: '隋代至清代',
        features: '公平竞争、选拔人才、促进教育、延续千年',
        influence: '影响东亚文官制度的形成，是中国古代制度文明的重要组成部分',
        history: '科举制度起源于隋朝，完善于唐朝，发展于宋朝，鼎盛于明清时期，1905年被废除，历时1300多年，是中国古代最重要的选官制度之一',
        image: 'picture/历史文化/科举制度.png'
    }
};

const folkloreData = {
    chunjie: {
        name: '春节',
        englishName: 'Spring Festival',
        scientific: 'Traditional Festival',
        icon: '🧧',
        tags: ['传统节日', '团圆', '辞旧迎新'],
        description: '春节是中国最重要的传统节日，象征团圆和新的开始，有贴春联、放鞭炮、吃年夜饭等习俗。春节期间，人们回家团聚，走亲访友，共享欢乐时光，洋溢着喜庆祥和的氛围。',
        time: '农历正月初一',
        customs: '贴春联、放鞭炮、拜年、吃饺子、发红包、舞龙舞狮',
        significance: '辞旧迎新，家庭团聚，传承文化，祈福纳祥',
        influence: '成为中华民族的文化符号，影响着全球华人的文化认同和情感连接',
        image: 'picture/风俗民情/春节.png'
    },
    zhongqiujie: {
        name: '中秋节',
        englishName: 'Mid-Autumn Festival',
        scientific: 'Traditional Festival',
        icon: '🎑',
        tags: ['传统节日', '团圆', '赏月'],
        description: '中秋节是月圆人团圆的传统节日，有赏月、吃月饼、猜灯谜等习俗，象征团圆和丰收。中秋之夜，家人团聚，共赏明月，共享月饼，寄托对亲人的思念和对美好生活的向往。',
        time: '农历八月十五',
        customs: '赏月、吃月饼、猜灯谜、祭月、家人团聚',
        significance: '团圆丰收，感恩自然，传承文化，寄托思念',
        influence: '成为中华民族团圆文化的重要象征，影响着全球华人的情感表达',
        image: 'picture/风俗民情/中秋节.png'
    },
    duanwujie: {
        name: '端午节',
        englishName: 'Dragon Boat Festival',
        scientific: 'Traditional Festival',
        icon: '🐉',
        tags: ['传统节日', '纪念屈原', '赛龙舟'],
        description: '端午节是纪念屈原的传统节日，有赛龙舟、吃粽子、挂艾草等习俗，寓意驱邪避疫。端午节期间，各地举行龙舟比赛，家家户户包粽子，营造热闹喜庆的氛围，表达对屈原的敬仰和对健康的祈福。',
        time: '农历五月初五',
        customs: '赛龙舟、吃粽子、挂艾草、戴香囊、喝雄黄酒',
        significance: '纪念屈原，驱邪避疫，强身健体，传承文化',
        influence: '成为中国传统节日的重要组成部分，赛龙舟已成为国际性的体育赛事',
        image: 'picture/风俗民情/端午节.png'
    },
    yuanxiaojie: {
        name: '元宵节',
        englishName: 'Lantern Festival',
        scientific: 'Traditional Festival',
        icon: '🏮',
        tags: ['传统节日', '花灯', '汤圆'],
        description: '元宵节是春节后的第一个重要节日，有赏花灯、猜灯谜、吃汤圆等习俗，象征团圆美满。元宵节期间，各地张灯结彩，举行灯会，猜灯谜活动热闹非凡，展现了中国传统文化的魅力。',
        time: '农历正月十五',
        customs: '赏花灯、猜灯谜、吃汤圆、舞龙舞狮、踩高跷',
        significance: '春节的延续，团圆喜庆，文化传承，欢乐祥和',
        influence: '成为中国传统节日的重要组成部分，灯会已成为各地重要的文化活动',
        image: 'picture/风俗民情/元宵节.png'
    },
    qingmingjie: {
        name: '清明节',
        englishName: 'Qingming Festival',
        scientific: 'Traditional Festival',
        icon: '🌿',
        tags: ['传统节日', '祭祀', '踏青'],
        description: '清明节是祭祖扫墓的传统节日，也是踏青郊游的好时节，体现了中国人慎终追远的传统美德。人们在这一天扫墓祭祖，缅怀先人，同时也欣赏春天的美景，感受生命的活力。',
        time: '公历4月4-6日',
        customs: '扫墓祭祖、踏青郊游、放风筝、插柳、吃青团',
        significance: '缅怀先人，慎终追远，亲近自然，珍惜当下',
        influence: '成为中华民族孝道文化的重要体现，影响着中国人的家族观念和生命观',
        image: 'picture/风俗民情/清明节.png'
    },
    chongyangjie: {
        name: '重阳节',
        englishName: 'Double Ninth Festival',
        scientific: 'Traditional Festival',
        icon: '🥮',
        tags: ['传统节日', '敬老', '登高'],
        description: '重阳节是登高望远、赏菊饮酒的节日，也是敬老爱老的传统节日，寓意健康长寿。重阳节期间，人们登高远眺，欣赏秋景，饮菊花酒，吃重阳糕，表达对长辈的尊敬和祝福。',
        time: '农历九月初九',
        customs: '登高、赏菊、饮菊花酒、吃重阳糕、敬老爱老',
        significance: '敬老爱老，祈福长寿，亲近自然，传承美德',
        influence: '成为中华民族敬老文化的重要体现，影响着中国人的尊老爱老传统',
        image: 'picture/风俗民情/重阳节.png'
    },
    hunjiaxisu: {
        name: '婚嫁习俗',
        englishName: 'Wedding Customs',
        scientific: 'Traditional Custom',
        icon: '🎎',
        tags: ['传统习俗', '婚姻', '礼仪'],
        description: '中国传统婚嫁习俗包括三书六礼、拜堂成亲等仪式，体现了对婚姻的重视和祝福。传统婚礼注重礼仪和象征意义，通过一系列仪式表达对新人的美好祝愿和对婚姻的庄重态度。',
        time: '传统婚礼仪式',
        customs: '三书六礼、拜堂成亲、闹洞房、穿嫁衣、坐花轿',
        significance: '人生大事，家族延续，文化传承，婚姻美满',
        influence: '成为中华民族婚姻文化的重要体现，影响着中国人的婚姻观念和家庭价值观',
        image: 'picture/风俗民情/婚嫁习俗.png'
    },
    yinshiwenhua: {
        name: '饮食文化',
        englishName: 'Food Culture',
        scientific: 'Cultural Heritage',
        icon: '🍜',
        tags: ['饮食', '文化', '传统'],
        description: '中国饮食文化包括八大菜系、茶文化、酒文化等，体现了中国人的生活智慧和审美情趣。中国菜讲究色香味俱全，注重食材的选择和烹饪工艺，形成了独特的饮食体系和文化内涵。',
        time: '日常饮食传统',
        customs: '八大菜系、茶道、酒礼、节日食品、餐桌礼仪',
        significance: '生活艺术，文化传承，社交纽带，健康养生',
        influence: '成为中华民族饮食文化的重要体现，影响着全球华人的饮食习惯和文化认同',
        image: 'picture/风俗民情/饮食文化.png'
    },
    fushiwenhua: {
        name: '服饰文化',
        englishName: 'Clothing Culture',
        scientific: 'Cultural Heritage',
        icon: '👘',
        tags: ['服饰', '传统', '文化'],
        description: '中国传统服饰文化包括汉服、旗袍等，展现了中华民族的审美观念和文化特色。传统服饰注重色彩搭配和款式设计，体现了不同时代的文化特色和社会风貌，是中华民族文化的重要组成部分。',
        time: '历代服饰演变',
        customs: '汉服、旗袍、民族服饰、节日盛装、传统配饰',
        significance: '文化标识，审美表达，历史见证，民族特色',
        influence: '成为中华民族服饰文化的重要体现，影响着中国人的审美观念和文化认同',
        image: 'picture/风俗民情/服饰文化.png'
    }
};

const artsData = {
    guohua: {
        name: '国画',
        englishName: 'Chinese Painting',
        scientific: 'Traditional Art',
        icon: '🎨',
        tags: ['传统艺术', '绘画', '东方美学'],
        description: '国画是中国传统绘画艺术，注重意境和笔墨韵味，以山水、花鸟、人物为主要题材。国画强调“以形写神”，追求神似而非形似，通过笔墨的运用表达画家的情感和思想。',
        features: '笔墨技法、意境表达、诗书画印结合、留白艺术',
        types: '山水画、花鸟画、人物画',
        significance: '东方美学的代表，中国传统文化的重要组成部分',
        history: '起源于新石器时代，经秦汉、魏晋南北朝、隋唐、宋元明清等时期发展，形成独特艺术体系',
        image: 'picture/传统艺术/国画.png'
    },
    shufa: {
        name: '书法',
        englishName: 'Chinese Calligraphy',
        scientific: 'Traditional Art',
        icon: '✍️',
        tags: ['传统艺术', '书法', '汉字艺术'],
        description: '书法是汉字的艺术表现，通过笔墨的韵律和结构的美感，体现东方美学精神和文化内涵。书法讲究笔法、结构、章法和气韵，是中国特有的艺术形式。',
        features: '笔法、结构、章法、气韵、意境',
        types: '楷书、行书、草书、隶书、篆书',
        significance: '汉字艺术的最高形式，中国传统文化的瑰宝',
        history: '起源于甲骨文和金文，经篆书、隶书、草书、楷书、行书等字体演变，形成完整书法体系',
        image: 'picture/传统艺术/书法.png'
    },
    jingju: {
        name: '京剧',
        englishName: 'Peking Opera',
        scientific: 'Traditional Art',
        icon: '🎭',
        tags: ['传统艺术', '戏曲', '国粹'],
        description: '京剧是中国国粹，融合唱、念、做、打的综合性艺术，以程式化的表演和丰富的剧目著称。京剧的脸谱、服装、音乐等元素都具有独特的艺术价值，是中国传统文化的重要组成部分。',
        features: '唱念做打、程式化表演、脸谱艺术、传统音乐',
        types: '生旦净末丑五大行当',
        significance: '中国传统戏曲的代表，世界非物质文化遗产',
        history: '形成于清代乾隆年间，融合徽剧、汉剧等元素，发展成为中国最具代表性的戏曲剧种',
        image: 'picture/传统艺术/京剧.png'
    },
    taoci: {
        name: '陶瓷',
        englishName: 'Chinese Ceramics',
        scientific: 'Traditional Craft',
        icon: '🏺',
        tags: ['传统工艺', '陶瓷', '工艺美术'],
        description: '中国陶瓷工艺精湛，历史悠久，以青花瓷、景德镇瓷器等享誉世界。陶瓷制作包括制胎、施釉、烧制等工序，体现了中国古代工匠的智慧和技艺。',
        features: '胎质细腻、釉色丰富、装饰精美、工艺精湛',
        types: '青花瓷、粉彩瓷、釉里红、汝窑、官窑',
        significance: '中国工艺美术的瑰宝，世界文化遗产',
        history: '起源于新石器时代的陶器，经商周、秦汉、唐宋、明清等时期发展，形成完整陶瓷艺术体系',
        image: 'picture/传统艺术/陶瓷.png'
    },
    minzuyinyue: {
        name: '民族音乐',
        englishName: 'Ethnic Music',
        scientific: 'Traditional Art',
        icon: '🎵',
        tags: ['传统艺术', '音乐', '民族文化'],
        description: '中国民族音乐以古琴、二胡、琵琶等传统乐器为主，具有独特的韵味和表现力。民族音乐反映了各民族的生活和情感，是中华民族文化的重要组成部分。',
        features: '音色独特、旋律优美、情感丰富、民族特色',
        types: '器乐、声乐、戏曲音乐、民间音乐',
        significance: '中华民族音乐文化的精华，非物质文化遗产',
        history: '起源于原始社会的劳动号子和祭祀音乐，经夏商周、秦汉、魏晋南北朝、隋唐、宋元明清等时期发展，形成丰富多样的民族音乐体系',
        image: 'picture/传统艺术/民族音乐.png'
    },
    minzuwudao: {
        name: '民族舞蹈',
        englishName: 'Ethnic Dance',
        scientific: 'Traditional Art',
        icon: '💃',
        tags: ['传统艺术', '舞蹈', '民族文化'],
        description: '中国民族舞蹈丰富多彩，各民族都有自己独特的舞蹈形式，体现了民族特色和文化内涵。民族舞蹈动作优美，节奏明快，是中华民族文化的重要表现形式。',
        features: '动作优美、节奏明快、民族特色、文化内涵',
        types: '汉族民间舞、藏族舞、蒙古族舞、维吾尔族舞',
        significance: '中华民族文化的重要表现形式，非物质文化遗产',
        history: '起源于原始社会的祭祀和庆典活动，经夏商周、秦汉、魏晋南北朝、隋唐、宋元明清等时期发展，形成各具特色的民族舞蹈体系',
        image: 'picture/传统艺术/民族舞蹈.png'
    },
    zaji: {
        name: '杂技',
        englishName: 'Acrobatics',
        scientific: 'Traditional Art',
        icon: '🎪',
        tags: ['传统艺术', '表演', '技艺'],
        description: '中国杂技艺术历史悠久，以惊险刺激的动作和高超的技艺著称，享誉世界。杂技表演融合了力量、平衡、灵活性等多种元素，展现了人类身体的极限能力。',
        features: '技巧高超、惊险刺激、观赏性强、历史悠久',
        types: '柔术、顶技、车技、空中技巧',
        significance: '中国传统表演艺术的代表，世界非物质文化遗产',
        history: '起源于原始社会的生产劳动和祭祀活动，经夏商周、秦汉、魏晋南北朝、隋唐、宋元明清等时期发展，形成独特的杂技艺术体系',
        image: 'picture/传统艺术/杂技.png'
    },
    dengcai: {
        name: '灯彩',
        englishName: 'Lantern Art',
        scientific: 'Traditional Craft',
        icon: '🏮',
        tags: ['传统工艺', '灯彩', '节日文化'],
        description: '灯彩是中国传统工艺，主要用于节日庆典，造型精美，寓意吉祥。灯彩制作工艺复杂，包括扎骨架、裱糊、绘画等工序，展现了中国传统工艺的精湛技艺。',
        features: '造型多样、色彩鲜艳、寓意吉祥、工艺精湛',
        types: '宫灯、走马灯、龙灯、花灯',
        significance: '节日文化的重要元素，非物质文化遗产',
        history: '起源于汉代的燃灯习俗，经魏晋南北朝、隋唐、宋元明清等时期发展，形成丰富多样的灯彩艺术体系',
        image: 'picture/传统艺术/灯彩.png'
    },
    cixiu: {
        name: '刺绣',
        englishName: 'Embroidery',
        scientific: 'Traditional Craft',
        icon: '🧵',
        tags: ['传统工艺', '刺绣', '手工艺'],
        description: '中国刺绣工艺精湛，有苏绣、湘绣、蜀绣、粤绣四大名绣，技艺高超，图案精美。刺绣是中国传统手工艺的重要组成部分，体现了劳动人民的智慧和创造力。',
        features: '针法细腻、色彩丰富、图案精美、工艺精湛',
        types: '苏绣、湘绣、蜀绣、粤绣',
        significance: '中国传统手工艺的精华，非物质文化遗产',
        history: '起源于新石器时代的骨针和丝线，经夏商周、秦汉、魏晋南北朝、隋唐、宋元明清等时期发展，形成四大名绣等各具特色的刺绣艺术体系',
        image: 'picture/传统艺术/刺绣.png'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupBackButtons();
    setupTermBoxes();
    setupLandmarkCards();
    setupHistoryCards();
    setupFolkloreCards();
    setupArtCards();
    setupCloseButton();
    setupDetailPanels();
    setupAIGuide();
    setupChat();
});



function setupNavigation() {
    const navButtons = document.querySelectorAll('.interactive-box');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            const sectionPanel = document.getElementById(section + '-section');
            
            if (sectionPanel) {
                sectionPanel.style.display = 'block';
            }
        });
    });
}

function setupBackButtons() {
    const backButtons = document.querySelectorAll('.nav-back-btn, .back-btn');
    
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const sectionPanel = this.closest('.section-panel');
            if (sectionPanel) {
                sectionPanel.classList.add('slide-out');
                
                sectionPanel.addEventListener('animationend', function handler() {
                    sectionPanel.style.display = 'none';
                    sectionPanel.classList.remove('slide-out');
                    sectionPanel.removeEventListener('animationend', handler);
                });
            }
        });
    });
}

function setupTermBoxes() {
    const termBoxes = document.querySelectorAll('.term-box');
    const detailModal = document.getElementById('detail-modal');
    
    termBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const termKey = this.getAttribute('data-term');
            const termData = solarTermsData[termKey];
            
            if (termData) {
                // 设置头部信息
                document.getElementById('detail-icon').textContent = termData.icon || '🌸';
                document.getElementById('detail-title').textContent = termData.name;
                document.getElementById('detail-english').textContent = termData.englishName || '';
                document.getElementById('detail-scientific').textContent = termData.scientific || '';
                
                // 设置标签
                const tagsContainer = document.getElementById('detail-tags');
                tagsContainer.innerHTML = '';
                if (termData.tags && termData.tags.length > 0) {
                    termData.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'detail-tag';
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                }
                
                // 设置描述
                document.getElementById('detail-description').textContent = termData.description;
                
                // 设置详细信息
                document.getElementById('detail-location').textContent = termData.location || '中国各地';
                document.getElementById('detail-history').textContent = termData.history || '古代农耕文明的重要时间标志';
                document.getElementById('detail-significance').textContent = termData.significance || '指导农业生产，反映自然规律';
                document.getElementById('detail-period').textContent = termData.period || '起源于先秦时期';
                document.getElementById('detail-features').textContent = termData.features || '反映气候变化，指导农事活动';
                document.getElementById('detail-influence').textContent = termData.influence || '对东亚农业生产和民俗文化产生深远影响';
                document.getElementById('detail-time').textContent = termData.time || '按太阳黄经划分';
                document.getElementById('detail-customs').textContent = termData.customs || '各地有相应的节气习俗和饮食文化';
                
                // 显示/隐藏信息项
                document.querySelector('.info-item:nth-child(1)').style.display = termData.location ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(2)').style.display = termData.history ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(3)').style.display = termData.significance ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(4)').style.display = termData.period ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(5)').style.display = termData.features ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(6)').style.display = termData.influence ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(7)').style.display = termData.time ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(8)').style.display = termData.customs ? 'flex' : 'none';
                
                // 设置图片
                const detailImage = document.getElementById('detail-image');
                const imageSection = document.querySelector('.detail-image-section');
                if (termData.image) {
                    detailImage.src = termData.image;
                    imageSection.style.display = 'block';
                } else {
                    detailImage.src = '';
                    imageSection.style.display = 'none';
                }
                
                // 显示弹窗
                detailModal.style.display = 'flex';
                detailModal.className = 'detail-modal detail-modal-solar-term';
            }
        });
    });
}

function setupLandmarkCards() {
    const landmarkCards = document.querySelectorAll('.landmark-card');
    const detailModal = document.getElementById('detail-modal');
    const detailCloseBtn = document.querySelector('.detail-close-btn');
    
    // 添加关闭按钮事件
    detailCloseBtn.addEventListener('click', function() {
        detailModal.style.display = 'none';
    });
    
    // 点击背景关闭
    detailModal.addEventListener('click', function(e) {
        if (e.target === detailModal) {
            detailModal.style.display = 'none';
        }
    });
    
    landmarkCards.forEach(card => {
        card.addEventListener('click', function() {
            const landmarkKey = this.getAttribute('data-landmark');
            const landmarkData = landmarksData[landmarkKey];
            
            if (landmarkData) {
                // 设置头部信息
                document.getElementById('detail-icon').textContent = landmarkData.icon;
                document.getElementById('detail-title').textContent = landmarkData.name;
                document.getElementById('detail-english').textContent = landmarkData.englishName;
                document.getElementById('detail-scientific').textContent = landmarkData.scientific;
                
                // 设置标签
                const tagsContainer = document.getElementById('detail-tags');
                tagsContainer.innerHTML = '';
                if (landmarkData.tags && landmarkData.tags.length > 0) {
                    landmarkData.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'detail-tag';
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                }
                
                // 设置描述
                document.getElementById('detail-description').textContent = landmarkData.description || '';
                
                // 设置详细信息
                document.getElementById('detail-location').textContent = landmarkData.location || '';
                document.getElementById('detail-history').textContent = landmarkData.history || '';
                document.getElementById('detail-significance').textContent = landmarkData.significance || '';
                document.getElementById('detail-period').textContent = landmarkData.period || '';
                document.getElementById('detail-features').textContent = landmarkData.features || '';
                document.getElementById('detail-influence').textContent = landmarkData.influence || '';
                document.getElementById('detail-time').textContent = landmarkData.time || '';
                document.getElementById('detail-customs').textContent = landmarkData.customs || '';
                
                // 显示/隐藏信息项
                document.querySelector('.info-item:nth-child(1)').style.display = landmarkData.location ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(2)').style.display = landmarkData.history ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(3)').style.display = landmarkData.significance ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(4)').style.display = landmarkData.period ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(5)').style.display = landmarkData.features ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(6)').style.display = landmarkData.influence ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(7)').style.display = landmarkData.time ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(8)').style.display = landmarkData.customs ? 'flex' : 'none';
                
                // 设置图片
                const detailImage = document.getElementById('detail-image');
                const imageSection = document.querySelector('.detail-image-section');
                if (landmarkData.image) {
                    detailImage.src = landmarkData.image;
                    imageSection.style.display = 'block';
                } else {
                    detailImage.src = '';
                    imageSection.style.display = 'none';
                }
                
                // 显示弹窗
                detailModal.style.display = 'flex';
                detailModal.className = 'detail-modal landmark-modal';
            }
        });
    });
}

function setupHistoryCards() {
    const historyCards = document.querySelectorAll('.history-card');
    const detailModal = document.getElementById('detail-modal');
    
    historyCards.forEach(card => {
        card.addEventListener('click', function() {
            const historyKey = this.getAttribute('data-history');
            const data = historyData[historyKey];
            
            if (data) {
                // 设置头部信息
                document.getElementById('detail-icon').textContent = data.icon || '📜';
                document.getElementById('detail-title').textContent = data.name;
                document.getElementById('detail-english').textContent = data.englishName || '';
                document.getElementById('detail-scientific').textContent = data.scientific || '';
                
                // 设置标签
                const tagsContainer = document.getElementById('detail-tags');
                tagsContainer.innerHTML = '';
                if (data.tags && data.tags.length > 0) {
                    data.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'detail-tag';
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                }
                
                // 设置描述
                document.getElementById('detail-description').textContent = data.description || '';
                
                // 设置详细信息
                document.getElementById('detail-period').textContent = data.period || '';
                document.getElementById('detail-features').textContent = data.features || '';
                document.getElementById('detail-influence').textContent = data.influence || '';
                document.getElementById('detail-location').textContent = data.location || '';
                document.getElementById('detail-history').textContent = data.history || '';
                document.getElementById('detail-time').textContent = data.time || '';
                document.getElementById('detail-customs').textContent = data.customs || '';
                document.getElementById('detail-significance').textContent = data.significance || '';
                
                // 显示/隐藏信息项
                document.querySelector('.info-item:nth-child(1)').style.display = data.location ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(2)').style.display = data.history ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(3)').style.display = data.significance ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(4)').style.display = data.period ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(5)').style.display = data.features ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(6)').style.display = data.influence ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(7)').style.display = data.time ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(8)').style.display = data.customs ? 'flex' : 'none';
                
                // 设置图片
                const detailImage = document.getElementById('detail-image');
                const imageSection = document.querySelector('.detail-image-section');
                if (data.image) {
                    detailImage.src = data.image;
                    imageSection.style.display = 'block';
                } else {
                    detailImage.src = '';
                    imageSection.style.display = 'none';
                }
                
                // 显示弹窗
                detailModal.style.display = 'flex';
                detailModal.className = 'detail-modal';
            }
        });
    });
}

function setupFolkloreCards() {
    const folkloreCards = document.querySelectorAll('.folklore-card');
    const detailModal = document.getElementById('detail-modal');
    
    folkloreCards.forEach(card => {
        card.addEventListener('click', function() {
            const folkloreKey = this.getAttribute('data-folklore');
            const data = folkloreData[folkloreKey];
            
            if (data) {
                // 设置头部信息
                document.getElementById('detail-icon').textContent = data.icon || '🎭';
                document.getElementById('detail-title').textContent = data.name;
                document.getElementById('detail-english').textContent = data.englishName || '';
                document.getElementById('detail-scientific').textContent = data.scientific || '';
                
                // 设置标签
                const tagsContainer = document.getElementById('detail-tags');
                tagsContainer.innerHTML = '';
                if (data.tags && data.tags.length > 0) {
                    data.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'detail-tag';
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                }
                
                // 设置描述
                document.getElementById('detail-description').textContent = data.description || '';
                
                // 设置详细信息
                document.getElementById('detail-time').textContent = data.time || '';
                document.getElementById('detail-customs').textContent = data.customs || '';
                document.getElementById('detail-significance').textContent = data.significance || '';
                document.getElementById('detail-period').textContent = data.period || '';
                document.getElementById('detail-features').textContent = data.features || '';
                document.getElementById('detail-influence').textContent = data.influence || '';
                document.getElementById('detail-location').textContent = data.location || '';
                document.getElementById('detail-history').textContent = data.history || '';
                
                // 显示/隐藏信息项
                document.querySelector('.info-item:nth-child(1)').style.display = data.location ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(2)').style.display = data.history ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(3)').style.display = data.significance ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(4)').style.display = data.period ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(5)').style.display = data.features ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(6)').style.display = data.influence ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(7)').style.display = data.time ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(8)').style.display = data.customs ? 'flex' : 'none';
                
                // 设置图片
                const detailImage = document.getElementById('detail-image');
                const imageSection = document.querySelector('.detail-image-section');
                if (data.image) {
                    detailImage.src = data.image;
                    imageSection.style.display = 'block';
                } else {
                    detailImage.src = '';
                    imageSection.style.display = 'none';
                }
                
                // 显示弹窗
                detailModal.style.display = 'flex';
                detailModal.className = 'detail-modal';
            }
        });
    });
}

function setupArtCards() {
    const artCards = document.querySelectorAll('.art-card');
    const detailModal = document.getElementById('detail-modal');
    
    artCards.forEach(card => {
        card.addEventListener('click', function() {
            const artKey = this.getAttribute('data-art');
            const artData = artsData[artKey];
            
            if (artData) {
                // 设置头部信息
                document.getElementById('detail-icon').textContent = artData.icon || '🎨';
                document.getElementById('detail-title').textContent = artData.name;
                document.getElementById('detail-english').textContent = artData.englishName || '';
                document.getElementById('detail-scientific').textContent = artData.scientific || '';
                
                // 设置标签
                const tagsContainer = document.getElementById('detail-tags');
                tagsContainer.innerHTML = '';
                if (artData.tags && artData.tags.length > 0) {
                    artData.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'detail-tag';
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                }
                
                // 设置描述
                document.getElementById('detail-description').textContent = artData.description || '';
                
                // 设置详细信息
                document.getElementById('detail-features').textContent = artData.features || '';
                document.getElementById('detail-influence').textContent = artData.influence || '';
                document.getElementById('detail-significance').textContent = artData.significance || '';
                document.getElementById('detail-period').textContent = artData.period || '';
                document.getElementById('detail-location').textContent = artData.location || '';
                document.getElementById('detail-history').textContent = artData.history || '';
                document.getElementById('detail-time').textContent = artData.time || '';
                document.getElementById('detail-customs').textContent = artData.customs || '';
                
                // 显示/隐藏信息项
                document.querySelector('.info-item:nth-child(1)').style.display = artData.location ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(2)').style.display = artData.history ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(3)').style.display = artData.significance ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(4)').style.display = artData.period ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(5)').style.display = artData.features ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(6)').style.display = artData.influence ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(7)').style.display = artData.time ? 'flex' : 'none';
                document.querySelector('.info-item:nth-child(8)').style.display = artData.customs ? 'flex' : 'none';
                
                // 检查是否有types字段，如果有则显示为文化影响
                if (artData.types) {
                    document.getElementById('detail-influence').textContent = artData.types;
                    document.querySelector('.info-item:nth-child(6)').style.display = 'flex';
                }
                
                // 设置图片
                const detailImage = document.getElementById('detail-image');
                const imageSection = document.querySelector('.detail-image-section');
                if (artData.image) {
                    detailImage.src = artData.image;
                    imageSection.style.display = 'block';
                } else {
                    detailImage.src = '';
                    imageSection.style.display = 'none';
                }
                
                // 显示弹窗
                detailModal.style.display = 'flex';
                detailModal.className = 'detail-modal';
            }
        });
    });
}

function setupCloseButton() {
    const closeBtns = document.querySelectorAll('.close-btn');
    const backBtns = document.querySelectorAll('.back-btn');
    const detailModal = document.getElementById('detail-modal');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            detailModal.style.display = 'none';
        });
    });
    
    backBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            detailModal.style.display = 'none';
        });
    });
}

function setupDetailPanels() {
    const detailModal = document.getElementById('detail-modal');
    
    detailModal.addEventListener('click', function(e) {
        if (e.target === detailModal) {
            detailModal.style.display = 'none';
        }
    });
}

function setupAIGuide() {
    const aiGuideBtn = document.getElementById('aiGuideBtn');
    const aiGuidePanel = document.getElementById('ai-guide-panel');
    const aiCloseBtn = document.querySelector('.ai-close-btn');
    
    // 点击按钮打开聊天面板
    if (aiGuideBtn) {
        aiGuideBtn.addEventListener('click', function() {
            aiGuidePanel.classList.add('active');
            // 隐藏按钮
            aiGuideBtn.style.display = 'none';
        });
    }
    
    // 关闭按钮
    if (aiCloseBtn) {
        aiCloseBtn.addEventListener('click', function() {
            aiGuidePanel.classList.remove('active');
            // 显示按钮
            if (aiGuideBtn) {
                aiGuideBtn.style.display = 'flex';
            }
        });
    }
}

function setupChat() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    
    // 聊天记录数组（用于上下文对话）
    let chatHistory = [];
    
    function addMessage(content, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
        
        const messageContent = document.createElement('span');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    async function handleSendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // 添加用户消息
        addMessage(message, true);
        chatInput.value = '';
        
        // 添加加载中提示
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message ai-message';
        loadingDiv.innerHTML = '<span class="message-content">思考中...</span>';
        chatMessages.appendChild(loadingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        try {
            // 将用户消息添加到历史记录
            chatHistory.push({ role: "user", content: message });
            
            // 限制聊天记录长度（只保留最近 10 条，避免 token 过多）
            if (chatHistory.length > 10) {
                chatHistory = chatHistory.slice(-10);
            }
            
            const response = await fetch('http://localhost:11434/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: "qwen2.5:7b",
                    messages: [
                        {
                            role: "system",
                            content: "你是博物馆 AI 向导'博物馆小博士'。请用以下方式和游客交流：1. 语言风格：亲切友好、通俗易懂、生动有趣；2. 内容特点：专业介绍博物馆展品、历史文化、艺术珍品、科学技术等相关知识；3. 回答长度：每次 4-5 句话，简短精炼；4. 使用表情符号增加趣味性（🏛️🎨📜等）；5. 传递积极向上的文化价值观。6、少用大约，左右等词，体现专业和科学性"
                        },
                        ...chatHistory
                    ],
                    stream: false
                })
            });
            
            const data = await response.json();
            const aiText = data.message.content;
            
            // 移除加载中提示
            chatMessages.removeChild(loadingDiv);
            
            // 将 AI 回复添加到历史记录
            chatHistory.push({ role: "assistant", content: aiText });
            addMessage(aiText, false);
            
        } catch (error) {
            // 移除加载中提示
            chatMessages.removeChild(loadingDiv);
            
            // 显示错误信息
            const errorDiv = document.createElement('div');
            errorDiv.className = 'message ai-message';
            errorDiv.textContent = '连接 AI 失败，请确保 Ollama 已启动';
            chatMessages.appendChild(errorDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            console.error('AI 聊天错误:', error);
        }
    }
    
    sendBtn.addEventListener('click', handleSendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
}