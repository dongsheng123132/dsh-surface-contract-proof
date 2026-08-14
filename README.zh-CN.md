# dsh-surface-contract-proof

[![CI](https://github.com/dongsheng123132/dsh-surface-contract-proof/actions/workflows/ci.yml/badge.svg)](https://github.com/dongsheng123132/dsh-surface-contract-proof/actions/workflows/ci.yml)
[![MIT 许可证](https://img.shields.io/github/license/dongsheng123132/dsh-surface-contract-proof)](LICENSE)
[![Node.js 22+](https://img.shields.io/badge/Node.js-%E2%89%A522-339933?logo=nodedotjs&logoColor=white)](package.json)
[![Awesome DSH Plugins](https://img.shields.io/badge/Awesome_DSH-%E5%B7%B2%E9%AA%8C%E8%AF%81%E5%AE%9E%E9%AA%8C-0969da)](https://github.com/dongsheng123132/awesome-dsh-plugins/blob/main/README.zh-CN.md#2origin-%E6%8F%92%E4%BB%B6%E5%AE%9E%E9%AA%8C%E5%AE%A4)

这是一个离线、只读的 DSH 跨表面契约证据插件。它比较 baseline 与 observed 两个 revision 中的 ToolRuntime、MCP JSON-RPC、CLI JSON 录制 envelope，把三种字段形状归一为同一个语义摘要，然后核验请求/响应 schema、成功位、错误分类、退出码、冲突/确认、超时、陈旧、乱序与结果摘要是否漂移。

它与 `dsh-action-parity` 互补：后者证明同一 Action ID/core 和各界面绑定；本插件不实现或执行 action，只验证升级前后的固定录制证据。它也不是 OpenAPI/Pact 式在线 HTTP 测试器。

所有 fixture 必须由显式 SHA-256 固定；目录逃逸、symlink、秘密形字段、缺失、陈旧和语义错配均失败闭合。报告只含身份、hash、状态和差异字段名，不复制业务正文或秘密。

```bash
dsh-surface-contract-proof verify --workspace . --manifest contract.json --artifactDir artifacts
```
