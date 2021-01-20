import babel from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";

const config =  [
  {
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
      file: "video.js",
      format: "cjs"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      styles()
    ]
  },
  {
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
      file: "dist/video.esm.js",
      format: "esm"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      styles()
    ]
  },
  {
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
      file: "dist/video.umd.js",
      format: "umd"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      styles()
    ]
  },
  {
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
      file: "dist/video.cjs.js",
      format: "cjs"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      styles()
    ]
  }
];

export default config;