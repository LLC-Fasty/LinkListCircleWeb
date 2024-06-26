import React from 'react'
import Image from 'next/image'

export default function AboutOld() {
  return (
    <div id="aboutold" className='bg-[#9A3B3B] flex flex-col justify-center items-center mt-12 mb-12 md:mt-[100px] md:mb-[50px] rounded-[50px] md:rounded-[200px] p-4 md:p-0'>
        <div className='mt-10 md:mt-[100px] text-[32px] md:text-[48px] font-black text-[#F2ECBE]'>
          <h1>About Us</h1>
        </div>
        <div className='mt-2 md:mt-[8px] text-[18px] md:text-[24px] font-medium text-[#E2C799] leading-[22px] md:leading-[26px] text-center'>
          <p>
          LinkListCircle is a Blockchain company that entails Game Development, Software Development, and AI/ML Solutions with Blockchain.
          </p>
        </div>
        <div className='mt-10 md:mt-[50px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 text-center'>
            <div className='bg-[#F2ECBE] duration-300 hover:scale-105 hover:shadow-xl rounded-[20px] md:rounded-[50px] mx-4 md:mx-0 md:ml-[82px]'>
              <div className='mx-4 md:mx-[18px] mb-6 md:mb-[50px]'>
                <h1 className='mt-6 md:mt-[51px] text-[32px] md:text-[48px] font-black text-[#9A3B3B] leading-[34px] md:leading-[50px]'>Our Vision</h1>
                <p className='mt-4 md:mt-[28px] text-[22px] md:text-[46px] font-medium text-[#9A3B3B] leading-[28px] md:leading-[52px]'>
                A Blockchain Ecosystem that is Flexible, Fun and a Fort in itself.
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
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
        <div className='mt-10 md:mt-[50px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 text-center'>
            <div className='flex flex-col justify-center items-center'>
                <Image
                  className=" "
                  src="/Mission.png"
                  alt="hero"
                  width={480}
                  height={390}
                />
            </div>
            <div className='bg-[#F2ECBE] duration-300 hover:scale-105 hover:shadow-xl rounded-[20px] md:rounded-[50px] mx-4 md:mx-0 md:mr-[82px]'>
              <div className='mx-4 md:mx-[18px] mb-6 md:mb-[50px]'>
                <h1 className='mt-6 md:mt-[51px] text-[32px] md:text-[48px] font-black text-[#9A3B3B] leading-[34px] md:leading-[50px]'>Our Mission</h1>
                <p className='mt-4 md:mt-[28px] text-[18px] md:text-[24px] font-medium text-[#9A3B3B] leading-[22px] md:leading-[28px]'>
                LLCircle's mission is to build a blockchain ecosystem that consists of games, applications, and many more. Most importantly, we are trying to make everything we build is fun for the user.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 md:mt-[100px] mb-10 md:mb-[100px] text-[28px] md:text-[44px] text-center font-semibold text-[#F2ECBE] leading-[32px] md:leading-[74px]'>
          <h1>"If It's Not Enjoyable, Then It's Not By Us."</h1>
        </div>
    </div>
  )
}
