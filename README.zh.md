# Claudia 中文国际化版

> 本仓库为 [getAsterisk/claudia](https://github.com/getAsterisk/claudia) 的分支（fork），在原项目基础上重点完善了**中文本地化（i18n）与多语言支持**，并持续同步 upstream 的新特性与修复。
>
> - 原项目地址：[getAsterisk/claudia](https://github.com/getAsterisk/claudia)
> - 本项目地址：[haoguangxie/claudia-i18n](https://github.com/haoguangxie/claudia-i18n)

如需英文原版或最新 upstream 进展，请访问原仓库。

# Claudia 项目简介

Claudia 是一个现代化的多智能体开发与管理平台，支持 Claude Code 智能体的创建、运行、管理与扩展，适用于 AI 研发、自动化与智能应用场景。

## 技术栈
- React + TypeScript 前端
- Tauri 跨平台桌面应用
- Rust 后端（src-tauri）
- Vite 构建工具
- SQLite 数据存储

## 目录结构
- `src/`：前端主代码（组件、页面、样式、本地化等）
- `src-tauri/`：Tauri 后端（Rust）
- `cc_agents/`：内置/示例 Claude 智能体
- `public/`：静态资源
- `scripts/`：构建与自动化脚本
- `README.md`：英文项目说明
- `README.zh.md`：中文项目说明
- `CONTRIBUTING.md`：英文贡献指南
- `CONTRIBUTING.zh.md`：中文贡献指南

## 快速开始
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发环境：
   ```bash
   npm run tauri dev
   ```
3. 构建生产包：
   ```bash
   npm run tauri build
   ```

## 主要功能
- 多智能体管理与运行
- 代码会话与执行历史
- 斜杠命令与自定义工具
- 数据存储与可视化
- 多语言（中英文）界面

## 许可证
本项目采用 MIT License，详见 LICENSE 文件。

## 贡献
欢迎通过 Pull Request 贡献代码、文档或建议！详见 [CONTRIBUTING.zh.md](./CONTRIBUTING.zh.md)。 