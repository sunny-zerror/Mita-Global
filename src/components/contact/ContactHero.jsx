import React from 'react'
import BlinkButton from '../common/BlinkButton'

const ContactHero = () => {
    return (
        <div className="w-full h-screen relative bg-[#F2F2F2]">
            <div className="container">
                <div className=" relative z-100 flex flex-col justify-end w-full h-full">
                    <div className="w-full grid p-10 pt-[5.2rem] pb-[11.5rem] pointer-events-none grid-cols-4 z-10 absolute inset-0">
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                        <div className="border-l border-[#0f12191a]"></div>
                    </div>
                    <div className=" p-10 space-y-5 w-full">
                        <BlinkButton text='contact us' theme='dark' />
                        <div className="grid grid-cols-4">
                            <div className="col-span-3 ">
                                <h1 className='leading-none max-w-160 tracking-tight wrap-break-word'>Contact Us to Turn Ideas into Reality</h1>
                            </div>
                            <div className=" w-full  flex items-end pl-2 col-span-1">
                                <p className='text-sm  leading-tight w-[80%]'>Let’s work together to bring your vision to life. Reach out to explore how we can create innovative, functional spaces that exceed your expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 w-full">
                        <div className="col-span-1 p-7  w-[calc(100%+16px)] space-y-10 bg-[#0f1219] text-[#f2f2f2]">
                            <div className="">
                                <img src="	https://framerusercontent.com/images/x3SQRbbR4RhcaFPe7W3sSVEXM.svg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <p className='uppercase  text-sm'>Email us</p>
                                <p className='text-sm leading-none opacity-70'>Share your questions or ideas, and <br /> we’ll respond quickly.</p>
                            </div>
                        </div>
                        <div className="col-span-1 p-7 ml-[calc(20px)]  w-[calc(100%-24px)] space-y-10 bg-[#acbbc2] text-[#f2f2f2]">
                            <div className="">
                                <img src="	https://framerusercontent.com/images/64sr69ztmRRes9xbjWASymm9C8.svg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <p className='uppercase  text-sm'>call us</p>
                                <p className='text-sm leading-none'>Contact us directly for immediate <br /> assistance.</p>
                            </div>
                        </div>
                        <div className="col-span-2 p-7 w-full space-y-10 bg-[#5a6b73] text-[#f2f2f2]">
                            <div className="">
                                <img src="	https://framerusercontent.com/images/6wf60IRVzzX5hLubFx04h32Uq44.svg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <p className='uppercase  text-sm'>visit us</p>
                                <p className='text-sm leading-none'>Visit us for personalized <br /> consultations and advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHero