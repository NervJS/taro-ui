import RollupVisualizer from 'rollup-plugin-visualizer'
import defaultConfig from './rollup.config'

export default Object.assign({}, defaultConfig, {
  plugins: [...defaultConfig.plugins, RollupVisualizer()]
})
