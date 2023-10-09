import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Hero = ({name, detail, image}) => {
  return (
    <>
        <Wrapper>
            <div className="container grid grid_two_column">
                <div className="section_hero_data">
                    <p className='hero_top_data'>THIS IS ME!</p>
                    <h1 className='hero_heading'>{name}</h1>
                    <p className='hero_para'>
                        {detail}
                    </p>
                    <button className='hireme'>
                        <NavLink to="/contact">HIRE ME!</NavLink>
                    </button>
                </div>
                <div className="section_img">
                    <img src={image} alt="bgImage" />
                </div>
            </div>
        </Wrapper>
    
    </>
  )
}

const Wrapper = styled.section`
@media screen and (max-width: 720px) {
    padding: 1rem;
    .hero_heading{
        font-size: 3.4rem!important;
    }

}
    padding: 6rem 4rem;
    color: #fff;

    .section_hero_data{
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
    }
    .hero_top_data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
    }
    .hero_heading{
        font-size: 6.4rem;
    }
    .hero_para{
        margin: auto;
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 48rem;
    }
    .hireme{
        position: relative;
        font-weight: 600;
        letter-spacing: 2px;
        background: #fff;
        padding: 1rem 2rem;
        border: none;
        max-width: 16rem;
        transition: all ease-in-out 0.3s;
    }
    .hireme::after{
        content: '';
        position: absolute;
        bottom: -.4rem;
        right: -.4rem;
        background: purple;
        width: 100%;
        height: 3rem;
        z-index: -1;
    }
    .section_img{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .section_img img{
        position: relative;
        width: 100%;
        border-radius: .2rem;
        // box-shadow: 14px 14px 12px rgb(225,225,225);
        height: 500px;
    }

`;

export default Hero;