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
    <div class="glass  flex flex-col w-full  lg:h-[40vh] max-h-[400px] bg-white/40 rounded-xl  shadow backdrop-blur-lg">
      <div className="text-[var(--color-text)] flex  gap-4 items-center p-4">
        <h1 className="text-2xl font-bold md:text-[2rem]">Clcok</h1>
        <i class="bi bi-clock"></i>
      </div>
      <hr></hr>
      <div className="flex flex-col md:flex-row flex-1  w-full  md:gap-[2rem] justify-center items-center h-60  ">
        <div class="font-mono font-bold text-[var(--color-text)] ">
          <span class="inline-block align-baseline text-[5rem] md:text-[8rem]">{hours}</span>
          <span class="inline-block align-baseline text-[5rem] md:text-[6rem]">:</span>
          <span class="inline-block align-baseline text-[4rem] md:text-[5rem]">{minutes}</span>
          <span class="inline-block align-baseline text-[4rem] md:text-[4rem]">:</span>
          <span class="inline-block align-baseline  text-[3rem] md:text-[3rem]">{seconds}</span>
          {/* <span class="inline-block align-baseline text-[1.5rem]">:{milliseconds}</span> */}
        </div>

        <h1 className=" text-[8rem] 2xl:text-[13rem] text-[var(--color-text)] font-bold">{ampm}</h1>
      </div>
    </div>
  );
}
