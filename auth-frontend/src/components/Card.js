import React from 'react'

export default function Card({user,logout}) {
 
  return (
    <div className="container bg-dark mt-4 mb-4 p-3 d-flex justify-content-center">
    {" "}
    <div className="card p-4" style={{width: "70vw"}} >
      {" "}
      <div className=" image d-flex flex-column justify-content-center align-items-center">
        {" "}
        <button className="btn btn-secondary">
          {" "}
          <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" height={100} width={100} />
        </button>{" "}
        <span className="name mt-3">{user.name}</span>{" "}
        <div className="d-flex mt-2 flex-row justify-content-center align-items-center gap-2">
          {" "}
          <span className="idd1">
          <i class="fa-solid fa-phone"></i>    {user.phone}</span>{" "}
          
        </div>{" "}
        <span className="idd">        <i class="fa-solid fa-envelope"></i> {user.email}</span>{" "}
        <div className="d-flex mt-2 flex-row justify-content-center align-items-center gap-2">
          {" "}
          <span className="idd1">
          <i class="fa-solid fa-id-card-clip"></i>    {user._id}</span>{" "}
          
        </div>{" "}
       
       
        <div className=" d-flex mt-2">
          {" "}
          <button onClick={logout} className="btn btn-dark">Logout</button>
        </div>{" "}
       
      
        <div className=" px-2 rounded mt-4 date ">
          {" "}
          <span className="join">Joined on {user.date}</span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  </div>
  
  )
}
