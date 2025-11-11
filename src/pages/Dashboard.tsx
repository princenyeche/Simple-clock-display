import Heading from "@atlaskit/heading";
import AppLayout from "../components/AppLayout";
import {useState, useCallback, type JSX} from 'react';
import '../App.css';
import {clockDisplay, isParseDate, parseFormat} from "../scripts/Utils";
import {useInterval} from "usehooks-ts";
import type {DataObjects, ClockContentProps, ClockContextType} from "../scripts/DataTypes";
import {buildClockDisplayClassName, buildFaceCondition}  from "../scripts/Utils";
import { Box, Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import Button from '@atlaskit/button/new';
import ClockDisplay from '../components/ClockDisplay';
import ClockFace from "../components/ClockFace";
import {useClock} from "../contexts/ClockProvider";


function Dashboard(): JSX.Element {
    const [ runClock, setRunClock ] = useState<string | number>("");
  const [ clockColor, setClockColor ] = useState<DataObjects>({});
  const [ updateDate, setUpdateDate ] = useState<Date>(new Date());
  const [ changeClock, setChangeClock ] = useState<boolean>(false);
  const [ clockSize, setClockSize ] = useState<string>("default");
  const [ clockFormat, setClockFormat ] = useState<boolean>(false);
  const  [ clockFace, setClockFace ] = useState<boolean>(false);

  const handleChangeColor = useCallback((): void => {
      const defaultValues: string[] = ["red", "green", "yellow"];
      const defaultStyle: string[] = ["digitalClockColorRed",
          "digitalClockColorGreen",
          "digitalClockColorYellow"];
      const random: number = Math.floor(Math.random() * defaultValues.length);
      setClockColor({name: defaultValues[random], value: defaultStyle[random]});
  }, []);

  const handleClockFace = useCallback((): void => {
      if (!clockFace) {
          setClockFace(true);
      }
      else {
          setClockFace(false);
      }
  }, [clockFace]);

  useInterval((): void => {
      const createDate: Date = new Date();
      setUpdateDate(createDate);
      const isFormatCheck: string = (!clockFormat
          ? parseFormat(createDate).join(":")
          : parseFormat(createDate, "en-GB", true).join(":")
      );
      setRunClock(isFormatCheck);
  }, 500);

  const boxStyle: DataObjects | object = clockDisplay("50px", "flex");
  const runParsed: (string | number)[] = isParseDate(updateDate);
  const handleClockDisplayOption = useCallback((): void => {
       if (!changeClock) {
           setChangeClock(true);
           setClockSize("compact");
       }
       else {
           setChangeClock(false);
           setClockSize("expand");
       }
  }, [changeClock]);

  const handleClockFormat = useCallback((): void => {
      if (!clockFormat) {
          setClockFormat(true);
      }
      else {
          setClockFormat(false);
      }
  }, [clockFormat]);


  const InitialClock: () => JSX.Element = (): JSX.Element => {
      const { getClockFace }: ClockContextType = useClock();
        // <Stack> places elements vertically ontop one another.
       // To get a horizontal layout, you have to use the <Inline> element to achieve this
      const clockClassName: string = buildClockDisplayClassName(
        getClockFace,
        clockColor || null
    );

      return (
          <Box style={boxStyle}>
              <div className={clockClassName}>
                  {runClock}
              </div>

          </Box>

      )
  }
    return (
     <AppLayout>
           <Inline space="space.050" spread="space-between">
              <Stack alignInline="center" space="space.100">
                  <Heading size="medium" color={'color.text.inverse'}>Simple Digital Clock</Heading>

          <ClockContent
              changeClock={changeClock}
              runClock={runClock}
              runParsed={runParsed}
              clockColor={clockColor}
              InitialClock={InitialClock}
              clockSize={clockSize}
              clockFormat={clockFormat}
              clockFace={clockFace}
              handleChangeColor={handleChangeColor}
              handleClockDisplayOption={handleClockDisplayOption}
              handleClockFormat={handleClockFormat}
              handleClockFace={handleClockFace}
          />


              </Stack>
              </Inline>
      </AppLayout>
    );

}

/**
 * Creates an JSX rendering for action buttons or other functions
 * @param changeClock - allows the ability to change the clock type
 * @param runClock - allows the ability to run the clock in different mode
 * @param runParsed - allows the ability to modify the current clock
 * @param clockColor - allows the ability to change the color
 * @param InitialClock - a {@link JSX.Element} to show the default clock set
 * @param clockSize - allows the ability change the clock display size
 * @param clockFormat - allows the ability to change the clock format 12h | 24h
 * @param clockFace - allows the ability to change to a different clock face
 * @param handleChangeColor - function to handle the color change for each clock face
 * @param handleClockDisplayOption - function to handle the change in display size
 * @param handleClockFormat - function to handle the change in clock format
 * @param handleClockFace - function to hande the change in clock face
 * @constructor
 * @return {JSX.Element}
 */
function ClockContent({
    changeClock,
    runClock,
    runParsed,
    clockColor,
    InitialClock,
    clockSize,
    clockFormat,
    clockFace,
    handleChangeColor,
    handleClockDisplayOption,
    handleClockFormat,
    handleClockFace}: ClockContentProps): JSX.Element {

    const { getClockFace }: ClockContextType = useClock();

    const faceConditionTrue: string | DataObjects = buildFaceCondition(
        getClockFace,
        true
    )
    const faceConditionFalse: string | DataObjects = buildFaceCondition(
        getClockFace,
        false
    )

    return (
        <>
            {changeClock ?
              <InitialClock /> :
              <ClockDisplay dateLine={`${runParsed.join(" ")}`} timeLine={runClock} colorScheme={clockColor} face={faceConditionTrue as DataObjects} />
          }

            <Box>
                <Stack space={"space.050"} alignBlock={"center"}>
                      <Text size={"small"} color={"inherit"}>
                          Color: {clockColor.name ?? "white"} | Display: {clockSize} | Format: {!clockFormat ? `12-hour` : `24-hour`} | Face: {faceConditionFalse as string} </Text>
                      <Inline space={"space.025"} alignInline={"center"}>
                          <Button onClick={handleChangeColor} appearance={"discovery"} spacing={"compact"}>Color
                          </Button>
                          <Button onClick={handleClockDisplayOption} appearance={"warning"} spacing={"compact"}>Display
                      </Button>
                              <Button onClick={handleClockFormat} appearance={"danger"} spacing={"compact"}>Format
                      </Button>
                                  <Inline alignInline={"end"}>
                                      <Button onClick={handleClockFace} appearance={"primary"} spacing={"compact"}>Face
                            </Button>
                                  {clockFace && <ClockFace />}
                                  </Inline>

                      </Inline>
                      <Text size={"small"} color={"inherit"}><cite>*Button - uses a random selection, so the same color might be selected consecutively.</cite></Text>
                  </Stack>
            </Box>
        </>
    )
}


export default Dashboard;