import React, { useContext } from 'react';
import WithAuth, { AuthContext } from '../../hoc/WithAuth';
import Typo from '../../components/atoms/Typo';

const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <Typo variant="h1" display="inline-flex">
        asddsa
      </Typo>
      <p>
        auth status : <strong>{auth.authenticated ? 'true' : 'false'}</strong>
      </p>
      <p>
        loading status : <strong>{auth.loading ? 'loading...' : 'complete'}</strong>
      </p>
      <p>from WithAuth HOC Component</p>
    </div>
  );
};

export default WithAuth(Home);
