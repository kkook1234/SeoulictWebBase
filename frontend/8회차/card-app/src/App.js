import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, Menu } from './styledComp'
import Cards from './Cards'
import Detail from './Detail'
import { useSelector } from 'react-redux';

function App() {
  return (
    <Container>
      <BrowserRouter> 
        <Menu>
          <h2>SLAM DUNK</h2>
        </Menu>
        <Routes>
          {useSelector((state) => state.contents).map((content, idx) => {
            return <Route path={content.path} key={idx} element={<Detail content={content.detail} />} />
          })}
          <Route path="/" element={<Cards />} />
        </Routes>
      </BrowserRouter>
      </Container>  
  );
}

export default App;