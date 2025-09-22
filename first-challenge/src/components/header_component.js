
const nav_style = {
    display : "flex",
    justifyContent : "center",
    alignIems : "center",
    backgroundColor : "red",
    height : "15vh",
    width : "100vw",

    margin : 0 
}

const h1_style = {
    fontSize : "2rem",
    // textDecoration : "italic"
    padding : 0 ,
    display : "flex", 
    alignItems : "center"
}


export default function Header(){


    return (

        <nav style={nav_style}>
            <h1 style={h1_style}>Aarab Abderrahmane</h1>
        </nav>

    )


}