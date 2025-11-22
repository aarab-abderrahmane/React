
import { ProductItem } from "./productItem"

import { useSelector } from "react-redux"


export function  ProductList(){


        const products = useSelector((state)=>state.ProductsSlice)


        return (

            <div  className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    products.map(prod=>
                    <ProductItem 
                         id={prod.id}
                          title={prod.title}  
                          imageURL={prod.image}
                          prix={prod.prix}
                          added = {prod.added}
                          quantity = {prod.quantity}
                          />)
                        
                }

            </div>
        )





}