import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import 'at-ui-style'

import Index from './pages/index.jsx'
import Docs from './pages/docs.jsx'
import Guide from './pages/guide.jsx'

class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      visible: false
    }
  }
  componentDidMount() {
    this.setState({
      visible: true
    })
  }

  shouldComponentUpdate() {
    return true
  }

  render() {
    return (
      <div className='wrapper' style={{ backgroundColor: '#F8FAFF' }}>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/docs' component={Docs} />
          <Route path='/guide' component={Guide} />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('container')
)
