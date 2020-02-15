import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tama from './pages/Tama';
import GlobalHeader from './components/global/GlobalHeader';

function App() {
  return (
    <>
      <Router>
        <GlobalHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tama" component={Tama} />
          <Route exact path="/test" component={() => <div>test</div>} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
