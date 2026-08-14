import assert from 'node:assert/strict'
import { createDefinitions } from '../index.js'
const definitions = createDefinitions(null, { workspaceRoot: process.cwd() }); assert.deepEqual(definitions.map(({ name }) => name), ['dsh_surface_contract_inspect', 'dsh_surface_contract_verify']); process.stdout.write(`${JSON.stringify({ ok: true, tools: definitions.map(({ name }) => name) })}\n`)
