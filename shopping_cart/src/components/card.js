function Card(props){

    const {name,image,price,id,handleAdd} = props

    return (
         <div className="col-md-4 mb-4">
              <div className="card shadow-sm">

                      <img src={image} alt="card_image"></img>
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