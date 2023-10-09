import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <MainHeader className='mainHeader'>
            <NavLink to="/">
              <h1 className='logo'>DEV</h1>
            </NavLink>

          <Navbar />
        </MainHeader>

    </>
  )
}

const MainHeader = styled.header`
  padding: 1rem 4rem;
  height: 6.4rem;
  // border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    color: #fff;
    font-size: 3rem;
    letter-spacing: .6rem;
  }
  


`;

export default Header