import React from "react"
import styled from 'styled-components'

const Circle=styled.div`
    width:250px;
    height:250px;
    background-color:${(props)=>props.bgColor?props.bgColor:"red"};
    border-radius:50%;
`
const Bar=styled.div`
    margin-left:110px;
    width:30px;
    height:250px;
    background-color:brown;
   
`


function App(){
    return <>
        <Circle bgColor="orange"/>
        <Circle bgColor="pink"/>
        <Circle bgColor="purple"/>
        <Circle />
        <Bar/>
    </>
}

export default App