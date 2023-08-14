import React, { useState, useEffect } from 'react';
import "./App.css"
import {Container,Form, Box,Line,Formbox,Listbox,ListItem,Datebox,Dobox,InputSubmit,InputText,Spando,Spanx} from "./styledComponents"

function App(){
    const [todo,setTodo]=useState([])
    const [todoId,setTodoId]=useState(0)
    const [todate,setdate]=useState("")

    const handleSubmit=(dowhat)=>{
        changedate();//오늘 날짜 가져오기
        setTodo([...todo,//기존값은 그대로 넣어줌
            {dowhat:dowhat,
            doId:todoId,//id
            doDate:todate,//추가한 날짜
            doDone:false}//할일을 실행하였나 여부
        ])
        setTodoId(todoId+1)
        
    }
    function changedate(){
        setdate(()=>{
            let today=new Date()
            let month=today.getMonth()+1
            let date=today.getDate()
            month=month<10?`0${month}`:month
            date=date<10?`0${date}`:date
            return `${month}/${date}`
        })
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
    changedate()
    
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
            <Formbox>
            <Form onSubmit={(e)=>{
                e.preventDefault()//리로드 안되게
                handleSubmit(e.target.todo.value)
                e.target.todo.value=""
            }}>
                <InputText type="text" placeholder="할일 쓰기" name="todo"/>
                <InputSubmit type="submit" value="+"/>
            </Form >
            </Formbox>
            
            <Line>
                <Listbox>
                        {todo.map((item,index)=>{
                            if (index<5){
                            return<Dobox key={item.doId}><Datebox key={item.doDate} className={item.doDone?"donecol":"yetcol"}>{item.doDate}</Datebox><ListItem key={index} className={item.doDone?"donecol":"yetcol"}><Spando onClick={()=>{
                                    handleToggle(item.doId)
                                }} className={item.doDone?"done":"yet"}>{item.dowhat}</Spando>
                                <Spanx onClick={()=>{
                                    handleDelete(item.doId)
                                }}>X</Spanx>
                            </ListItem></Dobox>}
                        
                        })}
                 
                </Listbox>
            </Line>
           
            </Box> </Container>
    </>
}

export default App