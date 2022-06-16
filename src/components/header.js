import 'bootstrap/dist/css/bootstrap.min.css'
import DateTime from '../components/Datatime';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import React, {useState} from "react";

export default function Header() {

    const [expanded, setExpanded] = useState("")
    return (
      <header>
          <Navbar  bg="white"  className="justify-content-between">
              <div className='left-nav bg-blue'>
                  <Navbar.Brand className='text-white' href="/">тест</Navbar.Brand>
                  <div className='text-light'>{DateTime}</div>
              </div>
              <ul>
                  <Nav.Item as='li'><NavLink className='text-dark' onClick={() => setExpanded(false)} to='/'>
                      <img src={require('../images/user.svg').default} alt="user-profile logo"/>
                  </NavLink></Nav.Item>
                  <Nav.Item as='li'><NavLink className='text-dark' onClick={() => setExpanded(false)} to='/Cars'><img
                      src={require('../images/logout-logo.svg').default}
                      alt="logout logo"/></NavLink>
                  </Nav.Item>
              </ul>
          </Navbar>
      </header>
    )
}