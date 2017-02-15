import React from 'react';
import {Link} from 'react-router';

const sessionLinks = () => (
  <nav className="login-links">
    <ul>
      <li><Link to='/login' activeClassName="current">Login</Link></li>
      <li><Link to='/signup' activeClassName="current">SignUp</Link></li>
    </ul>

  </nav>
)

const welcomeMessage = (currentUser, logout) => (
  <header>
    <h3>Welcome {currentUser.username}</h3>
    <button onClick={logout}>Logout</button>
  </header>

)

const Greeting = ({currentUser, logout}) => (
  currentUser ? welcomeMessage(currentUser, logout) : sessionLinks()
)

export default Greeting;
