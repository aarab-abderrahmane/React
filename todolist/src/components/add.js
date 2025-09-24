function AddTodo({text,index}){


        return(


            <li
            className="list-group-item d-flex justify-content-between align-items-center"
            id={index}
            >
                <p>{text}</p>
                <div className="d-flex">
                        <button className="btn btn-sm btn-warning me-2">Modify</button>
                        <button className="btn btn-sm btn-danger"   >Delete</button>
                </div>

            </li>

        )


}


export default AddTodo;