import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        console.log("FormData:", formData);
        const response = await axios.post(
          "http://localhost:3000/register",
          JSON.stringify(formData),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Registration successful:", response.data);
      } catch (error) {
        console.log("There is an Error", error);
      }
    }
  };

  return (
    <div className="w-auto flex justify-around flex-col lg:flex-row items-center max-h-fit py-10 lg:max-h-fit lg:py-16 bg-white text-black">
      <div className="lg:w-[45vw] max-h-fit lg:py-0 py-10 flex justify-center items-center flex-col gap-10">
        <h1 className="lg:text-5xl text-4xl text-center font-bold">
          Register To <span className="text-[#C3FF5B]">Manage</span> Awesome
          Post And <br /> <span className="text-[#C3FF5B]">Stuffs</span>
        </h1>
        <p className="text-center font-semibold">
          If You Already have An Account{" "}
          <Link to="/login" className="text-[#C3FF5B]">
           <span> Login </span>
          </Link>
          Here
        </p>
      </div>
      <div className="lg:w-[45vw] w-[90vw] lg:py-0 py-10 flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold mb-6">User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              name="username"
              className="px-3 py-2 w-[80vw] lg:w-[30vw] border rounded-xl bg-[#F8F4F8] focus:outline-none shadow appearance-none"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className=" w-[80vw]  lg:w-[30vw] px-3 py-2 border rounded-xl focus:outline-none bg-[#F8F4F8] shadow appearance-none "
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              className="lg:w-[30vw] px-3 w-[80vw]  py-2 border rounded-xl focus:outline-none shadow appearance-none bg-[#F8F4F8] "
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#C3FF5B] mt-4 w-[80vw]  lg:w-[30vw] text-balck font-bold px-4 py-2 rounded-xl "
          >
            Submit
          </button>

          <div className="flex mt-5 justify-center gap-6 items-center">
            <div className="border w-[9vw]"></div>
            <h1 className="font-semibold">Or Register With</h1>
            <div className="border w-[9vw]"></div>
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
        </form>
      </div>
    </div>
  );
}

export default Register;
