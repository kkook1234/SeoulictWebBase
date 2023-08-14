import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

export default function App() {
    const [button,setbutton]=useState(false);
    const [image,setimage]=useState([]);
    const dblock=(e)=>{
        if(button==true){
            e.target.style.display="block"
        }
    }

    function changeimage(){
        
        axios.get("https://dog.ceo/api/breeds/image/random/3").then(result=>{
            setimage(result.data.message)
           
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
    <div>
        <button onClick={()=>{
            setbutton(!button);
            changeimage();
        }}>이미지 가져오기</button>
    </div>
    {/* // w-50: 너비 50% */}
    {button?(
    <Carousel className='w-50' >
      <Carousel.Item>
        {/* d-block=display0:block */}
        <img
          className="d-block w-100"
          src={image[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>첫 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image[1]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>두 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image[2]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>세 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>):(<></>)}</>
  );
}