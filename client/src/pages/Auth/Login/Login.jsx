import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { EyeIcon, EyeOffIcon, UserPlus2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { LOGIN_API_END_POINT } from "@/utils/URLS.js";

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if(!input.username){
        alert("Username is required")
        return
      }
      if(!input.password){
        alert("Password is required")
        return
      }

      const formData = new FormData();
      formData.append("username", input.username)
      formData.append("password", input.password)

      const res = await axios.post(`${LOGIN_API_END_POINT}/login`, formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      if (res.data.success) {
        navigate("/dashboard")
        alert("Login successful")
      } else {
        console.log(res.data.message)
        alert(res.data.message)
      }
    } catch (err) {
      console.log(err)
      alert("An error occured while logging in. Please try again!!")
    }
  }
  return (
    <div className="flex flex-col justify-between gap-20">
      <div className="w-full h-20 sticky top-0 z-50 bg-[#A1AFAF] mx-auto flex justify-between items-center shadow-md px-4 sm:px-8">
        <div>
          <img
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto"
            src={logo}
            alt="Company Logo"
          />
        </div>
        <Link>
          <span className="text-black font-bold flex flex-row justify-between p-2 items-center gap-2">
            Register <UserPlus2 />
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <form onSubmit={submitHandler} className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Login
          </h1>
          <div className="w-full">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </Label>
            <Input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              type="text"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
            />
          </div>
          <div className="w-full relative">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </Label>
            <div className="relative w-full flex items-center">
              <Input
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={input.password}
                onChange={changeEventHandler}
              />
              {/* Eye icon for toggling password visibility */}
              <Button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-black bg-white hover:bg-gray-100 focus:outline-none rounded-full p-1"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </Button>
            </div>
          </div>
          <Button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
