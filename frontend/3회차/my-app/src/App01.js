import { useState,useEffect } from "react"

//useEffect:생명주기마다의 동작을 관리하는 함수
function App(){
  const [text,setText]=useState("")
  const [number,setNumber]=useState(0)
  
  const onIncrease=()=>{setNumber(number+1)}
  const onDecrease=()=>{setNumber(number-1)}

  useEffect(()=>{
    console.log("의존성 배열이 아예 없으면, 매번 콜백 호출됨")
  })

  return <><input type="text" placeholder='아무 내용' onChange={(e)=>{
    setText(e.target.value)

  }}/>
  <p>{text}</p>
  <h1>{number}</h1>
  <button onClick={onDecrease}>-</button>
  <button onClick={onIncrease}>+</button>
  </>
}

export default App
