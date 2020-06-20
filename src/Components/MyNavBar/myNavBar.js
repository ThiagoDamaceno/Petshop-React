import React, { useState } from 'react';

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
  NavbarText
} from 'reactstrap';

const MyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar light expand="md">
      <NavbarBrand>{props.logo}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Produtos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Serviços</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contatos</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default MyNavBar