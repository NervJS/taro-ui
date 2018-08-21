import * as Nerv from 'nervjs'
import ChangelogDoc from '@md/changelog.md'
import './index.scss'

class ChangelogView extends Nerv.Component {
  render () {
    return <ChangelogDoc />
  }
}

export default ChangelogView
