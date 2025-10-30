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

        <div className="flex flex-col backdrop-blur-[20px] bg-white/40 rounded-3xl   w-full md:w-[50%] overflow-y-hidden">
            <div className="flex justify-between p-4 font-bold text-xl border-b-4 border-white/20">
            <h1>{month}</h1>
            <h1>{year}</h1>
            </div>

            <div className="w-full flex  flex-1  justify-center items-center">
            <h1 className="text-[8rem]  md:text-[9rem] 2xl:text-[12rem] font-bold">{day}</h1>
            </div>
            <h1 className="w-full   flex items-center justify-center   h-[15%] font-bold text-[1.2rem] xl:text-[1.5rem] ">{weekday}</h1>

        </div>

    );
}

export default LiveClock;
