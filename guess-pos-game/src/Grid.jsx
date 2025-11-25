export const Grid = ({size,monsterPos,handleClick })=>{


    const grid = Array.from({length:size},(_,col_i)=> Array.from({length:size},(_,row_i)=>({x:col_i,y:row_i})))

    return (

        <div 
        className={`  gap-4   grid  grid-cols-5 grid-rows-5 `}
 
        >
            

            {

                grid.flat().map((cell,i)=>
                
                    <div
                    key={`${cell.x}-${cell.y}+${i}`}
                    onClick={()=>handleClick(cell)}
                    className="
                    group
                    hover:scale-[0.9] duration-3000 cursor-pointer 
                    flex items-center justify-center  w-[100px] h-[100px] bg-red-500"
                    >   

                        {
                            monsterPos.XM === cell.x && monsterPos.YM === cell.y
                            ? (
                                <div >
                                    <h1 className="text-wrap hidden group-hover:block font-bold  text-center" >Monster is here !</h1>
                                    <p className="text-wrap group-hover:hidden">{i+1}</p>
                                </div>
                            ):(

                                <p>{i+1}</p>

                            )
                        }
                    </div>
                )
            }


        </div>
    )




}