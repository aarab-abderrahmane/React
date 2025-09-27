import { useState } from 'react';
import AddTodo from './components/cha_3/addTodo.js';
import TaskList from './components/cha_3/taskList.js';



let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    

    setTodos([...todos,{id:nextId , title : title , done : false}])
    nextId++
  }

  function handleChangeTodo(todoId,newTitle) {
      console.log(todoId,newTitle)
      const newTodo = todos.map((obj)=>{

        if(todoId===obj.id){

            return {...obj , title : newTitle}

        }else{
          return obj
        }

      })


      setTodos(newTodo)

  }



  function handleDeleteTodo(todoId) {

    // todos.splice(index, 1);

    const newTodo = todos.filter(obj => todoId!==obj.id)
    setTodos(newTodo)
  }

  function handleCheckTodo(todoId){

      const newTodo = todos.map((obj)=>{
        if(obj.id===todoId){
          return ( 
            {...obj , done : !obj.done}
          )
        }

        return obj

      })

      setTodos(newTodo)
  }


  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onSaveEdit={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
        onCheckTodo={handleCheckTodo}
      />
    </>
  );
}
