import * as Nerv from 'nervjs'
import classnames from 'classnames'
import { Link, NavLink, withRouter } from 'react-router-dom'
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
    const { collapse } = this.props
    const { toggle } = this.state
    return (
      <header
        className={classnames('page-header', { collapse })}
        id='J-page-header'
      >
        <div className='nav-container'>
          <div className='nav-left'>
            <div className='logo'>
              <Link to='/'>
                <img className='logo-img' src={require('../../assets/logo-taro.png')} />
                <span>Taro UIKIT</span>
              </Link>
            </div>
            <i className='icon icon-menu nav-icon' onClick={this.toggleMenu} />
          </div>
          <div
            className='nav-right'
            style={{ height: toggle ? '0px' : 'auto' }}
          >
            <ul className='navbar'>
              <li>
                <NavLink activeClassName='router-link-active' to='/guide'>指南</NavLink>
              </li>
              <li>
                <NavLink activeClassName='router-link-active' to='/docs'>组件</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(PageHeader)
