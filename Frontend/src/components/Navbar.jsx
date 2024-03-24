import React from 'react'

function Navbar() {
  return (
    <div className=' w-full h-[16vh]'>
         <header className='bg-black flex justify-between items-center px-20 text-white w-full h-[8vh]'>
              <h1>Rehan'sNet</h1>
              <ul className='flex items-center justify-center gap-10'>
                 <li>Home</li>
                 <li>Post</li>
                 <li>About</li>
                 <li>Contact</li>
              </ul>
         </header>
         <header className='border-4 flex w-full h-[8vh] border-black'>
               <div className='flex justify-center items-center gap-5 w-[20vw] h-full border-r-4 border-black '>
                    <img src="/LogoImages\facebook.png" width={25}  alt="" />
                    <img src="/LogoImages\linkdin.png" width={25}  alt="" />
                    <img src="/LogoImages\Twitter.webp"  width={25} alt="" />
                    <img src="/LogoImages\instagram.ong.webp" width={25}  alt="" />
               </div>
               <div className='w-[40vw] flex justify-center items-center h-full border-r-4 border-black'>
                  <h1 className='font-bold text-base'>Design and Developed by @Rehan</h1>
               </div>
               <divl className='w-[40vw] flex justify-center items-center h-full border-r-4 border-black'>
                     <button className='w-[20vw] border-r-4 font-bold hover:bg-[#C3FF5B] text-lg border-black h-full '>Profile</button>
                     <button className='w-[20vw] bg-[#C3FF5B] font-bold text-lg h-full'>Connect</button>
               </divl>
         </header>
    </div>
  )
}

export default Navbar