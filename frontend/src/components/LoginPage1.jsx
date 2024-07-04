import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../index.css"
import "../output.css"
import "./sample.css"
import {Link} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLock } from "react-icons/md";
import Home from "./Home"
export default function Loginpage() {
  const navigate=useNavigate();
  const [email_absent_component,setemail_absent_component]=useState();
  const [values,setvalues]=useState({loggedin:false,email_value:"",pass_value:""})
  const [checking,setemail_check]=useState({email_check:false,pass_check:false});
  const [emailvalid, setemailvalid] = useState({
    bg: "border-gray-500",
    msg: "",
     msgcolor:"",focuscolor:"focus:border-blue-500 focus:ring focus:ring-blue-200"
  })
  
  const [passvalid, setpassvalid] = useState({
    bg: "border-gray-500",
    msg: "",
    msgcolor:"",focuscolor:"focus:border-blue-500 focus:ring focus:ring-blue-200"
  })
  
  
  const emailChange=()=>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let email_details = document.getElementById("email").value
    values.email_value=email_details
    setvalues(values)
    if (!re.test(String(email_details).toLowerCase())) {
      setemailvalid({ bg: "border-red-500", msg: "Email is invalid!!" ,msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200"})
      checking.email_check=false
      setemail_check(checking);
    } else {
      setemailvalid({ bg: "border-green-500", msg: "Email is valid.", msgcolor:"text-green-500",focuscolor:"focus:border-green-500 focus:ring focus:ring-green-200" })
      checking.email_check=true
      setemail_check(checking); 
    }
  }

  const passChange=()=>{
    let passvalue= document.getElementById("pass").value
    values.pass_value=passvalue;
    setvalues(values);
   if (passvalue===""){
    setpassvalid({
      bg: "border-red-500",
      msg: "Password is required!!",
      msgcolor:"text-red-500",focuscolor:"focus:border-red-500 focus:ring focus:ring-red-200" 
    })
    checking.pass_check=false
    setemail_check(checking);
  }
    
  else{
    setpassvalid({ bg: "border-green-500", msg: "Password is given." ,msgcolor:"text-green-500",focuscolor:"focus:border-green-500 focus:ring focus:ring-green-200"})
    checking.pass_check=true
      setemail_check(checking);
  }
  }
  const handleSubmit = async ()=>{
    
    
    if(checking.email_check&&checking.pass_check){
    const get_response= await fetch("https://codechef-mern.onrender.com/api/user/"+`${values.email_value}`);
    if(get_response.ok){
      
      setemail_absent_component(false);
      const data = await get_response.json();
      
      if (data.pass===values.pass_value){
        values.loggedin=true
        setvalues(values)
        setemail_absent_component(false);
        navigate('/home',{state:data,replace:true})
        
      
      } else{
      
      setemail_absent_component(true);
      }
    }else{
      
      setemail_absent_component(true);
    }
}else{
  setemail_absent_component(true);
}   
  }
  return (
    <>
      <div className="w-full flex justify-center items-center  h-full overflow-x-hidden  sm:bg-gradient-lighten sm:bg-blend-lighten relative z-10 sm:pb-[5%] pt-[20vh] sm:pt-[5%] pb-0">
        <div className="bg-image-7  absolute h-full w-full top-0 blur-[2px]   sm:hidden "></div>
        <div className="sm:w-[500px] sm:flex  rounded-tl-[180px] rounded-tr-[15px] flex-col align-middle sm:rounded-[50px] p-[15px] pl-[25px] pr-[25px] bg-white relative z-12 shadow-lg  h-[80vh] sm:h-auto loginbox">
          <div className="bg-cover bg-center sm:bg-image-1 absolute  w-[200px] h-[120px] top-[200px] left-[-160px] -rotate-[23deg] inset-0 -z-[1] blur-[1px]"></div>
          <div className="bg-cover bg-center sm:bg-image-2 absolute  w-[200px] h-[120px] top-[420px]  left-[480px] rotate-[40deg] inset-0 -z-[1] blur-[1.5px] scale-[130%] laptop "></div>
          <div className="bg-cover bg-center sm:bg-image-3 absolute  w-[160px] h-[160px] top-[200px] left-[475px] rotate-[40deg] inset-0 -z-[1] blur-[1.5px] scale-[80%] laptopguy"></div>
          <div className="bg-cover bg-center sm:bg-image-4 absolute  w-[200px] h-[160px] top-[50px] left-[-170px] inset-0 -z-[1] scale-[90%] -rotate-2 node"></div>
          <div className="bg-cover bg-center sm:bg-image-5 absolute  w-[100px] h-[100px] top-[60px] left-[480px] inset-0 -z-[1] js"></div>
          <div className="bg-cover bg-center sm:bg-image-6 absolute  w-[100px] h-[100px] top-[420px] left-[-90px] inset-0 -z-[1] scale-[180%]  m-0 react"></div>
          <div className="flex flex-col items-center">
            <div className="bg-codechef-logo w-[120px] h-[120px] bg-cover bg-center"></div>
            <h1 className="font-bold text-2xl text-blue-500 ">Login</h1>
          </div>
          
         
          
          <label className=" text-sm font-bold  grid grid-col-1 m-1 ml-6 mt-1">
            Email
          </label>
          <div className="min-w-full">
            <div className="">
            <CgProfile className="absolute left-[60px] mt-2.5 text-gray-600"/>
              <input
                type="text"
                placeholder="some.mail@university.com"
                id="email"
                className={
                  "p-1 m-2 border-2 border-spacing-1  rounded-lg mt-0 ml-6 mr-6 w-[89.5%] focus:outline-none" +
                  " " +
                   `${emailvalid.bg+" "+emailvalid.focuscolor}`
                }
                onChange={emailChange}
              ></input>
              <label
                className={" text-sm font-light  grid-col-1 ml-6 "+`${emailvalid.msgcolor}`}
                style={{}}
                id="emailwarning"
              >
                {emailvalid.msg}
              </label>
            </div>
          </div>
          
          <label className=" text-sm font-bold  grid grid-col-1 m-1 ml-6 mt-1">
            Password
          </label>
          <div className="min-w-full">
            <div className="">
            <MdOutlineLock className="absolute left-[60px] mt-2.5 text-gray-600"/>
              <input
                type="password"
                placeholder="********"
                id="pass"
                className={
                  "p-1 m-2 border-2 border-spacing-1  rounded-lg mt-0 ml-6 mr-6 w-[89.5%] focus:outline-none" +
                  " "  +
                  `${passvalid.bg}`+" "+`${passvalid.focuscolor}`
                }
                onChange={passChange}
              ></input>
            </div>
            <div className="ml-6 p-0.5 w-[89.5%]">
            <label
                className={" text-sm font-light  grid-col-1 text-wrap "+`${passvalid.msgcolor}`}
                style={{}}
                id="passwarning"
              >
                {passvalid.msg}
              </label>
          </div></div>
          <div className="flex align-middle justify-center">
              {email_absent_component&& <label
                className={" text-md font-bold   grid-col-1 m-auto text-red-500"}
                style={{}}
                id="emailexists"
              >
                Email or password is incorrect!!
              </label>}</div>
          <div className="flex align-middle ml-6">
             <label className="font-normal text-blue-500 p-1 flex align-middle justify-center"><input type="checkbox" className=""/> <span className="pl-1"> Remember Me</span></label>
             <span className="ml-auto p-1 text-blue-500 hover:text-blue-400 cursor-pointer mr-5">Forgot Password?</span>
            </div>
          <div className="p-3 pl-[25px] pr-[25px] w-full">
            <button
              className="bg-blue-500 text-white rounded-3xl p-2 w-full hover:bg-blue-400 hover:-translate-y-1 font-bold text-2xl"
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className="p-2 mt-1 mb-2 font-normal w-full  flex align-center justify-center">
              <span className="mr-auto">Don't have an account?</span>
              <Link to="/signup" className="text-blue-500  ml-auto font-bold signuplink hover:text-blue-400 ">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
