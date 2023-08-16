import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
`

export const Menu = styled.div`
  position: sticky; top: 0;
  width: 100%; height: 2px;
  font-size: 18px;
  background-color:orange;
  color: black;
  display: flex; 
  justify-content: center;
  align-items: center;  
  margin-bottom:80px;
`

export const Items = styled.div`
  display: flex;
 
  width: 80%; margin: 0 auto;

//   @media all and (max-width: 1500px){
//     width: 80%;
//   }
//   @media all and (max-width: 1000px){
//     width: 100%;
//   }
`
export const Image = styled.div`
  height:0px; 
  background-image: url(${props => props.imagepath});
  background-repeat: no-repeat;
  background-size: cover; 
  transition: height 0.3s ease;
//   @media all and (max-width: 500px){
//     background-size: 100% 100%;
//   }
`
export const Item = styled.div`
  
  cursor: pointer;
  width: 21%; height: 500px;
  margin: 2%;
  border-radius: 20px;
  color: white;
  background-color: orange;
  overflow: hidden;
  box-shadow: 0 0 0 2px white, 0 0 0 4px orange;
  &:hover{
    transform: translate(0, -20px);
    ${Image} {
        height: 400px; 
        
    }
  }
//   @media all and (max-width: 800px){
//     width: 46%;
//   }
//   @media all and (max-width: 500px){
//     width: 98%;
//   }
`


export const ColorBox = styled.div`
  height: 250px; 
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
//   @media all and (max-width: 500px){
//     background-size: 100% 100%;
//   }
`