import { Component } from 'nervjs'
import './app.scss'

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}

App.propTypes = {

}

export default App
// Taro.render(<App />, document.getElementById('app'))
