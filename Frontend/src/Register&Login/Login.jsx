import React, { useState } from 'react'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({...formData, [e.target.email]: e.target.value})
      };

  return (
    <div className='h-screen flex justify-center items-center w-auto bg-white text-black'>
       <div className='bg-white flex justify-center items-center flex-col w-[30vw] shadow-2xl h-[70vh]'>
         <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-center font-semibold mb-7">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border w-[25vw] py-2 px-3 text-gray-700 leading-tight rounded-xl focus:outline-none bg-[#F8F4F8] focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none bg-[#F8F4F8] border  w-[25vw] py-2 px-3 text-gray-700 leading-tight  rounded-xl focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mt-10 justify-between">
            <button
              className="bg-[#0000FF] w-[25vw] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className='flex mt-5 justify-center gap-7 items-center'>
             <div className='border w-[6vw]'>

             </div>
             <h1 className='font-semibold'>Or Login With</h1>
             <div className='border w-[6vw]'>

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

export default Login