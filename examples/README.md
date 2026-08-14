# Example workflow

Run `node examples/create-sanitized-suite.mjs <output-directory>` to create a complete offline example containing baseline and observed recordings for all three surfaces plus a pinned `contract.json` manifest.

The generator uses synthetic identifiers and SHA-256 result digests. It does not execute a tool, MCP server, or CLI and does not read environment variables.

Then verify it:

```bash
node bin/dsh-surface-contract-proof.mjs verify \
  --workspace <output-directory> \
  --manifest contract.json \
  --artifactDir artifacts
```
