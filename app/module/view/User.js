import React from 'react'
import Nav from './Nav'

import {observer} from 'mobx-react'
import ObservableTodoStore from '../model/index'

@observer
export default class Users extends React.Component {

  // constructor(props){
  //   super(props)
  //   console.log(props)
  // }

  render() {
    console.log(this)
    return (
      <div className='page page-current'>

        <header className='bar bar-nav'>
          <h1 className='title'>个人</h1>
        </header>

        <Nav item={ 2 }/>

        <div className='content'>
          <h1 style={{ textAlign: 'center' }}>个人</h1>
        </div>
      </div>
    )
  }
}
