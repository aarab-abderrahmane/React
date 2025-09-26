import Card from './components/card'
import Basket from './components/Basket'
import { useState  , useEffect , useRef}  from 'react';


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

  const[isVisible , setIsVisible] = useState(true)

  function handleAdd(id){

    if(!prodIds.includes(id)){
      setProdIds([...prodIds,id])

    }

  }


  useEffect(()=>{

        setNumProd(prodIds.length)

  },[prodIds])



  function OpenBasket(){

    // setIsVisible(!isVisible)
    if(isVisible){
      setIsVisible(false)
    }

  }

  function CloseBasket(){
    setIsVisible(true)
  }


  function DeleteProd(id){

    console.log("delete")

      let prev_array = [...prodIds] 
      prev_array = prev_array.filter(prod_id=>id!==prod_id)
      setProdIds(prev_array)

  }




  return (
    
    <>
    <header className="d-flex justify-content-between align-items-center border-bottom border-2 border-black p-4" style={{height:"15vh"}}>
        <h1>Shopping Cart</h1>
        <button className="position-relative border-0 bg-transparent " style={{width:"48px"}} onClick={OpenBasket} >
          <i className="bi bi-cart2  me-4 fs-3"></i>
          <span className="position-absolute top-0 badge rounded-pill  " style={{backgroundColor : numProd!==0 ? "red" : "orange" }} >{numProd}</span>
        </button>
    </header>

    <div className="container py-5"  style={{display : isVisible? "block" : "none"  , flex:"1"}}>
        <div  className="row " >

          {Data.map((obj)=>{
              const {name,image,price,id} = obj

              return <Card name={name} image={image} price={price} id={id} key={id} handleAdd={handleAdd} DeleteProd={DeleteProd} />;

          })}

      </div>

     
      

    </div>


    {/* basket */}

    <div style={{display : isVisible? "none" : "block" }} className='position-relative  p-4'  >
          <Basket closeBasket={CloseBasket} prodIds={prodIds} prodData={Data} />

    </div>
    </>
  );
}

export default App;
