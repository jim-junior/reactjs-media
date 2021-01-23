import babel from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import sourcemaps from 'rollup-plugin-sourcemaps';

const config =  [
  {
    input: "src/index.js",
    output: {
      name: "reactjsmedia",
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
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
      sourcemap: true,
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
      sourcemaps(),
      styles()
    ]
  },
  {
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
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
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
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
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
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
  },{
    input: "src/audio/react-audio.jsx",
    output: {
      name: "reactjsaudio",
      sourcemap: true,
      file: "audio.js",
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
    input: "src/audio/react-audio.jsx",
    output: {
      name: "reactjsaudio",
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
    input: "src/audio/react-audio.jsx",
    output: {
      name: "reactjsaudio",
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
    input: "src/audio/react-audio.jsx",
    output: {
      name: "reactjsaudio",
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