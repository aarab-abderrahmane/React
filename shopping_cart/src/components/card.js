function Card(props){

    const {name,image,price,id,handleAdd} = props

    const image_stye={
        height : "clamp(200px , 50vh , 300px )",
        width : "100%",
        objectFit : "cover"
    }

    return (
         <div className="col-md-4 mb-4">
              <div className="card shadow-sm">

                      <img src={image} alt="card_image" style={image_stye}></img>
                      <div className="card-body text-center">
                          <h5 >{name}</h5>
                          <p className="card-text">$ {price}</p>
                          <button className="btn btn-primary" value={id} onClick={()=>handleAdd(id)} >Add to Card</button>
                      </div>
              </div>

          
              </div>
    )

}

export default Card ; 