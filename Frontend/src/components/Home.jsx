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

         {/* *******************************Contact******************************** */}

        <div className="bg-black flex justify-around items-center w-full h-[60vh]  mt-14">
                <div>
                    <h1 className="text-white">logo</h1>
                 </div>
                 <div>
                     <ul className="flex flex-col gap-8">
                     <li className='uppercase text-[#C3FF5B] text-base cursor-pointer duration-500'>Home</li>
                     <li className='uppercase text-white hover:text-[#C3FF5B] text-base cursor-pointer duration-500'>Blog Post</li>
                     <li className='uppercase text-white hover:text-[#C3FF5B] text-base cursor-pointer duration-500'>About Us</li>
                     <li className='uppercase text-white hover:text-[#C3FF5B] text-base cursor-pointer duration-500'>Contact</li>
                     <svg preserveAspectRatio="xMidYMid meet" data-bbox="29.908 253.943 510.594 49.94" viewBox="29.908 253.943 510.594 49.94" height="10" width="110" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Decorative graphic">
    <g>
        <path d="M523.227 274.302c-3.379.724-6.834 1.006-10.237.65-2.181-.228-4.386-.666-6.513-.337-1.583.245-3.033-.211-4.557-.149-1.59.065-3.208.293-4.828-.247-1.033-.344-2.107.601-3.252.297-.92-.244-1.699-.976-2.862-.186-.652.443-1.768-.834-2.793-.101-.863.617-1.668-.037-2.52-.162-.945-.138-2.112-.553-2.81.47-1.342-.392-2.326-1.01-3.809-.659-1.971.467-4.118-.482-6.197.033-1.13-.889-2.372.589-3.723-.338-.906-.621-2.427.306-3.779-.043-1.218-.314-2.579-.07-3.877-.072-1.416-.002-2.834.049-4.247-.019-1.941-.094-3.884.259-5.836-.426-.855-.3-2.096-.541-2.772.633l-1.137-1.138c-.604-.253-.847.41-1.254.407-1.868-.014-3.677.699-5.619.06-1.912-.629-3.916.275-5.951.039-1.878-.218-3.936-.623-5.798.395-2.779-1.603-5.754.87-8.606-.461-.884-.412-2.006.44-3.115-.022-1.116-.465-2.175.42-3.315.486-3.587.208-7.222-.631-10.766.459-2.223-1.119-4.413.288-6.673.087-2.132-.19-4.409-.641-6.527.35-1.324-1.252-2.842.243-4.361-.345-.98-.38-2.397-.373-3.706.23-.762.351-2.011-.873-3.082.117-.19.176-.685.039-1.038.021-5.116-.26-10.197.458-15.305.505-2.862.026-5.72.301-8.58.463-1.001 1.259-2.257-.891-3.371.295-.96 1.022-2.119-.58-3.442.067-.894.437-2.505.636-3.65-.312-2.737 1.093-5.7-.207-8.465.777-.625.223-1.373.106-2.064.143-2.059.11-4.121-.218-6.179.442-1.273.408-2.686-.343-3.977-.271-1.399.077-2.754.825-4.232.812-1.416-.013-2.832-.007-4.247-.009-1.298-.002-2.733-.351-3.856.089-1.205.472-2.202-.404-3.142-.047-1.239.471-2.458.424-3.705.439-1.18.014-2.505-.345-3.507.075-1.734.726-3.645-.077-5.269.892-1.644-1.402-3.262.162-4.906.041-1.873-.138-3.758-.097-5.522-.131l-1.108 1.108c-1.789-.618-3.529-.849-5.434-.566-3.355.499-6.752.719-10.135 1.028-1.746.16-3.485.203-5.251.037-1.872-.176-3.772-.045-5.66-.048l-1.098 1.097c-1.536-1.556-3.148.21-4.799-.081-1.837-.324-3.568.68-5.455.52-1.687-.143-3.384-.059-5.118.352-1.851.439-3.853.286-5.797.492-4.244.45-8.541.433-12.818.563-2.728.083-5.42.345-8.086.963-.729.169-1.65.357-2.071-.721l-1.2 1.2c-.367.017-.714.074-1.053.043-3.966-.366-7.883.394-11.822.583-1.438.069-2.929.507-4.395.367-1.646-.158-3.181.647-4.744.469-1.427-.162-2.796.906-4.193.052-2.833 1.356-6.039.475-8.944 1.456-.529.178-1.2.151-1.753.01-3.162-.807-6.166.633-9.292.634-1.399 0-2.919.274-4.393.382-1.331.098-2.7.155-3.969.518-1.904.545-3.842.402-5.594.458-.447.375-.624.648-.383 1.206 1.038.722 2.527.537 3.556.178 1.155-.403 2.332.505 3.312-.376 1.162 1.09 2.267-.427 3.498-.058.791.237 1.729.03 2.653-.301.542-.194 1.529.037 2.377-.053 1.125-.119 2.227-.587 3.498-.154.94.321 2.249-.434 3.181-.105 1.045.369 1.609-.613 2.549-.341 1.72.498 3.487-1.436 5.248.021 1.498-.969 3.312-.602 4.906-.802 1.773-.223 3.71-.253 5.581-.194 1.124.035 2.247.154 3.42-.232.841-.277 1.925.288 2.887.239 1.112-.057 2.148-.633 3.336-.488 1.047.128 2.191.27 3.169-.015 2.636-.768 5.301-.293 7.946-.443 3.511-.199 7.051-.108 10.495-.987.848-.217 1.684.687 2.228.419.679-.335 1.286-.416 1.959-.404 3.675.064 7.321-.152 10.91-.991 1.043.956 2.069-.169 3.129-.026 1.043.141 2.12.039 3.182.034 2.184-.009 4.352-.002 6.527-.441 1.461-.296 2.986.253 4.539.014 1.612-.248 3.298.01 4.946-.063 2.391-.106 4.778-.299 7.164-.479 2.407-.182 4.872.483 7.23-.475.202-.082.468-.024.703-.008 4.786.338 9.521-.862 14.302-.456 1.405.12 2.795-.202 4.151-.271 1.318-.067 2.722-.125 4.079-.219 1.526-.105 3.198.364 4.569-.107 2.103-.722 4.353.154 6.34-.903 3.048.776 6.084-.275 9.145-.023 2.844.234 5.694-.049 8.424-.967.963-.324 1.661.464 2.572.399 2.521-.181 5.079-.055 7.57-.411 4.412-.631 8.86-.082 13.24-.515 4.699-.464 9.454-.167 14.093-.966 3.253-.56 6.477-.332 9.714-.405 1.836-.042 3.6-.556 5.45-.626 1.184-.045 2.408.36 3.461.047 1.231-.365 2.443-.096 3.66-.362 1.237-.271 2.582-.056 3.88-.055 2.123.002 4.424.517 6.321-.134 2.04-.701 4.185.466 6.018-.817 1.279.612 2.486.383 3.841.062 1.105-.262 2.5.635 3.586.346 3.294-.877 6.679.102 9.947-.718 1.091-.274 2.137.682 3.25.299 1.057-.364 2.085-.91 3.128.015 1.858-.954 3.901.43 5.773-.434.195-.09.458-.078.683-.051 5.645.676 11.284-1.468 16.93.017.4.105.596-.281.891-.406.818-.348 1.879.317 2.586-.587 1.662.996 3.618.101 5.187.691.567.681.155.979-.172 1.286-.548.204-.785-.367-1.348-.507l-1.037 1.037c-1.475-.002-2.815.198-4.059-.063-1.236-.26-2.295.811-3.533.149-1.085-.581-2.303.698-3.475-.129l-1.092 1.092c-1.543-.969-3.124-.364-4.771-.129-1.733.248-3.544.184-5.297.011-1.767-.174-3.388.667-5.103.51-1.64-.15-3.302-.376-4.886.051-1.602.431-3.184-.018-4.788.18-1.45.179-2.952.343-4.45.285-1.767-.068-3.728-.498-5.258.105-1.672.659-3.165-.102-4.759.276-1.674.397-3.518.084-5.288.081l-5.345-.008a975.98 975.98 0 0 0-1.283-1.023c-.806.155.116.886-.496 1.134-1.797 1.054-4.068-.418-5.91.879-2.695-1.017-5.406.016-8.075.113-3.822.138-7.715-.085-11.456.493-3.144.486-6.233.175-9.31.194-1.868.012-3.732 1.604-5.611.174-1.762.748-3.774-.018-5.405.577-1.889.689-3.932-.328-5.641.885-1.632-.638-3.26.337-4.895-.004-1.521-.318-3.156-.135-4.537.145-4.837.978-9.792.329-14.6 1.32-.226.047-.471.011-.707.004-6.312-.196-12.587.837-18.906.491-1.473-.081-2.975.276-4.398.323-1.371.045-2.785.197-4.181.157-1.533-.043-3.102-.222-4.595.022-5.029.822-10.117.633-15.155 1.048-5.455.449-10.99.091-16.38 1.346-.51.119-1.065.041-1.643-.292-.538-.31-1.428-.366-2.023-.15-2.153.782-4.356.351-6.532.438-1.649.066-3.318-.127-4.95.047-1.444.154-2.891.316-4.338.439-1.587.135-3.162-.063-4.769.436-1.182.367-2.573.077-3.871.065-3.321-.032-6.623.173-9.841 1.018-.953.25-1.656-.868-2.533-.3-.883.572-1.836.274-2.721.222-1.323-.078-2.61.5-3.899.182-1.279-.316-2.574.435-3.598.232-2.858-.567-5.604.225-8.396.116-1.65-.065-3.582-.551-4.881.122-1.488.771-2.682-.283-4.096.235-1.454.533-3.276.253-4.906.06-1.014-.12-1.57 1.343-2.717.637l-1.618-1.618c-1.065.16-1.293 1.141-2.245 1.531-1.923-.282-4.167.536-6.232-.556l-1.043 1.043c-1.045-.293-1.947-.813-3.183-.105-.694.398-2.046.448-2.898-.384-1.06.327-2.126.978-3.145.909-3.04-.205-5.987.676-8.998.537-1.618-.075-3.102.676-4.751.553-1.454-.109-2.922.034-4.415.312-1.272.237-2.765.113-4.161.115-2.971.005-5.869.716-8.793.897-2.392.148-4.797.441-7.159.476-4.075.06-8.104.627-12.176.705-2.791.054-5.668.084-8.447.841-.987.269-2.112.04-3.552.038-.385-.005-.479-1.152-1.337-1.006l-.083.921c-1.01.384-2.237-.025-3.385.366-1.264.431-2.776.083-4.163.23-1.23.13-2.401.601-3.69.493-1.289-.108-2.598-.092-3.89-.011-1.352.085-2.699.278-4.039.486-1.238.192-2.499-.376-3.75.348-1.072.621-2.556-.455-3.622.633-1.183-1.256-2.048.471-3.188.344-1.228-.137-2.595.495-3.721.436-1.2-.062-2.322.439-3.461.19-1.315-.288-2.371.72-3.694.551a16.5 16.5 0 0 0-4.236 0c-1.089.146-2.009 1.437-3.286.443-1.031.06-1.219 1.364-2.271 1.518l-.338-1.409-4.342-.168c-.644-1.146-2.198-1.406-3.492-2.353.234-1.765-.462-3.621.582-5.475l-2.553-2.553c-.101-1.173 1.726-1.332.848-2.548 3.332-.152 5.307-3.694 9.214-3.176 1.043-1.475 2.938-1.818 5.08-1.898 2.783-.104 5.389-1.463 8.226-1.438.786-1.241 2.137.781 2.917-.496 1.069.284 1.967-.493 2.977-.482 1.132.013 2.539-.63 3.236-.299.988.468 1.969-.874 2.66.294 3.188-1.033 6.47-.294 9.704-.466 2.074-.11 3.91.704 5.779 1.914 1.589-.794 3.883-.059 5.459-2.011 1.748 1.529 3.562-.131 5.452.023 1.521.124 2.972-1.028 4.701-.483.754.238 1.27-1.002 2.352-1.118 1.01-.108 1.897-.606 2.689.384l1.206-1.206c2.388.33 4.702-.558 7.142-.562 2.134-.004 4.238-1.081 6.855-.555.547-.848 2.19-.629 3.037-1.813.938.131 1.798.905 2.848.195.847-.573 1.612.773 2.625.218l.101-.929c.877.597 1.735.208 2.635.019.981-.206 1.978.067 3.009-.447.755-.376 2.038.258 2.751-.146 1.088-.616 1.89-.424 2.808.077.713-.283 1.426-.553 2.128-.849 1.092-.459 2.812.507 3.275-.425.856-1.722 2.323.792 2.912-.713 1.18.002 2.361-.027 3.539.013 1.606.055 3.162-.057 4.561-1.02.574-.05.872.746 1.544.529.835-.269 1.93-.227 2.482-.763.853-.828 1.413.791 2.449-.12.983-.865 2.783-.697 4.292-.638 2.038.08 4.13.307 6.005-.846 1.746.542 3.438-.513 5.109-.06l.777-.777c2.472-.305 4.599.116 6.751.337l-.001-.912c1.425-.814 2.738.393 4.129.322.835.13.887-1.083 1.715-1.01 1.053-.292 1.866.96 3.604.049l.695-.553c.65.2 1.249.834 1.923.497 1.84-.92 4.038-.038 5.836-1.303 1.171-.823 2.342.783 3.64.311l.998-.998c1.152.009 2.331.055 3.508.018 1.043-.033 2.013.558 3.148.068.886-.383 2.076.29 2.954-.549.819 1.074 2.1-.574 2.918.505 2.908-.933 6.048-.382 8.957-1.426 1.453-.522 2.901.375 4.367.481l.922-.738c5.863-.053 11.257-.859 16.946-1.001l.73-.73c1.643-.286 3.156 1.034 4.741.436 1.445-.545 2.857.363 4.183-.017 1.458-.418 3.197-.099 4.158-1.234 2.152-.311 4.121 2.09 6.087-.206 1.63 1.313 3.355-.578 4.865.072 1.715.738 3.298-.053 4.924.118 1.624.17 3.173-1.488 4.831-.161.69-.011.863-.719 1.353-1 1.51-.211 3.009 1.135 4.525.044 1.442.635 2.673-.266 4.005-.452 1.344-.187 2.757.216 4.182-.034 1.214-.213 2.521.147 3.678-.535 1.043 1.05 2.237-.183 3.094.098 2.11.692 3.908.006 5.774-.599 1.089-.353 2.034.731 3.185.144.872-.445 2.064.182 2.922-.622 2.911 1.265 5.771-.755 8.753-.106.997.217 2.287-.123 3.455.113.711.144.926-.596 1.417-.922 1.001.149 1.911.848 3.105.003.964-.682 2.283.952 3.245.371 1.214-.732 2.125-.242 3.178.082l.945-.945c6.046.766 12.09-.739 18.599.304l2.513-.83c.296.287.51.591.977.48l.937-.937c.248.019.49-.023.675.06 1.543.692 2.993 1.227 4.815.619 1.045-.348 2.354.401 3.605.307 2.055-.155 4.154.28 6.165-.5.605-.234 1.063.248 1.664.583.949-1.268 2.337-1.268 3.711-1.038 3.41.571 9.262.643 12.386.077.335-.061.722-.19 1.012-.084 1.53.557 3 .254 4.559.156 1.239-.078 2.767.561 4.177.835.114.022.235.003.36.003l.99-.99c.925.032 1.56.819 1.823.763 1.444.379 2.011-.435 2.873-.302 1.038.159 2.171.242 3.165-.016.938-.244 1.532 1.152 2.522.252.98-.891 1.943.177 2.878.371 1.207.25 2.171-.706 3.542-.189 1.031.389 2.354.81 3.636.653 1.155-.142 2.254-.399 3.496-.072 1.215.32 2.58.027 3.875.086 1.869.085 3.743.372 5.601-.012 1.876-.388 3.738.753 5.604.018 1.228.959 2.587-.337 4.042.381 1.235.61 3.019.252 4.536.095 1.296-.134 2.56.865 3.837.043 1.371 1 2.934.303 4.394.509 1.578.222 3.24.267 4.715.642 1.297.33 2.772-.531 3.896.677.677.727 1.118-.418 1.832-.371.731.047 1.2.598 1.913.588 1.714-.025 3.44.355 5.104.387 3.79.071 7.458.636 11.158 1.34 1.173.223 2.497.467 3.728.257 1.199-.205 1.908.552 2.729 1.066l.919-.537c.708-.025.803.794 1.555.995.21-.102.667-.532.982-.445 4.541 1.256 9.364.907 13.843 2.488 3.639-.599 6.717 1.524 10.105 2.092 2.744.46 5.344 1.445 8.066 1.925 2.183.385 4.121 1.672 6.422 1.673.341 0 .979.625.921 1.505-4.332-.617-8.697-.424-13.021-1.118-2.019-.324-4.135.089-6.161-.546-.566-.177-.723.495-1.097.735-.904-1.402-2.674-.233-3.706-1.257-2.792 1.407-5.589-.723-8.382-.013-1.835-1.165-3.971-.459-5.953-.837-1.797-.343-3.889-.31-5.801-.166-.302.617-1.41.805-.534 1.96 2.054-1.146 4.151-.116 6.269.267.403.073.89.378 1.275.247 2.532-.861 4.943.33 7.417.41 2.807.091 5.608.405 8.197.606l1.218-1.218c.804.964 2.344.825 3.008 2.002zm-293.855 2.066c.198.283.46.325.74.148.047-.03.047-.264 0-.294-.281-.177-.543-.137-.748.146-.198-.283-.46-.325-.74-.148-.047.03-.047.264 0 .294.28.177.542.136.748-.146zm212.598-8.504c-.766-.425-.896-1.189-1.616-.858.013.681.373.958 1.266.666.198.283.46.325.74.148.047-.03.047-.264 0-.294-.28-.177-.542-.136-.39.338zM50.438 296.461c-.196-.012-.534-.06-.541-.029-.084.356-1.069.465-.454.874.486.323.96-.187-1.531.483.196.012.534.06.541.029.084-.356 1.069-.465.454-.874-.486-.323-.96.186 1.531-.483zm443.485-24.633l.038-1.834c-.637.003-1.026.248-1.036.979.213.182.444.38 1.265-.718.198.283.46.325.74.148.047-.03.047-.264 0-.294-.282-.178-.544-.138-1.007 1.719zm-360.131 19.93c-.579-.425-1.174-.311-1.78-.141-.011.518.283.771.88.918.262-.226.578-.499.859-.805.579.425 1.174.311 1.78.141.011-.518-.283-.771-.88-.918-.262.226-.578.5-.859.805zm128.091-17.831l.902.78c.597-.145.89-.397.878-.915-.607-.172-1.202-.287-1.764.122-.198-.283-.46-.325-.74-.148-.047.03-.047.264 0 .294.281.176.543.136.724-.133zm116.258-5.878l1.327 1.327c.686-.338 1.227-.682 1.331-1.476-1.006-1.534-1.823.552-2.761.178-.334-.36-.668-.36-.953-.03-1.979-1.534-3.643-.504-5.524.346 1.908 1.817 1.908 1.817 5.475-.317.335.36.669.36 1.105-.028zm86.836-.18l2.179 2.179c.58-.508 1.355-.722 1.208-1.683-.875-.79-1.98-.232-4.482.508.196.012.534.06.541.029.084-.356 1.069-.465.454-.874-.485-.323-.959.186.1-.159zm-293.108 13.985l.693.693 3.765-.041c-1.614-.924.889-1.096-.019-2.075-.731.76-1.027-.654-1.439-.499-1.166.813-2.518.701-3.064 1.858l-1.504-1.504-1.5 1.5c-1.359-1.582-2.864-.485-4.332-.276-.3.043-.459.018-.406.419l1.604 1.604 2.372.004c-.117-.746.175-1.313.762-1.751.331.448.971.033 1.186.277.82.93 1.287.275 1.882-.209zm152.159-11.907c-1.869-1.678-3.529.28-5.32-.023.121 1.005-.395 1.913.893 2.41.664-.378 1.033-1.386 1.943-1.596.428.134.667.674 1.214.479.396-.396.806-.806 1.18-1.407l2.534 2.534.068-.53 1.375.675c-.35-.83-.695-1.255-.641-1.618.072-.473.841-.843-.086-1.62-.841.834-2.098.355-3.16.696zm103.07-2.796c-1.059.11-2.047-.548-3.231.091-.768.415-1.995-1.064-3.026.156.078 1.009 1.015 1.371 1.63 2.059.604-.219 1.392.249 1.858-.539l.028-1.02c.625-.225.872.764 1.517.477.408-.408.816-.816 1.547-1.135.845.213-.132 2.063 1.433 2.185.681-.705.838-1.474.048-2.514-.436.096-.996.22-1.804.24zm-157.686 6.272c.724.552 1.14 1.471 1.994 1.78.767-.161.904-1.216 1.788-1.005l.975.975c1.268.183 2.45-.776 3.577-.02.65-.782.308-1.808 1.183-2.222.571.846 1.353.946 2.746.465-1.021-.265-.955-1.379-2.036-1.175l-.715.715c-3.211-.582-6.398-.73-9.515.486-.198-.283-.46-.325-.74-.148-.047.03-.047.264 0 .294.28.179.542.138.743-.145zm37.544-1.445l1.003 1.003c.757-.757 1.378-1.378 1.961-2.188l2.124 2.124 4.047-1.716c.456.229.626.903 1.144.34-.276-.824-1.025-1.216-1.546-1.805-1.678 1.149-3.806-.139-5.731 1.245-.615-.535-1.342-.162-2.013-.242-.735-.088-.847-1.168-1.724-1.013l-1.02 1.02c-1.219-.167-2.471.142-3.741-.231-1.188-.349-2.538.852-3.636-.358l-1.804 1.632c-1.557-1.214-3.474.132-4.898-1.338-.288 1.706-2.118.682-2.516 2.187.978.127.408.983.708 1.64 2.514-.543 5.308.877 7.669-1.063.651.554 1.421.576 2.214.466.054-.439-.161-.944.537-1.431l1.595.395c-.002-.004-.345.524.373 1 1.063-.684 2.257.264 3.521.066l1.733-1.733zm-125.024 10.171c.783-.239 1.425.203 1.877-.342.731-.881 1.12.589 1.189.551l-.004-2.821c-1.019-.066-2.125.839-3.818.388.61.858 1.086 1.267.756 2.224zm308.404-12.26c-1.536-.221-2.529-1.099-3.821-.872-.257.045-.455.425-.641.61.212.733.717 1.026 1.179 1.388.941-.275 2.108.527 3.283-1.126zm-298.213 9.469c1.28.812 2.244 1.048 3.225 1.205.623.1 1.166-.025 1.27-1.068-1.317-.347-2.511-1.604-4.495-.137zm-46.594 10.645c-.285.472-.969.634-.986.947l2.807.407c.116-.523.794-.581.65-1.383-.813.389-1.671.692-2.471.029zm291.253-22.588c.362 1.023 1.075 1.63 1.934 2.063.916-.574.672-1.328.55-2.059l-2.484-.004zm-44.569.878c.721.336.972 1.394 2.416 1.654-.934-.912-.542-2.004-1.321-2.595-.523-.057-.841.191-1.095.941zm-109.29 4.293c.823.668.827.68 2.121.216.104-.037.093-.393.061-.236l-2.182.02zm-94.095 8.142c.819-.591 1.005-1.032.192-1.681-.354.291-1.006-.323-1.541.332l1.349 1.349zm241.357-12.654c.532.461.636 1.344 1.704 1.336l.593-.82c-1.065.181-.976-.977-1.646-1.167l-.651.651zm-226.089 11.015c.695.019 1.038-.304.987-1.018-.266-.193-.398-.607-.873-.477-.434.164-.688.476-.609 1l.495.495zm55.098-5.577l-.587.866c.208.585.524.838 1.045.784.699-.578.715-1.086-.458-1.65zm-172.519 17.21c-1.159 1.071-.753 1.493.299 1.771l.595-.877-.894-.894zm298.328-21.878c.341-.509 1.373-.504 1.262-1.535-.835.197-1.254.663-1.262 1.535zm-129.841 5.713l-1.583-.582c.121.882.381 1.176.973 1.192l.61-.61zm77.569-5.405c.634 1.316 1.14 1.306 1.414.67l-1.414-.67zm-85.077 5.895l-1.583-.582c.121.882.381 1.176.973 1.192l.61-.61zm106.109-5.642c-.635-1.328-1.139-1.295-1.414-.67l1.414.67zM200.1 278.48l-1.583-.582c.121.882.381 1.176.973 1.192l.61-.61zM45.416 297.539c-.536-.268-1.041-.246-1.586-.057.272.702.586.95 1.104.879.185-.253.582-.383.482-.822zm62.783-8.595c.114-.367 1.161-.17.631-1.008-.544.06-.838.319-.631 1.008zm136.941-13.299c.024-.702-.31-1.037-1.013-1.013-.023.703.311 1.037 1.013 1.013zm-17.533 1.258c-.367-.116-.173-1.162-1.01-.634.061.544.322.839 1.01.634zm-86.081 14.607c.702.026 1.036-.307 1.01-1.01-.703-.025-1.036.308-1.01 1.01zm37.531-10.457c.702.026 1.036-.307 1.01-1.01-.703-.025-1.036.308-1.01 1.01z" fill="#C3FE5C" data-color="1"></path>
        <path d="M462.757 275.961l1.56 1.56c-1.428-.133-2.462.173-3.835-.672a1350.5 1350.5 0 0 1 2.275-.888z" fill="#C3FE5C" data-color="1"></path>
        <path d="M195.068 253.943c-.075.324-.059.591-.184.733-.447.504-.942.965-1.361 1.383-.679-.03-.947-.322-1-.873.463-1.199 1.855-.377 2.545-1.243z" fill="#C3FE5C" data-color="1"></path>
        <path d="M470.164 276.226l-1.5 1.5-1.504-1.504 3.004.004z" fill="#C3FE5C" data-color="1"></path>
        <path d="M313.964 287.062l1.333 1.333c-1.155.183-1.155.183-1.931-.018-.352-.538.042-.818.598-1.315z" fill="#C3FE5C" data-color="1"></path>
        <path d="M264.188 291.194l-.494-.494c-.08-.524.174-.837.608-1 .475-.13.607.284.873.477.051.712-.292 1.036-.987 1.017z" fill="#C3FE5C" data-color="1"></path>
        <path d="M458.894 275.953l.494.495c.079.524-.173.837-.617 1.003-.467.128-.598-.287-.865-.479-.05-.715.293-1.038.988-1.019z" fill="#C3FE5C" data-color="1"></path>
        <path d="M304.374 288.289c-.561 1.171-1.069 1.154-1.648.454-.056-.522.195-.837.78-1.043.213.143.479.324.868.589z" fill="#C3FE5C" data-color="1"></path>
        <path d="M65.94 301.831c.035-.669.509-1.178.995-.855.616.409-.368.519-.454.874-.008.034-.344-.011-.541-.019z" fill="#C3FE5C" data-color="1"></path>
        <path d="M259.179 290.174c.026.702-.307 1.036-1.01 1.01-.025-.703.308-1.036 1.01-1.01z" fill="#C3FE5C" data-color="1"></path>
        <path d="M527.016 274.569c-.777-.014-.95-.392-1.126-.846.825-.369.999.095 1.126.846z" fill="#C3FE5C" data-color="1"></path>
        <path d="M204.606 293.096c.702-.024 1.037.31 1.013 1.013-.702.024-1.036-.31-1.013-1.013z" fill="#C3FE5C" data-color="1"></path>
        <path d="M524.49 273.638c-.034.658-.509 1.168-.995.845-.615-.409.369-.518.454-.874.007-.03.344.018.541.029z" fill="#C3FE5C" data-color="1"></path>
        <path d="M472.413 276.484c.072.396-.095.563-.491.491-.072-.396.095-.563.491-.491z" fill="#C3FE5C" data-color="1"></path>
        <path d="M470.169 276.226c.197-.283.459-.324.74-.146.048.03.048.265 0 .294-.281.177-.543.135-.74-.148z" fill="#C3FE5C" data-color="1"></path>
        <path d="M67.208 301.157c.197-.283.459-.324.74-.146.048.03.048.265 0 .294-.28.177-.542.135-.74-.148z" fill="#C3FE5C" data-color="1"></path>
        <path d="M467.156 276.221c-.197.283-.459.324-.74.146-.048-.03-.048-.265 0-.294.28-.177.542-.135.74.148z" fill="#C3FE5C" data-color="1"></path>
        <path d="M306.956 271.973c-.283-.198-.325-.46-.148-.74.03-.047.264-.047.294 0 .178.281.137.543-.146.74z" fill="#C3FE5C" data-color="1"></path>
    </g>
</svg>
                     </ul>
                 </div>
                 <div>
                 <form >
                <div className="mb-4">
                    <label htmlFor="fullName" className="block  font-bold mb-2"></label>
                    <input type="text" id="fullName" name="fullName"  required className="w-full p-2 border-white border-2 px-4 focus:border-[#C3FF5B] text-white placeholder-white outline-none hover:border-[#C3FF5B] bg-black" placeholder="FULL NAME " />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block  font-bold mb-2"></label>
                    <input type="email" id="email" name="email"  required className="w-full p-2 px-4 border-2 bg-black outline-none text-white placeholder-white  border-red-600" placeholder="EMAIL" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-white font-bold mb-2"></label>
                    <input type="text" id="message" name="message" required className="w-full p-2 border-2 border-white focus:border-[#C3FF5B] text-white placeholder-white  hover:border-[#C3FF5B] px-4 outline-none py-6 bg-black" placeholder="MESSAGE" />
                </div>
                <button type="submit" className=" border-[#C3FF5B] border-2 w-full text-[#C3FF5B] font-bold py-2 px-4 mt-2 rounded hover:bg-[#C3FF5B] hover:text-black duration-500">Contact</button>
            </form>
                 </div>
             </div>
    </div>
  );
}

export default Home;
