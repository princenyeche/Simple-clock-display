import {type JSX} from 'react';
import ClockProvider from './contexts/ClockProvider';
import './App.css';
// import PanelProvider from './contexts/PanelProvider';
import Dashboard from './pages/Dashboard'
import ThemeProvider from './contexts/ThemeProvider';
import LayoutProvider from './contexts/LayoutProvider';
import MenuProvider from './contexts/MenuProvider';
import { FlagsProvider } from '@atlaskit/flag';
import { BrowserRouter, /* Routes, Route, Navigate */ } from 'react-router-dom';
// import PublicRoute from './components/PublicRoute';
import UserProvider from './contexts/UserProvider';
import ApiProvider from "./contexts/ApiProvider.tsx";

/**
 * Creates an JSX rendering for different components within the app
 * @constructor
 * @return {JSX.Element}
 */
function App(): JSX.Element {
  return (
       <BrowserRouter>
            <ThemeProvider>
           <FlagsProvider>
              <ApiProvider>
                   <UserProvider>
           <LayoutProvider>
                <MenuProvider>
                    <ClockProvider>
                        <Dashboard />
                 </ClockProvider>
                </MenuProvider>
           </LayoutProvider>
               </UserProvider>
              </ApiProvider>
           </FlagsProvider>
                </ThemeProvider>
       </BrowserRouter>

  );
}


export default App;