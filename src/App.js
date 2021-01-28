import React from 'react';
//Styles
import GlobalStyles from './components/GlobalStyles';
//Router
import { Route } from 'react-router-dom';

//Components & Pages
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={('/game/:id', '/')}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
