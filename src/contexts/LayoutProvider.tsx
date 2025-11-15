import {createContext, type JSX,
    useContext, useState, useCallback} from 'react';
import type {LayoutContextType, DataObjects} from '../scripts/DataTypes';
import type { ReactNode, Context } from 'react';

const LayoutContext: Context<LayoutContextType | undefined>  = createContext<LayoutContextType | undefined>(undefined);

/**
 * Creates a context for the app layout
 * @param children - The additional elements added as context in the app.
 * @constructor
 * @return {JSX.Element}
 */
function LayoutProvider({ children }: {children: ReactNode}): JSX.Element {

    // controls the main layout
    const [ mainLayout, setMainLayout ] = useState<DataObjects>({});
    // controls the sidebar layout
    const [ sidebarLayout, setSidebarLayout ] = useState<DataObjects>({});
    // controls the aside layout
    const [ asideLayout, setAsideLayout ] = useState<DataObjects>({});
    //controls the panel layout
    const [ panelLayout, setPanelLayout] = useState<DataObjects>({});

    const onSetLayout: (value:DataObjects, layoutType: string) => void = useCallback((value: DataObjects, layoutType: string): void => {
        if (layoutType === "main" && value.flag === "true") {
            setMainLayout(value);
        }
        else if (layoutType === "aside" && value.flag === "true") {
            setAsideLayout(value);
        }
        else if ( layoutType === "sidebar" && value.flag === "true") {
            setSidebarLayout(value);
        }
        else if (layoutType === "panel" && value.flag === "true") {
            setPanelLayout(value);
        }
    }, []);

    return (
        <LayoutContext.Provider value={{ mainLayout,
            sidebarLayout,
            asideLayout,
            panelLayout,
            onSetLayout
         }}>
            {children}
         </LayoutContext.Provider>
    );
}

export function useLayout(): LayoutContextType {
    const context = useContext(LayoutContext);
    if (context === undefined) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;

}
export default LayoutProvider;