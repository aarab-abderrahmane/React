function Posts(){


    const section_style = {
        border : "4px solid blue ", 
        disply : "flex" , 
        flexDirection : "column", 
        justifyContent : "space_between",
    }


    let text_style ={
        textAlign : "center"
    }


    return (

        <div
        style ={section_style}> 

            <h3 style={text_style}>This is the post title</h3>
            <hr></hr>
            <p style={text_style}>Thsi is the post body</p>
            
        </div>
    )

}

export default Posts;