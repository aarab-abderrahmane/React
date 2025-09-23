import "./ex1.css"

const btn_style={
    bg_col : "orange",
    p: "10px 20px",
    br : "1px solid black ",
    brd : "15px"
}


const txt_style={
    color : "yellow",
    width : "200px",
    height : "200px",
    backgroundColor : "black",
    borderRadius : "50%",
    display  : "flex",
    justifyContent : "center",
    alignItems : "center",
    fontSize : "2rem"
}




function Ex1(){
    const text = "efezfzfez";


    return(
        <>
        <div 
        className='section'>
        <h1>Welcome</h1>
        <button 
        style={{

            backgroundColor : btn_style.bg_col,
            padding : btn_style.p,
            border : btn_style.br,
            borderRadius: btn_style.brd,
            cursor:"pointer"
        }
        }
        >button</button>
        <p>click for button</p>

        <p style={txt_style}>OK</p>
        </div>

        <div 
        className = "section"
        >
            <button onClick = {writeHello} className="btn">click to write</button>
            <p id="text_2" className="hide"  
            style={{color : text.includes("l") ? "green" : "red"}} >{text}</p>
        </div>

        </>


    )





};


function writeHello(){
    const text = document.getElementById('text_2');
    text.classList.toggle('hide');

}



export default Ex1;



