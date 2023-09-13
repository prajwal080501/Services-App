import { useState } from "react";
import Input from "../components/input";

const Auth = () => {
  const [authMode, setAuthMode] = useState("login");

  const handleAuthMode = () => {
    if (authMode === "login") {
      setAuthMode("register");
    } else {
      setAuthMode("login");
    }
  }
  return (
    <div className="bg-gray-100 flex items-center justify-center w-full h-screen">
      <form className="bg-white w-1/2 h-fit rounded-xl drop-shadow-2xl py-8 px-3">
      


        <div className="w-full items-center justify-center pb-8">
          <p className="text-5xl text-center font-extrabold text-black">
            {
              authMode === "login" ? "Login" : "Register"
            }
          </p>
        </div>

        <div className="w-full flex">
          <div className="w-[50%] flex flex-col justify-evenly">
            {authMode == "register" && <Input type="text" label="Username" placeholder="Enter your username" />}
            <Input type="email" label="Email" placeholder="Enter your email" />
            <Input type="password" label="Password" placeholder="Enter your password" />
            <div className="w-full mt-5 flex items-center justify-center">
              <button className="text-lg font-medium bg-blue-500 rounded-md hover:bg-blue-600 duration-200 px-4 py-2 text-white">login</button>
            </div>

            <div className="w-full mt-5 flex items-center justify-center">
              <p className="text-base">{
                authMode === "login" ? "Don't have an account?" : "Already have an account?"
              } <span className="text-blue-500 cursor-pointer" onClick={handleAuthMode}>{
                authMode === "login" ? "Login" : "Register"
              }</span></p>
            </div>
          </div>
          <div className="w-[50%]">
            <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" className="w-full h-full object-contain" alt="login" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Auth;