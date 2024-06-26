import React from 'react'
import Image from 'next/image'

export default function Services() {
  return (
    <div id="services">
      <div className='flex flex-col justify-center items-center mt-12 mb-12 md:mt-[50px] rounded-[50px] md:rounded-[200px] p-4 md:p-0'>
        <h1 className='mt-10 text-[32px] md:text-[48px] font-black text-[#9A3B3B] leading-[52px]'>Services</h1>
        <div className='mt-6 md:mt-[24px] text-[18px] md:text-[24px] font-medium text-[#C08261] leading-[22px] md:leading-[28px] text-center'>
          <p>
            At LinkListCircle, we provide blockchain solutions that connect blockchain, gaming, software, and AI/ML solutions.
          </p>
          <p>
            LinkListCircle also uses AI to provide insights that enhance ecosystems and user engagement.
          </p>
          <p>
            Our blockchain solutions focus on transparency, security, collaboration, and simplicity.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='mt-[80px] duration-300 hover:scale-105'>
          <div className="flex flex-col items-center bg-[#C08261] rounded-[50px] md:flex-row">
            <div className='w-full md:w-[260px] p-6 flex justify-center'>
              <Image
                className="hover:animate-spin object-cover lg:w-full"
                src="/BD.png"
                alt="Blockchain Development"
                width={176}
                height={171}
              />
            </div>
            <div className="flex flex-col w-full justify-between rounded-r-[50px] bg-[#9A3B3B]">
              <div className='mt-[50px] md:mt-[100px] mx-[15px] mb-[50px] md:mb-[100px]'>
                <h1 className='text-[24px] md:text-[36px] font-semibold text-[#F2ECBE] leading-[28px] md:leading-[38px]'>Blockchain Development</h1>
                <p className='text-[16px] md:text-[20px] mt-[6px] font-medium text-[#E2C799] leading-[24px] md:leading-[28px]'>
                  At LLCircle, We do Blockchain Research and Development. Our motive is to create a Blockchain Ecosystem that is Flexible, Fun and a Fort in itself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <div></div>
        <div className='mt-[80px] duration-300 hover:scale-105'>
          <div className="flex flex-col items-center bg-[#C08261] rounded-[50px] md:flex-row">
            <div className='w-full md:w-[260px] p-6 flex justify-center'>
              <Image
                className="hover:animate-spin object-cover lg:w-full"
                src="/GD.png"
                alt="Game Development"
                width={176}
                height={171}
              />
            </div>
            <div className="flex flex-col w-full justify-between rounded-r-[50px] bg-[#9A3B3B]">
              <div className='mt-[50px] md:mt-[100px] mx-[15px] mb-[50px] md:mb-[100px]'>
                <h1 className='text-[24px] md:text-[36px] font-semibold text-[#F2ECBE] leading-[28px] md:leading-[38px]'>Game Development</h1>
                <p className='text-[16px] md:text-[20px] mt-[6px] font-medium text-[#E2C799] leading-[24px] md:leading-[28px]'>
                  Developing immersive games that incorporate blockchain models into the gameplay. LLCircle’s games are built to be part of a unified blockchain ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-[80px] duration-300 hover:scale-105'>
          <div className="flex flex-col items-center bg-[#C08261] rounded-[50px] md:flex-row">
            <div className='w-full md:w-[260px] p-6 flex justify-center'>
              <Image
                className="hover:animate-spin object-cover lg:w-full"
                src="/SD.png"
                alt="Software Development"
                width={176}
                height={171}
              />
            </div>
            <div className="flex flex-col w-full justify-between rounded-r-[50px] bg-[#9A3B3B]">
              <div className='mt-[50px] md:mt-[100px] mx-[15px] mb-[50px] md:mb-[100px]'>
                <h1 className='text-[24px] md:text-[36px] font-semibold text-[#F2ECBE] leading-[28px] md:leading-[38px]'>Software Development</h1>
                <p className='text-[16px] md:text-[20px] mt-[6px] font-medium text-[#E2C799] leading-[24px] md:leading-[28px]'>
                  Developing software solutions that are designed to integrate with and enhance our blockchain ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <div></div>
        <div className='mt-[80px] duration-300 hover:scale-105'>
          <div className="flex flex-col items-center bg-[#C08261] rounded-[50px] md:flex-row">
            <div className='w-full md:w-[260px] p-6 flex justify-center'>
              <Image
                className="hover:animate-spin object-cover lg:w-full"
                src="/AIML.png"
                alt="Game Development"
                width={176}
                height={171}
              />
            </div>
            <div className="flex flex-col w-full justify-between rounded-r-[50px] bg-[#9A3B3B]">
              <div className='mt-[50px] md:mt-[100px] mx-[15px] mb-[50px] md:mb-[100px]'>
                <h1 className='text-[24px] md:text-[36px] font-semibold text-[#F2ECBE] leading-[28px] md:leading-[38px]'>AI/ML Solutions</h1>
                <p className='text-[16px] md:text-[20px] mt-[6px] font-medium text-[#E2C799] leading-[24px] md:leading-[28px]'>
                Applying artificial intelligence and machine learning to optimize and improve components of our blockchain ecosystem that helps in developing engaging user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
