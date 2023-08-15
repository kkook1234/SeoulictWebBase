import React,{useEffect,useState} from "react";

const UnmoutTest=()=>{
    useEffect(()=>{
        console.log("Mount!");
        
        return()=>{
            console.log("Unmount!")
        }
    },[])
    return <div>unmount Testing Component</div>
}

const Lifecycle=()=>{
   const [isVisible,setIsVisible]=useState(false);
   const toggle=()=>setIsVisible(!isVisible);

    return <div style={{padding:20}}>
       <button onClick={toggle}>on/off</button>
       {isVisible&&<UnmoutTest/>}
    </div>
}

export default Lifecycle;