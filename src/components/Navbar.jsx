import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
        <Nav>
            <div className="menuIcon">
                <ul className="navbar_list">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    </>
    
  )
};

const Nav = styled.nav`
    .navbar_list{
        display: flex;
        gap: 2.8rem;
    }
    li{
        // margin: 0 .6rem;
        font-weight: 500;
        letter-spacing: .12rem;
        a{
            color: #fff;
        }
    }
    

`;

export default Navbar;