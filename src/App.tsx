import { useState } from 'react';
import './App.css';
import {isPeriod} from "./scripts/Utils";
import {useInterval} from "usehooks-ts";

function App() {
  const [count, setCount] = useState<number>(0);
  const [ runClock, setRunClock ] = useState<string | number>("");

  useInterval((): void => {
      const createDate: Date = new Date();
      setRunClock(`${isPeriod(createDate.getHours())}:${isPeriod(createDate.getMinutes())}:${isPeriod(createDate.getSeconds())}`);
  }, 500);
  return (
    <>
      <div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(): void => setCount((count: number) : number => count + 1)}>
          count is {count}
        </button>

      </div>

       <div className={"card"}>
        The Time is: {runClock}
       </div>

    </>
  )
}

export default App
