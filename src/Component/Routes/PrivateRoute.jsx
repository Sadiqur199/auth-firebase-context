import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AutrhProvider';
import { Navigate } from 'react-router-dom';
import './PrivateRouters.css'

const PrivateRoute = ({children}) => {
  const {user,loading} =useContext(AuthContext)
  if(loading){
    return <progress className="progress w-56 progress-bar "></progress>
  }

  if(user){
    return children
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;