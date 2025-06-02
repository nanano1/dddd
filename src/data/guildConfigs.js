// 工会配置数据文件
// 您可以在这里添加或修改工会的配置信息

// 冒险者工会 A.G. 配置
export const adventurerGuildConfig = {
  // 基本信息
  guildName: '冒险家工会',
  guildSubtitle: 'A.G.',
  guildType: '工会势力',
  description: '由自由冒险者组成的松散联盟，致力于探索未知领域，完成各种委托任务。成员拥有极大的自由度，追求个人成长与团队协作的平衡。',
  
  // 主要图像
  centerLogo: '/assets/images/worldview/AG标准制式.png',
  backgroundImage: '/assets/images/worldview/AGbackground.png',
  
  // 底部图标 - 3个标准图标
  bottomIcons: [
    {
      image: '/assets/images/worldview/AG标准制式.png',
      title: '标准制式',
      onClick: () => console.log('点击了标准制式')
    },
    {
      image: '/assets/images/worldview/AG等级.png',
      title: '等级',
      onClick: () => console.log('点击了等级制度')
    },
    {
      image: '/assets/images/worldview/AG平面图1.png',
      title: '平面图1',
      onClick: () => console.log('点击了组织架构')
    }
  ],
  
  // 对应每个选项卡的描述内容
  tabDescriptions: [
    '接受委托解决大部分居民日常生活中的困难，每位冒险家会根据已完成委托的难度及数量评定等级，热情，勇敢',
    '实体信物：勋章，按照从低到高的等级分为初级、中级、高级、特级以及特使，对应橙、绿、紫、红、蓝五种颜色，在所有人族友好城邦均设有驻地，负责发布委托以及等级评定',
    '只要心怀希望勇于冒险，利普赫顿的合法公民都有机会通过考核成为注册冒险家，发挥自己的特长为前来寻求帮助的人们排忧解难',
    ],
  
  // 右侧角色头像
  characterAvatars: [
    {
      image: '/assets/images/characters/LUMINA@2x.png',
      name: 'LUMINA',
      title: '冒险者',
      characterId: 'lumina',
      onClick: () => console.log('点击了角色1')
    },
    {
      image: '/assets/images/characters/lizi.png',
      name: '狸子',
      title: '战士',
      characterId: 'LIZI',
      onClick: () => console.log('点击了角色2')
    },
    {
      image: '/assets/images/characters/狐坂枫.png',
      name: '狐坂枫',
      title: '战士',
      characterId: 'KOSAKAKAZE',
      onClick: () => console.log('点击了角色3')
    },
    {
      image: '/assets/images/characters/FROSTINE.png',
      name: '茯倾',
      title: '调香师',
      characterId: 'FROSTINE',
      onClick: () => console.log('点击了角色4')
    }
  ],
  
  // 颜色主题
  primaryColor: '#54420E', // 棕色主题
  secondaryColor: '#876F32',
  
  // 可选logo集合（用于底部图标点击切换）
  alternativeLogos: [
    '/assets/images/worldview/AG标准制式.png',
    '/assets/images/worldview/AG等级.png',
    '/assets/images/worldview/AG平面图1.png',
  ]
};

