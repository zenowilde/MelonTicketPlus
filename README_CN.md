# MelonTicketPlus 🎫

一个现代化的票务应用，基于 React Native 开发，提供演出票务购买、管理和电子票展示功能。

## 功能特性 ✨

### 🏠 首页
- **个性化问候**：根据时间显示不同问候语
- **智能搜索**：支持演出、艺人、场馆搜索
- **分类导航**：音乐会、话剧、展览、体育等快速分类
- **促销横幅**：限时抢购、新用户优惠等活动展示
- **热门推荐**：精选热门演出推荐
- **音乐专区**：专门的音乐演出展示区域

### 🔍 搜索页面
- **热门搜索**：展示当前热门搜索关键词
- **搜索历史**：保存用户搜索记录
- **实时搜索**：输入即时显示搜索结果
- **搜索建议**：智能搜索建议功能

### 🎫 我的票
- **电子票展示**：二维码电子票
- **票务详情**：演出时间、场馆、座位信息
- **入场须知**：详细的入场指导
- **便民服务**：路线查询、客服联系

### 👤 个人中心
- **用户信息**：头像、昵称、会员等级
- **数据统计**：已购票、收藏、待观看统计
- **账户管理**：余额、积分查看
- **功能菜单**：订单管理、收藏、地址、支付方式等
- **客服支持**：在线客服和帮助中心

## 技术栈 🛠️

- **React Native 0.79.2** - 跨平台移动应用开发框架
- **React Navigation** - 导航管理
- **TypeScript** - 类型安全的JavaScript
- **React Native QRCode SVG** - 二维码生成
- **React Native Reanimated** - 高性能动画库
- **React Native Gesture Handler** - 手势处理

## 项目结构 📁

```
MelonTicketPlus/
├── components/           # 组件目录
│   ├── AppNavigator.tsx     # 导航配置
│   ├── HomeScreen.tsx       # 首页
│   ├── SearchScreen.tsx     # 搜索页
│   ├── QRCodeScreen.tsx     # 电子票页
│   ├── ProfileScreen.tsx    # 个人中心
│   ├── TopWelcomeSection.tsx    # 顶部欢迎区域
│   ├── PublicSaleSection.tsx    # 促销横幅
│   ├── RecommendedEventsSection.tsx # 推荐活动
│   └── MusicSection.tsx     # 音乐专区
├── utils/               # 工具函数
├── assets/              # 静态资源
├── android/             # Android 配置
├── ios/                 # iOS 配置
└── App.tsx              # 应用入口
```

## 安装和运行 🚀

### 环境要求
- Node.js >= 18
- React Native CLI
- Android Studio (Android 开发)
- Xcode (iOS 开发)

### 安装依赖
```bash
yarn install
# 或
npm install
```

### iOS 依赖安装
```bash
cd ios && pod install
```

### 运行应用

#### Android
```bash
yarn android
# 或
npm run android
```

#### iOS
```bash
yarn ios
# 或
npm run ios
```

### 开发服务器
```bash
yarn start
# 或
npm start
```

## 界面预览 📱

### 主要界面
- **首页**：现代化的卡片式设计，清晰的信息层级
- **搜索**：简洁的搜索界面，支持热门搜索和历史记录
- **电子票**：专业的电子票展示，包含二维码和详细信息
- **个人中心**：完整的用户管理功能

### 设计特色
- **色彩方案**：以 #FF6B6B 为主色调的现代化配色
- **图标系统**：使用 Emoji 图标，简洁直观
- **卡片设计**：统一的卡片式布局，提升用户体验
- **响应式布局**：适配不同屏幕尺寸

## 开发指南 👨‍💻

### 代码规范
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 代码规范
- 使用 Prettier 进行代码格式化

### 组件开发
- 采用函数式组件和 Hooks
- 统一的样式管理
- 可复用的组件设计

### 状态管理
- 使用 React Hooks 进行状态管理
- 组件间通过 props 传递数据

## 许可证 📄

MIT License - 详见 [LICENSE](LICENSE) 文件

## 贡献 🤝

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---

**MelonTicketPlus** - 让购票更简单，让体验更美好 🎭🎵🎪