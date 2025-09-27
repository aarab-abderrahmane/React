import { useState } from "react";

export default function TaskList({ todos, onSaveEdit, onDeleteTodo , onCheckTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onSaveEdit={onSaveEdit} onDelete={onDeleteTodo} handleCheck={onCheckTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onSaveEdit, onDelete , handleCheck }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title); // local state for input

  let todoContent;


  if (isEditing) {
    todoContent = (
      <>
        <input
          value={editTitle}
          onChange={(e)=>{
            setEditTitle(e.target.value)}}
        />

        <button onClick={() =>  {
            setIsEditing(false)
            onSaveEdit(todo.id , editTitle)}}>Save</button>
      </>
    );



  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={()=>handleCheck(todo.id)}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
