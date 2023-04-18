import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AutrhProvider';


const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <p>this is home {user && <span>{user.displayName}</span>}</p>
    </div>
  );
};

export default Home;