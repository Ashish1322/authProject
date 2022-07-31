import React, { useState } from 'react'
import './singup.css'

export default function Login({setSignup,login}) {

  const [data,setData] = useState({email: "",pass:""})
  const handleLogin = (e) =>{
      e.preventDefault()
      login(data.email, data.pass)

  }
  const update = (e) =>{
    setData({...data, [e.target.name]:e.target.value})
  }
  return (
    
    <form onSubmit={handleLogin} className='card p-3 my-5'>
    <div className="mb-3">
        <h2>Login Now</h2>
        <hr />
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
      onChange={update}
      name='email'
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        required

      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
      onChange={update}
      name='pass'
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        required
      />
    </div>
  
    <input type="submit" value="Login" className="btn btn-primary" />

    <a onClick={() =>setSignup(false)}><p className='text-center my-3'>Already Have an Account ? Login Now</p></a> 
  </form>
  
  )
}
