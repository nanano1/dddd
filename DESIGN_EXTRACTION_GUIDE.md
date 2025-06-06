# 设计稿元素提取指南

## 📐 如何百分百还原设计稿

要完美还原您的设计稿，需要从设计文件中提取以下关键元素。以下是详细的提取方法和规范：

## 🎨 需要提取的元素清单

### 1. 工会Logo（中央主要徽章）
```
文件名格式: [工会名称]LOGO.png
推荐尺寸: 512x512 像素
格式要求: PNG (透明背景)
用途: 中央Logo展示区域
```

### 2. 工会选择器图标（底部左侧圆形图标）
```
文件名格式: [工会名称]_selector.png  
推荐尺寸: 128x128 像素
格式要求: PNG (透明背景)
用途: 底部工会切换功能
```

### 3. 信息展示图标（底部中间方形图标）
```
文件名格式: info_[类型].png
例如: info_standard.png, info_levels.png, info_structure.png
推荐尺寸: 128x128 像素
格式要求: PNG
数量: 每个工会5个图标
用途: 展示工会详细信息
```

### 4. 背景图片（右侧场景图）
```
文件名格式: [工会名称]_background.jpg
推荐尺寸: 1920x1080 像素
格式要求: JPG
用途: 右侧背景展示
```

### 5. 角色头像（右下角人物头像）
```
文件名格式: character_[名称].png
推荐尺寸: 256x256 像素
格式要求: PNG (透明背景)
用途: 右下角角色展示
```

## 🔧 从设计软件中提取元素

### Figma 提取方法

1. **选择图层**
   - 点击要导出的图层
   - 确保只选中目标元素

2. **设置导出参数**
   - 右侧面板点击 "Export"
   - 选择格式：PNG (透明背景) 或 JPG
   - 设置倍数：1x, 2x (可选)

3. **导出设置建议**
   ```
   Logo/图标: PNG, 2x 倍数
   背景图片: JPG, 质量90%
   角色头像: PNG, 2x 倍数
   ```

### Photoshop 提取方法

1. **图层导出**
   - 右键点击图层 → "导出为..."
   - 或使用 文件 → 导出 → 导出为

2. **导出设置**
   ```
   格式: PNG-24 (透明) 或 JPEG
   尺寸: 按上述推荐尺寸
   质量: 最高质量
   ```

3. **批量导出**
   - 文件 → 导出 → 将图层导出到文件
   - 设置输出文件夹和命名规则

### Sketch 提取方法

1. **选择切片**
   - 使用切片工具(S)选择区域
   - 或直接选择图层

2. **导出设置**
   - 右下角 "Make Exportable"
   - 设置格式和尺寸

## 📏 精确尺寸规范

### 布局比例
```
整体布局: 1920x1080 (16:9)
左侧信息区: 768px 宽 (40%)
中央Logo区: 576px 宽 (30%)
右侧背景区: 576px 宽 (30%)
底部区域: 150px 高
```

### 元素尺寸
```
主Logo容器: 250x250px
工会选择器图标: 70x70px
信息图标: 80x80px
角色头像: 60x60px
三角形横幅: 高度120px
```

## 🎨 颜色提取

### 1. 主题色彩提取
使用取色器工具获取以下颜色值：

```javascript
// 每个工会的主题色
const guildColors = {
  adventurerGuild: {
    primary: '#8B4513',    // 从设计稿中取色
    secondary: '#CD853F'
  },
  crystalSchool: {
    primary: '#0047AB',
    secondary: '#1E90FF'
  }
  // ... 其他工会
};
```

### 2. 颜色提取工具
- **浏览器开发者工具**: 检查元素获取颜色
- **ColorZilla**: Chrome插件取色器
- **设计软件内置取色器**: Figma/PS/Sketch自带工具

## 📁 文件组织结构

```
public/assets/images/worldview/
├── guilds/
│   ├── adventurer/
│   │   ├── A.GLOGO.png           # 主Logo
│   │   ├── A.G_selector.png      # 选择器图标
│   │   ├── guild-bg.jpg          # 背景图
│   │   └── characters/
│   │       ├── character1.png
│   │       └── character2.png
│   ├── crystal-school/
│   │   ├── CSbackground.png
│   │   ├── CS_selector.png
│   │   └── school-bg.jpg
│   └── info-icons/
│       ├── standard.png          # 标准制式
│       ├── levels.png            # 等级制度
│       ├── structure.png         # 组织架构
│       ├── missions.png          # 任务系统
│       └── rules.png             # 规章制度
```

## 🔍 质量检查清单

### 导出前检查
- [ ] 图片是否为最高分辨率
- [ ] 透明背景是否正确保留
- [ ] 文件大小是否合理（Logo<500KB, 背景<2MB）
- [ ] 文件命名是否规范
- [ ] 颜色是否准确

### 导入后验证
- [ ] 在浏览器中检查显示效果
- [ ] 测试不同屏幕尺寸下的显示
- [ ] 验证透明背景效果
- [ ] 检查图片清晰度

## 🛠️ 自动化工具推荐

### 1. Figma插件
- **Figma to Code**: 自动生成CSS
- **Zeplin**: 标注和切图工具

### 2. 批处理工具
- **ImageOptim**: 图片压缩优化
- **TinyPNG**: 在线图片压缩

### 3. 在线工具
- **Remove.bg**: 自动抠图工具
- **Photopea**: 在线PS替代品

## 💡 最佳实践建议

1. **保持原始文件**: 始终保留原始设计文件
2. **建立命名规范**: 统一的文件命名便于管理
3. **版本控制**: 为不同版本的资源建立备份
4. **优化文件大小**: 在保证质量的前提下压缩文件
5. **测试多设备**: 在不同设备上验证显示效果

## 🔧 常见问题解决

### 问题1：图片模糊
**解决方案**: 导出2x分辨率，在CSS中设置正确尺寸

### 问题2：透明背景丢失
**解决方案**: 确保导出PNG-24格式，检查图层透明度

### 问题3：颜色显示不准确
**解决方案**: 检查色彩空间设置，使用sRGB色彩空间

### 问题4：文件过大
**解决方案**: 使用图片压缩工具，调整导出质量

---

通过遵循这个指南，您可以精确地从设计稿中提取所有必要的元素，确保网页界面与原设计稿100%一致。 