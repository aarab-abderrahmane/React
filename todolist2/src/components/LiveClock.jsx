import { useState, useEffect } from "react";

function LiveClock() {
    const [date, setDate] = useState(new Date());

    useEffect(()=>{

        const timer = setInterval(()=>{setDate(new Date())},1000)
        //cleanup
        return ()=> clearInterval(timer)


    },[])

    const year = date.getFullYear();
    const day = date.getDate();
    const weekday = date.toLocaleString("default", { weekday: "long" });
    const month = date.toLocaleString("default", { month: "long" });


    return (

        <div className="flex flex-col backdrop-blur-[20px] bg-white/40 rounded-2xl  bg-[var(--color-secondary)] w-full md:w-[50%]">
            <div className="flex justify-between p-4 font-bold text-xl">
            <h1>{month}</h1>
            <h1>{year}</h1>
            </div>
            <hr></hr>
            <div className="w-full flex flex-1  justify-center items-center">
            <h1 className="text-[8rem] 2xl:text-[15rem] font-bold">{day}</h1>
            </div>
            <h1 className="w-full text-center py-3 font-bold">{weekday}</h1>

        </div>

    );
}

export default LiveClock;
