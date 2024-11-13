import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from '..//images/elim_misjon_svart.png'; // Add the logo import

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
        <header className="Header">
          <Navbar className="navbar-expand" container light>
            <NavbarBrand tag={Link} to="/ElimHeddal">
              <img src={logo} alt="Elim Misjonsmenighet" className="logo" /> {/* Add the logo here */}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More Links
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/ElimHeddal">Elim Heddal</Link>
                    <Link className="dropdown-item" to="/ElimMedia">Elim Media</Link>
                    <Link className="dropdown-item" to="/SaligBlanding">Salig Blanding</Link>
                  </div>
                </NavItem>
              </ul>
            </Collapse>
          </Navbar>
        </header>
    );
  }
}