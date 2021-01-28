import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';

//Components & Pages
import Home from './pages/Home';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path={('/game/:id', '/')}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
