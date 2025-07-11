<div align="right">
  <a href="README.en.md">英文</a> | <a href="README.md">中文</a>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/92fd93ed-e71b-4b94-b270-50684323dd00" alt="Claudia Logo" width="120" height="120">

  <a href="https://claudiacode.com"><h1>Claudia</h1></a>
  
  <p>
    <strong>一款强大的 Claude Code 图形界面应用和工具包</strong>
  </p>
  <p>
    <strong>创建自定义智能体，管理交互式 Claude Code 会话，运行安全的后台智能体，以及更多功能。</strong>
  </p>
  
  <p>
    <a href="#功能特性"><img src="https://img.shields.io/badge/功能特性-✨-blue?style=for-the-badge" alt="功能特性"></a>
    <a href="#安装"><img src="https://img.shields.io/badge/安装-🚀-green?style=for-the-badge" alt="安装"></a>
    <a href="#使用指南"><img src="https://img.shields.io/badge/使用指南-📖-purple?style=for-the-badge" alt="使用指南"></a>
    <a href="#开发"><img src="https://img.shields.io/badge/开发-🛠️-orange?style=for-the-badge" alt="开发"></a>
  </p>
</div>

![457013521-6133a738-d0cb-4d3e-8746-c6768c82672c](https://github.com/user-attachments/assets/a028de9e-d881-44d8-bae5-7326ab3558b9)

https://github.com/user-attachments/assets/bf0bdf9d-ba91-45af-9ac4-7274f57075cf

> [!提示]
> **⭐ 为仓库点赞并在 X 平台上关注 [@getAsterisk](https://x.com/getAsterisk) 以获取 `asteria-swe-v0` 的早期访问权限**。

# Claudia 中文国际化版

> 本仓库为 [getAsterisk/claudia](https://github.com/getAsterisk/claudia) 的分支（fork），在原项目基础上重点完善了**中文本地化（i18n）与多语言支持**，并持续同步 upstream 的新特性与修复。
>
> - 原项目地址：[getAsterisk/claudia](https://github.com/getAsterisk/claudia)
> - 本项目地址：[haoguangxie/claudia-i18n](https://github.com/haoguangxie/claudia-i18n)

如需英文原版或最新 upstream 进展，请访问原仓库。

## 🌟 概述

**Claudia** 是一款强大的桌面应用程序，它彻底改变了您与 Claude Code 的交互方式。基于 Tauri 2 构建，它为您提供了一个精美的图形界面，用于管理您的 Claude Code 会话、创建自定义智能体、跟踪使用情况等。

将 Claudia 视为您的 Claude Code 指挥中心 - 它弥合了命令行工具与可视化体验之间的差距，使 AI 辅助开发更加直观高效。

## 📋 目录

- [🌟 概述](#-概述)
- [✨ 功能特性](#-功能特性)
  - [🗂️ 项目与会话管理](#️-项目与会话管理)
  - [🤖 CC 智能体](#-cc-智能体)
  - [📊 使用分析仪表盘](#-使用分析仪表盘)
  - [🔌 MCP 服务器管理](#-mcp-服务器管理)
  - [⏰ 时间线与检查点](#-时间线与检查点)
  - [📝 CLAUDE.md 管理](#-claudemd-管理)
- [📖 使用指南](#-使用指南)
  - [入门](#入门)
  - [管理项目](#管理项目)
  - [创建智能体](#创建智能体)
  - [跟踪使用情况](#跟踪使用情况)
  - [使用 MCP 服务器](#使用-mcp-服务器)
- [🚀 安装](#-安装)
- [🔨 从源码构建](#-从源码构建)
- [🛠️ 开发](#️-开发)
- [🔒 安全](#-安全)
- [🤝 贡献](#-贡献)
- [📄 许可证](#-许可证)
- [🙏 致谢](#-致谢)

## ✨ 功能特性

### 🗂️ **项目与会话管理**
- **可视化项目浏览器**：浏览 `~/.claude/projects/` 中的所有 Claude Code 项目
- **会话历史**：查看并恢复具有完整上下文的过去编码会话
- **智能搜索**：通过内置搜索功能快速查找项目和会话
- **会话洞察**：一目了然地查看首条消息、时间戳和会话元数据

### 🤖 **CC 智能体**
- **自定义 AI 智能体**：创建具有自定义系统提示和行为的专用智能体
- **智能体库**：构建针对不同任务的专门智能体集合
- **后台执行**：在单独的进程中运行智能体，实现非阻塞操作
- **执行历史**：通过详细日志和性能指标跟踪所有智能体运行

### 📊 **使用分析仪表盘**
- **成本跟踪**：实时监控您的 Claude API 使用情况和成本
- **令牌分析**：按模型、项目和时间段进行详细分析
- **可视化图表**：美观的图表展示使用趋势和模式
- **导出数据**：导出使用数据用于会计和分析

### 🔌 **MCP 服务器管理**
- **服务器注册表**：从中央 UI 管理 Model Context Protocol 服务器
- **简易配置**：通过 UI 添加服务器或从现有配置导入
- **连接测试**：使用前验证服务器连接
- **Claude Desktop 导入**：从 Claude Desktop 导入服务器配置

### ⏰ **时间线与检查点**
- **会话版本控制**：在编码会话的任何点创建检查点
- **可视化时间线**：通过分支时间线浏览会话历史
- **即时恢复**：一键跳回任何检查点
- **分叉会话**：从现有检查点创建新分支
- **差异查看器**：准确查看检查点之间的变化

### 📝 **CLAUDE.md 管理**
- **内置编辑器**：直接在应用中编辑 CLAUDE.md 文件
- **实时预览**：实时渲染您的 markdown 内容
- **项目扫描器**：查找项目中的所有 CLAUDE.md 文件
- **语法高亮**：完整支持 markdown 语法高亮

## 📖 使用指南

### 入门

1. **启动 Claudia**：安装后打开应用
2. **欢迎界面**：选择 CC 智能体或 CC 项目
3. **首次设置**：Claudia 将自动检测您的 `~/.claude` 目录

### 管理项目

```
CC 项目 → 选择项目 → 查看会话 → 恢复或开始新会话
```

- 点击任何项目以查看其会话
- 每个会话显示首条消息和时间戳
- 直接恢复会话或开始新会话

### 创建智能体

```
CC 智能体 → 创建智能体 → 配置 → 执行
```

1. **设计您的智能体**：设置名称、图标和系统提示
2. **配置模型**：从可用的 Claude 模型中选择
3. **设置权限**：配置文件读写和网络访问权限
4. **执行任务**：在任何项目上运行您的智能体

### 跟踪使用情况

```
菜单 → 使用情况仪表盘 → 查看分析
```

- 按模型、项目和日期监控成本
- 导出数据生成报告
- 设置使用警报（即将推出）

### 使用 MCP 服务器

```
菜单 → MCP 管理器 → 添加服务器 → 配置
```

- 手动或通过 JSON 添加服务器
- 从 Claude Desktop 配置导入
- 使用前测试连接

## 🚀 安装

### 先决条件

- **Claude Code CLI**：从 [Claude 官方网站](https://claude.ai/code) 安装

### 发布可执行文件即将推出

## 🔨 从源码构建

### 先决条件

在从源码构建 Claudia 之前，请确保您已安装以下组件：

#### 系统要求

- **操作系统**：Windows 10/11、macOS 11+ 或 Linux（Ubuntu 20.04+）
- **内存**：最小 4GB（建议 8GB）
- **存储**：至少 1GB 可用空间

#### 所需工具

1. **Rust**（1.70.0 或更高版本）
   ```bash
   # 通过 rustup 安装
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Bun**（最新版本）
   ```bash
   # 安装 bun
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Git**
   ```bash
   # 通常预装，如果没有：
   # Ubuntu/Debian: sudo apt install git
   # macOS: brew install git
   # Windows: 从 https://git-scm.com 下载
   ```

4. **Claude Code CLI**
   - 从 [Claude 官方网站](https://claude.ai/code) 下载并安装
   - 确保 `claude` 在您的 PATH 中可用

#### 平台特定依赖项

**Linux (Ubuntu/Debian)**
```bash
# 安装系统依赖项
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  patchelf \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libxdo-dev \
  libsoup-3.0-dev \
  libjavascriptcoregtk-4.1-dev
```

**macOS**
```bash
# 安装 Xcode 命令行工具
xcode-select --install

# 通过 Homebrew 安装其他依赖项（可选）
brew install pkg-config
```

**Windows**
- 安装 [Microsoft C++ 构建工具](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- 安装 [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/)（通常在 Windows 11 上预装）

### 构建步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/getAsterisk/claudia.git
   cd claudia
   ```

2. **安装前端依赖项**
   ```bash
   bun install
   ```

3. **构建应用程序**
   
   **开发构建（热重载）**
   ```bash
   bun run tauri dev
   ```
   
   **生产构建**
   ```bash
   # 构建应用程序
   bun run tauri build
   
   # 构建的可执行文件将位于：
   # - Linux: src-tauri/target/release/bundle/
   # - macOS: src-tauri/target/release/bundle/
   # - Windows: src-tauri/target/release/bundle/
   ```

4. **平台特定构建选项**
   
   **调试构建（编译更快，二进制文件更大）**
   ```bash
   bun run tauri build --debug
   ```
   
   **不打包构建（仅创建可执行文件）**
   ```bash
   bun run tauri build --no-bundle
   ```
   
   **macOS 通用二进制文件（Intel + Apple Silicon）**
   ```bash
   bun run tauri build --target universal-apple-darwin
   ```

### 故障排除

#### 常见问题

1. **"找不到 cargo" 错误**
   - 确保已安装 Rust 并且 `~/.cargo/bin` 在您的 PATH 中
   - 运行 `source ~/.cargo/env` 或重启终端

2. **Linux: "找不到 webkit2gtk" 错误**
   - 安装上面列出的 webkit2gtk 开发包
   - 在较新的 Ubuntu 版本上，您可能需要 `libwebkit2gtk-4.0-dev`

3. **Windows: "找不到 MSVC" 错误**
   - 安装带有 C++ 支持的 Visual Studio 构建工具
   - 安装后重启终端

4. **"找不到 claude 命令" 错误**
   - 确保已安装 Claude Code CLI 并在您的 PATH 中
   - 用 `claude --version` 测试

5. **构建出现 "内存不足" 错误**
   - 尝试使用更少的并行任务构建：`cargo build -j 2`
   - 关闭其他应用程序以释放内存

#### 验证构建

构建后，您可以验证应用程序是否正常工作：

```bash
# 直接运行构建的可执行文件
# Linux/macOS
./src-tauri/target/release/claudia

# Windows
./src-tauri/target/release/claudia.exe
```

### 构建产物

构建过程会创建几个产物：

- **可执行文件**：主要 Claudia 应用程序
- **安装程序**（使用 `tauri build` 时）：
  - `.deb` 包（Linux）
  - `.AppImage`（Linux）
  - `.dmg` 安装程序（macOS）
  - `.msi` 安装程序（Windows）
  - `.exe` 安装程序（Windows）

所有产物都位于 `src-tauri/target/release/bundle/` 中。

## 🛠️ 开发

### 技术栈

- **前端**：React 18 + TypeScript + Vite 6
- **后端**：基于 Tauri 2 的 Rust
- **UI 框架**：Tailwind CSS v4 + shadcn/ui
- **数据库**：SQLite（通过 rusqlite）
- **包管理器**：Bun

### 项目结构

```
claudia/
├── src/                   # React 前端
│   ├── components/        # UI 组件
│   ├── lib/               # API 客户端和工具
│   └── assets/            # 静态资源
├── src-tauri/             # Rust 后端
│   ├── src/
│   │   ├── commands/      # Tauri 命令处理程序
│   │   ├── checkpoint/    # 时间线管理
│   │   └── process/       # 进程管理
│   └── tests/             # Rust 测试套件
└── public/                # 公共资源
```

### 开发命令

```bash
# 启动开发服务器
bun run tauri dev

# 仅运行前端
bun run dev

# 类型检查
bunx tsc --noEmit

# 运行 Rust 测试
cd src-tauri && cargo test

# 格式化代码
cd src-tauri && cargo fmt
```

## 🔒 安全

Claudia 优先考虑您的隐私和安全：

1. **进程隔离**：智能体在单独的进程中运行
2. **权限控制**：为每个智能体配置文件和网络访问权限
3. **本地存储**：所有数据都保留在您的机器上
4. **无遥测**：不收集数据或进行跟踪
5. **开源**：通过开源代码实现完全透明

## 🤝 贡献

我们欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.zh.md)了解详情。

### 贡献领域

- 🐛 Bug 修复和改进
- ✨ 新功能和增强
- 📚 文档改进
- 🎨 UI/UX 增强
- 🧪 测试覆盖
- 🌐 国际化

## 📄 许可证

本项目采用 AGPL 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- 使用 [Tauri](https://tauri.app/) 构建 - 用于构建桌面应用程序的安全框架
- Anthropic 的 [Claude](https://claude.ai)

---

<div align="center">
  <p>
    <strong>由 <a href="https://asterisk.so/">Asterisk</a> 团队用 ❤️ 制作</strong>
  </p>
  <p>
    <a href="https://github.com/getAsterisk/claudia/issues">报告 Bug</a>
    ·
    <a href="https://github.com/getAsterisk/claudia/issues">请求功能</a>
  </p>
</div>


## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=getAsterisk/claudia&type=Date)](https://www.star-history.com/#getAsterisk/claudia&Date) 