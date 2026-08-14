# dsh-surface-contract-proof

[![CI](https://github.com/dongsheng123132/dsh-surface-contract-proof/actions/workflows/ci.yml/badge.svg)](https://github.com/dongsheng123132/dsh-surface-contract-proof/actions/workflows/ci.yml)
[![MIT license](https://img.shields.io/github/license/dongsheng123132/dsh-surface-contract-proof)](LICENSE)
[![Node.js 22+](https://img.shields.io/badge/Node.js-%E2%89%A522-339933?logo=nodedotjs&logoColor=white)](package.json)
[![Awesome DSH Plugins](https://img.shields.io/badge/Awesome_DSH-verified_lab-0969da)](https://github.com/dongsheng123132/awesome-dsh-plugins#2origin-plugin-lab)

`dsh-surface-contract-proof` verifies that recorded DeepSeek Harness ToolRuntime, MCP JSON-RPC, and CLI JSON envelopes preserve one pinned semantic contract across a baseline and an observed revision.

It reads explicit, SHA-256-pinned JSON fixtures. It does **not** execute the target, start arbitrary commands, call a network service, replay side effects, or implement an action core.

## Complementary boundary

`dsh-action-parity` proves that interfaces bind the same Action ID/core and that runtime success/conflict behavior is reachable. This plugin answers a different upgrade question: given immutable recordings, did request/response schema versions, success bits, error classes, exit-code mapping, conflict and confirmation semantics, normalization, timeout/stale/out-of-order behavior, and result digests remain identical across ToolRuntime, MCP, and CLI?

Generic OpenAPI/Pact tools validate HTTP consumer-provider contracts. This verifier is specific to the three DSH machine surfaces and uses offline recorded envelopes.

## Safety and evidence

- Exactly three surface kinds are required: `dsh-toolruntime`, `mcp-jsonrpc`, and `cli-json`.
- Baseline and observed fixtures bind target revisions, contract/schema versions, transport versions, and SHA-256 bytes.
- Surface-specific fields normalize into one canonical case digest; the manifest pins each expected digest.
- Missing, stale, malformed, secret-shaped, schema/version-drifted, or semantically different fixtures fail closed.
- Reports expose hashes, identities, statuses, and differing field names only—never request arguments, response bodies, CLI output, prompts, messages, credentials, or secrets.
- Paths are workspace-relative regular files; traversal and symlinks are rejected. Writes are atomic, read back, and limited to explicit `artifactDir`.

## CLI

```bash
dsh-surface-contract-proof inspect --workspace . --manifest contract.json
dsh-surface-contract-proof verify --workspace . --manifest contract.json --artifactDir artifacts
```

Use `inspect` to obtain canonical baseline digests, review them, then pin them as `cases[].expectedSha256`. Exit `0` means verified; exit `2` means failed or invalid evidence.

## DSH / MCP tools

- `dsh_surface_contract_inspect`
- `dsh_surface_contract_verify`
- MCP aliases: `surface_contract_inspect`, `surface_contract_verify`

```bash
dsh plugin --profile surface-contract add github:dongsheng123132/dsh-surface-contract-proof#<commit>
```

## Development

```bash
npm ci
npm test
npm run check
npm run smoke:plugin
npm run smoke:mcp
```

MIT licensed. See [SECURITY.md](SECURITY.md).
