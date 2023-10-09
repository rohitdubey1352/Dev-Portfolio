import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <>

    <ErrorPage>
        <div className="errorMessage">
            <img src="../src/assets/Img/error1.png" alt="" />
        
            <NavLink to="/">
                Go Back
            </NavLink>

        </div>
    </ErrorPage>

    </>
  )
}

const ErrorPage = styled.main`
@media screen and (max-width: 646px){
    img{
        width: 100%!important;
        height: auto;
        padding-bottom: 3rem;
    }
}
    .errorMessage{
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;

        img{
            width: 60rem;
            height: auto;
            padding-bottom: 3rem;
        }
        a{
            color: #232323;
            font-weight: 500;
            padding: .6rem 1rem;
            background: #fff;
        }

    }


`;

export default Error;