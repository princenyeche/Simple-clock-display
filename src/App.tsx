import {type JSX} from 'react';
import ClockProvider from "./contexts/ClockProvider";
import Dashboard from './pages/Dashboard'


/**
 * Creates an JSX rendering for different components within the app
 * @constructor
 * @return {JSX.Element}
 */
function App(): JSX.Element {
  return (
      <ClockProvider>
          <Dashboard />
         </ClockProvider>
  );
}


export default App;