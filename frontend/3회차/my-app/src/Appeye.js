import React from 'react';
import styled, { keyframes } from 'styled-components';
import attention from './attention.jpg'
import sands from './샌즈.png'
const Container=styled.div`
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const Box = styled.div`
    width:1500px;
    
`;
const Eyes = styled.div`
  display: flex;
  justify-content: center;
`;
const lefteye= keyframes`
  0%{
    background-color:blue;
  }
  25%{
    background-color:pink;
  }
  50%{
  
    background-color:orange;
  }
  75%{
    background-color:green;
  }
  100%{
    background-color:white;
  }
`
const righteye = keyframes`
  0%{
    background-color:red;
  }
  25%{
    background-color:orange;
  }
  50%{
    background-color:pink;
  }
  75%{
    background-color:yellow;
  }
  100%{
    background-color:black;
  }
`

const LeftEye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;

`;
const RightEye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;

`;

const leftmoving = keyframes`
  0%{
    top: 20%;
    left: 10%;
    background-color:red;
  }
  25%{
    top: 60%;
    left: 70%;
    background-color:orange;
  }
  50%{
    top: 20%;
    left: 70%;
    background-color:pink;
  }
  75%{
    top: 60%;
    left: 10%;
    background-color:yellow;
  }
  100%{
    top: 20%;
    left: 10%;
    background-color:black;
  }
`
const rightmoving = keyframes`
  0%{
    top: 20%;
    left: 70%;
    background-color:blue;
  }
  25%{
    top: 60%;
    left: 10%;
    background-color:pink;
  }
  50%{
    top: 20%;
    left: 10%;
    background-color:orange;
  }
  75%{
    top: 60%;
    left: 70%;
    background-color:green;
  }
  100%{
    top: 20%;
    left: 70%;
    background-color:white;
  }
`
const LeftBall = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
 
`
const RightBall = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
  
`
const Image = styled.img`
  width: 500px;
  height: 500px;
  
`




function App() {

  return <>
    <Container>
        <Box>
        <Eyes>
            <LeftEye>
                <LeftBall />
            </LeftEye>
            <RightEye>
                <RightBall />
            </RightEye>
        </Eyes>
        
        </Box>
    </Container>
    
    </>
  
}

export default App