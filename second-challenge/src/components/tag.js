function Tag(props){

    const title = props.title 
    const child = props.children 
    const img = props.photo ?? "";

    console.log(img)

    return (

        <div
        style={{
            backgroundColor:"purple",
            borderRadius : "15px",
            padding :  "10px",
            
        }}
        >
            <p>{title}</p>
            {child}
            <img 
            src={img}
            style={{maxWidth:"50px",maxHeight:"100px",display : img.length===0 ? "none" : "block"}}
            alt="image_"
            ></img>
        </div>


    )


}


export default Tag;