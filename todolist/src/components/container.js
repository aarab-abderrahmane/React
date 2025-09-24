import React from 'react' ;
import AddTodo from './add.js'

function Container(){

    const [text,setText] = React.useState("");
    const  [todos,setTodo] = React.useState([]) ;
    

    


   
    
    const handleAdd = ()=>{

        if (text.trim()==="") return ; 
        setTodo([...todos,text]);
        setText("")
    }

    const handleDelete = (index)=>{

        setTodo(todos.filter((_,idx)=>idx!===index))

    }



    return(

        <>  
        <div className="input-group mb-3">

            <input type="text" id="taskInput" 
            className="form-control" placeholder="Enter a new task"
            value = {text} 
            onChange = {(e)=>{
                setText(e.target.value);
                
            
            }}
            />



            <button className="btn btn-primary" onClick={handleAdd}>Add</button>

        </div>
            
        <ul className="list-group" id="taskList">
                {todos.map((txt,index)=>(
                    <AddTodo key={index}  text={txt} index={index} onDelete = {handleDelete} />
                ))}
        </ul>

        </>

    );




}



export default Container ; 