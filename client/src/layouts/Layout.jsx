import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Login from '../screens/Login'

export default function Layout(props) {
  const [loginModal, setLoginModal] = useState(false)
  const { currentUser, handleLogout } = props

  function toggleNav() {
    setLoginModal(prevState => !prevState)
  }

  return (
    <div className='layout-container'>
      <header>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/personalfinance'>Personal Finance</Link></li>
          <li><Link to='/newsevents'>News Events</Link></li>
          <li><Link to='/covidimpact'>COVID Impact</Link></li>
          <li><Link to='/financecalc'>Finance Calculator</Link></li>
          <li><div>
            <div onClick={toggleNav} className='login-modal-container'>{
              loginModal === true ?
                <Login handleLogin={props.handleLogin} handleRegister={props.handleRegister} /> : 'close modal'
            } </div>
          </div></li>
        </ul>
      </header>
      {props.children}
    </div>
  )
}
