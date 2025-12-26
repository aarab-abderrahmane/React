import 'bootstrap-icons/font/bootstrap-icons.css';
import {DELETE_TODO} from '../features/todoSlice'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export function TodoList(props){

    const {id , text , status} = props

    const dispatch = useDispatch()

    return (

        <div key={id}  className="bg-yellow-600 p-2 max-w-[400px] w-[70vw]  flex justify-between ">
            <div>
                <p className="text-wrap">{text}</p>
                <div
                className={`${status.done ? "bg-green-600" : "bg-red-600"} rounded-full px-2`}
                >{status.done ? "complete" : "uncomplete"}
                </div>

            </div>
            <div>
                <button
                onClick={()=>dispatch(DELETE_TODO({id:id}))}
                  className="bi bi-trash3  text-red-900 hover:text-red-700 text-xl hover:cursor-pointer"
                >
                </button>
   
      
            </div>

        </div>
    )
}

TodoList.PropTypes = {
    id : PropTypes.number.isRequired , 
    text : PropTypes.string , 
    status : PropTypes.shape({
        done : PropTypes.bool 
    }).isRequired
}