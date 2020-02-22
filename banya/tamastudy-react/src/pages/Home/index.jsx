import React, { useContext } from 'react';
import WithAuth, { AuthContext } from '../../hoc/WithAuth';
import HomeNavSlider from '../../components/organisms/HomeNavSlider';
import HomeMainSlider from '../../components/organisms/HomeMainSlider';

const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <HomeNavSlider />
      <HomeMainSlider />
    </div>
  );
};

export default WithAuth(Home);
