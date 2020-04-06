import * as Nerv from 'nervjs'
import classnames from 'classnames'
import { Link, NavLink, withRouter } from 'react-router-dom'
import taroUILogo from '../../assets/logo-taro.png'
import './style.scss'

class PageHeader extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      toggle: true
    }
  }
  toggleMenu = () => {
    const _toggle = this.state.toggle
    this.setState({
      toggle: !_toggle
    })
  }
  goToGuide (e) {
    e.preventDefault()
  }
  goToSource (e) {
    e.preventDefault()
  }

  render () {
    const { collapse, style } = this.props
    const { toggle } = this.state
    return (
      <header
        className={classnames('page-header', { collapse })}
        style={style}
        id='J-page-header'
      >
        <div className='nav-container'>
          <div className='nav-left'>
            <div className='logo'>
              <Link to='/'>
                <img className='logo-img' src={taroUILogo} />
                <span>Taro UI</span>
              </Link>
            </div>
            <i className='icon icon-menu nav-icon' onClick={this.toggleMenu} />
          </div>
          <div
            className='nav-right'
            style={{ height: toggle ? '0px' : '100px' }}
          >
            <ul className='navbar'>
              <li>
                <NavLink activeClassName='router-link-active' to='/docs/introduction'>组件</NavLink>
              </li>
              <li>
                <NavLink activeClassName='router-link-active' to='/docs/resource'>设计资源</NavLink>
              </li>
              <li>
                <a href='https://nervjs.github.io/taro-ui-theme-preview/' target='__blank'>主题生成器</a>
              </li>
              <li>
                <a href='https://aotu.io/' target='__blank'>关于我们</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(PageHeader)
