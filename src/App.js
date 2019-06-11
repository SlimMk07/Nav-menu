import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink,Route, } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar id='mynavbar' className="fixed-top container" color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto nav-links" navbar>
              <NavItem className='item'>
                
                  <NavLink activeStyle={{color:'red'}} style={{textDecoration:'none',color:'Gray'}} to="/home">Home</NavLink>
                
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                  <NavLink activeStyle={{color:'red'}} style={{textDecoration:'none',color:'Gray'}}to="/services">Services</NavLink>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                    <NavLink activeStyle={{color:'red'}} style={{textDecoration:'none',color:'Gray'}}to="/services/entrepreneurs">For entrepreneurs</NavLink>
                  </DropdownItem>
                  <DropdownItem >
                    <NavLink activeStyle={{color:'red'}} style={{textDecoration:'none',color:'Gray'}}to="/services/students">For students</NavLink>
                  </DropdownItem>
                  <DropdownItem >
                    <NavLink activeStyle={{color:'red'}} style={{textDecoration:'none',color:'Gray'}}to="/services/hobbyiests">For hobbyiests</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className='item'>
                
                  <NavLink activeStyle={{color:'red'}} style={{textDecoration:'none',color:'Gray'}}to="/contact">Contact us</NavLink>
               
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className='container affichage'>
          <Route exact path="/home" render={() => <h1>Home Page</h1>} />
          <Route exact path="/services" />
          <Route path="/contact" render={() => <h1>Contact us here: expl@expl.com</h1>} />
          <Route path="/services/entrepreneurs" render={() => <h2> Entrepreneurs page</h2>} />
          <Route path="/services/students" render={() => <h2>Students page</h2>} />
          <Route path="/services/hobbyiests" render={() => <h2> Hobbyiests page</h2>} />
        </div>
      </div>
    );
  }
}
