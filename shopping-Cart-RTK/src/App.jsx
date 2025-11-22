import { ProductList  } from "./component/PoductList"
import { useDispatch ,useSelector} from "react-redux";
import {SET_PRODUCTS} from './features/productSlice'

import { useEffect } from "react";


function App() {


    const dispatch = useDispatch()



    useEffect(()=>{

        fetch('./data.json') 
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("2. Data fetched successfully:", data);
            dispatch(SET_PRODUCTS(data));
        })
        .catch((error) => {
            console.error("3. Error fetching data:", error);
        });


    },[])


    const products = useSelector((state)=>state.ProductsSlice)


    useEffect(()=>{


        console.log(products)



    },[products])


  return (
    <div className="max-w-7xl mx-auto">
        <ProductList/>
    </div>
  )
}

export default App
