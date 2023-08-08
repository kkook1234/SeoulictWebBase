import { useState } from "react"
import "./App07.css"
import choonsik from './춘식이.png'
function App(){
    const today=new Date()
    const year=today.getFullYear()
    let month=today.getMonth()+1
    let date=today.getDate()
    month=month<10?`0${month}`:month
    date=date<10?`0${date}`:date
    const now=`${year}년 ${month}월 ${date}일 `
    const [numbers,setnum]=useState([])
    const colorlist= ['orange', 'skyblue', 'red', 'purple', 'green']
    return <><div className="box"><div className="container">
         <div className="day-container">
            <h3><span>{now}</span>로또 번호 추첨</h3>
        </div>
         <div className="num-container">
            {numbers.map((num,idx)=>{
                const colornum=Math.floor(num/10)
                const color=colorlist[colornum]
                const style={backgroundColor:color}
                return <div className="num" style={style} key={idx}>{num}</div>
            })}
         </div>
         <div className="botton-container">
            <div className="button1-box">
            <button className="button1" onClick={()=>{

                const checkempty=document.querySelectorAll(".num").length

                const temp=[]
                while(temp.length<6){
                    let rannum=Math.floor(Math.random()*45+1)
                    console.log(rannum);
                    if(temp.indexOf(rannum)===-1){
                        temp.push(rannum)
                    }
                }
                if(checkempty===0){
                    setnum(temp)
                   console.log("----------");
                }
            }}>추첨</button></div>
            <div className="button2-box">
            <button className="button2" onClick={()=>{
                setnum([])
            }}>다시</button></div>
           
           
        </div> <div className="image-container"><img className="image" src={choonsik}></img></div>
    </div>
    </div>
   
    </>


}

export default App