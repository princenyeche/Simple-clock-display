import {
   type JSX,
 useState, useCallback, useRef
} from 'react';
import type { ReactNode } from 'react';
import {PanelSplitterProvider, type ResizeBounds} from '@atlaskit/navigation-system';


export const getPanelRef = useRef<HTMLDivElement | null>(null);

export const onRetrieveElement: (element: HTMLDivElement) => HTMLDivElement = useCallback((element: HTMLDivElement): HTMLDivElement => {
        getPanelRef.current = element;
        return getPanelRef.current;
    }, [])

/**
 * Creates a context for panel splitters
 * @param children - The additional elements added as context in the app.
 * @constructor
 * @return {JSX.Element}
 */
function PanelProvider({children}: { children: ReactNode }): JSX.Element {

    const [panelWidth, setPanelWidth] = useState<number>(300);
    const onCompleteResize: () => void = useCallback((): void => {
        setPanelWidth((prevState: number): number => prevState);
    }, [])
    const [ resizeBound, setResizeBound] = useState<ResizeBounds | string>("100px");
    const onResizeBounds: () => ResizeBounds = useCallback((): ResizeBounds => {
        setResizeBound((prevState: string | ResizeBounds) => prevState);
        return resizeBound as ResizeBounds;
    }, []);

    return (
        <PanelSplitterProvider panelWidth={panelWidth}
                               onCompleteResize={onCompleteResize}
                               panelRef={getPanelRef}
                               getResizeBounds={onResizeBounds}
                               resizingCssVar={""}>
            {children}
       </PanelSplitterProvider>

    );
}


export default PanelProvider;