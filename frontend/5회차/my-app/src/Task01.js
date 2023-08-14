import React, { useEffect, useState } from 'react';
import axios from 'axios'



export default function App(){
    const [image,setImage]=useState([])
    const [count,setCount]=useState(0)

    function changeimage(){
        
        axios.get("https://dog.ceo/api/breeds/image/random/"+count).then(result=>{
            setImage(result.data.message)
        })
        .catch(err=>console.log(err))
    }
    
    return <>
    <input type="number" placeholder="숫자 입력" step="1" onChange={e => setCount(e.target.value)} />
    <button onClick={()=>{
        changeimage()
    }}> 사진 변경하기 </button><br />
    
    {image.map((item,index)=>{
        return <img src={item} alt="랜덤 강아지 이미지" width="500" height="500" key={index}/>
    })}
    
    </>
}