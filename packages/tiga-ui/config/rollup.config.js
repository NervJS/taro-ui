import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
// ref to https://github.com/vladshcherbin/rollup-plugin-copy/pull/42
// fork by rollup-plugin-copy 更改的包，验证完后最好锁一下版本，解决源码更新后 copy 没有重新触发的问题
import RollupCopy from '@guanghechen/rollup-plugin-copy'
import RollupReactSvg from 'rollup-plugin-react-svg'
import Package from '../package.json'

const resolveFile = path => NodePath.resolve(__dirname, '..', path)

const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true
    }
  ],
  external: externalPackages,
  plugins: [
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json')
    }),
    RollupReactSvg({
      // svgo options
      svgo: {
        plugins: [], // passed to svgo
        multipass: true
      },

      // whether to output jsx
      jsx: false,

      // include: string
      include: null,

      // exclude: string
      exclude: null
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist')
        }
      ]
    })
  ]
}
