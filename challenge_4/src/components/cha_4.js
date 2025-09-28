import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
  async function handleClick() {

    setPending((prev)=>(prev+1));
    await delay(3000);
    console.log('hello')

    setPending((prev)=>(prev-1));
    setCompleted((prev)=>(prev+1));


  }
  
  

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}


