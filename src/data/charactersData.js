// 角色数据文件
const charactersData = {
  LIZI: {
    id: 'LIZI',
    name: '狸子',
    subName: '狸子',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/lizibg.png',
    avatar: '/assets/images/characters/lizi.png',
    title: '战士',
    intro: '猫人族 男 22岁\n所属势力：赏金猎人\n来自其他大陆的神秘男子，在海滩为渔民所救，对过去的记忆非常模糊。作为黑户，见义勇为时得罪了贵族，却受到铭的赏识。出狱后被铭介绍到赏金猎人，凭借不符合常理的实力迅速成名。\n\n\n我在\n让我来吧',
    weapons: '一把精致的太刀，刀鞘已遍布岁月的痕迹，刀身却因保养依旧锋利无比。',
    weaponImage: '/assets/images/characters/liziweapon.png',
    items: [
      {
        description: '狸子随身携带的玉佩，似乎只有这才能唤起些许记忆，对于狸子来说十分的重要。',
        image: '/assets/images/characters/liziitem.png'
      }
    ],
    skills: ["雷躯：将身体化为一道电流，具有电流的一切性质。电流能量视魔力消耗增减。\n雷引：在身体周围形成电流，越精细的操作魔力消耗越高。"],
    themeColor: '#91C9D8', 
    secondaryColor: '#9AE7EF',
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '养女', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '任务同伴', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '任务同伴', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '任务同伴', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '店铺老板', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '店铺老板', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '好友', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '对手', relation: '弟弟' },
    ]
  },
  KOSAKAKAZE: {
    id: 'KOSAKAKAZE',
    name: '狐坂枫',
    subName: '狐坂枫',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/狐坂枫bg.png',
    avatar: '/assets/images/characters/狐坂枫.png',
    title: '战士',
    intro: '狼人族 女 20岁\n所属势力：克里斯万象学校\n与一座神社一同突然出现的神秘狼族女子，似乎与某种神秘力量有关联。神社出现两年后才被当地居民发现，被当做信仰来崇拜。独居生活使得狐坂枫对情感麻木，即使人们祭拜之余也对她颇有照顾，她也总是冷着脸。后一不法组织借神社之名诈骗敛财，同时也拐走了狐坂枫。在某次秘密交易时被狸子所救，现留在学校内学习以适应城市的生活。\n狐坂枫拥有强大的魔法适应性却不会使用任何魔法，仅用于强化自身，不过这也是使得她可以获得超乎想象的能力。\n\n\n嗯',
    weapons: '一柄来历不明的大剑，与神社一同出现，似乎与狐坂枫有这特殊联系，仅有她可以随心所欲的挥舞。',
    weaponImage: '/assets/images/characters/狐坂枫weapon.png',
    items: [
      {
        description: '一片来自神社周围枫树的树叶，有特殊能量包裹，不曾出现枯萎的迹象。',
        image: '/assets/images/characters/狐坂枫item.png'
      }
    ],
    skills: ["神躯化体：通过自然魔法强化自身身体属性，以获得超出常识极限的身体机能，包括力量、速度、五感等。"],
    themeColor: '#B24747', 
    secondaryColor: '#AA3D3D',
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '挚友', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '顾客', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '顾客', relation: '弟弟' },
    ]
  },
  frostine: {
    id: 'FROSTINE',
    name: '茯倾',
    subName: '茯倾',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/FROSTINEbg.png',
    avatar: '/assets/images/characters/FROSTINE.png',
    title: '战士',
    intro: '狐人族 女 247岁\n所属势力：商会\n来自青玄州某个狐族，父母是普通商人。茯倾自幼便对狐族所擅长的幻术一窍不通，反而对香味非常敏感，时长独自钻研香叶之类的东西，让父母很是头疼。不过茯倾凭借天赋成为远近闻名的调香师，在利普赫顿东方的港口开设了自己的调香铺。来到利普赫顿开店后与当时年幼的星小猫相识，二人成为无话不谈的好朋友。\n\n\n别揪我发财树的叶子啊！\n日进斗金～谢谢惠顾',
    weapons: '一柄使用狐族领地内特产的木头制成的烟斗，依据茯倾的个人喜好在头上加了一小串铜钱。茯倾可以利用烟斗扩散香叶的香气，烟斗本身也是称手的武器，只是茯倾极少会这样使用。',
    weaponImage: '/assets/images/characters/FROSTINEweapon.png',
    items: [
      {
        description: '产自青玄州的一对红玉脚环，是茯倾出生时父母为祈福而定制。',
        image: '/assets/images/characters/FROSTINEitem.png'
      }
    ],
    skills: ["弥漫：使用自己调制的各种香水/香氛等，为队友或对手添加各种不同的增益或削弱效果，诸如减少痛觉感知、致幻等。"],
    themeColor: '#9283A8', 
    secondaryColor: '#7F6A9B',
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '挚友', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '顾客', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '顾客', relation: '弟弟' },
    ]
  },
  niezi: {
    id: 'niezi',
    name: '聂子',
    subName: '聂子',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/niebg.png',
    avatar: '/assets/images/characters/NIEHTZU.png',
    title: '战士',
    intro: '人类 男 22岁\n所属势力：克里斯万象学校\n出生于北境一个拥有古老血统的家族，因父母选择其作为继承人导致姐姐被驱逐，对此非常自责。最终因理念不合与家族决裂，只身离家追寻姐姐。凭借幼年习得的医术与极高的天赋在万象学校任校医，不过他自己也偷偷在外经营着自己的小医馆。\n\n\n今人医在手，手滥药不神。\n天机不可泄露。',
    weapons: '一柄主色为蓝、白的西洋剑，有着月牙形的护手，剑柄上镶嵌着一颗红宝石。利用北境的特殊材料打造，锋利无比，但几乎没有人见过聂子使用这柄剑。',
    weaponImage: '/assets/images/characters/nieweapon.png',
    items: [
      {
        description: 'N日常佩戴的耳饰，由圆形耳钉与水滴状耳坠组成，与弟弟的耳饰构成一对。',
        image: '/assets/images/characters/Nitem.png'
      }
    ],
    skills: ["治愈：使用治疗魔法修复伤口",
      "妙手：使用医疗器械手动修复伤口",
      "未来视：可在一定程度上预知未来"
    ],
    background: '前王国骑士团成员，因为理念不合离开正规军队，加入冒险者工会继续战斗生涯。',
    backgroundImage: '/assets/images/backgrounds/gk-story.jpg',
    companions: [
      {
        description: '聂子在离家之后的旅途中同行的小猫，聂子遇到时他受伤了。聂子医治好后边跟在聂子身边，对各种医疗用品逐渐熟悉，现在能够一定程度上辅助聂子的医疗工作，',
        image: '/assets/images/characters/Npartner.png'
      }
    ],
    themeColor: '#203A99', 
    secondaryColor: '#0000FF',
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '伤员', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '同事', relation: '弟弟' },
      { avatar: '/assets/images/characters/N.png', name: '姐姐', relation: '弟弟' },
      { avatar: '/assets/images/characters/XIAOSI.png', name: '同事', relation: '搭档' }
    ]
  },
  lumina: {
    id: 'lumina',
    name: 'LUMINA',
    subName: '露米娜',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/lumina-full.png',
    avatar: '/assets/images/characters/lumina-avatar.png',
    title: '冒险者',
    intro: 'LUMINA是冒险者工会的核心成员，拥有强大的战斗技能和丰富的冒险经验。她总是第一个站出来保护同伴，是团队中不可或缺的领导者。',
    introImage: '/assets/images/characters/lumina-intro.jpg',
    weapons: '符文剑，护盾，投掷短刀',
    weaponImage: '/assets/images/weapons/lumina-weapons.jpg',
    items: [
      {
        description: '冒险者徽章，团队的象征，代表着荣誉与责任。',
        image: '/assets/images/items/lumina-items.jpg'
      },
      {
        description: '高级治疗药水，在危机时刻能够快速恢复体力和伤势。',
        image: '/assets/images/items/lumina-items2.jpg'
      }
    ],
    skills: ['剑术精通', '领导力', '战术规划', '魔法抗性'],
    background: '出生于边境小镇，从小立志成为伟大的冒险者。在一次怪物袭击中失去家人，加入冒险者工会寻求复仇与正义。',
    backgroundImage: '/assets/images/backgrounds/lumina-story.jpg',
    themeColor: '#54420E', // 棕色主题
    secondaryColor: '#876F32',
    companions: [
      {
        description: '忠诚的战马，陪伴LUMINA征战各地的可靠伙伴。',
        image: '/assets/images/companions/lumina-horse.jpg'
      }
    ],
    relationships: [
      { avatar: '/assets/images/characters/XIAOSI.png', name: '小四', relation: '师妹' },
      { avatar: '/assets/images/characters/muyant-avatar.png', name: '慕焰', relation: '同伴' },
      { avatar: '/assets/images/characters/alex-avatar.png', name: '亚历克斯', relation: '战友' }
    ]
  },
  xingxiaomao: {
    id: 'xingxiaomao',
    name: '星小猫',
    subName: '星小猫',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/xiaonibg.png',
    avatar: '/assets/images/characters/豆小泥.png',
    title: '星小猫',
    intro: '人类 女 20岁\n所属势力：商会\n出生于东方一个经商家庭，父母以制作玩具发家致富。父亲出任"商会九席"第六席，二人经常因各种公务满大陆出差，少有机会能够陪伴星小猫，于是她开始尝试制作并将魔力注入人偶，最终名为"特洛伊斯"的木偶成功拥有了自我意识，她自己也成长为一名人形师。\n不过星小猫并不孤单，她的好友茯倾经营着一家远近闻名的香料店，她时常去店里帮忙。不过据茯倾反应，星小猫时不时会"突发奇想"而把她的香料用在奇奇怪怪的地方，让她很是头疼。\n\n\n闪闪发光的不只有金币，我也会是！',
    items: [
      {
        description: '一个提线木偶，星小猫亲手制作的众多木偶之一，可以看出早期并不熟练的制作技巧，但即便是这样也称得上精致。',
        image: '/assets/images/characters/xiaoniitem.png'
      }
    ],
    skills: ['精神穿透：以人偶为媒介对对方进行精神攻击，不同的人偶拥有不同的攻击效果，具体作用原理不明，表现为在星小猫攻击后对方出现神情恍惚、惊恐等负面反应。'],
    themeColor: '#BA7F61', 
    secondaryColor: '#D18766',
    relationships: [
      { avatar: '/assets/images/characters/lumina-avatar.png', name: 'LUMINA', relation: '挚友' },
      { avatar: '/assets/images/characters/G&K.png', name: 'G&K', relation: '顾客' },
      { avatar: '/assets/images/characters/G&K.png', name: 'G&K', relation: '顾客' }
    ]
  },
  xiaosi: {
    id: 'xiaosi',
    name: 'XIAOSI',
    subName: '小四',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/小四背景.png',
    avatar: '/assets/images/characters/小四.png',
    title: '小四',
    intro: '人类 女 20岁\n所属势力：克里斯万象学校\n一位与自然息息相关的学者，主要从事种族历史与文化差异的研究，在心理方面也有独到见解，对其他学科小四也有所涉猎，知识的渊博程度几乎无人能及，被称为"移动的图书馆"。与学者形象有些许出入的是，小四喜欢把各种各样的东西捡回研究室，大部分被常人看作垃圾的东西被她视为宝贵的研究材料，她也很讨厌别人说这些东西是垃圾，也许只有她才能看到这些无用之物的潜力和价值。得益于小四的家庭，小四从小就热爱书籍与自然，喜欢安静的环境，这也有利于她思考。\n这可是宝贵的研究材料！\n\n\n安静！',
    weapons: '一本与学校图书馆相连的魔法书，可以随心所欲在书本上显现任何收藏在图书馆里的资料，便于小四查找各种资料。不过更多的是用来满足她对书本的喜爱',
    weaponImage: '/assets/images/characters/小四weapon.png',
    items: [
      {
        description: '养在办公室里的盆栽，并没有什么特殊之处，但也许对小四来说有特殊的意义。',
        image: '/assets/images/characters/小四item.png'
      }
    ],
    skills: ['自然会话：可以与动植物交流，必要时也可驱使其为自己服务。'],
    themeColor: '#90BF82', 
    secondaryColor: '#6ABA7D',
    relationships: [
      { avatar: '/assets/images/characters/lumina-avatar.png', name: 'LUMINA', relation: '同事' },
      { avatar: '/assets/images/characters/G&K.png', name: 'G&K', relation: '同事' },
      { avatar: '/assets/images/characters/G&K.png', name: 'G&K', relation: '学生' }
    ]
  },
  gk: {
    id: 'gk',
    name: 'G&K',
    subName: 'G&K',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/GKbackground.png',
    avatar: '/assets/images/characters/G&K.png',
    title: '战士',
    intro: '机械生命 男  未知\n所属势力：克里斯万象学校\n克里斯万象学校从某个远古遗迹中发现的防卫机械战士，具体的年龄已无法考究，使用的技术也与当下的机械生命诞生魔法大相径庭，是暂时无法理解的某种远古魔法。G&K面部有仿人体皮肤，通身由黄灰色机械外壳覆盖，四肢可见明显的机械结构。背部有能量源，似乎与他的白色外衣相连，可利用太阳辐射给自己充能。\n寄！',
    weapons: '一对匕首，与G&K一起被发现，现由G&K保管。刀身同样有古老的魔法刻印，让这对匕首历经不知多久的时光仍旧锋利。',
    weaponImage: '/assets/images/characters/GKweapon.png',
    items: [
      {
        description: '一副灰色面具，内置了发声装置。G&K似乎从未摘下面具，暂时不知道是否还有其他用途。',
        image: '/assets/images/characters/GKitem.png'
      }
    ],
    skills: ['魔法手炮：伸出机械臂中的手炮，可发射高浓度魔法能量'],
    background: '前王国骑士团成员，因为理念不合离开正规军队，加入冒险者工会继续战斗生涯。',
    backgroundImage: '/assets/images/backgrounds/gk-story.jpg',
    themeColor: '#54420E', // 棕色主题
    secondaryColor: '#876F32',
    relationships: [
      { avatar: '/assets/images/characters/lumina-avatar.png', name: 'LUMINA', relation: '队友' },
      { avatar: '/assets/images/characters/XIAOSI.png', name: '小四', relation: '后辈' }
    ]
  },
  lun: {
    id: 'lun',
    name: '轮',
    subName: '轮',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/轮background.png',
    avatar: '/assets/images/characters/.png',
    title: '战士',
    intro: '人类 男 未知\n所属势力：暂无\n某个被封印的强大魔兽逸散出的魔力幻化成的人形，游离在社会活动之外，行事毫无逻辑。日渐增多的可被观察的活动记录表明轮的魔力逐渐充盈且按耐不住其混沌的本性，这意味着封印已经没有那么牢靠了。\n\n\n万物归于混沌"。',
    weapons: '一柄黑色长枪，本质为某种不明物质，可根据轮的想法随意更改形状。无法被常规手段损伤或破坏。',
    weaponImage: '/assets/images/characters/轮weapon.png',
    items: [
      {
        description: '一颗魔力结晶，但其中的魔力并不来源于轮，而是与其"混沌"属性相悖的魔力。来源不得而知',
        image: '/assets/images/characters/轮item.png'
      }
    ],
    skills: ["切割：无视物体的物理强度，将物体按照想法任意切割",
      "坐标转换：事先锚定坐标点，之后可将自身或物体瞬间传送至坐标处",
      "规则矩：极大消耗魔力，通过魔法刻印催动，更改一定空间范围内的事物运行规则"
    ],
    background: '前王国骑士团成员，因为理念不合离开正规军队，加入冒险者工会继续战斗生涯。',
    backgroundImage: '/assets/images/backgrounds/gk-story.jpg',
    themeColor: '#2C2D2D', 
    secondaryColor: '#2C2D2D',
    relationships: [
      { avatar: '/assets/images/characters/NIEHTZU.png', name: '弟弟', relation: '弟弟' },
      { avatar: '/assets/images/characters/XIAOSI.png', name: '搭档', relation: '搭档' }
    ]
  },
  n: {
    id: 'n',
    name: 'N',
    subName: 'N',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/Nbackground.png',
    avatar: '/assets/images/characters/N.png',
    title: '战士',
    intro: '人类 女 22岁\n所属势力：审判庭\n出生于一个古老的拥有古老血统的家庭，因父母将其弟弟选为继承人而遭驱逐，被隐去姓名，交给家族服务的神秘组织，培养成为以一个忠诚且高效的"兵器"。经过残酷的体能和心理训练，被剥夺了情绪，将一切付诸于眼前的任务，具有极强的单兵作战能力，在魔法并不稀缺的利普赫顿依靠强大的个人实力无往不利。生活中为了掩饰共情障碍会模仿身边人以显得"正常"来避免不必要的麻烦，但依然会被评价为"没人性"。\n被组织安排到审判庭，日常以审判庭裁决者的身份示人，通常被安排执行各种高危任务，从未失手，被称作"审判庭的利刃"。\n\n\n未知全貌，不予置评',
    weapons: '一柄匕首，使用组织内部特殊材料制成，被用特殊魔法强化过，其刃身坚固无比，除了物理属性，这把匕首还能够破坏一般性的魔法屏障，也能够抵挡部分有实体的魔法攻击。',
    weaponImage: '/assets/images/characters/Nweapon.png',
    items: [
      {
        description: 'N日常佩戴的耳饰，由圆形耳钉与水滴状耳坠组成，与弟弟的耳饰构成一对。',
        image: '/assets/images/characters/Nitem.png'
      }
    ],
    skills: ["入微：经过训练习得的长乎常人的观察能力，周遭的风吹草动都逃不过N的感知.",
      "无双：精通所有冷兵器，在世无人可出其右。",
      "冷血：能够极大程度上掩盖自身行动，对危险有近乎本能的反映。",
      "坚韧：具有丰富的生活、生存技能，极端环境下也能生存。"
    ],
    background: '前王国骑士团成员，因为理念不合离开正规军队，加入冒险者工会继续战斗生涯。',
    backgroundImage: '/assets/images/backgrounds/gk-story.jpg',
    companions: [
      {
        description: '聂子在离家之后的旅途中同行的小猫，聂子遇到时他受伤了。聂子医治好后边跟在聂子身边，对各种医疗用品逐渐熟悉，现在能够一定程度上辅助聂子的医疗工作，',
        image: '/assets/images/characters/Npartner.png'
      }
    ],
    themeColor: '#203A99', 
    secondaryColor: '#0000FF',
    relationships: [
      { avatar: '/assets/images/characters/NIEHTZU.png', name: '弟弟', relation: '弟弟' },
      { avatar: '/assets/images/characters/XIAOSI.png', name: '搭档', relation: '搭档' }
    ]
  },
  maji: {
    id: 'maji',
    name: '麻纪',
    subName: '麻纪',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/麻吉bg.png',
    avatar: '/assets/images/characters/麻纪.png',
    title: '法师',
    intro: '人类 男 21岁\n所属势力：赏金猎人\n麻纪小时候在一个崇尚机械科技却视魔法为禁忌的国家中作为首席机械师的徒弟学习机械。期间偶然接触到魔法书并快速习得了记述的魔法，却被发现，机械师一反常态却掩护了麻纪出逃。随后麻纪四处辗转，在于野兽的较量中学会了隐藏气息，并延伸为暗杀的技巧。\n\n指针倒转之刻，命运覆写之时',
    weapons: '一把比小臂略长的短刀，上面刻有麻纪自行研究的魔法刻印。刀格中放置有一个法阵，是短刀的魔法驱动核心。',
    weaponImage: '/assets/images/characters/麻吉weapon.png',
    items: [
      {
        description: '麻纪随机械师在遗迹调查时发现的怀表，上面刻有一个强大的法阵。由于怀表的损坏，其上的刻印也不完全，已经难以解读。',
        image: '/assets/images/characters/麻吉item.png'
      }
    ],
    skills: ['气息遮断：调整自身的魔力散布与环境融为一体，同时在物理层面控制气息和行动，做到两方面都难以发现的潜行。\n时间回溯：刻印在怀表中的法阵，可将一定范围内的时空回溯一定时长，视魔力消耗确定实际效果。由于怀表损坏且法阵解读过少，尽可使用一次。'],
    themeColor: '#4F637F', // 棕色主题
    secondaryColor: '#536B7F',
    relationships: [
      { avatar: '/assets/images/characters/lumina-avatar.png', name: '伴侣', relation: '伴侣'}
    ]
  },
  ming: {
    id: 'ming',
    name: '铭',
    subName: '铭',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/mingbg.png',
    avatar: '/assets/images/characters/ming.png',
    title: '法师',
    intro: '人类 男 24岁\n所属势力：审判庭\n来自北境，身价不菲，但是出身一直是个迷。被人以大陆裁决者的身份熟知，外部对他的评价多以"和善""公正"为主，曾多次拒绝了达官显贵们的贿赂，帮助许多无辜百姓躲过无妄之灾，因此在权力阶层有不少人视其为眼中钉。不过铭仍然高频率的在一线活动，这也使得"铭背靠着一股强大实力"的传言不胫而走，至于真相则无从得知。\n铭在日常活动中表现出极强的适应性，能够在任何场合快速判断并扮演好自己的角色，"滴水不漏的多面鬼"是反对派对他的称呼。\n经常莫名地消失一段时间，然后又若无其事地出现，起初会被人追问去向，都被他以各种理由搪塞过去，后来都习惯了，把这当作铭的日常行为。\n\n眼睛是不会骗人的\n有资格审判的人，必须时刻做好被审判觉悟',
    weapons: '一双黑色手套，各嵌有4颗用于引导体内能量流动的宝石。',
    weaponImage: '/assets/images/characters/mingweapon.png',
    items: [  
      {
        description: '一串由黑色和银色两枚戒指构成的双戒项链，可触发有限次数的绝对防御。',
        image: '/assets/images/characters/mingitem.png'
      },
      {
        description: '铭定制的扑克牌，青白与红金代表了铭的颜色，也似乎在暗示着他的两面。',
        image: '/assets/images/characters/mingitem2.png'
      }

    ],
    skills: ['百武皆通：熟练使用所有已知冷兵器\n青王怒火：可将体内能量引导转化为不同形态辅助战斗\n裁决者之眼：可洞悉对方的内心所想'],
    themeColor: '#3DBFB5', 
    secondaryColor: '#3DBFB5',
    companions: [
      {
        description: '某次任务时捡到的小猫，因为觉得与自己很像便收留下来。并没有展现出什么特殊的能力，要说的话就是很可爱吧。',
        image: '/assets/images/characters/mingprtner.png'
      }
    ],
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '好友', relation: '好友' },
      { avatar: '/assets/images/characters/N.png', name: '搭档', relation: '搭档' }
    ]
  },
  muying: {
    id: 'muying',
    name: '慕影',
    subName: '慕影',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/muyingbg.png',
    avatar: '/assets/images/characters/muying.png',
    intro: '人类 男 24岁\n所属势力：冒险家协会\n出生自维塔利亚大陆上最大的城市，天生没什么魔法天赋。但自幼表现出极强的机械天赋，被维塔利亚最顶尖的武器工匠收为徒弟。在某次外出时与慕言相遇，协助慕言完成冒险家任务后，二人结下缘分。\n\n走，刷日常任务去',
    weapons: '两把以魔力驱动的重型机枪，一把是在老师指导下完成的，另一把则是沐影的出师之作。原本射出普通子弹，与慕言相识后子弹换成了带有魔法刻印的魔法子弹。',
    weaponImage: '/assets/images/characters/muyingweapon.png',
    items: [
      {
        description: '一件围巾，平时作为配饰一直戴在身上，据说即使睡觉也没摘下来过。',
        image: '/assets/images/characters/muyingitem.png'
      }
    ],
    skills: ['独断：将围巾展开捕获一名敌人，自身转换为绝对魔力形态，构建一个无法被打破的特殊结界。最终引爆结界，强制一换一。\n洞察：凭借对机械结构的了解，在遇到任何机械物品时可以快速对结构进行分析并找到薄弱点。'],
    themeColor: '#3590DB', 
    secondaryColor: '#37DBDB',
    companions: [
      {
        description: '摇摇：慕言沐影共同抚养的小狗，围绕在魔法的氛围里逐渐沾染了魔法的气息，对魔法踪迹比较敏感，能够帮助主人进行一些魔法追踪。',
        image: '/assets/images/characters/muyingpartner1.png'
      },
      {
        description: '柠檬企鹅：沐影的战斗伙伴，拥有一个魔法口袋，沐影几乎将所有机械物品都放在里面，以至于随时随地掏出什么东西都不奇怪。和沐影长时间待在一起，对于机械的理解也超出常人，能够协助沐影进行各种实验，战斗时也能够根据情况快速反应，和沐影的配合相当默契。',
        image: '/assets/images/characters/muyingpartner2.png'
      }
    ],
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '伴侣', relation: '伴侣'},
      { avatar: '/assets/images/characters/N.png', name: '同伴', relation: '同伴'},
      { avatar: '/assets/images/characters/N.png', name: '任务伙伴', relation: '任务伙伴'}
    ]
  },
  muyan: {
    id: 'muyan',
    name: '慕言',
    subName: '慕言',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/muyanbg.png',
    avatar: '/assets/images/characters/MUYAN@2x.png',
    intro: '人类 女 23岁\n所属势力：冒险家协会\n来自海边一个平凡普通的小镇，过着简单幸福的生活。意外与一位来到这里考察的魔法学院教授相遇。教授发现了慕言深不可测的魔法潜力，在于父母沟通后将慕言带到克里斯万象学校学习魔法。凭借与生俱来的魔法天赋，慕言很快从学校毕业，并精通大部分魔法，其中以雷和冰最为出色。毕业后慕言并没有停对魔法的探索，还延伸出对草药学的研究。出于对研究资金的需求，慕言加入冒险家协会并在初次考核中就成为了高级冒险家\n\n要吃颗糖吗？',
    weapons: '一本特制的魔法书，拥有无尽的书页，并记录着大量魔法，借助魔法书可以极大程度缩短吟唱时间，快速施法大型魔法。',
    weaponImage: '/assets/images/characters/muyanweapon.png',
    items: [
      {
        description: '装有慕言自己研制的魔药的瓶子，平时装着普通的药水，必要时通过解开不同刻印可以快速获得当下需要的魔药。',
        image: '/assets/images/characters/muyanitem.png'
      }
    ],
    skills: ['魔法烙印：将超大型魔法烙印在魔法书中，可快速触发。最多可同时承载3个超大型魔法，使用后魔法书将一段时间内不可替代吟唱。\n冰原：使用魔法构建一片冰场区域，依据魔力消耗形成不同大小的冰场。\n落雷：使用魔法引导强大的雷电定点轰击，依据魔力消耗形成不同能量的落雷'],
    themeColor: '#A06ED6', 
    secondaryColor: '#9B72D6',
    companions: [
      {
        description: '摇摇：慕言沐影共同抚养的小狗，围绕在魔法的氛围里逐渐沾染了魔法的气息，对魔法踪迹比较敏感，能够帮助主人进行一些魔法追踪。',
        image: '/assets/images/characters/muyingpartner1.png'
      },
      {
        description: '猫猫云：慕言的战斗伙伴，一朵魔法猫猫云，习性和猫很像。身体里可以放下很多东西，不过有时候也会因为放了太多忘在里面了。拥有一定程度上改变天气的能力，战斗时配合慕言的魔法总能达到出其不意的效果。',
        image: '/assets/images/characters/muyanpartner2_1.png'
      }
    ],
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '伴侣'},
      { avatar: '/assets/images/characters/N.png', name: '同伴'},
      { avatar: '/assets/images/characters/N.png', name: '任务伙伴'},
          ]
  },
  nierang: {
    id: 'nierang',
    name: '尼尔让',
    subName: '尼尔让',
    guild: 'adventurerGuild',
    guildName: '冒险者工会',
    image: '/assets/images/characters/尼尔让bg.png',
    avatar: '/assets/images/characxters/UNKNOWN@2x.png',
    intro: '精灵族 无性 未知\n所属势力：冒险家协会\n由北境传说中的神器"永恒之枪"的自主意识幻化而来，模拟为精灵的模样行走世间，目的未知。经过多年的游历后选了一处僻静地定居，并成为注册冒险家。因其强大的实力与开朗的性格成为了许多高难度委托的热门招募对象。\n\n\n用耳倾听，用眼观察',
    weapons: '自身就是神器，在危机关头会展现作为武器的一面，具有一击必中的能力，目前为止没有对手逃脱的记录。',
    weaponImage: '/assets/images/characters/尼尔让weapon.png',
    skills: ['自然语言：调动周围的魔兽们协助战斗。\n北境神法：使用来自北境的神秘魔法，兼顾各个方面，不过尼尔较为擅长辅助系魔法。\n神枪：将自身化为武器本体，一击必中且伤害极高。'],
    themeColor: '#C9822D', 
    secondaryColor: '#C9862F',
    companions: [
      {
        description: '种族为土元素生物，战斗时会转换形态变得巨大坚硬，擅长土元素魔法。在【未知】森林的深处相遇。性格温和，有点黏人。',
        image: '/assets/images/characters/尼尔让partner.png'
      }
    ],
    relationships: [
      { avatar: '/assets/images/characters/N.png', name: '同伴', relation: '同伴'},
      { avatar: '/assets/images/characters/N.png', name: '同伴', relation: '同伴'},
      { avatar: '/assets/images/characters/N.png', name: '仇人', relation: '仇人'},
      { avatar: '/assets/images/characters/N.png', name: '任务伙伴', relation: '任务伙伴'}
    ]
  }
};

// 按工会分组的角色列表
const charactersByGuild = {
  adventurerGuild: ['LIZI', 'KOSAKAKAZE', 'FROSTINE', 'lumina', 'xingxiaomao', 'muying', 'muyan', 'nierang'],
  crystalSchool: ['xiaosi', 'niezi'],
  cocGuild: ['FROSTINE', 'xingxiaomao'],
  judgmentCourt: ['n', 'ming'],
  lightGuard: ['LIZI', 'maji'],
  darkRaven: ['lun']
};

// 获取所有角色列表
export const getAllCharacters = () => {
  return Object.values(charactersData);
};

// 根据ID获取角色
export const getCharacterById = (id) => {
  return charactersData[id] || null;
};

// 根据工会获取角色列表
export const getCharactersByGuild = (guildKey) => {
  const characterIds = charactersByGuild[guildKey] || [];
  return characterIds.map(id => charactersData[id]).filter(Boolean);
};

export { charactersData, charactersByGuild }; 