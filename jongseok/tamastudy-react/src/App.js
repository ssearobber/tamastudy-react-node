import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tama from './pages/Tama';
import Header from './components/organisms/Header';
import Alert from './components/organisms/Alert';
import Footer from './components/organisms/Footer';
import Login from './pages/Login';
import GetPosts from './pages/Post/GetPosts';
import Navigation from './components/organisms/Navigation';
import ContainerLayout from './components/layout/ContainerLayout';
import AuthContext from './context/AuthContext';
import useAuth from './hooks/useAuth';

const App = () => {
  const { isLoggedIn, handleLogInFn, handleLogOutFn } = useAuth();

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          handleLogInFn,
          handleLogOutFn,
        }}
      >
        <Header />
        <Navigation />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tama" component={Tama} />
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/posts" component={GetPosts} />
          <Route
            exact
            path="/contact"
            component={() => <ContainerLayout>contact</ContainerLayout>}
          />
          <Route
            exact
            path="/public1"
            component={() => <ContainerLayout>public1</ContainerLayout>}
          />
          <Route
            exact
            path="/public2"
            component={() => <ContainerLayout>public2</ContainerLayout>}
          />
          <Route
            exact
            path="/private1"
            component={() => <ContainerLayout>private1</ContainerLayout>}
          />
          <Route
            exact
            path="/private2"
            component={() => <ContainerLayout>private2</ContainerLayout>}
          />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
