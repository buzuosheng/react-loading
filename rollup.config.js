import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

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
  ],
}