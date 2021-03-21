import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy'

export default {
  input: './src/classes/Seeder.ts',
  output: {
    file: './dist/seeder.js',
    format: 'cjs'
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
      rollupCommonJSResolveHack: true
    }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    }),
    copy({
      targets: [
        {
          src: './seeder-json/**',
          dest: './dist'
        }
      ]
    }),
  ]
};
