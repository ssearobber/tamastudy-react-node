import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tama from './pages/Tama';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Login from './pages/Login';
import GetPosts from './pages/Post/GetPosts';
import CreatePost from './pages/Post/CreatePost';
import GetPostById from './pages/Post/GetPostById';
import Navigation from './components/organisms/Navigation';
import AuthContext from './context/AuthContext';
import useAuth from './hooks/useAuth';

const App = () => {
  const {
    isLoggedIn,
    error: authError,
    loading: authLoading,
    handleLogInFn,
    handleLogOutFn,
  } = useAuth();

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          authError,
          authLoading,
          handleLogInFn,
          handleLogOutFn,
        }}
      >
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tama" component={Tama} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/posts" component={GetPosts} />
          <Route exact path="/private" component={() => <div>Private2</div>} />
          <Route exact path="/posts/createPost" component={CreatePost} />
          <Route exact path="/post/:postId" component={GetPostById} />
          {/* <Route exact path="/private" component={()=><div>private</div>} */}
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
