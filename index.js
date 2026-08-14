import { defineTool } from '@deepseek-ai/dsh-tools'
import { inspectSurfaceContract, verifySurfaceContract } from './lib/surface-contract-proof.mjs'
export const name = 'dsh-surface-contract-proof'
export const inject = ['tools']
const renderJson = (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }]
const base = (config, args) => ({ workspaceRoot: config.workspaceRoot ?? process.cwd(), manifestPath: args.manifestPath, artifactDir: args.artifactDir })
export function createDefinitions(_ctx, config = {}) { return [defineTool({ name: 'dsh_surface_contract_inspect', description: 'Inspect pinned baseline and observed ToolRuntime, MCP and CLI fixture digests without returning fixture bodies.', parameters: { manifestPath: { type: 'string', required: true } }, output: { schema: { type: 'json' }, render: renderJson }, execute(args) { return inspectSurfaceContract(base(config, args)) } }), defineTool({ name: 'dsh_surface_contract_verify', description: 'Verify recorded DSH surface envelopes against one semantic contract and emit a content-addressed proof.', parameters: { manifestPath: { type: 'string', required: true }, artifactDir: { type: 'string', required: true } }, output: { schema: { type: 'json' }, render: renderJson }, execute(args) { return verifySurfaceContract(base(config, args)) } })] }
export function apply(ctx, config = {}) { for (const definition of createDefinitions(ctx, config)) ctx.tools.register(definition) }
export default apply
