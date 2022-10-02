import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavbarProps,
} from "reactstrap";
import "./style_nav.css";
import logo from "../../assets/logo.png";
function NavBar(
  args: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Navbar> &
    Readonly<NavbarProps>
) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fix">
      <Navbar {...args} expand dark fixed="true" color="black">
        <NavbarBrand href="/" className="logo">
          <img
            alt="LOGO   "
            src={logo}
            style={{
              height: 40,
              width: 40,
            }}
          />
          Koala_GUID
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/" className="home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="about">
                About Us
              </NavLink>
            </NavItem>
          </Nav>
          <NavItem className="login">
            <NavLink href="/">Login</NavLink>
          </NavItem>
          <NavItem className="signup">
            <NavLink href="/">Signup</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
