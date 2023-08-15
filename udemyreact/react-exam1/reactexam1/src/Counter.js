import React,{useState} from 'react';
import OddEvenResult from './OddEvenResult';

const Counter=({initialValue})=>{
    
    const [count,setCount]=useState(initialValue);//상태변수 추가,setCount로 카운트 값을 변경가능

    const onIncrease=()=>{{{
        setCount(count+1);//클릭 시 카운트 1증가
    }}}
    const onDecrease=()=>{{{//클릭 시 카운트 1감소
        setCount(count-1);
    }}}
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
            <OddEvenResult count={count}/>
        </div>
    )
}
Counter.defaultProps={initialValue:0}
export default Counter