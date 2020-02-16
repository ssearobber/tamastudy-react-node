import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tama from './pages/Tama';
// import GlobalFooter from './components/global/GlobalFooter';
import GlobalHeader from './components/global/GlobalHeader';

function App() {
  return (
    <>
      <Router>
        <>
          {/* Global components 어느 루트로 가더라도 그 위에 붕 떠있도록 루트 맨 위에 얹어두기! */}
          <GlobalHeader />
        </>
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
