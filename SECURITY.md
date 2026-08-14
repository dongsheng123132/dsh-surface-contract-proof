# Security policy

Report vulnerabilities privately through GitHub Security Advisories.

The verifier is offline. It never executes the target or inspected fixtures, starts no subprocess, and makes no network requests. It rejects traversal, symlinks, oversized or overly complex inputs, secret/raw-body shaped fields, schema and protocol drift, and unpinned bytes. It writes only a content-addressed report beneath an explicit workspace-relative `artifactDir` and verifies the write by reading it back.

A passing proof establishes consistency only for the explicitly recorded envelopes, cases, revisions, and fields. It does not prove action correctness, interface binding, authorization enforcement outside those fixtures, malware absence, or runtime availability.
