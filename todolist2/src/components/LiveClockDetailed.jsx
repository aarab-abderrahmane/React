import { useState, useEffect } from "react";

export default function LiveClockDetailed() {

    const [now,setNow] = useState(new Date())

    useEffect(()=>{

        const timer = setInterval(()=>{
            setNow(new Date())
        },1000)

        //cleanup 

        return()=> clearInterval(timer)

    },[])

    const hours = now.getHours() % 12 || 12; // 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    // const milliseconds = now.getMilliseconds().toString().padStart(3, "0").slice(0, 2); // show 2 digits
    const ampm = now.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="glass  flex flex-col  w-full  lg:h-[40vh] max-h-[400px] bg-white/40 rounded-3xl  shadow backdrop-blur-lg md:hover:scale-[1.03] overflow-hidden">
      <div className="text-[var(--color-text)] flex  gap-4 items-center p-4  border-b-4 border-white/20">
        <h1 className="text-2xl font-bold md:text-[2rem]">Clcok</h1>
        <i class="bi bi-clock"></i>
    
      </div>
      <div className="flex flex-col-reverse md:flex-row flex-1  w-full  md:gap-[2rem] justify-center items-center h-60  ">
        <div className="font-mono font-bold text-[var(--color-text)] flex-wrap">
          <span className="inline-block align-baseline text-[5rem] md:text-[8rem] 2xl:text-[10rem] ">{hours}</span>
          <span className="inline-block align-baseline text-[5rem] md:text-[6rem] 2xl:text-[9rem]">:</span>
          <span className="inline-block align-baseline text-[4rem] md:text-[5rem] 2xl:text-[8rem]">{minutes}</span>
          <span className="inline-block align-baseline text-[4rem] md:text-[4rem] 2xl:text-[8rem]">:</span>
          <span className="inline-block align-baseline  text-[3rem] md:text-[3rem] 2xl:text-[6rem]">{seconds}</span>
          {/* <span class="inline-block align-baseline text-[1.5rem]">:{milliseconds}</span> */}
        </div>

        <h1 className=" text-[6rem] md:text-[8rem]  2xl:text-[8rem] text-[var(--color-text)] font-bold">{ampm}</h1>
      </div>
    </div>
  );
}
