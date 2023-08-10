import React, { useState, useEffect } from 'react';
import "./App.css"
import {Container,Form, Box,ListItem,UnorderdList,TodoDelete,TextInput,SubmitInput,TodoText} from "./styledComponents"

function App(){
    const [todo,setTodo]=useState([])
    const [todoId,setTodoId]=useState(0)

    const handleSubmit=(dowhat)=>{
        setTodo([...todo,//기존값은 그대로 넣어줌
            {dowhat:dowhat,
            doId:todoId,
            doDone:false}
        ])
        setTodoId(todoId+1)
        
    }

    const handleToggle=(Id)=>{
        setTodo(todo.map((item,index)=>{
            return item.doId===Id?{...item,doDone:!item.doDone}:item
            
        }))
    }

    const handleDelete=(doId)=>{
        setTodo(todo.filter((item)=>{
           
          return item.doId!=doId
        }))
      }

      //컴포넌트가 만들어지는 순간마다 로컬스토리지 읽어들이기
  useEffect(()=>{
    const defaultTodo=JSON.parse(localStorage.getItem("todo"))
    
    //로컬스토리지가 비어있었다면 이 함수는 의미가 없다.
    if(!defaultTodo) return;

    setTodo(defaultTodo)

    if(defaultTodo.length!==0){
      setTodoId(
      defaultTodo[defaultTodo.length-1].doId+1)
    }
  },[])

  //todo가 갱신될 때마다 로컬스토리지 저장하기
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])

    return <>
        <Container>
        <Box>
        <div>
            
            <form  onSubmit={(e)=>{
                e.preventDefault()//리로드 안되게
                handleSubmit(e.target.todo.value)
                e.target.todo.value=""
            }}>
                <input type="text" placeholder="할일 쓰기" name="todo"/>
                <input type="submit" value="추가"/>
            </form >
        </div>
       
           
            <ul>
                {todo.map((item,index)=>{
                    return<li key={index}><span onClick={()=>{
                            handleToggle(item.doId)

                        }} className={item.doDone?"done":"yet"}>{item.dowhat}</span>
                        <span onClick={()=>{
                            handleDelete(item.doId)
                           
                        }}>X</span>
                    </li>
                })}
            </ul>
            
            
            </Box> </Container>
    </>
}

export default App