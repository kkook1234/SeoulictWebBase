import styled from "styled-components";
//파일에서 자바스크립트 객체 여러개를 내보내고 싶은 경우 익스포트문
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ADB0D9;
`
export const Box = styled.div`
width:1000px;
height:1000px;
background-color:#F2E4ED;
box-shadow: 5px 5px 5px;

`
export const Formbox = styled.div`
  width: 100%;
  height:10%;
  min-width: 500px;
  display: flex;
  justify-content:center;
  align-items:center;
`
export const Form = styled.form`
    height:50px;
  min-width: 500px;
  display: flex;
  justify-content:center;
`
export const InputText = styled.input`
   width:100%;
   outline:'none';
   border-radius:10px;
   border:none;
   padding-left:30px;
   
`
export const InputSubmit = styled.input`
width:10%;
outline:'none';
border-radius:10px;
border:none;
margin-left:10px;
background-color:#ADB0D9;

`
export const Line = styled.div`
  width: 100%;
  height:85%;
  display: flex;
  justify-content:center;  
  
`
export const Dobox = styled.div`
width:900px;
height:150px;
display: flex;
color:black;

`


export const Listbox = styled.ul`
width:90%;
height:100%;
 background-color:white;
 -webkit-padding-start: 0px; 
 margin-top:0;  
 padding-top:50px; 
 padding-bottom:10px;
 border-radius:10px;
 
`
export const Datebox = styled.div`
width: 150px;
height:100px;
margin:20px;

border-radius:20px;
padding-top:30px;
text-align:center;
`
 export const ListItem = styled.div`
  width: 680px;
  height:100px;
  margin:20px;
  
  border-radius:20px;
  padding-top:30px;
  padding-left:30px;
  display:flex;
  
 `
 export const Spando = styled.div`
    width:600px;
    
`
 export const Spanx = styled.div`
    width:20px;
    
   
`