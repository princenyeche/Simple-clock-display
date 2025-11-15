import type {
    Context,
    JSX,
    ReactNode,
} from 'react';
import {    createContext,
    useContext,
    useState,
    useCallback} from 'react';
import { useNavigate, useLocation, type NavigateFunction, type Location } from 'react-router-dom';
import type {MenuContextType, Any} from '../scripts/DataTypes';


const MenuContext: Context<MenuContextType | undefined> = createContext<MenuContextType | undefined>(undefined);
let url;

function MenuProvider({ children }: {children: ReactNode }): JSX.Element {
         const navigate: NavigateFunction = useNavigate();
         const location: Location<Any> = useLocation();
         const currentURL: string = location.pathname;
         const [isActiveState, setLinkState] = useState<string>(currentURL);

       const parseLink: (parseURL: string) => void | Promise<void> = useCallback((parseURL: string): void | Promise<void> => {
         url = '/' + parseURL;
         setLinkState(url);
         return navigate(url);
     }, [navigate]);


  return (
         <MenuContext.Provider value={{ isActiveState, parseLink }}>
         {children}
         </MenuContext.Provider>
  );
}

export function useMenu(): MenuContextType {
    const context: MenuContextType | undefined = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}

export default MenuProvider;