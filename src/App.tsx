import { useState, useCallback } from 'react';
import './App.css';
import {isPeriod} from "./scripts/Utils";
import {useInterval} from "usehooks-ts";
import type {DataObjects} from "./scripts/DataTypes";

function App() {

  const [ runClock, setRunClock ] = useState<string | number>("");
  const [clockColor, setClockColor ] = useState<DataObjects>({});

  const handleChangeColor = useCallback((): void => {
      const defaultValues: string[] = ["red", "green", "yellow"];
      const defaultStyle: string[] = ["digitalClockColorRed",
          "digitalClockColorGreen",
          "digitalClockColorYellow"];
      const random: number = Math.floor(Math.random() * defaultValues.length);
      setClockColor({name: defaultValues[random], value: defaultStyle[random]});
  }, []);

  useInterval((): void => {
      const createDate: Date = new Date();
      setRunClock(`${isPeriod(createDate.getHours())}:${isPeriod(createDate.getMinutes())}:${isPeriod(createDate.getSeconds())}`);
  }, 500);

  return (
      <>
          <h1 className={"centerBg"}>Simple Digital Clock</h1>

          <div className={"card digitalBackground centerBg clockAlign"}>
              <div
                  className={`digitalClock ${clockColor ? `${clockColor.value}` : 'digitalClockColorDefault'}`}>
                  {runClock}
              </div>

          </div>

          <hr/>
          <span
              className={"centerBg"}>Current color: {clockColor.name ?? "white"}</span>
          <div className={"centerBg"}>
              <button onClick={handleChangeColor}>Change
                  Clock Color
              </button>

          </div>
          <div className={"centerBg"}>
              <span><cite>*Button - uses a random selection, so the same color might be selected consecutively.</cite></span>
          </div>
      </>
  )
}

export default App
