import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Tama from './pages/Tama/index';
import Home from './pages/Home/index';
import GlobalHeader from './components/global/GlobalHeader';

function App() {
  return (
    <>
      <Router>
        <GlobalHeader />
        <Switch>
          <Route exact path="/HOME" component={Home} />
          <Route exact path="/TAMA" component={Tama} />
          <Route exact path="/CONTACT" component={() => <div>test</div>} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
