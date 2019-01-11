import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class CustomNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <NavbarBrand href="/" >Alec Levin</NavbarBrand>
                    
                    <Nav className="NavbarItems">
                        <NavItem>
                            <NavLink href="/academics">Academics</NavLink>
                        </NavItem>
                       
                        <NavItem>
                            <NavLink href="/experience">Experience</NavLink>
                        </NavItem>
                    </Nav>

                    <Nav>
                    <NavItem>Contact & More</NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default CustomNavBar;
