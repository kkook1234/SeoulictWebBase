//함수형 컴포넌트에 매개변수를 적용하면, 이는 속성을 받겠다는 의미
function Food(props){
    return <h1 onClick={()=>{props.handleClick([props.food])}} 
        style={{color:props.color}}>
        {props.food}
        </h1>
}
function App(){
    return<>
            <Food food="콩국수" color="red" handleClick={(food)=>{alert(`맛있는 ${food}`)}}/>
            <Food food="냉면" color="blue" handleClick={(food)=>{alert(`맛있는 ${food}`)}}/>
            <Food food="막국수" color="yellow" handleClick={(food)=>{alert(`맛있는 ${food}`)}}/>
            <Food food="메밀소바" color="green" handleClick={(food)=>{alert(`맛있는 ${food}`)}}/>
        </>
}

export default App