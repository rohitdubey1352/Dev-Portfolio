import React from 'react'
import Hero from './Hero'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import styled from 'styled-components'


const Home = () => {

  const data = {
    name: "Rohit Dubey",
    detail: "I'm Rohit Dubey, a Front-end Developer, and UI/UX Designer. I feel I am good at fronend development because this is something I'm passioante about it.",
    image: "../src/assets/Img/bg2re.png",
  };

  return (
    <>
      <Section>
        <div className="home">
          <Hero {...data}/>

        <About />
        <Service />
        <Contact />


        </div>
      </Section>

    </>
  )
}

const Section = styled.main`
  
`

export default Home