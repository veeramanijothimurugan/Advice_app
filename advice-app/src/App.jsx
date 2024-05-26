import './App.css'
import { useState } from 'react'

function App() {
  const [advice,setAdvice]=useState("Please click button to get advice");
  const [count,setCount]=useState(0);
  
  async function changeAdvice(){
    const text=await fetch("https://api.adviceslip.com/advice");
    const data=await text.json();
    setAdvice(data.slip.advice);
    setCount(count+1);
  }

  return (
    <>
      <div className='container'>
        <h4>{advice}</h4>
        <button onClick={changeAdvice}>Get advice</button>
        <h5>You have read<span> {count} </span> piece of advice</h5>
      </div>
    </>
  )
}

export default App
