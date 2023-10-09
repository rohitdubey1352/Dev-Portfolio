import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
    <Footers>
      <div className="footer">

        <div className="newsletter">
            <div className="contact">
              <h1>
                GET IN TOUCH
              </h1>
              <NavLink to="/contact">
                CONTACT US
              </NavLink>
            </div>

            <div className="subscribe">
              <h3>
                SUBSCRIBE
              </h3>
              <form>
                <input type="email" name="email" placeholder='EMAIL' />
                <button type='submit'>SUBSCRIBE</button>              
              </form>
            </div>
        </div>

        <div className="main_footer">
          <div className="container">
            <div className="grid grid_four_column">
              <div className="info">
                <h1>ABOUT ME</h1>
                <p>
                  I'm Rohit Dubey, a Front-end 
                  Developer, and UI/UX Designer. 
                  I feel I am good at fronend development 
                  because this is something I'm passioante
                  about it.

                </p>
              </div>
              
              <div className="phone">
                <h1>CONTACT DETAILS</h1>
                <div className="anchertag">
                  <NavLink to="tel:6367256029">
                    (+91) 6367256029
                  </NavLink>
                  <br />
                  <NavLink to="mailto:rohitdubey1352@gmail.com">
                  rohitdubey1352@gmail.com
                  </NavLink>
                </div>
              </div>

              <div className="location">
                <h1>LOCATION</h1>
                <NavLink to="#">
                  Sector 49, Noida, India
                </NavLink>
              </div>

              <div className="social">
                <h1>FOLLOW US</h1>

                <div className="socialMedia">
                  <NavLink to="#">
                    <img src="../src/assets/Img/social (1).png" alt="link" />
                  </NavLink>
                  <NavLink to="#">
                    <img src="../src/assets/Img/social (2).png" alt="git" />
                  </NavLink>
                  <NavLink to="https://dribbble.com/rohitdubey1352">
                    <img src="../src/assets/Img/social (3).png" alt="drib" />
                  </NavLink>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </Footers>

    </>
  )
}

const Footers = styled.footer`

@media screen and (max-width: 720px) {
  .footer{
    height: 100%!important;
  }
  .newsletter{
    display: flex;
    height: 100%!important;
    flex-direction: column;
    text-align: center;
    align-items: center!important;
    justify-content: center;
  }
  .main_footer .grid{
    display: flex;
    text-align: center!important;
    align-items: center!important;
  }
  .subscribe{
    padding: 2rem 0 0 0;
    align-items: center!important;
    flex-direction: column;
  }
  input{
    font-size: 14px;
    width: 16rem!important;
  }
  button{
    width: 100%!important;
  }
  .contact h1{
    font-size: 1.2rem!important;
  }
  .contact a{
    padding: .6rem!important;
    font-size: .5rem!important;
  }
}

  .footer{
    position: relative;
    width: 100%;
    height: 40vh;
    margin: 8rem 0 0 0;
    padding: .6rem;
    background: #232323;  
  }
  
  .main_footer{
    color: #fff;
    a{
      color: #fff;
    }
    .phone .anchertag{
      display: flex;
      flex-direction: column; 
    }
    h1{
      color: wheat;
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin: .6rem 0;
    }
    
  }
  
  .newsletter{
    position: relative;
    width: 90%;
    height: 30vh;
    background: #41295a;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2F0743, #41295a);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 2rem;
    margin: auto;
    margin-top: -8.5rem;
    border-radius: 2rem 0 2rem 0;
    display: flex;
    justify-content: space-around;

    .subscribe{
      position: relative;
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      form{
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        input{
          font-weight: 500;
          text-transform: uppercase;
          font-size: 14px;
          width: 24rem;
          padding: .6rem 1rem;
          letter-spacing: 5px;
          line-height: 1.8em;
          margin: .4rem 0;
        }
        button{
          width: 50%;
          color: #41295a;
          letter-spacing: 5px;
          font-size: 14px;
          font-weight: 500;
          background-color: wheat;
          padding: 1rem 2rem;
        }
      }
      h3{
        color: #fff;
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 4px;
        line-height: 1.3em;
      }
    }

    .contact{
      text-align: left;
      a,h1{
        margin: 1rem 0;
      }
      a{
        color: #41295a;
        letter-spacing: 5px;
        font-size: 14px;
        font-weight: 700;
        background-color: wheat;
        padding: 1.2rem 2rem;
      }
      h1{
        color: #fff;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 3.4rem;
        letter-spacing: 2px;
        line-height: 1.3em;
      }
    }
  }
   

}

`;

export default Footer