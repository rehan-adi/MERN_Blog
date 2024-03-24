import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );
      console.log("Login successfully:", response.data);
      window.location.href = "/home";
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="lg:max-h-fit lg:py-16 flex justify-center items-center w-auto bg-white text-black">
      <div className="bg-white flex justify-center items-center flex-col w-[90vw] lg:w-[30vw] shadow-2xl h-[70vh]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-center font-semibold mb-7">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border w-[80vw] lg:w-[25vw] py-2 px-3 text-gray-700 leading-tight rounded-xl focus:outline-none bg-[#F8F4F8] focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none bg-[#F8F4F8] border w-[80vw]  lg:w-[25vw] py-2 px-3 text-gray-700 leading-tight  rounded-xl focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center mt-10 justify-between">
            <button
              className="bg-[#C3FF5B] w-[80vw] lg:w-[25vw] text-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="flex mt-5 justify-center gap-7 items-center">
            <div className="border w-[6vw]"></div>
            <h1 className="font-semibold">Or Login With</h1>
            <div className="border w-[6vw]"></div>
          </div>
          <div className="flex justify-center mt-7 items-center gap-10 ">
            <div className="w-16 flex justify-center items-center rounded-md h-10 border ">
              <img
                src="/LogoImages\Google__G__logo.svg.png"
                alt="img"
                width={25}
              />
            </div>
            <div className="w-16 flex justify-center items-center rounded-md h-10 border ">
              <img src="/LogoImages\Facebook png.webp" alt="img" width={30} />
            </div>
            <div className="w-16 flex justify-center items-center rounded-md h-10  border ">
              <img
                src="/LogoImages\apple-logo-logo-icons-31.png"
                alt="img"
                width={25}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <h1>
              Don't have an account{" "}
              <Link to="/register">
                <span className="bg-[#C3FF5B]">Register</span>
              </Link>
              <span> Here</span>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
