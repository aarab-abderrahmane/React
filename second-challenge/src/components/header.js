export default function Header (){

    const header_style = {
        width : "100vw",
        textAlign : "center",
        height : "clamp(100px,15vh,200px)",
        backgroundColor : 'blue',
        alignContent : "center",
        fontSize : "1.3rem",
        fontWeight : "bold"
    }

    return(
        <header style={header_style}>
            Aarab Abderrahmane
        </header>
    )

}