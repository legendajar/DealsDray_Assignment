import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { EyeIcon, EyeOffIcon, User2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }
  return (
    <div className="flex flex-col justify-between gap-10">
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
            Login <User2 />
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Register
          </h1>
          {/* Username */}
          <div className="w-full">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </Label>
            <Input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              type="text"
            />
          </div>
          {/* Password */}
          <div className="w-full relative">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </Label>
            <div className="relative w-full flex items-center">
              <Input
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
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
          {/* Confirm Password */}
          <div className="w-full relative">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </Label>
            <div className="relative w-full flex items-center">
              <Input
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                type={showConfirmPassword ? "text" : "password"}
              />
              {/* Eye icon for toggling password visibility */}
              <Button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-black bg-white hover:bg-gray-100 focus:outline-none rounded-full p-1"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </Button>
            </div>
          </div>
          {/* Register Button */}
          <Button className="w-full px-4 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-200">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
