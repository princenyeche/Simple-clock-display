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