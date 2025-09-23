export default function Post({title,paragraph,author}){

    const post_style= {
        width : "clamp(200px, 40vw,600px)",
        border : "4px solid blue",
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    }

    return (

        <div style={post_style}>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <hr 
            style={{
                height:"4px", backgroundColor:"blue",width:"100%",border : "none"
            }}
            ></hr>
            <p>{paragraph}</p>
        </div>

    )


}