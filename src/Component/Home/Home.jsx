import React, { useContext } from 'react';


const Home = () => {

  return (
    <div>
      <p>this is home {user && <span>{user.displayName}</span>}</p>
    </div>
  );
};

export default Home;