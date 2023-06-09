import sourcemaps from 'rollup-plugin-sourcemaps';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    }
  ],
  external: (id) => !/^(\.|\/)/.test(id),
  plugins: [resolve(), sourcemaps()],
};
