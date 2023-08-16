import { createStore } from 'redux';

const contents = [
  { 
    path:"/red",
    imagePath: `${process.env.PUBLIC_URL}/image/서태웅.jfif`,
    title: "서태웅",
    character: "11",
    detail: {}
  },{ 
    path:"/blue",
    imagePath: `${process.env.PUBLIC_URL}/image/강백호.jfif`,
    title: "강백호",
    character: "10",
    detail: {}
  },{ 
    path:"/purple",
    imagePath:  `${process.env.PUBLIC_URL}/image/송태섭.jfif`,
    title: "송태섭",
    character: "7",
    detail: {}
  },{ 
    path:"/purple",
    imagePath: `${process.env.PUBLIC_URL}/image/정대만.jfif`,
    title: "정대만",
    character: "14",
    detail: {}
  },{ 
    path:"/purple",
    imagePath: `${process.env.PUBLIC_URL}/image/채치수.jfif`,
    title: "채치수",
    character: "4",
    detail: {}
  },
]

function reducer(state, action) {
  return { contents } ;
}

export const store = createStore(reducer);