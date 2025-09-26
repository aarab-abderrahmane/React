import Card from './components/card'
import Basket from './components/Basket'
import { useState  , useEffect} from 'react';


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
  
  const [numProd,setNumProd] = useState(0)

  function handleAdd(id){

    if(!prodIds.includes(id)){
      setProdIds([...prodIds,id])

    }

  }


  useEffect(()=>{

        setNumProd(prodIds.length)

  },[prodIds])



  // console.log(prodIds)



  return (
    
    <>
    <header className="d-flex justify-content-between align-items-center border-bottom border-2 border-black p-4">
        <h1>Shopping Cart</h1>
        <button className="position-relative border-0 bg-transparent " style={{width:"48px"}}>
          <i className="bi bi-cart2  me-4 fs-3"></i>
          <span className="position-absolute top-0 badge rounded-pill  " style={{backgroundColor : numProd!==0 ? "red" : "orange" }} >{numProd}</span>
        </button>
    </header>

    <div className="container py-5">
        <div  className="row " >

          {Data.map((obj)=>{
              const {name,image,price,id} = obj

              return <Card name={name} image={image} price={price} id={id} key={id} handleAdd={handleAdd} />;

          })}

      </div>

     
      

    </div>

    </>
  );
}

export default App;
