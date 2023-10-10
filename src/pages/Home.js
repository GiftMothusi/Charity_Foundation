import React from "react";
import Typed from "react-typed";

import edu1 from "../assets/education/edu1.png";
import sport2 from "../assets/sports/sport2.png";
import art4 from "../assets/art/art4.png";
import charity from "../assets/video/charity.mp4";

const HeroBanner = () => {
  return (
    <>
      <div className="text-white bg-hero-pattern bg-auto ">
        {/*Add overlaying opacity to the hero banner section*/}
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <div className="max-w-[800px] mt-[-94px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="uppercase text-white font-semibold p-2">
              Welcome to Sokani Foundation
            </p>
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-[#d9d9d9]">
              {" "}
              Growing the next Generation of leaders
            </h1>

            <div className="flex justify-center p-5">
              <Typed
                className="md:text-4xl sm:text-3xl font-semibold pl-2 text-[#d9ff66]"
                strings={[
                  "Enriching South African Youth through Education, Sports and Art",
                ]}
                typeSpeed={100}
                backSpeed={120}
                loop
              />
            </div>
            <p className="md:text-2xl text-xl font-bold text-white">
              Lend a helping hand get involved
            </p>
          </div>
        </div>
      </div>
      <div class=" bg-white w-full sm:w-full grid place-items-center pb-10">
        <div class=" flex flex-col sm:flex-row w-5/6 sm:w-1/2 px-10 py-10  h-[64] sm:h-auto bg-[#333333] backdrop-brightness-50 rounded-lg mt-[-50px] sm:mt-[-45px] ">
          <div className="flex w-full sm:w-1/2 p-2 sm:p-7 text-white mt-[-30px] sm:mt-[0px]">
            <h1 className="font-extrabold p-2 px-15 text-xl sm:text-3xl text-center tracking-wide">
              Quality academic and social education for African children
            </h1>
          </div>
          <div className="flex p-3 w-full sm:w-1/2 mt-[-15px] sm:mt-[0px]">
            <p className="py-5 px-2 mr-[-5] ml-[-5] shrink-[-10] sm:shrink-0 sm:w-full text-white text-center text-sm sm:text-xl sm:text-left tracking-wide">
              Bridge Africa Foundation works to promote quality academic and
              social education for Africa children and youths. We achieve
              success through educational programs in collaboration with
              established partners who advance educational learning
            </p>
          </div>
        </div>
      </div>
      {/******************* BEGINNING OF CARDS SECTION********************************/}
      <div class="bg-gray-100">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-12">
              <h5 class="text-xl md:text-xl text-[#4ddbff] font-extrabold mb-1">
                WHAT WE DO
              </h5>
              <h1 class="text-4xl md:text-5xl text-gray-700 font-semibold">
                Channeling and sharing a wealth of resources and knowledge with
                our network
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={edu1}
                    alt="blog"
                  />
                  <div class="p-6 hover:bg-[#e6e6e6] hover:text-gray transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-cyan-400 mb-1">
                      October 29, 2021
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">Education</h1>
                    <p class="leading-relaxed mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam modi, expedita quos doloremque autem ipsum itaque
                      incidunt ipsam reprehenderit fuga! Dolores quisquam eius
                      cum accusamus?
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        href={{}}
                        class="text-[#4ddbff] inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Read More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={sport2}
                    alt="blog"
                  />
                  <div class="p-6 hover:bg-[#e6e6e6] hover:text-gray transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-cyan-400 mb-1">
                      October 29, 2021
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">Sports</h1>
                    <p class="leading-relaxed mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam modi, expedita quos doloremque autem ipsum itaque
                      incidunt ipsam reprehenderit fuga! Dolores quisquam eius
                      cum accusamus?
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        href={{}}
                        class="text-[#4ddbff] inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Read More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={art4}
                    alt="blog"
                  />
                  <div class="p-6 hover:bg-[#e6e6e6] hover:text-gray transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-cyan-400 mb-1">
                      October 29, 2021
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">Arts</h1>
                    <p class="leading-relaxed mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam modi, expedita quos doloremque autem ipsum itaque
                      incidunt ipsam reprehenderit fuga! Dolores quisquam eius
                      cum accusamus?
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a
                        href={{}}
                        class="text-[#4ddbff] inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Read More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/******************** END OF CARD SECTION***************************/}
      {/*********************BEGINNING OF VIDEO SECTION********************/}
      <div class=" grid h-screen place-items-center p-10">
        <video class="w-3/4" controls>
          <source src={charity} type="video/mp4" />
        </video>
      </div>
      {/****************END OF VIDEO SECTION*******************************/}

      {/****************BEGINNING OF QUOTE BANNER SECTION******************/}
      <div class="text-white bg-qoute-pattern bg-cover">
        <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <div className="max-w-[800px] mt-[-94px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="uppercase text-white font-bold p-2">
              Sokani Foundation
            </p>
            <h2 className="md:text-6xl sm:text-5xl text-xl font-bold md:py-6 text-[#d9d9d9]">
              {" "}
              "Bitter are the roots of study, but how sweet their sweet." - Cato
              the Younger
            </h2>

            <p className="md:text-2xl text-xl font-bold text-white">
              Lend a helping hand get involved
            </p>
          </div>
        </div>
      </div>

      {/****************END OF QUOTE BANNER SECTION************************/}
    </>
  );
};

export default HeroBanner;
