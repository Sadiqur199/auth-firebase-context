import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AutrhProvider';

const Register = () => {

  const {user,createUser} = useContext(AuthContext)
  console.log(createUser);

  const handelregister = event =>{
    event.preventDefault();
    const form  = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value
    console.log(email,password,name)
    createUser(email,password)
    .then (result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      form.reset()
    })

    .catch(error=>{
      console.log(error.message)
    })
  } 
   

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center md:align-top">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <form className="card-body" onSubmit={handelregister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover text-purple-600">All Ready have an accoutn?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <Link to="/login">
          <button className="btn btn-link">Login?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;