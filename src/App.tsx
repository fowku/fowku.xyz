// router
import { Router, routesConfig, RoutesContext } from './core/router';

// style
import './App.scss';

function App(): JSX.Element {
  return (
    <RoutesContext.Provider value={routesConfig}>
      <Router />
    </RoutesContext.Provider>
  );
}

export default App;
