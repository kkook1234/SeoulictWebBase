import React,{useState} from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import { Container, Menu,Video } from './styledComp'
import Cards from './Cards'
import Detail from './Detail'
import { useSelector } from 'react-redux';

function ConditionalContent() {
  const contents = useSelector((state) => state.contents);

  return (
    <Routes>
      {contents.map((content, idx) => (
        <Route
          path={content.path}
          key={idx}
          element={<Detail content={content} />}
        />
      ))}
      <Route path="/" element={<Cards />} />
    </Routes>
    
  );
}

function App() {
  const [isVideoDisplayed, setVideoDisplay] = useState(true);

  const handleVideoToggle = () => {
    setVideoDisplay(!isVideoDisplayed);
  };
  return (
    <Container>
      <BrowserRouter> 
        <Menu>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h2 style={{paddingBottom:'3px'}}>SLAM DUNK</h2>
          </Link>
        </Menu>
        {isVideoDisplayed?(
          <>
        <Video>
        <iframe width="50%" height="500" src="https://www.youtube.com/embed/cGNUpsevAk4?autoplay=1&mute=1"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Video>
        <div style={{display:'flex',justifyContent:'end'}}><button onClick={handleVideoToggle} style={{marginTop:'20px',width:'250px',height:'50px',border:'none',background:'none',color:'orange',fontSize:'30px',cursor:'pointer'}}>{'카드 보러가기>>'}</button></div>
        </>
        ):(
          <>
          <ConditionalContent /> 
          <div style={{display:'flex',justifyContent:'end'}}><button onClick={handleVideoToggle} style={{marginTop:'20px',width:'250px',height:'50px',border:'none',background:'none',color:'orange',fontSize:'30px',cursor:'pointer'}}>{'영상 보러가기>>'}</button></div></>
        )}
      </BrowserRouter>
      </Container>  
  );
}

export default App;