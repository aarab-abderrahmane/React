import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s=>s+1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []        )

  return <p>Timer: {seconds} sec</p>;
}


export default Timer ; 





