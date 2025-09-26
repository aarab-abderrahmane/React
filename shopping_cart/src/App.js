

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

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
        <div  className="row " >

          {Data.map(obj=>{
              const  {image,name,price,id} = obj;
              <div className="col-md-4 mb-4">
              <div className="card shadow-sm">

                      <img src={image} alt="card_image"></img>
                      <div className="card-body text-center">
                          <h5 >{name}</h5>
                          <p className="card-text">$ {price}</p>
                          <button className="btn btn-primary" value={id} >Add to Card</button>
                      </div>
              </div>

          
              </div>
            })}

      </div>

      <div  className='mt-5'>
          <h3>🛒 Cart</h3>

      </div>
      

    </div>
  );
}

export default App;
