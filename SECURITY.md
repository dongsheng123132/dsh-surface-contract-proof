# Security policy

The MCP server is proof-only and in-memory: it has no filesystem or network API and writes no artifacts. DSH/CLI paths remain workspace-relative, reject traversal and symlinks, and only write content-addressed reports beneath an explicit artifact directory with read-back verification.

Report vulnerabilities privately through GitHub Security Advisories.

The verifier is offline. It never executes the target or inspected fixtures, starts no subprocess, and makes no network requests. It rejects traversal, symlinks, oversized or overly complex inputs, secret/raw-body shaped fields, schema and protocol drift, and unpinned bytes. It writes only a content-addressed report beneath an explicit workspace-relative `artifactDir` and verifies the write by reading it back.

A passing proof establishes consistency only for the explicitly recorded envelopes, cases, revisions, and fields. It does not prove action correctness, interface binding, authorization enforcement outside those fixtures, malware absence, or runtime availability.
