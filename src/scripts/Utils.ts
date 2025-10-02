import type {DataObjects, ListObjects} from "./DataTypes";

/**
 * Return a zero-based value indicating the period of time that has passed.
 * It could be a day, month, hour, minute, second or even the year.
 * @param {number} period - A record to a point in time
 * @param {boolean} timeSync - An trigger indicate to decide when a month has
 *                             exceeded a particular period
 * @return {string | number}
 */
export const isPeriod = (period: number, timeSync: boolean = false): string | number => {
    if (period < 9) {
        if (timeSync) {
            const calc = period + 1;
            return `0${calc}`;
        }
    }
    if (period < 10) {
        return `0${period}`;
    }
    return !timeSync ? period : period + 1;
}

/**
 * Return an object constructing the display size of a box container
 * @param {string} size - The size of the element to be created e.g. 50px
 * @param {string} display - The type of display to render e.g. flex
 * @param {string | any} expand - Add the width of the box e.g. 50px
 * @return {DataObjects | object}
 */
export function clockDisplay(size: string, display: string, expand: string = ""): DataObjects | object {
    const styles: DataObjects = {
          display: display,
          height: size,
      }
    if (expand !== "") {
        styles.width = expand;
    }
    return styles;
}

/**
* Takes a date object as string and parses out the date values only
* separating the date, time and timezone then returning only the date
* and timezone information
* @param {Date} dateObj - A date object
* @return {(string|number)[]}
*/
export const isParseDate = (dateObj: Date): (string | number)[] => {
    const getDate: string[] = dateObj.toDateString().split(" ");
    return [...getDate];
}


/**
 * Provides the ability to switch between 12-hour or 24-hour clock
 * date format
 * @param {string} dateObj - A datetime object in strings
 * @param {string} locales - A locale for the datetime formats, by default set to en-GB
 * @param {boolean} timeFormat - A trigger to switch time format
 * @return {ListObjects} - DateTimeFormat
 */
export const parseFormat = (
    dateObj: Date,
    locales: string = "en-GB",
    timeFormat: boolean = false
): ListObjects => {
        const options: object = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: "numeric",
  hour12: !timeFormat,
  minute: "numeric",
  second: "numeric",
};
        const checkFormat = Intl.DateTimeFormat(locales, options).format(dateObj);
        const [hour, minute, second ] = checkFormat.split(" ")[3].split(":");
       return [isPeriod(Number(hour)),
           isPeriod(Number(minute)),
           isPeriod(Number(second))];
    }