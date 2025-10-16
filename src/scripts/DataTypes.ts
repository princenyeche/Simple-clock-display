export type DataObjects = { [key: string]: string};
export type ListObjects = (object | string | number | boolean | null)[];

// define an interface for the useClock context
export interface ClockContextType {
    getClockFace: string | DataObjects;
    onSetClockFace: (value: string | DataObjects) => void;
}
