import babel from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";

const config =  [
  {
    input: "src/video/react-video.jsx",
    output: {
      name: "reactjsvideo",
      file: "lib/video/react-video.js",
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