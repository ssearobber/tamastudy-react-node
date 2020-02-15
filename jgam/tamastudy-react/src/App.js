import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Component1 from './components/Component1';
import Tama from './pages/Tama';
import Home from './pages/Home';
import GlobalHeader from './components/global/GlobalHeader';

function App() {
  return (
    <>
      <Router>
        <>
          {/* Global Component */}
          <GlobalHeader />
        </>
        <Switch>
          <Route
            exact
            path='/'
            component={() => <div>temporary component</div>}
          />
          <Route exact path='/tama' component={Tama} />
          <Route exact path='/contact' component={Home} />
          <Route exact path='/4' component={Component1} />
          <Route exact path='/test' component={() => <div>test</div>} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
