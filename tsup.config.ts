import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  entry: ['src/index.ts'],
  splitting: false,
  clean: true,
  dts: true,
  sourcemap: true,
  minify: true,
});
