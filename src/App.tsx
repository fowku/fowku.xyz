import { ThemeProvider } from '@providers';

import './App.scss';
import { Router, RoutesContext, routesConfig } from './core/router';

function App(): JSX.Element {
  return (
    <RoutesContext.Provider value={routesConfig}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </RoutesContext.Provider>
  );
}

export default App;
