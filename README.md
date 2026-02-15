# FirstGame - 东方梦符祭风格塔防游戏

## 项目概述

这是一个基于 TypeScript 开发的塔防游戏项目，灵感来源于东方 Project 的《东方梦符祭》（Touhou Dream Symbolism）和《绿色循环圈》（Green Circular Loop）。游戏结合了弹幕射击游戏的华丽视觉效果与塔防游戏的策略深度。

## 游戏特色

### 🎯 核心玩法
- **弹幕塔防**：融合弹幕射击与塔防元素，敌人以弹幕形式进攻
- **符卡系统**：类似东方系列的符卡机制，玩家可以发动强大的符卡技能
- **循环挑战**：绿色循环圈风格的重复挑战模式，难度递增

### 🎨 视觉风格
- **东方风格**：采用东方 Project 的像素艺术风格
- **华丽弹幕**：丰富的弹幕图案和特效
- **动态背景**：根据游戏进度变化的背景场景

### 🛠️ 技术栈
- **TypeScript**：类型安全的开发语言
- **HTML5 Canvas**：游戏渲染引擎
- **Webpack**：模块打包工具
- **ES6+**：现代 JavaScript 特性

## 项目结构

```
FirstGame/
├── src/
│   ├── core/          # 游戏核心逻辑
│   │   ├── Game.ts    # 游戏主循环
│   │   ├── Player.ts  # 玩家类
│   │   └── Enemy.ts   # 敌人类
│   ├── towers/        # 塔防塔类
│   │   ├── BaseTower.ts
│   │   └── SpellCardTower.ts  # 符卡塔
│   ├── bullets/       # 子弹系统
│   │   ├── Bullet.ts
│   │   └── Danmaku.ts # 弹幕类
│   ├── ui/            # 用户界面
│   │   ├── HUD.ts
│   │   └── Menu.ts
│   └── utils/         # 工具函数
├── assets/            # 资源文件
│   ├── images/
│   ├── sounds/
│   └── data/
├── dist/              # 构建输出
├── test/              # 测试文件
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## 开发路线图

### Phase 1: 基础框架搭建
- [x] 项目初始化
- [ ] TypeScript 配置
- [ ] Canvas 渲染基础
- [ ] 游戏循环实现

### Phase 2: 核心游戏机制
- [ ] 塔防网格系统
- [ ] 基础塔类实现
- [ ] 敌人路径系统
- [ ] 碰撞检测

### Phase 3: 弹幕系统
- [ ] 基础弹幕实现
- [ ] 符卡系统设计
- [ ] 弹幕图案库
- [ ] 特效系统

### Phase 4: 关卡设计
- [ ] 地图编辑器
- [ ] 难度平衡
- [ ] 循环模式
- [ ] 成就系统

### Phase 5: 美术与音效
- [ ] 像素艺术资源
- [ ] 背景音乐
- [ ] 音效设计
- [ ] UI 界面

## 安装与运行

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 运行测试
```bash
npm test
```

## 游戏规则

### 基本规则
1. **防御阵地**：阻止敌人到达基地
2. **建造塔**：在网格上放置防御塔
3. **符卡发动**：在关键时刻使用符卡技能
4. **资源管理**：合理分配灵力资源

### 符卡系统
- **普通符卡**：基础技能，冷却时间短
- **强力符卡**：高伤害大范围攻击，冷却时间长
- **特殊符卡**：具有独特效果的符卡

### 循环模式
- **绿色循环圈**：每次循环难度提升
- **分数累积**：根据表现获得分数
- **解锁内容**：高分解锁新塔和新符卡

## 贡献指南

欢迎对本项目做出贡献！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 致谢

- 东方 Project 系列游戏
- 弹幕射击游戏社区
- 开源游戏开发社区

---

*愿这片幻想乡永远繁荣昌盛* 🌸