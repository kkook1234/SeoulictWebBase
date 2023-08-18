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
export const Video = styled.div`
  width:100%; 
  height:500px;
  display:flex;
  justify-content:center;
  align-items:center


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
`



export const Detailbox = styled.div`
  width:50%;
  height:500px;
  padding-top:20; 
  color: black;
  border: 1px solid orange;
  border-radius:20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  background-color:white;
 
`
export const Backbutton = styled.button`
margin-top:10px;
margin-left:10px;
width:100px;
height:30px;
border:none;
background-color:white;
color:orange;
font-size:20px;


`
export const DetailImage = styled.div`

background-image: url(${props => props.imagepath});
width:300px;
height:450px;
background-repeat: no-repeat;
background-size: contain;
`
export const DetailContent = styled.div`
margin-left:50px;
width:500px;
height:450px;
font-size:20px;

`
