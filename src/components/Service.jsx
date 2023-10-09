import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Service = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("../src/API.json");
          const data = await response.json();
          setUsers(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>  
    <Section>
        <div className="container">
          <div className="heading">
            <h1>Our Services</h1>
          </div>
          <div className="grid grid_three_column">
            {users.map(user => (
              <>
                <div className="box" key={user.id}>
                  <h2 className="title">
                    {user.title}
                  </h2>
                  <img src={user.image} alt="api_1" />
                  <p className='desctiption'>
                    {user.description}  
                  </p>

                  <NavLink to="https://www.linkedin.com/in/rohit-dubey-7743a81a3/">
                    <button className="btn">Read More</button>
                  </NavLink>


                </div>
              </>

            ))}
            
          </div>
        </div>
    </Section>
    </>
  )
}

const Section = styled.main`
  position: relative;
  padding: 3.6rem;
  
  .grid{
    margin-top: 3rem;
  }
  .box{
    position: relative;
    width: 20rem;
    padding: 1rem;
    height: auto;
    border-radius: .8rem;
    background: #fff;
    .title{
      font-size: 20px;
      line-height: 32px;
      font-weight: 500;
      letter-spacing: 1px;
      word-break break-word;
    }
    img{
      width: 100%;
      height: auto;
    }
    .desctiption{
      font-size: 14px;
      letter-spacing: .8px;
      color: rgb(15,17,17);
      font-family: Arial, sans-serif;
      line-height: 20px;
    }
    .btn{
      padding: .8rem 1.6rem;
      margin: 1rem 0 .1rem 0;
      border-radius: 8px;
      border-color: #FCD200;
      border-style: solid;
      cursor: pointer;
      text-align: center;
      background: #FFD814;
      box-shadow: 0 2px 5px 0 rgba(213,217,217,.5);
    }
  }
`
export default Service