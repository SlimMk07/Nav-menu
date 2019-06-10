import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
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
                <NavLink href="#">
                  <Link to="/home">HOME</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                  <Link to="/services">Services</Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                    <Link to="/services/entrepreneurs">For entrepreneurs</Link>
                  </DropdownItem>
                  <DropdownItem >
                    <Link to="/services/students">For students</Link>
                  </DropdownItem>
                  <DropdownItem >
                    <Link to="/services/hobbyiests">For hobbyiests</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className='item'>
                <NavLink href="#">
                  <Link to="/contact">Contact us</Link>
                </NavLink>
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
