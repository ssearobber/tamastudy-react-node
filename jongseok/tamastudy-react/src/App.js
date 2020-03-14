import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Home from './pages/Home';
import Tama from './pages/Tama';
import Header from './components/organisms/Header';
import Alert from './components/organisms/Alert';
import Footer from './components/organisms/Footer';
import Login from './pages/Login';
import GetPosts from './pages/Post/GetPosts';
import Navigation from './components/organisms/Navigation';
import ContainerLayout from './components/layout/ContainerLayout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogInFn = () => {
    try {
      localStorage.setItem('token', 'success login test ');
      setIsLoggedIn(true);
      toast.success('로그인 성공');
    } catch (error) {
      toast.warn('로그인 실패');
    }
  };

  const handleLogOutFn = () => {
    try {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      alert('로그아웃 성공');
    } catch (error) {
      alert('로그인아웃 실패');
    }
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogOutFn={handleLogOutFn} />
      <Navigation isLoggedIn={isLoggedIn} />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tama" component={Tama} />
        <Route exact path="/login">
          <Login handleLogInFn={handleLogInFn} />
        </Route>
        <Route exact path="/posts" component={GetPosts} />
        <Route exact path="/contact" component={() => <ContainerLayout>contact</ContainerLayout>} />
        <Route exact path="/public1" component={() => <ContainerLayout>public1</ContainerLayout>} />
        <Route exact path="/public2" component={() => <ContainerLayout>public2</ContainerLayout>} />
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
    </Router>
  );
};

export default App;
