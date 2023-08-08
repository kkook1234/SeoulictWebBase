//<></>리액트 프레그먼트 그저 감싸는 목적의 태그
const App=()=>{  
    const content="JSX" 
    /*속성명은 그냥 쓰면 되나, 속성값은 자바스크립트 타입으로 써야 한다.
    속성명 표현시, -기호는 사용 불가하다. 자바스크립트에서 마이너스 연산으로 인식
    */ 
    const style={
        color:'tomato',
        fontsize:'18px',
    }
    return <>
                {/*주석..되나?*/}
                <h1>처음 만나는 JSX</h1>
                <p style={style} className="text">새로운 문법이지만, 마냥 낯설지만은 않은 {content}</p>
           </>
}

export default App