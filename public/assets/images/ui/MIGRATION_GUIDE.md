# 图片资源迁移指南

本文档提供了将现有图片迁移到新的统一结构的步骤。

## 迁移步骤

### 1. UI相关图片

将以下图片移动到 `public/assets/images/ui/` 目录：

- `src/assets/images/logo.png` → `public/assets/images/ui/logo.png`
- `src/assets/images/首页轮播图1@2x.png` → `public/assets/images/ui/carousel-1.png`
- `src/assets/images/首页条形图1@2x.png` → `public/assets/images/ui/banner-1.png`
- `src/assets/images/首页条形图2@2x.png` → `public/assets/images/ui/banner-2.png`
- `src/assets/images/首页条形图3@2x.png` → `public/assets/images/ui/banner-3.png`

### 2. 角色图片

将以下图片移动到 `public/assets/images/characters/` 目录并重命名：

- `src/assets/images/worldview/LUMINA@2x.png` → `public/assets/images/characters/lumina-avatar.png`
- `src/assets/images/worldview/XIAOSI.png` → `public/assets/images/characters/xiaosi-avatar.png`
- `src/assets/images/worldview/MUYAN@2x.png` → `public/assets/images/characters/muyant-avatar.png`
- `src/assets/images/worldview/MUYING@2x.png` → `public/assets/images/characters/rachel-avatar.png`
- `src/assets/images/worldview/NIEHTZU.png` → `public/assets/images/characters/rachel-avatar.png`
- `src/assets/images/worldview/UNKNOWN@2x.png` → `public/assets/images/characters/alex-avatar.png`
- `src/assets/images/worldview/G&K.png` → `public/assets/images/characters/aurora-avatar.png`
- `src/assets/images/worldview/狐坂枫.png` → `public/assets/images/characters/blake-avatar.png`
- `src/assets/images/小四背景.png` → `public/assets/images/characters/xiaosi-full.png`

### 3. 占位图片创建

为保证网站正常运行，需要创建以下占位图片：

```
public/assets/images/characters/lumina-full.png
public/assets/images/characters/muyant-full.png
public/assets/images/characters/rachel-full.png
public/assets/images/characters/alex-full.png
public/assets/images/characters/aurora-full.png
public/assets/images/characters/blake-full.png
```

以及各角色的 intro, weapons, items, backgrounds 和 companions 图片。

### 4. 世界观图片

世界观相关图片已经在正确的位置（`public/assets/images/worldview/`），无需移动。

## 迁移脚本

以下是一个可以帮助自动迁移图片的命令行脚本示例：

```bash
# 创建必要的目录
mkdir -p public/assets/images/ui
mkdir -p public/assets/images/characters
mkdir -p public/assets/images/weapons
mkdir -p public/assets/images/items
mkdir -p public/assets/images/backgrounds
mkdir -p public/assets/images/companions

# 移动UI图片
cp src/assets/images/logo.png public/assets/images/ui/logo.png
cp src/assets/images/首页轮播图1@2x.png public/assets/images/ui/carousel-1.png
cp src/assets/images/首页条形图1@2x.png public/assets/images/ui/banner-1.png
cp src/assets/images/首页条形图2@2x.png public/assets/images/ui/banner-2.png
cp src/assets/images/首页条形图3@2x.png public/assets/images/ui/banner-3.png

# 移动角色图片
cp public/assets/images/worldview/LUMINA@2x.png public/assets/images/characters/lumina-avatar.png
cp public/assets/images/worldview/XIAOSI.png public/assets/images/characters/xiaosi-avatar.png
cp public/assets/images/worldview/MUYAN@2x.png public/assets/images/characters/muyant-avatar.png
cp public/assets/images/worldview/MUYING@2x.png public/assets/images/characters/rachel-avatar.png
cp public/assets/images/worldview/G&K.png public/assets/images/characters/aurora-avatar.png
cp public/assets/images/worldview/狐坂枫.png public/assets/images/characters/blake-avatar.png
cp src/assets/images/小四背景.png public/assets/images/characters/xiaosi-full.png
```

## 验证迁移

完成迁移后，使用以下步骤验证：

1. 确保所有必要的图片都已移动到正确的位置
2. 运行应用程序，检查所有页面是否正常显示图片
3. 特别检查首页、角色页面和工会页面的图片显示

如果发现任何图片不显示，请检查对应的路径是否正确，或者图片文件是否存在。 