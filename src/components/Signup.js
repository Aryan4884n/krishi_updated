
import React, { useEffect, useState } from 'react'
//import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import {Link,  useHistory} from "react-router-dom";
import Navbar from "./Navbar";
const Signup = () => {
  
  const navigate=useHistory();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number:"",
    password: "",
    confirmPassword: "",
  });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword((preve) => !preve);
    };

    const handleShowConfirmPassword = () => {
      setShowConfirmPassword((preve) => !preve);
    };

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setData((preve) => {
        return {
          ...preve,
          [name]: value,
        };
      });
    };
  
    console.log(process.env.REACT_APP_SERVER_DOMIN)
    const handleSubmit= async(e)=>{
      e.preventDefault();
     const{ firstname, lastname ,email,number, password, confirmPassword } = data;
     console.log( firstname, lastname ,email,number, password, confirmPassword );
      fetch("http://localhost:8080/signup",{
              method : "POST",
              crossDomain:true,
              headers : {
                "content-type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
              },
              body : JSON.stringify({
                firstname,
                lastname,
                email,
                number,
                password,
                confirmPassword,
              })
            })
            .then((res)=>res.json())
            .then((data)=>{console.log(data,"userRegister");
              navigate('/login')
            })
            .catch(err=>console.log(err))
    };


  return (

    <>
   <Navbar/>
      <div className=" d-flex  justify-content-center " style={{color : '#34495E ',  paddingTop:'3rem',}} >
        <div style={{width:'25rem' ,paddingBottom:'5px', color:'#212F3D', backgroundColor:'#979A9A'}} >

        <h2>SignUp</h2>
          <form className="mb-3 mt-2 pl-2 pb-2" >
            <div>
            {/* <label htmlFor='firstname'>First name</label> */}
            <input
            type={"text"}
            id="firstname"
            name="firstname"
            className="mt-1 mb-2 w-full bg-slate-200 px-3 py-1 rounded focus-within:outline-blue-300"
            value={data.firstname}
            onChange={handleOnChange}
            placeholder='Enter Your first name'
          />
            </div>
            
           <div>
           {/* <label htmlFor="lastname">Last Name</label> */}
          <input
            type={"text"}
            id="lastname"
            name="lastname"
            className="mt-1 mb-2 w-full bg-slate-200 px-3 py-1 rounded focus-within:outline-blue-300"
            value={data.lastname}
            onChange={handleOnChange}
            placeholder='Enter Your last name'
          />
           </div>

           <div>
           {/* <label htmlFor="email" className="form-label">Email</label> */}
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-3 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
            placeholder='Enter Your Email'
          />
           </div>
           <div>
           {/* <label htmlFor="email" className="form-label">Email</label> */}
          <input
            type={"number"}
            id="number"
            name="number"
            className="mt-1 mb-2 w-full bg-slate-200 px-3 py-1 rounded focus-within:outline-blue-300"
            value={data.number}
            onChange={handleOnChange}
            placeholder='Enter Your Contact number'
          />
           </div>
            
           
           <div >
           {/* <label htmlFor="password">Password</label> */}
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.password}
              onChange={handleOnChange}
              placeholder='Enter Your password'
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>


         
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
          {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.confirmPassword}
              onChange={handleOnChange}
              placeholder='Confirm Your password'
              
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button  type="button" className="btn btn-success"  onClick={handleSubmit}>Sign Up</button>
          </form>
          <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
        </div>
      </div>
      </>
  );
}

export default Signup;


