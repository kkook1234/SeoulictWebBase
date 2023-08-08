/*
jsx는 자바스크립트를 이용해서 웹 콘텐츠를 보다 명시적으로 표현하는 방법이다!
일반적인 형태는 자바스크립트 함수가 태그를 리턴하는 형태이다.

함수형 컴포넌트 이름의 첫 글자를 대문자로 해야!
*/

function App(){
    const element=<div>안녕하세요!</div>;

    return element;
}

//이 리액트 컴포넌트를 가져다 쓰세요!
export default App;