// 克里斯万象学院配置
export const crystalSchoolConfig = {
  guildName: '克里斯万象学院',
  guildSubtitle: 'C.S.',
  guildType: '学院势力',
  description: '依山傍水环境优美，五大学院齐头并进，最能代表克里斯万象学校的元素汇聚在代表着自由纯净的蓝色校徽上，传达着其"不拘一格"的理念。',
  
  centerLogo: '/assets/images/worldview/CSlogo.png',
  backgroundImage: '/assets/images/worldview/CSbackground.png',
  
  bottomIcons: [
    { image: '/assets/images/worldview/c.s标准制式.png', title: '标准制式' },
    { image: '/assets/images/worldview/c.s标准色.png', title: '标准色' },
    { image: '/assets/images/worldview/魔法分院.png', title: '魔法分院' },
    { image: '/assets/images/worldview/机械分院.png', title: '机械分院' },
    { image: '/assets/images/worldview/医疗分院.png', title: '医疗分院' },
    { image: '/assets/images/worldview/格斗分院.png', title: '格斗分院' },
    { image: '/assets/images/worldview/学术分院.png', title: '学术分院' },
    { image: '/assets/images/worldview/院徽拼合.png', title: '院徽拼合' },
    { image: '/assets/images/worldview/平面图1.png', title: '平面图1' },
  ],
  
  // 对应每个选项卡的描述内容
  tabDescriptions: [
    '学院统一制式包括蓝白相间的校服、学院徽章和各系特色标识。不同年级和院系有相应的服装区别，体现学院的严谨与活力。',
    '克里斯万象学院的徽章采用蓝色为主色调，象征着智慧与纯净。徽章中央是万象之树，代表知识的无限分支和学院的包容精神。',
    '学院占地广阔，包括教学区、研究区、宿舍区、图书馆区和实验区。整体布局呈星形分布，中央是标志性的万象塔。',
    '学院设有五大院系：奥术学院、工程学院、自然学院、人文学院、艺术学院。每个院系都有独特的专业设置和研究方向。',
    '学院创建于第二纪元末期，是大陆最古老的高等学府之一。历经千年发展，培养了无数杰出人才，为大陆文明进步做出巨大贡献。'
  ],
  
  characterAvatars: [
    {
      image: '/assets/images/characters/小四.png',
      name: '小四',
      title: '学者',
      characterId: 'xiaosi'
    },
    {
      image: '/assets/images/characters/NIEHTZU.png',
      name: '聂子',
      title: '校医',
      characterId: 'niezi'
    }
  ],
  
  primaryColor: '#0047AB', // 蓝色主题
  secondaryColor: '#1E90FF',
  
  alternativeLogos: [
    '/assets/images/worldview/c.s标准制式.png',
    '/assets/images/worldview/c.s标准色.png',
    '/assets/images/worldview/魔法分院.png',
    '/assets/images/worldview/机械分院.png', 
    '/assets/images/worldview/医疗分院.png', 
    '/assets/images/worldview/格斗分院.png', 
     '/assets/images/worldview/学术分院.png', 
    '/assets/images/worldview/院徽拼合.png', 
    '/assets/images/worldview/平面图1.png',
    
  ]
};


// coc配置
export const cocConfig = {
  guildName: '商会',
  guildSubtitle: 'C.O.C.',
  guildType: '商会势力',
  description: '负责审理善恶、维护各领域安全的司法机构，其权力成员称为"超决者"，在任何人面前均可行使对中立和邪恶的法权，公正、善有威信。',
  
  centerLogo: '/assets/images/worldview/COC标准制式.png',
  backgroundImage: '/assets/images/worldview/cocbg.png',
  
  bottomIcons: [
    { image: '/assets/images/worldview/COC标准制式.png', title: '标准制式' },
    { image: '/assets/images/worldview/coc信物.png', title: '信物' },
    { image: '/assets/images/worldview/coc等级排序.png', title: '等级排序' },
    { image: '/assets/images/worldview/COC平面图1.png', title: '平面图1' },
    { image: '/assets/images/worldview/COC平面图2.png', title: '平面图2' },
    { image: '/assets/images/worldview/COC平面图3.png', title: '平面图3' },
    { image: '/assets/images/worldview/COC平面图4.png', title: '平面图4' },
  ],
  
  // 对应每个选项卡的描述内容
  tabDescriptions: [
    '审判庭徽章呈金色盾牌状，中央是正义天秤，象征公正与权威。所有审判官都佩戴特制的审判徽章，代表其司法权力。',
    '审判庭实行严格的等级制度：见习审判员、初级审判员、高级审判员、审判官、首席审判官。每个等级都有相应的审判权限。',
    '审判庭法典是维护秩序的根本准则，包含刑法、民法、程序法等多个方面，为各种案件的审理提供法律依据。',
    '审判程序严格按照法典执行：案件受理、证据收集、庭审辩论、合议裁决、宣判执行。确保每个案件都得到公正处理。',
    '审判庭成立于第一纪元，是大陆最古老的司法机构。历经多次改革完善，始终坚持公正、威严、仁慈的审判理念。'
  ],
  
  characterAvatars: [
    {
      image: '/assets/images/characters/FROSTINE.png',
      name: '茯倾',
      title: '调香师',
      characterId: 'FROSTINE'
    },
    {
      image: '/assets/images/characters/豆小泥.png',
      name: '星小猫',
      title: '人偶师',
      characterId: 'xingxiaomao'
    }
  ],
  
  primaryColor: '#8B0000', // 深红色主题
  secondaryColor: '#DC143C',
  
  alternativeLogos: [
    '/assets/images/worldview/ADLOGO.png',
    '/assets/images/worldview/COCLOGO.png',
    '/assets/images/worldview/A.GLOGO.png',
    '/assets/images/worldview/CSbackground.png',
    '/assets/images/worldview/BHLOGO.png'
  ]
};

