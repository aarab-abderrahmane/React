
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
                  <>
                    <div className="basket-cart d-flex align-items-center shadow-xl  bg-white col-md-5 border rounded-2 p-3 gap-3 position-relative" >

                        {/* delete prod from basekt  */}
                        <i class="bi bi-x  fw-bold fs-4 position-absolute end-0 top-0 me-2 "  style={{cursor:"pointer"}} onClick={()=>DelFromBasket(target_prod.id)}></i>

                        <img  style={image_stye}  alt="product" src={target_prod.image} className="rounded-2"></img>

                        <div style={{height:"90%",width:"1px",backgroundColor:"#E5E7EB"}}  ></div>

                        <div  style={{flex:"1",display:"flex" , flexDirection:"column" , justifyContent:"center" }}> 
                            <h4 className="text-center" style={{fontFamily:"Archivo Black",fontweight:"400", fontStyle:"normal"}}>{target_prod.name}</h4>
                            <div >
                                <hr ></hr>
                                <div>
                                    <div 
                                    className="d-flex justify-content-between align-items-center">
                                            <h5 >Qty : </h5>
                                            <div className="d-flex flex-row align-items-start mx-4  w-auto">
                                              <button className="px-3  rounded-2 bg-white border text-primary" style={{fontWeight:"bold",fontSize:"1.4rem"}}  onClick={()=>onChangeQty(selectedProd.prodId,"decrease")}>-</button>
                                              <h4  className="px-2 py-1 ">{selectedProd.qty}</h4>
                                              <button  className="px-3  rounded-2 bg-white  border  text-danger"  style={{fontWeight:"bold",fontSize:"1.4rem"}} onClick={()=>onChangeQty(selectedProd.prodId,"increase")} >+</button>
                                            </div>
                                            <div className="flex-fill d-flex justify-content-between align-items-center">
                                                  <h4   style={{fontFamily : "monospace" , color:"gray" }}>${target_prod.price}</h4>
                                                  <h4   style={{fontFamily : "monospace" , color:"black" ,margin:'5px 5px 0 0'}}>${selectedProd.total}</h4>
                                            </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )



        }


    })



  return (
    <div style={{height:"100%",width:"100%"}} className="pe-4  basket">
      <button onClick={closeBasket} className="position-absolute top-0 start-0 bg-transparent border-0 me-3 mt-2 "><i class="bi bi-arrow-left-circle-fill fs-2 m-3  "></i></button>

      <div className="mt-5 p-5 " >
        <h3 className="mb-4">Your Basket</h3>

        <div className=" row gap-3  " style={{width:"75vw"}} >

              {elemnts.length > 0 ? elemnts : <div className=" d-flex justify-center items-center alert alert-warning  position-absolute top-50 start-50 translate-middle  border-3" ><h3 className="text-center w-100 ">the basket is empty now</h3></div>}

        </div>
        
      </div>

      <div style={{width:"25vw"}}>
        <p>zdjhajhj</p>
      </div>

    </div>
  );

}
