#!/usr/bin/env node

/**
 * 图片优化脚本
 * 使用方法: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

console.log('🖼️  图片优化建议');
console.log('=====================================');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
const imagesDir = path.join(__dirname, '../public/assets/images');

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(1); // KB
}

function scanDirectory(dir, results = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath, results);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const size = getFileSize(filePath);
        const relativePath = path.relative(path.join(__dirname, '../'), filePath);
        results.push({
          path: relativePath,
          size: parseFloat(size),
          name: file
        });
      }
    }
  });
  
  return results;
}

try {
  const images = scanDirectory(imagesDir);
  
  // 按文件大小排序
  images.sort((a, b) => b.size - a.size);
  
  console.log(`📊 发现 ${images.length} 张图片\n`);
  
  // 显示最大的10个文件
  console.log('🔥 最大的图片文件:');
  images.slice(0, 10).forEach((img, index) => {
    const status = img.size > 500 ? '❌ 过大' : img.size > 200 ? '⚠️  较大' : '✅ 正常';
    console.log(`${index + 1}. ${img.name} - ${img.size}KB ${status}`);
  });
  
  // 分析建议
  const largeImages = images.filter(img => img.size > 300);
  const veryLargeImages = images.filter(img => img.size > 500);
  
  console.log('\n📋 优化建议:');
  console.log('=====================================');
  
  if (veryLargeImages.length > 0) {
    console.log(`❌ 有 ${veryLargeImages.length} 张图片超过 500KB，强烈建议压缩`);
  }
  
  if (largeImages.length > 0) {
    console.log(`⚠️  有 ${largeImages.length} 张图片超过 300KB，建议压缩`);
  }
  
  console.log('\n🛠️  压缩方法:');
  console.log('1. 在线工具: https://tinypng.com/ 或 https://squoosh.app/');
  console.log('2. 转换为WebP格式 (体积减少30-50%)');
  console.log('3. 使用响应式图片 (不同屏幕加载不同尺寸)');
  console.log('4. 移除@3x、@4x高分辨率版本 (除非必需)');
  
  // 生成优化后的文件名建议
  console.log('\n💡 文件优化建议:');
  veryLargeImages.forEach(img => {
    console.log(`- ${img.name} (${img.size}KB) → 建议压缩到 150KB 以下`);
  });
  
} catch (error) {
  console.error('❌ 扫描图片时出错:', error.message);
}

console.log('\n✨ 完成分析!'); 