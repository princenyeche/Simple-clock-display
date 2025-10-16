import {createContext, type JSX,
    useContext, useState, useCallback} from 'react';
import type {DataObjects, ClockContextType} from "../scripts/DataTypes.ts";

const ClockContext  = createContext<ClockContextType | undefined>(undefined);

/**
 * Creates a context for the app
 * @param children - The additional elements added as context in the app.
 * @constructor
 * @return {JSX.Element}
 */
function ClockProvider({ children }: {children: any}): JSX.Element {

    const [ getClockFace, setClockFace ] = useState<string | DataObjects>({});

    const onSetClockFace = useCallback((value: string | DataObjects): void => {
        setClockFace(value);
    }, []);

    return (
        <ClockContext.Provider value={{ getClockFace, onSetClockFace}}>
            {children}
         </ClockContext.Provider>
    );
}

export default ClockProvider;
export function useClock(): ClockContextType {
    const context = useContext(ClockContext);
    if (context === undefined) {
        throw new Error('useClock must be used within a ClockProvider');
    }
    return context;

}