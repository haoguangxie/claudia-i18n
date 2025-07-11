# 欢迎贡献者

我们欢迎各种贡献来增强 Claudia 的功能并改进其性能。要报告 Bug，请创建一个 [GitHub issue](https://github.com/getAsterisk/claudia/issues)。

> 在贡献之前，请查看现有的 issues 和 pull requests，看看是否有人已经在处理类似的问题。这样可以避免重复工作。

要贡献代码，请按照以下步骤操作：

1. 在 GitHub 上 Fork Claudia 仓库。
2. 为您的功能或 Bug 修复创建一个新分支。
3. 进行更改并确保代码通过所有测试。
4. 提交一个描述您的更改及其好处的 pull request。

## Pull Request 指南

提交 pull request 时，请遵循以下指南：

1. **标题**：请包含以下前缀：
   - `Feature:` 用于新功能
   - `Fix:` 用于 bug 修复
   - `Docs:` 用于文档更改
   - `Refactor:` 用于代码重构
   - `Improve:` 用于性能改进
   - `Other:` 用于其他更改

   例如：
   - `Feature: 添加了自定义代理超时配置`
   - `Fix: 解决了会话列表滚动问题`

2. **描述**：在 pull request 中提供清晰详细的更改描述。解释您要解决的问题、您采取的方法，以及您的更改可能带来的任何副作用或限制。

3. **文档**：更新相关文档以反映您的更改。这包括 README 文件、代码注释和任何其他相关文档。

4. **依赖项**：如果您的更改需要新的依赖项，请确保它们已正确记录并添加到 `package.json` 或 `Cargo.toml` 文件中。

5. 如果 pull request 不符合上述指南，可能会在不合并的情况下被关闭。

**注意**：请确保在创建 pull request 之前您拥有最新版本的代码。如果您有现有的 fork，只需将您的 fork 与 Claudia 仓库的最新版本同步即可。

## 编码标准

### 前端（React/TypeScript）
- 所有新代码都使用 TypeScript
- 遵循使用 hooks 的函数式组件
- 使用 Tailwind CSS 进行样式设计
- 为导出的函数和组件添加 JSDoc 注释

### 后端（Rust）
- 遵循 Rust 标准规范
- 使用 `cargo fmt` 进行格式化
- 使用 `cargo clippy` 进行代码检查
- 明确处理所有 `Result` 类型
- 使用 `///` 注释添加全面的文档

### 安全要求
- 验证来自前端的所有输入
- 对数据库操作使用预处理语句
- 永不记录敏感数据（令牌、密码等）
- 对所有配置使用安全默认值

## 测试
- 为新功能添加测试
- 确保所有现有测试通过
- 对 Rust 代码运行 `cargo test`
- 提交前手动测试应用程序

请遵守编码规范，保持清晰的文档，并为您的贡献提供全面的测试。 