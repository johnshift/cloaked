import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar';

// pages
import Home from './pages/Home';
import Link1 from './pages/Link1';
import Link2 from './pages/Link2';
import Link3 from './pages/Link3';
import NotFound from './pages/NotFound';

const App = (): JSX.Element => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/link-1">
          <Link1 />
        </Route>
        <Route path="/link-2">
          <Link2 />
        </Route>
        <Route path="/link-3">
          <Link3 />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