// 审判庭配置
export const judgmentCourtConfig = {
  guildName: '审判庭',
  guildSubtitle: 'A.D.',
  guildType: '正义势力',
  description: '负责审理善恶、维护各领域安全的司法机构，其权力成员称为"超决者"，在任何人面前均可行使对中立和邪恶的法权，公正、善有威信。',
  
  centerLogo: '/assets/images/worldview/ADLOGO.png',
  backgroundImage: '/assets/images/worldview/court-bg.png',
  
  bottomIcons: [
    { image: '/assets/images/worldview/ADLOGO.png', title: '标准制式' },
    { image: '/assets/images/worldview/COCLOGO.png', title: '标准色' },
    { image: '/assets/images/worldview/A.GLOGO.png', title: '法典' },
    { image: '/assets/images/worldview/CSbackground.png', title: '审判程序' },
    { image: '/assets/images/worldview/BHLOGO.png', title: '历史沿革' }
  ],
  
  // 对应每个选项卡的描述内容
  tabDescriptions: [
    '审判庭徽章呈金色盾牌状，中央是正义天秤，象征公正与权威。所有审判官都佩戴特制的审判徽章，代表其司法权力。',
    '审判庭实行严格的等级制度：见习审判员、初级审判员、高级审判员、审判官、首席审判官。每个等级都有相应的审判权限。',
    '审判庭法典是维护秩序的根本准则，包含刑法、民法、程序法等多个方面，为各种案件的审理提供法律依据。',
    '审判程序严格按照法典执行：案件受理、证据收集、庭审辩论、合议裁决、宣判执行。确保每个案件都得到公正处理。',
    '审判庭成立于第一纪元，是大陆最古老的司法机构。历经多次改革完善，始终坚持公正、威严、仁慈的审判理念。'
  ],
  
  characterAvatars: [
    {
      image: '/assets/images/characters/N.png',
      name: 'N',
      title: '审判庭利刃',
      characterId: 'n'
    },
    {
      image: '/assets/images/characters/ming.png',
      name: '铭',
      title: '裁决者',
      characterId: 'ming'
    }
  ],
  
  primaryColor: '#8B0000', // 深红色主题
  secondaryColor: '#DC143C',
  
  alternativeLogos: [
    '/assets/images/worldview/ADLOGO.png',
    '/assets/images/worldview/COCLOGO.png',
    '/assets/images/worldview/A.GLOGO.png',
    '/assets/images/worldview/CSbackground.png',
    '/assets/images/worldview/BHLOGO.png'
  ]
};

// 赏金猎人配置
export const lightGuardConfig = {
  guildName: '赏金猎人',
  guildSubtitle: 'B.O.N.',
  guildType: '赏金势力',
  description: '守护光明与智慧的使者，致力于传播知识和守护文明火种的组织，在黑暗中点亮希望之光。',
  
  centerLogo: '/assets/images/worldview/COCLOGO.png',
  backgroundImage: '/assets/images/worldview/light-bg.png',
  
  bottomIcons: [
    { image: '/assets/images/worldview/COCLOGO.png', title: '光明徽章' },
    { image: '/assets/images/worldview/ADLOGO.png', title: '等级体系' },
    { image: '/assets/images/worldview/A.GLOGO.png', title: '教义经典' },
    { image: '/assets/images/worldview/CSbackground.png', title: '圣地分布' },
    { image: '/assets/images/worldview/BHLOGO.png', title: '传承历史' }
  ],
  
  // 对应每个选项卡的描述内容
  tabDescriptions: [
    '普照会徽章是金色的太阳图案，中央有一个发光的智慧之眼，象征光明照耀智慧，驱散黑暗与无知。',
    '普照会采用光明等级体系：侍光者、传光者、守光者、明光使、光明长老。每个等级承担不同的守护责任。',
    '光明教义强调智慧、慈悲、勇气三大美德，教导信徒用知识驱散愚昧，用慈爱温暖人心，用勇气对抗邪恶。',
    '普照会在各大城市设有圣殿，作为传播光明教义的中心。主要圣地包括光明大教堂、智慧之塔、希望之泉等。',
    '普照会起源于远古时期的光明神教，经历了多次分裂与统一，始终坚持传播光明与智慧的使命，守护世界和平。'
  ],
  
  characterAvatars: [
    {
      image: '/assets/images/characters/lizi.png',
      name: '狸子',
      title: '赏金猎人',
      characterId: 'LIZI'
    },
    {
      image: '/assets/images/characters/麻纪.png',
      name: '麻纪',
      title: '赏金猎人',
      characterId: 'maji'
    }
  ],
  
  primaryColor: '#FFD700', // 金色主题
  secondaryColor: '#FFA500',
  
  alternativeLogos: [
    '/assets/images/worldview/COCLOGO.png',
    '/assets/images/worldview/ADLOGO.png',
    '/assets/images/worldview/A.GLOGO.png',
    '/assets/images/worldview/CSbackground.png',
    '/assets/images/worldview/BHLOGO.png'
  ]
};

