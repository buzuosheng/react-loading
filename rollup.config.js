import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
// import { eslint } from 'rollup-plugin-eslint'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default {
  input: "src/Loading.jsx",
  output: [
    {
      file: "dist/loading.es.js",
      format: "es",
      globals: {
        react: 'React',
      },
    }, {
      file: 'dist/loading.cjs',
      format: "cjs",
      globals: {
        react: 'React',
      },
    },
  ],
  external: ['react'],
  plugins: [
    postcss(
      { extensions: ['.css'] }
    ),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    commonjs(),
    resolve(),
    // terser(),
  ],
}