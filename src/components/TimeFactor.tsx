import { useState, useEffect, type JSX } from 'react';

const secondsTable: (string | number)[][] = [
  ['year', 60 * 60 * 24 * 365],
  ['month', 60 * 60 * 24 * 30],
  ['week', 60 * 60 * 24 * 7],
  ['day', 60 * 60 * 24],
  ['hour', 60 * 60],
  ['minute', 60],
];
const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(undefined, {numeric: 'auto'});

function getTimeFactor(date: Date): (string | number | undefined)[] {
  const seconds: number = Math.round((date.getTime() - new Date().getTime()) / 1000);
  const absSeconds: number = Math.abs(seconds);
  let bestUnit, bestTime, bestInterval;
  for (const [unit, unitSeconds] of secondsTable) {
    if (absSeconds >= Number(unitSeconds)) {
      bestUnit = unit;
      bestTime = Math.round(seconds / Number(unitSeconds));
      bestInterval = Number(unitSeconds) / 2;
      break;
    }
  }
  if (!bestUnit) {
    bestUnit = 'second';
    bestTime = parseInt(`${seconds / 10}`) * 10;
    bestInterval = 10;
  }
  return [bestTime, bestUnit, bestInterval];
}

function TimeFactor({ isoDate }: {isoDate: string}): JSX.Element {
  const date: Date = new Date(Date.parse(isoDate));
  const [time, unit, interval]: (string | number | undefined )[] = getTimeFactor(date);
  const [, setUpdate] = useState<number>(0);

  useEffect((): () => void => {
    const timerId: number = setInterval(
      (): void => setUpdate(update => update + 1),
      interval as number * 1000
    );
    return (): void => clearInterval(timerId);
  }, [interval]);

  return (
    <span title={date.toString()}>{rtf.format(time as number, unit as Intl.RelativeTimeFormatUnit)}</span>
  );
}

export default TimeFactor;