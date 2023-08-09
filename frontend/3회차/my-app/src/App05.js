import styled,{keyframes} from 'styled-components'

//태그드 템플릿 리터럴, 반드시 이름이 있어야 함 그래야 요소에 매핑가능
const boxFade=keyframes`
    0%{
        opacity:1;
    }
    50%{opacity:0;}
    100%{
        opacity:1;
    }
`

const AnimatedBox=styled.div`
    width:300px;
    height:300px;
    background: tomato; 
    animation:${boxFade} 2s 5s infinite ease-out alternate;   //키프레임, 듀레이션, 딜레이, 반복여부, 속도특성, 진행방향
`

function App(){
    return <AnimatedBox/>
}

export default App