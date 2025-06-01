# 内容添加指南

本文档提供了如何向网站添加新的角色、工会信息和图片的详细说明。

## 目录

1. [图片资源管理](#图片资源管理)
2. [添加新角色](#添加新角色)
3. [添加新工会](#添加新工会)
4. [修改现有内容](#修改现有内容)

## 图片资源管理

所有图片统一存放在 `public/assets/images/` 目录下，按以下分类组织：

```
public/assets/images/
├── worldview/     # 世界观相关图片（工会徽章、背景等）
├── characters/    # 角色相关图片（头像、立绘等）
├── weapons/       # 武器装备配图
├── items/         # 个人物品配图
├── backgrounds/   # 背景故事配图
├── companions/    # 伙伴配图
└── ui/            # 界面相关图片（logo、轮播图、按钮等）
```

### 图片命名规范

- 角色图片：`{角色id}-{类型}.{格式}`
  - 例如：`lumina-avatar.png`, `xiaosi-full.png`
- 工会图片：描述性名称
  - 例如：`AG标准制式.png`, `CSbackground.png`
- UI图片：功能性描述
  - 例如：`logo.png`, `banner-1.png`

### 图片引用路径

在代码中引用图片时，请统一使用以下格式：

```jsx
// 在React组件中
<img src="/assets/images/路径/文件名.png" alt="描述" />

// 在数据文件中
image: '/assets/images/路径/文件名.png'
```

## 添加新角色

### 1. 准备角色图片

首先，准备以下角色图片并放入对应目录：

- 头像：`public/assets/images/characters/{角色id}-avatar.png`
- 立绘：`public/assets/images/characters/{角色id}-full.png`
- 介绍图：`public/assets/images/characters/{角色id}-intro.jpg`
- 武器图：`public/assets/images/weapons/{角色id}-weapons.jpg`
- 物品图：`public/assets/images/items/{角色id}-items.jpg`
- 背景图：`public/assets/images/backgrounds/{角色id}-story.jpg`
- 伙伴图（可选）：`public/assets/images/companions/{角色id}-companions.jpg`

### 2. 更新角色数据

编辑 `src/data/charactersData.js` 文件，添加新角色信息：

```javascript
// 在charactersData对象中添加新角色
newCharacter: {
  id: 'newCharacter',
  name: '角色名称',
  subName: '角色副名',
  guild: 'guildKey',  // 所属工会的键名
  guildName: '工会名称',
  image: '/assets/images/characters/newCharacter-full.png',
  avatar: '/assets/images/characters/newCharacter-avatar.png',
  title: '角色头衔',
  intro: '角色介绍文本...',
  introImage: '/assets/images/characters/newCharacter-intro.jpg',
  weapons: '武器描述...',
  weaponImage: '/assets/images/weapons/newCharacter-weapons.jpg',
  items: '物品描述...',
  itemsImage: '/assets/images/items/newCharacter-items.jpg',
  skills: ['技能1', '技能2', '技能3', '技能4'],
  background: '背景故事描述...',
  backgroundImage: '/assets/images/backgrounds/newCharacter-story.jpg',
  companions: '伙伴描述...',  // 可选
  companionsImage: '/assets/images/companions/newCharacter-companions.jpg'  // 可选
}
```

### 3. 将角色添加到工会列表

在同一个文件中，更新 `charactersByGuild` 对象：

```javascript
// 找到对应的工会键，添加新角色ID
charactersByGuild: {
  adventurerGuild: ['lumina', 'xiaosi', 'muyant', 'rachel', 'alex', 'newCharacter'],
  // 其他工会...
}
```

### 4. 在工会配置中显示角色

编辑 `src/data/guildConfigs.js` 文件，将角色添加到对应工会的 `characterAvatars` 数组：

```javascript
// 找到对应的工会配置对象，添加角色到characterAvatars数组
characterAvatars: [
  // 现有角色...
  {
    image: '/assets/images/characters/newCharacter-avatar.png',
    name: '角色名称',
    title: '角色头衔',
    characterId: 'newCharacter',
    onClick: () => console.log('点击了新角色')
  }
]
```

## 添加新工会

### 1. 准备工会图片

首先，准备以下工会相关图片并放入对应目录：

- 徽章：`public/assets/images/worldview/{工会名称}LOGO.png`
- 背景：`public/assets/images/worldview/{工会名称}background.png`
- 其他工会相关图标

### 2. 创建工会配置

编辑 `src/data/guildConfigs.js` 文件，添加新工会配置：

```javascript
// 创建新工会配置对象
export const newGuildConfig = {
  guildName: '新工会名称',
  guildSubtitle: '缩写',
  guildType: '工会类型',
  description: '工会详细描述...',
  
  centerLogo: '/assets/images/worldview/新工会LOGO.png',
  backgroundImage: '/assets/images/worldview/新工会background.png',
  
  bottomIcons: [
    { image: '/assets/images/worldview/icon1.png', title: '图标1标题' },
    { image: '/assets/images/worldview/icon2.png', title: '图标2标题' },
    // 更多图标...
  ],
  
  // 对应每个选项卡的描述内容
  tabDescriptions: [
    '第一个选项卡的描述文本...',
    '第二个选项卡的描述文本...',
    // 更多描述...
  ],
  
  characterAvatars: [
    { 
      image: '/assets/images/characters/character1-avatar.png', 
      name: '角色1名称', 
      title: '角色1头衔',
      characterId: 'character1' 
    },
    // 更多角色...
  ],
  
  primaryColor: '#颜色代码', // 主题颜色
  secondaryColor: '#颜色代码',
  
  alternativeLogos: [
    '/assets/images/worldview/logo1.png',
    '/assets/images/worldview/logo2.png',
    // 更多可选logo...
  ]
};
```

### 3. 将工会添加到工会列表

在同一个文件的底部，更新 `allGuildConfigs` 对象：

```javascript
// 将新工会添加到allGuildConfigs对象
export const allGuildConfigs = {
  // 现有工会...
  newGuildKey: newGuildConfig
};
```

### 4. 创建角色关联

编辑 `src/data/charactersData.js` 文件，在 `charactersByGuild` 对象中添加新工会键：

```javascript
// 添加新工会键
charactersByGuild: {
  // 现有工会...
  newGuildKey: ['character1', 'character2'] // 关联到此工会的角色ID
}
```

## 修改现有内容

### 更新角色信息

找到 `src/data/charactersData.js` 文件中对应角色的对象，修改需要更新的字段。

### 更新工会信息

找到 `src/data/guildConfigs.js` 文件中对应工会的配置对象，修改需要更新的字段。

### 替换图片

1. 准备新的图片文件
2. 将新图片放入对应的目录，使用与原图片相同的文件名
3. 如果需要使用不同的文件名，请同时更新相关数据文件中的引用路径

## 常见问题解答

### 图片不显示

- 检查图片路径是否正确
- 确认图片文件是否存在于指定目录
- 验证图片格式是否受支持（推荐使用 PNG 或 JPG）

### 角色不在列表中显示

- 确认已将角色ID添加到 `charactersByGuild` 对象的对应工会数组中
- 检查角色数据格式是否正确

### 工会信息不显示

- 确认工会配置已添加到 `allGuildConfigs` 对象中
- 检查工会配置格式是否正确 