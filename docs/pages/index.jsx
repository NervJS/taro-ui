import * as Nerv from 'nervjs'
import { Link } from 'react-router-dom'

import PageHeader from '../components/header'

import '../assets/style/index.scss'

class Index extends Nerv.Component {
  goToGuide (e) {
    e.preventDefault()
  }
  goToSource (e) {
    e.preventDefault()
  }
  render () {
    return (
      <div className='wrapper'>
        <PageHeader collapse />
        <section className='section section-banner'>
          <div className='container'>
            <div className='logo'>
              <img src={require('../assets/logo-taro.png')} />
            </div>
            <h1>一款轻量级、模块化的前端 UI 组件库</h1>
            <div className='btn-container'>
              <div className='btn btn-begin'>
                <Link to='/docs/introduction'>开始使用</Link>
              </div>
              <div className='btn btn-github'>
                <a href='https://github.com/NervJS/at-ui-nerv'>Github</a>
              </div>
            </div>
          </div>
          <div className='prototype-screens flex'>
            <div className='prototype prototype-1'>
              <img src={require('../assets/prototype-1.png')} alt='' />
            </div>
            <div className='prototype prototype-2'>
              <img src={require('../assets/prototype-2.png')} alt='' />
            </div>
            <div className='prototype prototype-3'>
              <img src={require('../assets/prototype-3.png')} alt='' />
            </div>
            <div className='prototype prototype-4'>
              <img src={require('../assets/prototype-4.png')} alt='' />
            </div>
          </div>
          <div className='separate-panel' />
        </section>
        <section className='section section-navigation'>
          <div className='container flex flex-around'>
            <div className='navigation-panel'>
              <div className='icon-cnt'>
                <img src={require('../assets/icon-navigation-1.png')} alt='' />
              </div>
              <div className='title'>指南</div>
              <div className='desc'>
                了解设计指南，利用统一的规范进行设计赋能，帮助产品设计师，前端工程师，后台工程师迅速搭建中后台产品。
              </div>
              <div className='btn-readmore'>
                <Link to='/guide'>
                  查看详情 <i className='icon icon-chevron-right' />
                </Link>
              </div>
            </div>
            <div className='navigation-panel'>
              <div className='icon-cnt'>
                <img src={require('../assets/icon-navigation-2.png')} alt='' />
              </div>
              <div className='title'>组件</div>
              <div className='desc'>
                基于 Nerv 的 UI 组件化，可以通过组件的 Demo
                体验交互细节，开发中既可以根据需要单独引用，也可以使用引入所有组件。
              </div>
              <div className='btn-readmore'>
                <Link to='/docs'>
                  查看详情 <i className='icon icon-chevron-right' />
                </Link>
              </div>
            </div>
            <div className='navigation-panel'>
              <div className='icon-cnt'>
                <img src={require('../assets/icon-navigation-3.png')} alt='' />
              </div>
              <div className='title'>资源</div>
              <div className='desc'>
                提供视觉稿原稿下载，产品可直接用 Sketch 工具快速搭建高保真的产品原型稿，减少沟通成本，提升工作效率。
              </div>
              <div className='btn-readmore'>
                <a className='disabled'>
                  查看详情 <i className='icon icon-chevron-right' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Index
