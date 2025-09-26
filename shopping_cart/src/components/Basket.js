import { useEffect } from "react";

export default function Basket({ closeBasket , prodIds , prodData,DeleteProd}) {


    let elemnts = []

    const image_stye={
        height : "clamp(100px , 20vh , 150px )",
        width : "clamp(50px , 20vw , 150px )",
        objectFit : "cover"
    }

    

     prodData.forEach(obj=>{

        if(prodIds.includes(obj.id)){

            elemnts.push(
               
                    <div className="d-flex shadow-xl  bg-white col-md-5 border rounded-4 p-3 gap-3 position-relative" >
                        {/* <button onClick={()=>deleteProd(obj.id)}>del</button> */}
                        <i class="bi bi-x  fw-bold fs-4 position-absolute end-0 top-0 me-2"  onClick={()=>DeleteProd(obj.id)}></i>
                        <img  style={image_stye}  alt="product" src={obj.image} className="rounded-4"></img>
                        <div  style={{flex:"1",display:"flex" , flexDirection:"column" , justifyContent:"center" }}> 
                            <h4 className="text-center" style={{fontFamily:"Archivo Black",fontweight:"400", fontStyle:"normal"}}>{obj.name}</h4>
                            <div >
                                <hr ></hr>
                                <div>
                                    <div 
                                    className="d-flex justify-content-between">
                                            <h5>Qty : </h5>
                                            <h4 style={{fontFamily : "monospace" , color:"gray" }}>${obj.price}</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            )
        }

    })



  return (
    <div style={{minHeight:"85vh" }} className="pe-4">
      <button onClick={closeBasket} className="position-absolute top-0 end-0 bg-transparent border-0 me-3 mt-2 "><i class="bi bi-x-circle-fill fs-3 text-danger"></i></button>

      <div>
        <h3>Your Basket</h3>

        <div className="p-6 row gap-3">

               {elemnts}

        </div>
        
      </div>
    </div>
  );

}
