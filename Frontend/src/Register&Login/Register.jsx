import React from 'react'
import  { useState } from 'react';

function Register() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const [errors, setErrors] = useState({});

      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.username.trim()) {
          newErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.password.trim()) {
          newErrors.password = 'Password is required';
        }
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          console.log('Form submitted:', formData);
          setFormData({ username: '', email: '', password: '' });
          setErrors({});
        }
      };

  return (
    <div className='w-auto flex justify-around items-center h-screen bg-white text-black'>
          <div className='w-[45vw] flex justify-center items-center flex-col gap-10'>
              <h1 className='text-5xl text-center font-bold'>Register To <span className='text-[#0000FF]'>Manage</span> Awesome Post And <br /> <span className='text-[#0000FF]'>Stuffs</span></h1>
              <p className='text-center font-semibold'>If You Allready have An Account <span  className='text-[#0000FF]'>Login</span> Here</p>
          </div>
          <div className="w-[45vw] flex justify-center items-center flex-col">
           <h2 className="text-3xl font-bold mb-6">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label  className="block mb-1">Username:</label>
          <input type="text" id="username" placeholder='Enter Username' name="username" className="px-3 py-2 w-[30vw] border rounded-xl bg-[#F8F4F8] focus:outline-none focus:border-blue-500" value={formData.username} onChange={handleChange} />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" placeholder='Enter Email'  className="w-[30vw] px-3 py-2 border rounded-xl focus:outline-none bg-[#F8F4F8] focus:border-blue-500" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input type="password" id="password" placeholder='Enter Password' name="password" className="w-[30vw] px-3 py-2 border rounded-xl focus:outline-none bg-[#F8F4F8] focus:border-blue-500" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button type="submit" className="bg-[#0000FF] mt-4 w-[30vw] text-white px-4 py-2 rounded-xl ">Submit</button>

        <div className='flex mt-5 justify-center gap-6 items-center'>
             <div className='border w-[9vw]'>

             </div>
             <h1 className='font-semibold'>Or Register With</h1>
             <div className='border w-[9vw]'>

             </div>
        </div>
        <div className='flex justify-center mt-7 items-center gap-10 '>
             <div className='w-16 flex justify-center items-center rounded-md h-10 border '>
               <img src="/LogoImages\Google__G__logo.svg.png" alt="img" width={25}/>
             </div>
             <div className='w-16 flex justify-center items-center rounded-md h-10 border '>
             <img src="/LogoImages\Facebook png.webp" alt="img" width={30} />
             </div>
             <div className='w-16 flex justify-center items-center rounded-md h-10  border '>
             <img src="/LogoImages\apple-logo-logo-icons-31.png" alt="img" width={25} />
             </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Register