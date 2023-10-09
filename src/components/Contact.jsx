import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <>
    <ContactDiv>
      <div className="heading">
        <h1>
          Contact Us
        </h1>
      </div>

      <div className="container">

        <div className="grid grid_two_column">
          <div className="box">
            <FontAwesomeIcon icon={faPhone} />
            <h5>Phone</h5>
            <a href='tel:6367256029'>(+91) 6367256029</a>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faEnvelope} />
            <h5>Email</h5>
            <a href='mailto:rohitdubey1352@gmail.com'>rohitdubey1352@gmail.com</a>
          </div>
        </div>
        <div className="grid grid_two_column">
          <div className="box2">
            <FontAwesomeIcon icon={faLocationPin} />
            <h5>Address</h5>
            <a href='https://www.google.com/maps?ll=28.562484,77.372632&z=14&t=m&hl=en&gl=IN&mapclient=embed&q=Sector+49+Noida,+Uttar+Pradesh'>Sector 49, Noida, India</a>
          </div>
          <div className="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.969498621354!2d77.36233190761544!3d28.56248371124573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f25ac323b5%3A0xd496afa2bb8dd672!2sSector%2049%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696663997669!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

          </div>
        </div>

        <div className="form">
          
          <div className="grid grid_two_column">
            <div className="form_div">
              <h1>Fill the form <br /> to <span>contact us.</span></h1>
              
              <form action="https://formspree.io/f/mqkvgoby" method='POST'>
                <input type="text" name="fullname" placeholder='Full Name' required />
                <input type="number" name="phone" placeholder='Phone Number' required />
                <input type="email" name="email" placeholder='E-mail' required />
                <textarea name="messageform" cols="30" rows="5" placeholder="Write your message here..." required></textarea>

                <button className='btn' type='submit'>Send Message</button>
              
              </form>

            </div>
            <div className="message">
              <h2>Need specific help?</h2>
              <p>If you don't want to contact us for a project, you may download my resume and understand my skills & knowledge.</p>
              <a href="https://drive.google.com/file/d/1mRJM3CgbS46a35YDulQnliijbRc8TjUs/view?usp=sharing" className='resume'>Download Link</a>
            </div>

          </div> 

        </div>

      </div>

    </ContactDiv>
    
    </>
  )
};

const ContactDiv = styled.main`
  padding: 3rem 9rem;

  .grid{
    margin: 4rem 1rem;
  }
  .box:nth-child(1){
    background: #ffedcb;
    svg{
    color: #dfbf06;
    }
  }
  .box:nth-child(2){
    color: #fff;
    background: #232323;
    a{
      color: #fff;
    }
    svg{
      color: #fff;
    }
  }
  .map iframe{
    width: 45vw;
    height: 26rem;
    margin-left: -14rem;
  }
  .box2{
    position: relative;
    width: 22rem;
    height: 26rem;
    color: #fff;
    margin-left: -5rem;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a{
      color: #fff;
    }
  }

  .box{
    position: relative;
    width: 28rem;
    height: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a{
      color: #000;
    }
  }
  svg{
    font-size: 1.6rem;
    margin: 1rem;
  }
  h5{
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 1rem;
  }
  a{
    text-decoration: none;
    margin: 1rem;
    font-weight: 400;
  }

  .form .grid {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    text-align: left;
    padding: 2rem 2.6rem;
  }

  .form_div{
    h1{
      color: #fff;
      font-size: 4rem;
      margin: 2rem 0;
      letter-spacing: 2px;
      span{
        color: wheat;
      }
    }
  }

  form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    input, textarea{
      padding: .89rem .6rem;
      border: none;
      background: transparent;
      border-bottom: .2rem solid #fff;
      color: #fff;
      letter-spacing: 1.4px;
      font-family: Arial, sans-serif;
      ::placeholder{
        color: #fff;
        letter-spacing: 1.6px;
      }
    }
    .btn{
      position: relative;
      cursor: pointer;
      letter-spacing: 2px;
      font-weight: 500;
      width: 50%;
      padding: 1rem;
      background: wheat;
    }
    .btn::after{
      content: '';
      position: absolute;
      bottom: -.5rem;
      right: -.5rem;
      border: 2px solid #fff;
      background: transparent;
      width: 100%;
      height: 3rem;
      z-index: -1;
  }
    
  }

  // ........................................... //
  
  .message{
    position: relative;
    width: 80%;
    color: #fff;
    
    h2, p, a{
      margin: 2rem;
    }
    p{
      letter-spacing: .04rem;
      word-spacing: .14rem;
    }
    a{
      color: wheat;
      padding-bottom: .4rem;
      border-bottom: 2px solid wheat;
    }
  }

  @media screen and (max-width: 646px){
    .heading {
      font-size: .55rem;
    }
    .box{
      width: 22rem;
    }
    .box2{
      width: 22rem;
      margin-left: 0;
    }
    .map iframe{
      width: 90vw;
      margin-left: 0;
    }
    .form .grid {
      text-align: center;
      padding: 1rem 0;
      margin: auto;
    }
    .btn{
      width: 100%!important;
    }
    .form_div h1{
        color: #fff;
        font-size: 2rem;
        margin: 0;
        word-wrap: normal;
    }
    .message{
      width: 20rem;
    }
`;

export default Contact