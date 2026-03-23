
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // Value ko persist karte hai
  let val = useRef(0);
  let btnRef = useRef();

  // State variable -> change -> re-render
  // useRef variable -> change -> no re-render

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count+1);
  }

  // It will runs on every render
  // useEffect(() => {
  //   console.log("Main ferse render hogya hu");
  // })
  
  // Manipulating DOM directly
  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  const [time, setTime] = useState(0);
  // Across re-render iske value persist hogye gee
  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time+1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /> <br />
      <button onClick={stopTimer}>
        Stop
      </button>
      <br /> <br />
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
    // <div>
    //   <br />
    //   <button ref={btnRef} onClick={handleIncrement}>
    //     Increment
    //   </button>
    //   <br />
    //   <br />

    //   <button onClick={changeColor}>
    //     Change Color of 1st Button
    //   </button>
    //   <div>
    //     Count: {count}
    //   </div>
    // </div>
  )
}

export default App