// 暗鸦堂配置
export const darkRavenConfig = {
  guildName: '暗鸦堂',
  guildSubtitle: 'D.R.',
  guildType: '情报势力',
  description: '行走于阴影中的情报组织，掌握世界各地的秘密信息，为维护平衡默默工作。',
  
  centerLogo: '/assets/images/worldview/BHLOGO.png',
  backgroundImage: '/assets/images/worldview/shadow-bg.png',
  
  bottomIcons: [
    { image: '/assets/images/worldview/BHLOGO.png', title: '暗鸦徽章' },
    { image: '/assets/images/worldview/ADLOGO.png', title: '等级密码' },
    { image: '/assets/images/worldview/A.GLOGO.png', title: '情报网络' },
    { image: '/assets/images/worldview/CSbackground.png', title: '行动准则' },
    { image: '/assets/images/worldview/COCLOGO.png', title: '组织架构' }
  ],
  
  // 对应每个选项卡的描述内容
  tabDescriptions: [
    '暗鸦堂徽章是黑色的乌鸦剪影，眼部有暗红色光芒，象征在黑暗中观察一切。徽章只有正式成员才能佩戴，是身份的象征。',
    '组织采用密码等级制度：影子、夜行者、暗探、影主、鸦王。每个等级对应不同的情报权限和行动范围，等级越高权限越大。',
    '暗鸦堂拥有遍布大陆的情报网络，成员分布在各个阶层和组织中。通过复杂的联络系统，能够快速传递和收集情报。',
    '组织行动遵循"影中守护"的准则：隐匿行动、保护平衡、信息至上、忠诚第一。所有行动都以维护世界稳定为最终目标。',
    '暗鸦堂的组织架构极其神秘，采用细胞式管理。只有鸦王知晓全貌，各级成员只了解自己职责范围内的信息，确保组织安全。'
  ],
  
  characterAvatars: [
    {
      image: '/assets/images/characters/轮.png',
      name: '轮',
      title: '混沌代行者',
      characterId: 'lun'
    }
  ],
  
  primaryColor: '#2F4F4F', // 暗灰色主题
  secondaryColor: '#708090',
  
  alternativeLogos: [
    '/assets/images/worldview/BHLOGO.png',
    '/assets/images/worldview/ADLOGO.png',
    '/assets/images/worldview/A.GLOGO.png',
    '/assets/images/worldview/CSbackground.png',
    '/assets/images/worldview/COCLOGO.png'
  ]
};

// 所有工会配置的集合
export const allGuildConfigs = {
  adventurerGuild: adventurerGuildConfig,
  crystalSchool: crystalSchoolConfig,
  cocGuild: cocConfig,
  judgmentCourt: judgmentCourtConfig,
  lightGuard: lightGuardConfig,
  darkRaven: darkRavenConfig
};

// 默认配置模板 - 用于创建新工会
export const defaultGuildTemplate = {
  guildName: '新工会',
  guildSubtitle: 'NEW',
  guildType: '工会势力',
  description: '在这里填写工会的详细描述信息...',
  
  centerLogo: '/assets/images/default-logo.png',
  backgroundImage: '/assets/images/default-bg.png',
  
  bottomIcons: [
    { image: '/assets/images/icon1.png', title: '图标1' },
    { image: '/assets/images/icon2.png', title: '图标2' },
    { image: '/assets/images/icon3.png', title: '图标3' },
    { image: '/assets/images/icon4.png', title: '图标4' },
    { image: '/assets/images/icon5.png', title: '图标5' }
  ],
  
  characterAvatars: [
    { image: '/assets/images/character1.png', name: '角色1', title: '成员' },
    { image: '/assets/images/character2.png', name: '角色2', title: '成员' }
  ],
  
  primaryColor: '#0047AB',
  secondaryColor: '#1E90FF',
  
  alternativeLogos: [
    '/assets/images/logo1.png',
    '/assets/images/logo2.png',
    '/assets/images/logo3.png',
    '/assets/images/logo4.png',
    '/assets/images/logo5.png'
  ]
}; 