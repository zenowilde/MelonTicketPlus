#!/bin/bash

echo "🎫 MelonTicketPlus 项目设置脚本"
echo "================================"

# 检查 Node.js 版本
echo "📦 检查 Node.js 版本..."
node_version=$(node -v)
echo "当前 Node.js 版本: $node_version"

# 安装依赖
echo "📥 安装项目依赖..."
if command -v yarn &> /dev/null; then
    echo "使用 Yarn 安装依赖..."
    yarn install
else
    echo "使用 npm 安装依赖..."
    npm install
fi

# iOS 依赖安装 (仅在 macOS 上)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 安装 iOS 依赖..."
    cd ios
    if command -v pod &> /dev/null; then
        pod install
    else
        echo "⚠️  CocoaPods 未安装，请先安装 CocoaPods"
        echo "运行: sudo gem install cocoapods"
    fi
    cd ..
fi

echo "✅ 设置完成！"
echo ""
echo "🚀 运行应用:"
echo "  Android: yarn android 或 npm run android"
echo "  iOS:     yarn ios 或 npm run ios"
echo ""
echo "🔧 开发服务器:"
echo "  yarn start 或 npm start"