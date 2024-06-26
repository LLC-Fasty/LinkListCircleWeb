"use client"
import React from "react";
import Image from "next/image";

const About = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div id="about" className="bg-[#9A3B3B] md:mt-[100px] mt-8 p-6 md:p-8 rounded-[30px] md:rounded-[100px]">
      <div>
        <div>
          <h1 className="mt-6 mb-6 md:mt-[80px] md:mb-10 text-center text-[24px] md:text-[48px] font-black text-[#F2ECBE]">
            What We Focus On
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row"
              role="tablist"
            >
              <li className="last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg md:text-2xl font-medium px-3 md:px-5 py-2 md:py-3 shadow-lg rounded block leading-normal tracking-widest " +
                    (openTab === 1
                      ? "text-[#9A3B3B] bg-[#F2ECBE] rounded-tl-[20px] md:rounded-tl-[50px] border-b-2 border-[#C08261] border-r-[1px] "
                      : "text-[#F2ECBE] border-b-2 border-[#F2ECBE] border-r-[1px]")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  About Us
                </a>
              </li>
              <li className="last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg md:text-2xl font-medium px-3 md:px-5 py-2 md:py-3 shadow-lg rounded block leading-normal tracking-widest " +
                    (openTab === 2
                      ? "text-[#9A3B3B] bg-[#F2ECBE] border-b-2 border-[#C08261] border-r-[1px] "
                      : "text-[#F2ECBE] border-b-2 border-[#F2ECBE] border-r-[1px] border-l-[1px]")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Our Vision
                </a>
              </li>
              <li className="last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg md:text-2xl font-medium px-3 md:px-5 py-2 md:py-3 shadow-lg rounded block leading-normal tracking-widest " +
                    (openTab === 3
                      ? "text-[#9A3B3B] bg-[#F2ECBE] rounded-tr-[20px] md:rounded-tr-[50px] border-b-2 border-[#C08261] border-r-[1px] "
                      : "text-[#F2ECBE] border-b-2 border-[#F2ECBE] border-l-[1px]")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Our Mission
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center items-center">
                        <div className="flex flex-col justify-center items-center">
                          <Image
                            className=" "
                            src="/L.png"
                            alt="hero"
                            width={280}
                            height={390}
                          />
                        </div>
                        <div className="bg-[#F2ECBE] duration-300 hover:scale-105 hover:shadow-xl rounded-[20px] md:rounded-[50px] m-4 md:m-8 ">
                          <div className="mx-4 my-12">
                            <p className="text-[18px] md:text-[34px] font-medium text-[#9A3B3B] leading-[24px] md:leading-[38px]">
                              LinkListCircle is a Blockchain company that entails Game Development, Software Development, and AI/ML Solutions with Blockchain.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center items-center">
                        <div className="bg-[#F2ECBE] duration-300 hover:scale-105 hover:shadow-xl rounded-[20px] md:rounded-[50px] m-4 md:m-8">
                          <div className="mx-4 my-12">
                            <p className="text-[18px] md:text-[46px] font-medium text-[#9A3B3B] leading-[24px] md:leading-[52px]">
                              A Blockchain Ecosystem that is Flexible, Fun and a Fort in itself.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <Image
                            className=" "
                            src="/Vision.png"
                            alt="hero"
                            width={480}
                            height={390}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <div className="">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center items-center">
                        <div className="flex flex-col justify-center items-center">
                          <Image
                            className=" "
                            src="/Mission.png"
                            alt="hero"
                            width={480}
                            height={390}
                          />
                        </div>
                        <div className="bg-[#F2ECBE] duration-300 hover:scale-105 hover:shadow-xl rounded-[20px] md:rounded-[50px] m-4 md:m-8">
                          <div className="mx-4 my-12">
                            <p className="text-[18px] md:text-[26px] font-medium text-[#9A3B3B] leading-[24px] md:leading-[30px]">
                              LLCircle's mission is to build a blockchain ecosystem that consists of games, applications, and many more. Most importantly, we are trying to make everything we build is fun for the user.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-6 md:mt-[20px] mb-10 md:mb-[100px] text-[24px] md:text-[44px] text-center font-semibold text-[#F2ECBE] leading-[28px] md:leading-[74px] hover:animate-pulse">
            "If It's Not Enjoyable, Then It's Not By Us."
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
