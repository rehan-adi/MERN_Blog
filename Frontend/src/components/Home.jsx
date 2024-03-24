import React from "react";

function Home() {
  return (
    <div className="w-full px-40 py-36 max-h-fit bg-white ">
      <div className="mt-10">
        <h1 className="text-8xl font-extrabold">
          Keep Your <br /> Dreams Alive
        </h1>
        <p className="font-semibold mt-6 text-lg">
          All Motivational Post Is Here
        </p>
      </div>
      <div className="max-h-fit w-full flex justify-between bg-white border-t-2 mt-10 border-black">
        <div className="flex w-[50vw] flex-col">
          <div className="flex">
          <div className="w-[3vw] bg-black h-[13vh]"></div>
          <div className="ml-5">
            <h1 className="text-5xl font-extrabold">
              FEATURED <br /> POST
            </h1>
            <p className="font-semibold mb-8">The Secret For Positive Thinking</p>
            <div  className="border-b-2 border-black w-[40vw] mb-3">

            </div>
          </div>
          </div>
          <div className="flex gap-6">
             <img src="https://static.wixstatic.com/media/c22c23_a31ea2b671fe4cddbbb5728c9310c756~mv2_d_5659_3773_s_4_2.jpg/v1/fill/w_331,h_443,fp_0.50_0.50,q_90,enc_auto/c22c23_a31ea2b671fe4cddbbb5728c9310c756~mv2_d_5659_3773_s_4_2.jpg" alt="" />
             <img src="https://static.wixstatic.com/media/c22c23_a31ea2b671fe4cddbbb5728c9310c756~mv2_d_5659_3773_s_4_2.jpg/v1/fill/w_331,h_443,fp_0.50_0.50,q_90,enc_auto/c22c23_a31ea2b671fe4cddbbb5728c9310c756~mv2_d_5659_3773_s_4_2.jpg" alt="" />
          </div>
        </div>
        <div className="mt-3">
           <img src="https://static.wixstatic.com/media/0b340f_9bdc847c6dbb449b885654c9aecfc026~mv2_d_1800_1999_s_2.jpg/v1/crop/x_215,y_56,w_1155,h_1569/fill/w_571,h_776,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1026164422_edited_edited.jpg" alt="" width={450} />
        </div>
      </div>

      {/* **************************************Quots********************************************* */}
         
         <div className="">
              <div className="border-t-2 border-black mt-16 flex  border-b-2">
                    <div className="w-[3vw] bg-black h-[8vh]">

                    </div>
                    <div className="ml-5">
                        <h1 className="text-5xl uppercase font-extrabold">
                            Quotes
                        </h1>
                        <p className="font-semibold mt-6 text-lg">
                            Quot's You Need To Read
                        </p>
                    </div>
              </div>
         </div>

         <div className="flex justify-between mt-9 items-center">
              <div className="bg-[#C3FF5B] flex  px-5 justify-center items-center gap-6 flex-col w-[21vw] h-[35vh]">
                     <h1 className="text-lg text-center font-semibold">"Your time is limited, don't waste it living someone else's life."</h1>
                     <h3 className="font-bold">Steve Jobs</h3>
              </div>
              <div className="bg-[#C3FF5B] flex justify-center items-center gap-6 flex-col px-5 w-[21vw] h-[35vh]">
                    <h1 className="text-lg text-center font-semibold">"I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying."</h1>
                     <h3 className="font-bold">Jeff Bezos</h3>
              </div>
              <div className="bg-[#C3FF5B]  px-5 flex justify-center items-center flex-col gap-6 w-[21vw] h-[35vh]">
                      <h1 className="text-lg text-center font-semibold">"The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."</h1>
                      <p  className="font-bold">Mark Zuckerberg</p>
              </div>
         </div>



         {/* *********************Motivation************************************** */}

         <div className="">
              <div className="border-t-2 border-black mt-16 flex  border-b-2">
                    <div className="w-[3vw] bg-black h-[8vh]">

                    </div>
                    <div className="ml-5">
                        <h1 className="text-5xl uppercase font-extrabold">
                          MOTIVATION
                        </h1>
                        <p className="font-semibold mt-6 text-lg">
                            What Makes You Motivate
                        </p>
                    </div>
              </div>
         </div>

         <div className="flex justify-between flex-col gap-6 mt-9 items-center">
              <div className="bg-[#C3FF5B] flex  px-16 justify-center items-center gap-6 flex-col w-[80vw] h-[65vh]">
                  <h1 className="text-center font-semibold text-xl">This motivational message is for people who facing challenges, setbacks, or moments of doubt in life.</h1>

                     <p className="text-sm font-semibold mt-6">Life is an incredible journey filled with twists, turns, and unexpected challenges. Along the way, we encounter moments of triumph and times of struggle. It's during these challenging times that our true strength and resilience are tested. Remember, every setback is an opportunity for growth. Every failure is a lesson in disguise, guiding us closer to our goals. Embrace the challenges with courage, knowing that they are shaping you into the person you are meant to become.</p>

                     <p className="text-sm font-semibold">Believe in yourself and your abilities. You possess within you the power to overcome any obstacle that stands in your way. Trust in your journey, and never underestimate the strength of your dreams. Stay focused, stay determined, and never lose sight of the vision you have for your life. Your potential is limitless, and with dedication and perseverance, you can achieve anything you set your mind to. So, rise above the doubts and fears. Take bold steps forward, knowing that greatness awaits those who dare to chase their dreams. The path may not always be easy, but it is undoubtedly worth it.</p>

                     <p className="text-sm font-semibold">You are capable, you are worthy, and you are destined for greatness. Let your passion ignite the fire within you, and let nothing dim the light of your dreams. The world is waiting for you to shine."</p>
              </div>

              <div className="bg-[#C3FF5B] flex  px-16 justify-center items-start gap-6 flex-col w-[80vw] h-[75vh]">
                  <h1 className="text-center font-semibold text-xl">This motivational message is for people who facing challenges, setbacks, or moments of doubt in life.</h1>

                     <p className="text-sm font-semibold mt-6">Starting your own business isn't just about chasing profits; it's about pursuing your passions, solving problems, and making a difference in the lives of others. It's about daring to dream big and having the courage to turn those dreams into reality. Are you ready to embark on the thrilling adventure of entrepreneurship? It's time to seize the opportunity to build something extraordinary, just like visionaries such as Elon Musk and Steve Jobs did.</p>

                     <p className="text-sm font-semibold">Think of Elon Musk, who defied all odds to revolutionize multiple industries with ventures like SpaceX, Tesla, and Neuralink. Despite facing numerous setbacks and skeptics, Musk remained unwavering in his vision to change the world for the better. Starting your own business isn't just about chasing profits; it's about pursuing your passions, solving problems, and making a difference in the lives of others. It's about daring to dream big and having the courage to turn those dreams into reality, just like Musk and Jobs did. Yes, there will be challenges along the way – obstacles to overcome, setbacks to endure, and doubts to silence. But remember, every successful entrepreneur has faced similar hurdles and emerged stronger on the other side.</p>

                     <p className="text-sm font-semibold">Believe in yourself and your vision. Trust in your abilities to innovate, adapt, and persevere, even in the face of adversity. Surround yourself with a supportive network of mentors, advisors, and fellow entrepreneurs who can offer guidance and encouragement when you need it most. So, what are you waiting for? The world is yours to conquer. Take that leap of faith, chase your dreams with passion and purpose, and watch as your entrepreneurial journey unfolds before your eyes.</p>

                     <p className="text-sm  font-semibold">Your time is now. Your destiny awaits. Let's make it happen."</p>
              </div>
         </div>


         {/* *****************************Feature********************************** */}

         <div className="mt-16">
             <div className="w-full border-t-2 border-black">

             </div>
             <div className="flex ">
              <div className="w-[3vw] bg-black h-[13vh]">

              </div>
                 <h1 className="text-5xl ml-5 mt-3 font-extrabold">AS FEATURED IN</h1>
             </div>

             <div className="flex justify-around items-center">
                <img src="https://static.wixstatic.com/media/0b340f_03f0187ee84b4573a8ff2cd2fde479ae~mv2.png/v1/fill/w_218,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%202%20copy%206.png" alt="" width={190} />
                <img src="https://static.wixstatic.com/media/0b340f_3a898e9cc4fd4b5eadc789d8f6f47521~mv2.png/v1/fill/w_206,h_203,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%202%20copy%205.png" alt="" width={150} />
                <img src="https://static.wixstatic.com/media/0b340f_a842f578d5754db8b154bbefd00485c0~mv2.png/v1/fill/w_206,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%202%20copy%207.png" alt="" width={150} />
                <img src="https://static.wixstatic.com/media/0b340f_7f73b1169eea4ac78b85db01e0847c4b~mv2.png/v1/fill/w_219,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%202%20copy%204.png" alt="" width={150} />
             </div>

         </div>

    </div>
  );
}

export default Home;
