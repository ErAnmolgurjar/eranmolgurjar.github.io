/*
  @license
	Rollup.js v4.53.4
	Mon, 15 Dec 2025 12:00:59 GMT - commit 7df7947fdb51ead87b71d38ece3752796bd0249c

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
