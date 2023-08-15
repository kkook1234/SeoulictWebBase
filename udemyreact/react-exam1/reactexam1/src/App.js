import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeaders'
import Counter from './Counter';
import Container from './Container';

function App() {
  const counterProps={
    a:1,b:2
  }

  return (
    <>
     <Container>
         <div>
            <MyHeader/>
            <Counter {...counterProps}/>
          </div>
      </Container>
    </>
  );
}

export default App;
