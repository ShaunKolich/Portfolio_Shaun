import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { Row, Col } from 'fluid-react';

const HeaderDiv = styled.div`
width:100%;
height:50px;
// border:2px solid red;
background-color:black;
display:flex;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

ul{
  display:flex;  
  justify-content:space-between;
  align-items:center;
  height:50px;
  width:100%;
  // border:2px solid white;
}

li{
  list-style:none;
  color:white;
  // padding-bottom:10px;
}

.nav{
  color:white;
  list-style:none;
  font-size:2.8vh;
}

.nav:hover{
  border-bottom: 1px solid white;
}

`;

const Logo = styled.div `
color:white;
// border:2px solid white;
width:100%;

h1{
  display:flex;
  justify-content:center;
  font-size:5vh;
  width:100%;
  // border:2px solid white;
}


`;

function App() {
  return (
    <div>
     <Row>
      <HeaderDiv>
          
            <Col xs ='6'>
              <nav>
                  <ul>
                    <li><Link to = "/" className= "nav">Home</Link></li>
                    <li><Link to = "/Portfolio" className= "nav">Portfolio</Link></li>
                    <li><Link to = "/AboutUs" className= "nav">About Us</Link></li>
                    <li><Link to = "/Contact" className= "nav">Contact</Link></li>
                  </ul>

              </nav>
          </Col>
          <Logo>
                <Col>
                  
                      <h1>Shaun Kolich</h1>
                  
                </Col>
                </Logo>
         
      </HeaderDiv>
      </Row>




    




    </div>  
  );
}

export default App;
