import { useState } from "react"
import "./App06.css"

function App(){
    const [lottoNumbers,setLottoNumbers]=useState([])
    const today= new Date();
    const year=today.getFullYear()
    const month=today.getMonth()+1
    const date=today.getDate()
    const now=`${year}년 ${month}월 ${date}일 `

    return<div className='container'>
        <div className='lotto'>
            <h3><span>{now}</span>로또 번호 추첨</h3>
            <div className='numbers'>
                {/*map을 이용한 컴포넌트 렌더링 시에는, 개별 요소에 key 속성을 추가한다.*/}
                {lottoNumbers.map((num,idx)=>{
                    return <div className='eachnum' key={idx}>{num}</div>
                })}
            </div>
            <button onClick={()=>{
                const temp=[]
                while(temp.length<6){
                    let ran= Math.floor(Math.random()*45)+1
                    if(temp.indexOf(ran)===-1){
                        temp.push(ran)
                    }
                }
                setLottoNumbers(temp)
            }}>추첨</button>
            <button onClick={()=>{
                setLottoNumbers([])
            }}>다시</button>
        </div>
    </div>
}

export default App