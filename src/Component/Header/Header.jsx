import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AutrhProvider';


const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handellogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error.message)
    })
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl"  to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl"  to="/orders">Orders</Link>
        <Link className="btn btn-ghost normal-case text-xl"  to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-xl"  to="/register">Register</Link>
        {
        user ?<>
         <li>{user.email}</li>
         <button onClick={handellogout} className='btn btn-xs'>Log out</button>
        </> 
        :
        <Link to="/login">Login</Link>
        }

      </div>
    </div>
  );
};

export default Header;