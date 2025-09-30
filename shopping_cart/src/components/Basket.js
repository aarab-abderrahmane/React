
export default function Basket({ closeBasket , basketProds , prodData,DelFromBasket,onChangeQty}) {


    let elemnts = []

    const image_stye={
        height : "clamp(100px , 20vh , 150px )",
        width : "clamp(50px , 20vw , 150px )",
        objectFit : "cover"
    }


    

    
     basketProds.forEach(selectedProd=>{



        const target_prod = prodData.find(prod => prod.id === selectedProd.prodId)


        if(target_prod){

            elemnts.push(
               
                    <div className="d-flex shadow-xl  bg-white col-md-5 border rounded-4 p-3 gap-3 position-relative" >
                        {/* <button onClick={()=>deleteProd(obj.id)}>del</button> */}
                        <i class="bi bi-x  fw-bold fs-4 position-absolute end-0 top-0 me-2"  onClick={()=>DelFromBasket(target_prod.id)}></i>
                        <img  style={image_stye}  alt="product" src={target_prod.image} className="rounded-4"></img>
                        <div  style={{flex:"1",display:"flex" , flexDirection:"column" , justifyContent:"center" }}> 
                            <h4 className="text-center" style={{fontFamily:"Archivo Black",fontweight:"400", fontStyle:"normal"}}>{target_prod.name}</h4>
                            <div >
                                <hr ></hr>
                                <div>
                                    <div 
                                    className="d-flex justify-content-between">
                                            <h5>Qty : </h5>
                                            <div className="d-flex flex-row  rounded-5 ">
                                              <button className="px-4  rounded-5" onClick={()=>onChangeQty(selectedProd.prodId,"decrease")}>-</button>
                                              <h3  className="px-2">{selectedProd.qty}</h3>
                                              <button  className="px-4  rounded-5"  onClick={()=>onChangeQty(selectedProd.prodId,"increase")} >+</button>
                                            </div>
                                            <h4 style={{fontFamily : "monospace" , color:"gray" }}>${selectedProd.total}</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            )



        }


    })



  return (
    <div style={{height:"100%"}} className="pe-4 ">
      <button onClick={closeBasket} className="position-absolute top-0 start-0 bg-transparent border-0 me-3 mt-2 "><i class="bi bi-arrow-left-circle-fill fs-2 m-3  "></i></button>

      <div className="mt-5" >
        <h3>Your Basket</h3>

        <div className="p-6 row gap-3  " >

              {elemnts.length > 0 ? elemnts : <div className=" d-flex justify-center items-center alert alert-warning  position-absolute top-50 start-50 translate-middle  border-3" ><h3 className="text-center w-100 ">the basket is empty now</h3></div>}

        </div>
        
      </div>
    </div>
  );

}
