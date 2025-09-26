import Card from './components/card'
import { useState } from 'react';

const Data = [
            {
                image : "https://picsum.photos/200/300",
                name : "Cookie",
                price : "3.5",
                id : 1
            },
            {
                image : "https://picsum.photos/200/300",
                name : "Cookie",
                price : "3.5",
                id : 2
            },
            {
                image : "https://picsum.photos/200/300",
                name : "Cookie",
                price : "3.5",
                id : 3
            },
            {
                image : "https://picsum.photos/200/300",
                name : "Cookie",
                price : "3.5",
                id : 4
            }

]


function App() {

  const [prodIds,setProdIds] = useState([])

  function handleAdd(id){

    if(!prodIds.includes(id)){
      setProdIds([...prodIds,id])

    }

  }

  console.log(prodIds)

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
        <div  className="row " >

          {Data.map((obj)=>{
              const {name,image,price,id} = obj

              return <Card name={name} image={image} price={price} id={id} key={id} handleAdd={handleAdd} />;

          })}

      </div>

      <div  className='mt-5'>
          <h3>🛒 Cart</h3>

      </div>
      

    </div>
  );
}

export default App;
