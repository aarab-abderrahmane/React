import {ADD_To_CART,REMOVE_FROMECART,DECREMENT,INCREMENT} from '../features/productSlice'
import {  useDispatch } from 'react-redux'

export function  ProductItem ({id,title,imageURL,prix,added , quantity }){


    const dispatch  = useDispatch()

    return (


        <div key={id}  className="w-full h-[300px]  border flex flex-col justify-between bg-gray-200">

            <img src={imageURL} className="object-cover w-full h-[50%]" ></img>
            
            <div className="flex justify-between px-2">
                <h1>{title}</h1>
                <p>{prix}$</p>
            </div>

            {

                added ? (
                    

                    
                    <div className='flex flex-col items-center '>

                        
                        <div className='flex mb-4 '>
                                <button 
                                onClick={()=>dispatch(INCREMENT({id:id}))}
                                className='py-2 px-4 border cursor-pointer bg-green-200'>+</button>
                                    <h2 className='p-2'>{quantity}</h2>
                                <button 
                                onClick={()=>dispatch(DECREMENT({id:id}))}

                                className='py-2 px-4 border cursor-pointer bg-yellow-200'>-</button>
                        </div>
                        

                        <button
                            onClick={()=>dispatch(REMOVE_FROMECART({id:id}))}
                            
                        className="bg-red-500 py-2 border-t cursor-pointer w-full" >Remove From Cart
                        </button>
                    </div>




                ):(

                    <button
                        onClick={()=>dispatch(ADD_To_CART({id:id}))}
                        
                    className="bg-blue-400 py-2 border-t cursor-pointer" >Add to Cart
                    </button>
                )
            }


        </div>
    )


}