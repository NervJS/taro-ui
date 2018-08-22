import * as Nerv from 'nervjs'
import './style.scss'

const Footer = () => {
  return <div className='footer'>
    <div className='footer-logo-container'>
      <div className='footer-logo'></div>
    </div>
    <div className='footer-link-container'>
      <div className='footer-link'>
        <h3>相关资源</h3>
        <p><a className='link' href="https://github.com/NervJS/taro">Taro</a> - 多端解决方案</p>
        <p><a className='link' href="https://github.com/NervJS/nerv">Nerv</a> - 类React框架</p>
        <p><a className='link' href="https://github.com/o2team/athena">Athena</a> - O2 前端流程工具</p>
        <p><a className='link' href="https://github.com/AT-UI/at-ui">AT-UI</a> - Vue 组件库</p>
      </div>
      <div className='footer-link'>
        <h3>社区</h3>
        <p><a href="https://github.com/NervJS/taro-ui/issues">反馈建议</a></p>
        <p><a href="https://github.com/NervJS/taro-ui/blob/master/.github/CONTRIBUTING.md">贡献指南</a></p>
        <p><a href="https://github.com/NervJS/taro-ui">Github</a></p>
      </div>
      <div className='footer-link'>
        <h3>关于我们</h3>
        <p><a href="https://aotu.io/about/">凹凸实验室</a></p>
      </div>
    </div>
  </div>
}

export default Footer
