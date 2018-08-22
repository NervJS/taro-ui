import * as Nerv from 'nervjs'
import { Route, Redirect, Switch } from 'react-router-dom'
import PageHeader from '../components/header'
import Sidebar from '../components/sidebar'

import navsConfig from '../nav.config.yml'
import '../assets/style/docs.scss'

class Docs extends Nerv.Component {
  render () {
    const data = navsConfig['components']

    return (
      <div className='app' id='app'>
        <PageHeader collapse style={{ 'background': '#25252b' }} />
        <div className='at-container row'>
          <div className='at-sidebar col-sm-24 col-md-6 col-lg-4'>
            <Sidebar data={data} />
          </div>
          <div className='at-markdown col-sm-24 col-md-18 col-lg-20'>
            <Switch>
              {data.map(item => {
                if (item.items) {
                  return item.items.map(item => {
                    return (
                      <Route
                        path={`/docs/${item.name.toLowerCase()}`}
                        component={require(`../view/${item.name}`).default}
                      />
                    )
                  })
                }
                if (item.groups) {
                  return item.groups.map(item => {
                    return item.items.map(item => {
                      return (
                        <Route
                          path={`/docs/${item.name.toLowerCase()}`}
                          component={require(`../view/${item.name}`).default}
                        />
                      )
                    })
                  })
                }
              })}
              <Redirect path='/docs/' to={{pathname: '/docs/introduction'}} />
            </Switch>
          </div>
        </div>
        <div class="demo-frame">
          <iframe src='https://aotu.io' frameborder="0"></iframe>
        </div>
      </div>
    )
  }
}

export default Docs
