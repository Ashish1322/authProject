import React, {useState} from 'react'
import { toast } from 'react-toastify';
import './singup.css'
export default function Signup({setLogin, signup}) {

    const [data,setData] = useState({fname: "", lname: "",email: "", phone: "" , pass:"",cpass:""})

    const showError = (message) =>{
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check Erros
        if( (data.fname + data.lname).length < 3)
        {
            showError("Invalid Name")
            return
        }
        if(data.pass != data.cpass)
        {
            showError("Passwords don't match. ")
            return
        }
        // if no erros then

        signup(data.fname+" " + data.lname, data.email, data.phone, data.pass )



    }   

    const update = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }   


  return (
    <form  onSubmit={handleSubmit} className='card p-3 my-5' id='card'>
        <h3>Signup Now</h3>
        <hr />
        <div className="row">

            <div className="col-md-6 col col-6">
            <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                First Name
                </label>
                <input
                onChange={update}
                name='fname'
                type="text"
                className="form-control"
                id="fname"
                aria-describedby="emailHelp"
                required
                />
            
            </div>
            </div>
            <div className="col-md-6 col col-6">
            <div className="mb-3">
                <label htmlFor="lname" className="form-label">
                Last Name
                </label>
                <input
                 onChange={update}
                name='lname'
                type="text"
                className="form-control"
                id="lname"
                aria-describedby="emailHelp"
                
                />
            
            </div>
            </div>
            <div className="col-md-6 col col-6">
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                Phone Number
                </label>
                <input
                 onChange={update}
                name='phone'
                type="text"
                pattern="[789][0-9]{9}"
                className="form-control"
                id="phone"
                aria-describedby="emailHelp"
                required
                />
            
            </div>
            </div>
            <div className="col-md-6 col col-6">
            <div className="mb-3">
                <label htmlFor="mail" className="form-label">
                Email
                </label>
                <input
                onChange={update}
                type="email"
                name='email'
                className="form-control"
                id="mail"
                aria-describedby="emailHelp"
                required
                />
            
            </div>
            </div>
            <div className="col-md-6 col col-6">
            <div className="mb-3">
                <label htmlFor="pass" className="form-label">
                Password
                </label>
                <input
                onChange={update}
                type="password"
                name='pass'
                className="form-control"
                id="pass"
                aria-describedby="emailHelp"
                required
                />
            
            </div>
            </div>
            <div className="col-md-6 col col-6">
            <div className="mb-3">
                <label htmlFor="cpass" className="form-label">
                Confirm Password
                </label>
                <input
                onChange={update}
                type="password"
                name='cpass'
                className="form-control"
                id="cpass"
                aria-describedby="emailHelp"
                required
                />
            
            </div>
            </div>
        </div>

    
  

  
  
  <input type="submit" value="Signup" className="btn btn-primary" />

 <a onClick={()=>setLogin(true)}><p className='text-center my-3'>Already Have an Account ? Login Now</p></a> 
</form>

  )
}
