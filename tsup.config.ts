import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/result.ts'],
	clean: true,
  format: ['cjs', 'esm'],
  dts: true
});
