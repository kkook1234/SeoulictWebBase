import { styled } from "styled-components";



const ResponsiveBox=styled.div`
    width:100px;
    height:100px;
    background-color:red;

    @media screen and (min-width:600px){
        width:200px;
        height:200px;
        background-color:green;
    }
    @media screen and (min-width:900px){
        width:300px;
        height:300px;
        background-color:blue;
    }
`

function App(){
    return <>
        <ResponsiveBox/>
    </>
}

export default App