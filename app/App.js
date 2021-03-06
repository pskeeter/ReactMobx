import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-keeper'

import Home from './module/view/Home'
import Products from './module/view/Products'
import User from './module/view/User'

export class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className='page-group'>
          <Route index path='/home' component={ Home } />
          <Route path='/products' component={ Products } />
          <Route path='/user' component={ User } />
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
