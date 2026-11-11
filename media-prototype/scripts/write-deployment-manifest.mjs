import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
const sha = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
if (!/^[0-9a-f]{40}$/i.test(sha)) throw new Error('Invalid deployment commit SHA');
const out = resolve('public');
mkdirSync(out, { recursive: true });
writeFileSync(resolve(out, 'deployment.json'), JSON.stringify({ commit: sha, branch: process.env.CF_PAGES_BRANCH || process.env.GITHUB_REF_NAME || 'unknown', builtAt: new Date().toISOString() }, null, 2) + '\n');
console.log('Deployment manifest for commit', sha);
