import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Main from './Main'

const App = () => {
  const state = {
    user: [
      {
        contact1: 'Alex',
        messages: ['msg1', 'msg2', 'msg3']
      },
      {
        contact2: 'john',
        messages: ['msg1', 'msg2', 'msg3']
      }
    ]
  }
  return (
    <div className='App'>
      <Sidebar />
      <Main />
    </div>
  )
}
export default App
