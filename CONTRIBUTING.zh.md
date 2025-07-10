# 贡献指南（中文）

感谢你对 Claudia 项目的关注与贡献！

## 如何贡献
1. **Fork 本仓库**，并创建你的分支：
   - 功能开发：`feature/xxx`
   - Bug 修复：`fix/xxx`
   - 文档改进：`docs/xxx`
2. **保持分支与主仓库 develop 分支同步**。
3. **提交前请确保所有测试通过**。
4. **提交 Pull Request（PR）**，并简要描述你的更改内容。
5. 至少一位维护者审核通过后合并。

## 分支管理
- `main`：生产环境主分支，仅合并 release/hotfix。
- `develop`：开发主分支，日常开发合并目标。
- `feature/*`：新功能开发分支。
- `release/*`：发布准备分支。
- `hotfix/*`：紧急修复分支。

## 提交规范
- 使用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 风格：
  - feat: 新功能
  - fix: 修复 bug
  - docs: 文档
  - style: 格式
  - refactor: 重构
  - test: 测试
  - chore: 构建/工具
- 示例：
  ```
  feat(agent): 支持多语言切换
  fix(storage): 修复表格分页 bug
  docs: 完善 README.md
  ```

## 代码风格
- 前端：遵循 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) 规范
- 后端（Rust）：遵循 [rustfmt](https://github.com/rust-lang/rustfmt) 格式化
- 变量/函数/文件命名需语义清晰
- 复杂逻辑请添加注释

## Issue 与 PR
- Issue 请尽量详细描述问题、复现步骤、期望结果
- PR 请关联相关 Issue（如有），并说明变更动机
- 维护者会定期 review 并合并

## 其他建议
- 欢迎补充文档、完善测试、提出新想法！
- 如有疑问可在 Issue 区留言或联系维护者。

再次感谢你的贡献！ 