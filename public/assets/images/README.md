# 图片资源统一管理指南

## 图片存储位置

所有项目图片统一存储在 `public/assets/images/` 目录下，按照以下结构组织：

```
public/assets/images/
├── worldview/              # 世界观相关图片（工会徽章、背景等）
├── characters/             # 角色相关图片（头像、立绘等）
├── weapons/                # 武器装备配图
├── items/                  # 个人物品配图
├── backgrounds/            # 背景故事配图
├── companions/             # 伙伴配图
└── ui/                     # 界面相关图片（logo、轮播图、按钮等）
```

## 图片引用路径规范

在代码中引用图片时，统一使用以下格式：

1. **组件中直接引用**：
   ```jsx
   <img src="/assets/images/路径/文件名.png" alt="描述" />
   ```

2. **CSS 中引用**：
   ```css
   background-image: url('/assets/images/路径/文件名.png');
   ```

3. **JS 数据文件中引用**：
   ```js
   image: '/assets/images/路径/文件名.png'
   ```

## 命名规范

### 角色相关图片 (characters/)
- `{角色id}-intro.jpg` - 角色介绍配图
- `{角色id}-avatar.png` - 角色头像
- `{角色id}-full.png` - 角色立绘

### 武器装备配图 (weapons/)
- `{角色id}-weapons.jpg` - 武器装备配图

### 个人物品配图 (items/)
- `{角色id}-items.jpg` - 个人物品配图

### 背景故事配图 (backgrounds/)
- `{角色id}-story.jpg` - 背景故事配图

### 伙伴配图 (companions/)
- `{角色id}-companions.jpg` - 伙伴配图

### UI 图片 (ui/)
- `logo.png` - 网站标志
- `carousel-{number}.png` - 轮播图
- `banner-{name}.png` - 横幅图片

## 添加新图片指南

### 添加新角色图片

1. 根据角色 ID 和上述命名规范，准备相应的图片文件
2. 将图片放入对应的子目录中
3. 在 `src/data/charactersData.js` 中更新角色数据，引用新添加的图片

### 添加新工会图片

1. 准备工会相关的图片（徽章、背景等）
2. 将图片放入 `worldview/` 子目录
3. 在 `src/data/guildConfigs.js` 中更新工会配置，引用新添加的图片

## 图片规格建议

- **尺寸**: 根据用途确定，建议标准化（例如角色头像统一 200x200 像素）
- **格式**: 优先使用 PNG（需要透明背景时）或 JPG（照片类图片）
- **质量**: 保持适当平衡，确保网页加载速度的同时保证显示质量
- **文件大小**: 建议压缩图片，控制在合理范围内

## 当前支持的角色ID

- `lumina` - LUMINA (露米娜)
- `xiaosi` - XIAOSI (小四)
- `muyant` - MUYANT (慕焰) 
- `rachel` - RACHEL (蕾切尔)
- `alex` - ALEX (亚历克斯)
- `student1` / `aurora` - AURORA (奥萝拉)
- `student2` / `blake` - BLAKE (布雷克)

## 注意事项

1. 如果某个图片不存在，页面会优雅地处理，只显示文字内容
2. 图片路径是相对于 `public/` 目录的
3. 确保图片文件名与数据文件中的路径匹配
4. 建议使用压缩过的图片以提高加载速度 