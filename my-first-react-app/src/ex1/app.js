import '../App.css'

const btn_style={
    bg_col : "orange",
    p: "10px 20px",
    br : "1px solid black ",
    brd : "15px"
}


function Ex1(){
    return(
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
        </div>
    )


}

export default Ex1;



