import * as Nerv from 'nervjs'

import ICONS from './icons.js'
import './style.scss'

class IconList extends Nerv.Component {
  render () {
    const { type = 'main' } = this.props
    const iconlist = ICONS[type]

    return (
      <ul class="at-iconlist row">
        {iconlist.map((icon, index) => (
          <li class="at-iconlist__item col-sm-6 col-md-4 col-lg-3 flex flex-middle flex-center">
            <div class="">
              <i class={`at-icon at-icon-${icon}`}></i>
              <p>{icon}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default IconList
