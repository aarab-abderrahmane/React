import Card from './components/card'
import Basket from './components/Basket'
import { useState  , useEffect}  from 'react';


const Data = [
  {
    id: 1,
    image: "https://picsum.photos/200/300?random=1",
    name: "Chocolate Chip Cookie",
    price: 2.5,
    category: "Cookies",
    description: "Classic cookie with chocolate chips."
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300?random=2",
    name: "Oatmeal Raisin Cookie",
    price: 3.0,
    category: "Cookies",
    description: "Healthy and chewy oatmeal raisin cookie."
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300?random=3",
    name: "Vanilla Muffin",
    price: 4.2,
    category: "Muffins",
    description: "Soft muffin with vanilla flavor."
  },
  {
    id: 4,
    image: "https://picsum.photos/200/300?random=4",
    name: "Blueberry Muffin",
    price: 4.5,
    category: "Muffins",
    description: "Muffin filled with fresh blueberries."
  },
  {
    id: 5,
    image: "https://picsum.photos/200/300?random=5",
    name: "Brownie",
    price: 3.8,
    category: "Cakes",
    description: "Rich and fudgy chocolate brownie."
  },
  {
    id: 6,
    image: "https://picsum.photos/200/300?random=6",
    name: "Cupcake",
    price: 2.9,
    category: "Cakes",
    description: "Mini cake topped with sweet frosting."
  }
];



function App() {


  const [basketProds,setbasketProds] = useState([])
  
  const [numProd,setNumProd] = useState(0)

  const[isVisible , setIsVisible] = useState(true)


  function handleAdd(id){


    const target_prod = Data.find(data_obj=>data_obj.id===id)

    const isexisting = basketProds.some(prod=> prod.prodId===id )
    

    if(!isexisting || basketProds.length===0){

      setbasketProds([...basketProds,{prodId:id,qty:1,total:target_prod.price}])

    }

    console.log(basketProds)


  }


  useEffect(()=>{

        setNumProd(basketProds.length)

  },[basketProds])



  function OpenBasket(){

    setIsVisible(!isVisible)
    // if(isVisible){
    //   setIsVisible(false)
    // }

  }

  function CloseBasket(){
    setIsVisible(true)
  }


  function DelFromBasket(id){

    console.log("delete")

      let prev_array = [...basketProds] 
    prev_array = prev_array.filter(prod_obj=>id!==prod_obj.prodId)
      setbasketProds(prev_array)

  }


  function onChangeQty(prodId , type){

        const target_prod = basketProds.find(obj=>obj.prodId === prodId)
        const original_price = Data.find(prod=>prod.id===prodId)

        if (type==="increase"){
          
            if( target_prod.qty < 20){


              const newBasketProd = basketProds.map(obj=>{
                  if (obj.prodId === prodId){

                    const totalPrice = parseFloat(((obj.qty+1)*original_price.price).toFixed(2))
                    return {...obj,qty:obj.qty+1,total:totalPrice}
                  }

                  
                  return obj

              })

               setbasketProds(newBasketProd)

            }



        }else if ( target_prod.qty >1){

          

              const newBasketProd = basketProds.map(obj=>{

                  const totalPrice = parseFloat((obj.total-original_price.price).toFixed(2))

                  if (obj.prodId === prodId){
                    return {...obj,qty:obj.qty-1,total:totalPrice}
                  }

                  return obj

              })

              setbasketProds(newBasketProd)

         }//else{

        //     DelFromBasket(prodId)
        // }


  }

  





  return (
    
    <>
    <header className="d-flex justify-content-between align-items-center border-bottom border-2 border-black p-4" style={{height:"15vh"}}>
        <h1>Shopping Cart</h1>
        <button className="position-relative border-0 bg-transparent me-4 " style={{width:"48px"}} onClick={OpenBasket} >
          <i className="bi bi-cart2  me-4 fs-3"></i>
          <span className="position-absolute top-0 badge rounded-pill   " style={{backgroundColor : numProd!==0 ? "red" : "orange" }} >{numProd}</span>
        </button>
    </header>

    <div className="container py-5"  style={{display : isVisible? "block" : "none"  , flex:"1"}}>
        <div  className="row " >

          {Data.map((obj)=>{
              const {name,image,price,id} = obj

              return <Card name={name} image={image} price={price} id={id} key={id} handleAdd={handleAdd}  />;

          })}

      </div>

     
      

    </div>


    {/* basket */}

    <div style={{display : isVisible? "none" : "block" , flex:"1"}} className=' position-relative  p-4  '  >
          <Basket closeBasket={CloseBasket} basketProds={basketProds} prodData={Data} DelFromBasket={DelFromBasket} onChangeQty={onChangeQty} />

    </div>
    </>
  );

  
}

export default App;
