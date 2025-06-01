# 工会界面使用指南

## 🚀 快速开始

### 1. 查看演示
启动项目并访问演示页面：
```bash
npm start
```
然后在浏览器中打开演示组件来查看效果。

### 2. 基本使用
```javascript
import GuildInterface from './components/GuildInterface';
import { adventurerGuildConfig } from './data/guildConfigs';

function MyPage() {
  return <GuildInterface guildConfig={adventurerGuildConfig} />;
}
```

## 📝 创建新工会

### 步骤1：准备图片资源
将以下图片放入 `public/assets/images/` 目录：
- 工会Logo (512x512 像素，PNG格式)
- 背景图片 (1920x1080 像素，JPG格式)  
- 5个底部图标 (128x128 像素，PNG格式)
- 角色头像 (256x256 像素，PNG格式)

### 步骤2：配置工会信息
在 `src/data/guildConfigs.js` 中添加新配置：

```javascript
export const myNewGuildConfig = {
  guildName: '我的新工会',
  guildSubtitle: 'MNG',
  guildType: '特殊势力',
  description: '这是我的新工会的详细描述...',
  
  centerLogo: '/assets/images/my-guild-logo.png',
  backgroundImage: '/assets/images/my-guild-bg.jpg',
  
  bottomIcons: [
    { image: '/assets/images/icon1.png', title: '图标1' },
    { image: '/assets/images/icon2.png', title: '图标2' },
    { image: '/assets/images/icon3.png', title: '图标3' },
    { image: '/assets/images/icon4.png', title: '图标4' },
    { image: '/assets/images/icon5.png', title: '图标5' }
  ],
  
  characterAvatars: [
    { image: '/assets/images/char1.png', name: '角色1' },
    { image: '/assets/images/char2.png', name: '角色2' }
  ],
  
  primaryColor: '#FF6B6B',    // 设置主色调
  secondaryColor: '#4ECDC4'   // 设置辅助色
};
```

### 步骤3：使用新配置
```javascript
import { myNewGuildConfig } from './data/guildConfigs';

<GuildInterface guildConfig={myNewGuildConfig} />
```

## 🎨 自定义颜色主题

每个工会可以有独特的颜色主题：

```javascript
// 暖色调主题
primaryColor: '#FF6B6B',
secondaryColor: '#FFE66D'

// 冷色调主题  
primaryColor: '#4ECDC4',
secondaryColor: '#45B7D1'

// 深色主题
primaryColor: '#2C3E50',
secondaryColor: '#34495E'
```

## 💡 常用配置模板

### 学院类工会
```javascript
{
  guildType: '学院势力',
  primaryColor: '#3498DB',
  secondaryColor: '#2980B9',
  // 适合学术氛围的蓝色主题
}
```

### 战斗类工会
```javascript
{
  guildType: '战斗势力', 
  primaryColor: '#E74C3C',
  secondaryColor: '#C0392B',
  // 适合战斗氛围的红色主题
}
```

### 神秘类工会
```javascript
{
  guildType: '神秘势力',
  primaryColor: '#9B59B6', 
  secondaryColor: '#8E44AD',
  // 适合神秘氛围的紫色主题
}
```

## 🔧 故障排除

### 图片不显示？
1. 检查图片是否在 `public/assets/images/` 目录中
2. 确认文件名和路径拼写正确
3. 验证图片格式（推荐 PNG/JPG）

### 颜色不生效？
1. 确保颜色值格式正确（#RRGGBB）
2. 检查CSS变量是否正确设置
3. 清除浏览器缓存重新加载

### 布局显示异常？
1. 检查浏览器开发者工具中的CSS错误
2. 确认组件导入路径正确
3. 验证配置对象结构是否完整

## 📞 需要帮助？

如果遇到问题：
1. 参考 `GUILD_INTERFACE_DESIGN.md` 查看详细文档
2. 查看 `GuildDemo.js` 了解完整示例
3. 检查浏览器控制台的错误信息 