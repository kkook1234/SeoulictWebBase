import React from 'react'
import { NavLink } from 'react-router-dom'
import { Items, Item, Image, ColorBox,Num } from './styledComp'
import { useSelector } from 'react-redux';

const Cards = () => {
  const contents = useSelector((state) => state.contents)
  return (
  <Items>
    {contents.map((content, idx) => {
      return <Item key={idx}>
      <NavLink to={content.path}>
        <Image imagepath={content.imagePath}></Image>
      </NavLink>
      <h1 class='title'style={{textAlign:'center'}}>{content.title}</h1>
      <p class="num" >{content.character}</p>
    </Item>
    })}
  </Items>
  )
}

export default Cards;