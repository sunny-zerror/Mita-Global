import React from 'react'
import BlinkButton from '../common/BlinkButton'
import Button from '../common/Button'

const ServiceHero = () => {
  return (
    <>
        <div className="w-full h-screen relative">
            <div className="container bg-[#F2F2F2]">
                <div className=" relative z-100 flex flex-col justify-end w-full h-full">
                    <div className="w-full grid p-10 pt-[5.2rem]  pointer-events-none grid-cols-4 z-10 absolute inset-0">
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                    </div>
                    <div className=" p-10 space-y-5 w-full">
                        <BlinkButton text='Our Services' theme='dark' />
                        <div className="grid grid-cols-4">
                            <div className="col-span-3 ">
                                <h1 className='leading-none max-w-160 tracking-tight wrap-break-word'>Turning Ideas into Timeless Creations</h1>
                            </div>
                            <div className=" w-full  flex flex-col justify-between pl-2 col-span-1">
                                <p className='text-sm  leading-tight w-[80%]'>We provide personalized services that integrate our expertise with innovative solutions to deliver remarkable results.</p>
                                <Button text="About us" />
                            </div>
                        </div>
                    </div>
                    <div className="grid relative z-10 grid-cols-4  w-full">
                        <div className="col-span-2 p-7  w-[calc(100%-4px)] space-y-20 bg-[#0f1219e6] text-[#f2f2f2]">
                                <p className='uppercase  text-sm'>our projects</p>
                                <p className='text-sm leading-none'>Explore our portfolio to see <br /> concepts come to life.</p>
                        </div>
                        <div className="col-span-2 p-7 w-full space-y-20 bg-[#5a6b73] text-[#f2f2f2]">
                                <p className='uppercase  text-sm'>get in touch</p>
                                <p className='text-sm leading-none'>Contact us to discuss your <br /> vision and bring it to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceHero