import React,{useState,useEffect} from "react";
import "./App.css"
import {Container} from "./styledComponents"


function App() {
  //CRUD: Create,Read, Update, Delete
  const [todo,setTodo]=useState([])
  const [todoId,setTodoId]=useState(0)


  /*할일이 단순히 문자열이면 안 되는 이유!
  -삭제나 수정을 할 때 구분할 방법이 없다.
  =>따라서 하나의 할일은 하나의 객체로 관리하는 것이 좋다.*/
  const handleSubmit=(todoText)=>{
    setTodo([...todo,{
      todoText:todoText,//할일
      todoId:todoId,//할일 당 id
      todoDone:false//했는지 여부, 처음엔 default
    }])
    setTodoId(todoId+1)
    console.log(todo)
  }

  const handleToggle=(todoId)=>{
    setTodo(todo.map((item,index)=>{
      return item.todoId===todoId?{...item, todoDone:!item.todoDone}:item
    }))
  }
  const handleDelete=(todoId)=>{
    setTodo(todo.filter((item)=>{
      return item.todoId!=todoId
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
      defaultTodo[defaultTodo.length-1].todoId+1)
    }
  },[])

  //todo가 갱신될 때마다 로컬스토리지 저장하기
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])

  return <div>
    <Container>
    <form onSubmit={(e)=>{
      e.preventDefault()//리로드 안되게
      handleSubmit(e.target.todo.value)
      e.target.todo.value=""
    }}>
      <input type="text" placeholder="할일 쓰기" name="todo"/>
      <input type="submit" value="추가"/>
    </form>
    <ul>
      {todo.map((item,index)=>{
        return <li key={index}>
          <span onClick={()=>{
            handleToggle(item.todoId)
          }} style={item.todoDone?{textDecoration:'line-through'}:{}}>{item.todoText}</span>
          <span onClick={()=>{
            handleDelete(item.todoId)
          }}>X</span>
        </li>
      })}
    </ul>
    </Container>
  </div>
}

export default App;
