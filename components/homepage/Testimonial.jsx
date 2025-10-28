"use client";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
// import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import './Testimonial.css'

import testimonialPhoto from "@/app/_assets/testimonial-bg.png";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    // slidesToScroll: slidesToScroll,
  };

  return (
    <div className="edn__space__top">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url("https://pub-1dbc090f54be4d24be3c4428336248d7.r2.dev/testimonial-bg.png")`,
            // backgroundImage: `url("assets/images/testimonial-bg.png")`
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[100vh] lg:h-[75vh] flex justify-center items-center opacity-40"
        ></div>
        {/* large */}
        <div className="hidden md:block ">
          <div className=" edn__tes__container">
            {/* ------slider */}

            <div className="slider-container   ">
              <Slider {...settings}>
                <div className="edn__tes__lg__slider__parent">
                  <div className="edn__tes__icon__parent">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className="  edn__tes__quote__icon"
                    />

                    {/* Star Rating */}
                    <div className="edn__star__rating">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] edn__base__text  pb-[25px]">
                      This course assisted me in gaining a foothold in the
                      cybersecurity area as a newbie. This is a good place to
                      start for Ethical Hackers who want to pursue Cyber
                      Security as career. Mr. Fardeen's teaching style is
                      excellent; he will make it simple for you to comprehend. I
                      definitely advise anyone interested in getting into cyber
                      security course to take this course as a first step.
                    </p>
                  </div>

                  <div className="edn__tes__author__parent">
                    <div>
                      <p className="edn__tes__author">Chitranjan Singh</p>
                      <p className="edn__tes__author__des">
                        Student at Delhi University
                      </p>
                    </div>
                  </div>
                </div>
                <div className="edn__tes__lg__slider__parent ">
                  <div className="edn__tes__icon__parent">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className="  edn__tes__quote__icon"
                    />

                    {/* Star Rating */}
                    <div className="edn__star__rating">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] edn__base__text  pb-[25px]">
                      Being from a Cyber Security products pre-sale, I was
                      looking for a course which could help me understand the
                      client’s pain point in detail. Ethical Hacking course
                      taught by Mr. Fardeen was more than adequate in gaining a
                      strong foothold in a short span of time. The course was
                      flexible and Fardeen's one-on-one mentoring made it a
                      personalized learning experience.
                    </p>
                  </div>

                  <div className="edn__tes__author__parent">
                    <div>
                      <p className="edn__tes__author">Prem Prakash Dubey</p>
                      <p className="edn__tes__author__des">
                        Presales Project Manager at UnifyCloud LLC
                      </p>
                    </div>
                  </div>
                </div>

                <div className="edn__tes__lg__slider__parent">
                  <div className="edn__tes__icon__parent">
                    <FaQuoteLeft
                      size={45}
                      className="  edn__tes__quote__icon"
                    />

                    <div className="edn__star__rating">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] edn__base__text  pb-[25px]">
                      Fardeen sir is simply the best tutor in Cyber Science and
                      constantly motivates and makes us think differently.
                    </p>
                  </div>

                  <div className="edn__tes__author__parent">
                    <div>
                      <p className="edn__tes__author">Arun Kumar</p>
                      <p className="edn__tes__author__des">
                        Student at Kingdom College, Bangalore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="edn__tes__lg__slider__parent">
                  <div className="edn__tes__icon__parent">
                    <FaQuoteLeft
                      size={45}
                      className="  edn__tes__quote__icon"
                    />

                    <div className="edn__star__rating">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] edn__base__text  pb-[25px]">
                      Good mentor, A warm thanks to Fardeen for amazing training
                      session. Not only the session was very informative but the
                      training material provided was also clear understandable
                      and interesting on live scenario's
                    </p>
                  </div>

                  <div className="edn__tes__author__parent">
                    <div>
                      <p className="edn__tes__author">Tejarsha M</p>
                      <p className="edn__tes__author__des">
                        Information Security & Risk Professional, Wells Fargo
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            {/* text */}

            <div className=" ">
              <h1 className="edn__base__text text-[#FFD300] testimonialSub pb-[25px]">
                Testimonial
              </h1>
              <h1 className="edn__title text-[#FFFFFF]  ">What students say</h1>
              <div className="pb-[35px]">
                <p className="edn__base__text text-[#FFFFFF] pb-[10px]">
                  I Never Thought Learning Could Be This Fun! Studying feels so
                  easy with all the hands-on activities and engaging quizzes.
                  This website made learning so much more fun, and I'm able to
                  track my progress step by step. It's like having a tutor in my
                  pocket 24/7!
                </p>
                <p className="edn__base__text text-[#FFFFFF]  ">
                  {" "}
                  - Adnan Mahmud, College Student
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* phone */}
        <div className="md:hidden block">
          <div className=" edn__lr__space  edn__space__top absolute inset-0 grid grid-cols-1  items-center justify-between gap-x-[30px]">
            {/* text */}

            <div className=" text-center">
              <h1 className="edn__base__text text-[#FFD300]  mb-[5px] ">
                Testimonial
              </h1>
              <h1 className="edn__card__title   text-[#FFFFFF]  ">
                What students say
              </h1>
              <div className="pt-[20px] pb-10">
                <p className="edn__base__text text-[#FFFFFF] text-left ">
                  I Never Thought Learning Could Be This Fun! Studying feels so
                  easy with all the hands-on activities and engaging quizzes.
                  This website made learning so much more fun, and I'm able to
                  track my progress step by step. It's like having a tutor in my
                  pocket 24/7!
                </p>
                <p className="edn__base__text text-[#FFFFFF] text-center pt-[10px]">
                  {" "}
                  - Adnan Mahmud, College Student
                </p>
              </div>

              {/* <button className="text-[#010101] buttonPara"></button> */}
            </div>
            {/* ------slider */}
            <div className="slider-container mb-[50px]">
              <Slider {...settings}>
                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] ">
                  <div className="edn__tes__icon__parent">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[10px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[10px] text-[#FFD300]  gap-x-[6px] pr-[20px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] customPara pr-[5px] pb-[10px]">
                      This course assisted me in gaining a foothold in the
                      cybersecurity area as a newbie. This is a good place to
                      start for Ethical Hackers who want to pursue Cyber
                      Security as career. Mr. Fardeen's teaching style is
                      excellent; he will make it simple for you to comprehend. I
                      definitely advise anyone interested in getting into cyber
                      security course to take this course as a first step.
                    </p>
                  </div>

                  <div className="flex items-center my-[5px]">
                    <div>
                      <p className="text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1">
                        Chitranjan Singh
                      </p>
                      <p className="font-sans font-normal text-sm leading-[10px] text-[#FFFFFF] ">
                        Student at Delhi University
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] ">
                  <div className="edn__tes__icon__parent">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[10px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] customPara pr-[5px] pb-[10px]">
                      Being from a Cyber Security products pre-sale, I was
                      looking for a course which could help me understand the
                      client’s pain point in detail. Ethical Hacking course
                      taught by Mr. Fardeen was more than adequate in gaining a
                      strong foothold in a short span of time. The course was
                      flexible and Fardeen's one-on-one mentoring made it a
                      personalized learning experience.
                    </p>
                  </div>

                  <div className="flex items-center my-[5px]">
                    <div>
                      <p className="text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1">
                        Prem Prakash Dubey
                      </p>
                      <p className="font-sans font-normal text-sm leading-[10px] text-[#FFFFFF]">
                        Presales Project Manager at UnifyCloud LLC
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] ">
                  <div className="edn__tes__icon__parent">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[10px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] customPara pr-[5px] pb-[10px]">
                      Fardeen sir is simply the best tutor in Cyber Science and
                      constantly motivates and makes us think differently.
                    </p>
                  </div>

                  <div className="flex items-center my-[5px]">
                    <div>
                      <p className="text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1 ">
                        Arun Kumar
                      </p>
                      <p className="font-sans font-normal text-sm leading-[10px] text-[#FFFFFF]">
                        Student at Kingdom College, Bangalore
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] ">
                  <div className="edn__tes__icon__parent">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[10px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] customPara pr-[5px] pb-[10px]">
                      Fardeen sir is simply the best tutor in Cyber Science and
                      constantly motivates and makes us think differently.
                    </p>
                  </div>

                  <div className="flex items-center my-[5px]">
                    <div>
                      <p className="text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1 ">
                        Arun Kumar
                      </p>
                      <p className="font-sans font-normal text-sm leading-[10px] text-[#FFFFFF]">
                        Student at Kingdom College, Bangalore
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] ">
                  <div className="edn__tes__icon__parent">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[10px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] customPara pr-[5px] pb-[10px]">
                      Good mentor, A warm thanks to Fardeen for amazing training
                      session. Not only the session was very informative but the
                      training material provided was also clear understandable
                      and interesting on live scenario's
                    </p>
                  </div>

                  <div className="flex items-center my-[5px]">
                    <div>
                      <p className="text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1 ">
                        Tejarsha M
                      </p>
                      <p className="font-sans font-normal text-sm  text-[#FFFFFF]">
                        Information Security & Risk Professional, Wells Fargo
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
