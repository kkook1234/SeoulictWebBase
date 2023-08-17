import React from 'react'
import { useNavigate } from 'react-router-dom';//useNavigate:컴포넌트 이동 기록을 다루는 함수
import { Detailbox,DetailImage,DetailContent,Backbutton } from './styledComp';

//속성으로 전달된 content 값을 받아서 화면 구성하기
const Detail = (props) =>{
  const navigate = useNavigate();
  return(
  <div style={{display:'flex',justifyContent:'center',}}>
    <Detailbox >
      <div><Backbutton  onClick={() => navigate(-1)}>{"<BACK"}</Backbutton></div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <DetailImage imagepath={props.content.imagePath}></DetailImage>
        <DetailContent>
          <p>{props.content.detail[0]}</p>
          <p>{props.content.detail[1]}</p>
          <p>{props.content.detail[2]}</p>
          <p>{props.content.detail[3]}</p>
          <p>{props.content.detail[4]}</p>
          <p>{props.content.detail[5]}</p>
          <p>{props.content.detail[6]}</p>
          <p>{props.content.detail[7]}</p>
          </DetailContent>
      </div>
    </Detailbox>
  </div>)
}

export default Detail