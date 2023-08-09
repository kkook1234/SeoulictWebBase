import { useState,useEffect } from "react"

function App(){
    const [day,setday]=useState("")
    const [time,settime]=useState("")
    useEffect(()=>{
    setInterval(()=>{
    let today=new Date();
    let year=today.getFullYear();
    let month=today.getMonth()+1;
    let date=today.getDate();
    let hour=today.getHours();
    let minute=today.getMinutes();
    let second=today.getSeconds();

    hour=hour<10?`0${hour}`:hour;
    minute=minute<10?`0${minute}`:minute;
    second=second<10?`0${second}`:second;
    setday(`${year}년 ${month}월 ${date}일`)
    settime(`${hour}:${minute}:${second}`)
    },1000);
},[])

    return <>
    <div>
        <div>{day}</div>
        <div>{time}</div>
    </div>
    </>
}

export default App