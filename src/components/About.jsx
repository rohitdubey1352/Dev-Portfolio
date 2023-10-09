import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'

const About = () => {

  const data = {
    name: "Front-End Developer",
    detail: "I'm a Front-end Developer, and UI/UX Designer. I feel I am good at fronend development because this is something I'm passioante about it.",
    image: "../src/assets/Img/bg4.jpeg",
  };

  return (
    <>
      
    <AboutUs>

      <div className="aboutUs">
        <div className="heading">
          <h1>About Us</h1>
        </div>
      </div>

      <Hero {...data}/>

      <div className="container">
        <div className="grid grid_two_column">
          <div className="img_grp">
            <img  className='img1' src="../src/assets/Img/profile.jpg" alt="" />
            <img className='img2' src="../src/assets/Img/profile2.jpg" alt="" />
          </div>
          <div className="content_grp">
            <h2>About Me!</h2>
            <p>
            I am a Self-thought Web
            Developer with significant
            experience in building Creative
            Websites, based on design
            requirements and client needs. I
            also manage a team of
            Developers. 
            </p>
            <br />
            <p>
            Front-End Web Developer with 6+
            months of experience in the Front-
            end Developer with UI/UX Designer
            industry. Extensive experience with
            services that delight users,
            audiences and achieve business
            goals.
            </p>
          </div>
        </div>

      </div>

    </AboutUs>

    </>
  )
};

const AboutUs = styled.main`
  .aboutUs{
    position: relative;
    width: 100%;
    height: auto;
    padding: 3rem 5rem 0 5rem;
  }
  .content_grp{
    color: #fff;
    text-align: left;
    margin-top: -16rem;
    max-width: 32rem;
    padding: 0 2rem;
    h2{
      // margin: auto;
      width: 35%;
      border-bottom: 2px solid #fff;
      margin-bottom: 2rem;
    }
  }
  .img_grp{
    position: relative;
    width: 100%;
    height: 70vh;
    margin: 10rem 0;

    img{
      position: absolute;
      width: 325px;
      height: 450px;
      border-top-right-radius: 2rem;
      border-bottom-left-radius: 2rem;
    }
    .img1{
      position: relative;
      left: 5rem;
    }
    .img2{
      position: relative;
      top: 4rem;
      left: 3rem;
    }
    
  }
@media screen and (max-width: 720px) {
  img{
    display: none;
  }
  .img_grp{
    margin: -6rem 0;
  }

}
 
`;

export default About;