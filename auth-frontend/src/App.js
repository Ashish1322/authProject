import { useEffect, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from './axios.js'
import Card from "./components/Card";

export default function App() {

  const [flip,setFlip] = useState(true)
  const [user,setUser] = useState(null)

  const setLogin = () =>{
    setFlip(false)
  }
  const setSignup = () => {
    setFlip(true)
  }

  // To check if the user is loggedIn after the reloading of page everytime
  useEffect(()=> {
    if(localStorage.getItem('user'))
    {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  },[])

  const logout = () =>  
  {
    setUser(null)
    localStorage.removeItem('user')
  }

  const login = (email,password) => {

    axios.post('login',{email,password}).then(response=> {
      toast.success("Successfully Logged In", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })

        // Once the user is logged in then add in local storage so that on reloading it will be there and not logged out and also update the user state so that Logged In page can be shown
        localStorage.setItem('user',JSON.stringify(response.data.user))

        setUser(response.data.user)
      
    }).catch(err =>{
      console.log(err)
      toast.error(err.response.data.err, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    })
  }

  const signup = (name, email, phone, password) =>
  {
    axios.post('adduser',{name,email,phone,password}).then( response => {
     
      toast.success('Account Created Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        // Once the account created successfull then redirect to login page
        setFlip(false)
      

    }).catch( err => 
      toast.error(err.response.data.error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))
  }

  return (
    <>
    <ToastContainer />
    <h1 className="text-center my-4 mt-5" style={{fontFamily: "Times New Roman"}}>Mikhvision Digi Authentication </h1>
    {
      user ?  <Card logout={logout} user={user}/> :
      <div className="container" style={{display: "flex", justifyContent: "center",alignItems: "center"}}>
       
      {
        flip ?  <Signup signup={signup} setLogin = {setLogin} /> :    <Login login = {login} setSignup= {setSignup} />
      }
        
      
    </div>
    }
   
    
    </>
 
  );
}
