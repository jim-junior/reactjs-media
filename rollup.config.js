import babel from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import sourcemaps from 'rollup-plugin-sourcemaps';

const config =  [
  {
    input: "src/index.js",
    output: {
      name: "reactjs-media",
      dir: "lib",
      sourcemap: true,
      format: "cjs",
      exports: "auto"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      sourcemaps(),
      styles()
    ]
  },
  {
    input: "src/v1/video/react-video.jsx",
    output: {
      name: "ReactVideo",
      sourcemap: true,
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
      styles(),
      sourcemaps()
    ]
  },
  {
    input: "src/v1/video/react-video.jsx",
    output: {
      name: "ReactVideo",
      sourcemap: true,
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
      styles(),
      sourcemaps()
    ]
  },
  {
    input: "src/v1/video/react-video.jsx",
    output: {
      name: "ReactVideo",
      sourcemap: true,
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
      styles(),
      sourcemaps()
    ]
  },
  {
    input: "src/v1/audio/react-audio.jsx",
    output: {
      name: "ReactAudio",
      sourcemap: true,
      file: "dist/audio.esm.js",
      format: "esm"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      styles(),
      sourcemaps()
    ]
  },
  {
    input: "src/v1/audio/react-audio.jsx",
    output: {
      name: "ReactAudio",
      sourcemap: true,
      file: "dist/audio.umd.js",
      format: "umd"
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      styles(),
      sourcemaps()
    ]
  },
  {
    input: "src/v1/audio/react-audio.jsx",
    output: {
      name: "ReactAudio",
      file: "dist/audio.cjs.js",
      format: "cjs",
      sourcemap: true
    },
    external: ["react", /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      styles(),
      sourcemaps()
    ]
  }
];

export default config;