"use client"
import BlinkButton from '../common/BlinkButton'
import React from 'react'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/dist/SplitText'
import gsap from 'gsap'
import HoverLink from '../common/HoverLink'
gsap.registerPlugin(SplitText)

const ContactHero = () => {

    useGSAP(() => {
        const heading_split = SplitText.create(".heading_split", {
            type: "lines",
            linesClass: "split-line"
        });
        const paragraph_split = SplitText.create(".paragraph_split", {
            type: "lines",
            linesClass: "split-line"
        });

        [...heading_split.lines, ...paragraph_split.lines].forEach((line) => {
            const wrapper = document.createElement("div");

            wrapper.classList.add("line-wrapper");

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.set([heading_split.lines, paragraph_split.lines], { yPercent: 100 });

        const tl = gsap.timeline({
            delay: 0.25
        })
        tl.to(".content_box", {
            opacity: 1,
            duration: 0.01
        })
        tl.to(".border_bar", {
            height: "100%",
            stagger: 0.2
        });
        tl.to(heading_split.lines, {
            yPercent: -8,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
        }, "<");
        tl.to(paragraph_split.lines, {
            yPercent: 0,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
        }, "<+0.2");
        tl.to([".blink_btn", ".grid_box"], {
            opacity: 1,
            stagger: 0.15
        }, "<");

    });

    return (
        <div className="w-full h-screen relative bg-[#F2F2F2]">
            <div className="container">
                <div className=" relative z-100 flex flex-col justify-end w-full h-full">
                    <div className="w-full grid p-10 pt-[5.2rem]  pb-0 pointer-events-none grid-cols-4 z-10 absolute inset-0">
                        <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
                        <div className="border-l border_bar h-0 border-[#0f12191a]"></div>
                        <div className="border-l border_bar h-0 border-[#0f12191a]"></div>
                        <div className="border-l border_bar h-0 border-[#0f12191a]"></div>
                    </div>
                    <div className="content_box opacity-0 p-10 space-y-5 w-full">
                        <BlinkButton text='contact us' theme='dark' className='blink_btn opacity-0' />
                        <div className="grid grid-cols-4">
                            <div className="col-span-3 ">
                                <h1 className='heading_split leading-none max-w-160 tracking-tight wrap-break-word'>Contact Us to Turn Ideas into Reality</h1>
                            </div>
                            <div className=" w-full  flex items-end pl-2 col-span-1">
                                <p className=' paragraph_split text-sm  leading-tight w-[80%]'>Let’s work together to bring your vision to life. Reach out to explore how we can create innovative, functional spaces that exceed your expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 relative z-10 w-full">
                        <div className=" grid_box overflow-hidden group opacity-0 col-span-1 p-7  w-[calc(100%+16px)] space-y-10 bg-[#0f1219] hover:opacity-85! transition-all duration-300 text-[#f2f2f2]">
                            <div className="">
                                <img src="https://framerusercontent.com/images/x3SQRbbR4RhcaFPe7W3sSVEXM.svg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <HoverLink text='Email us' color='white' className='uppercase text-sm' />
                                <p className='text-sm leading-none opacity-70'>Share your questions or ideas, and <br /> we’ll respond quickly.</p>
                            </div>
                        </div>
                        <div className=" grid_box overflow-hidden group opacity-0 col-span-1 p-7 ml-[calc(20px)]  w-[calc(100%-24px)] space-y-10 hover:opacity-85! transition-all duration-300 bg-[#acbbc2] text-[#f2f2f2]">
                            <div className="">
                                <img src="https://framerusercontent.com/images/64sr69ztmRRes9xbjWASymm9C8.svg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <HoverLink text='call us' color='white' className='uppercase text-sm' />
                                <p className='text-sm leading-none'>Contact us directly for immediate <br /> assistance.</p>
                            </div>
                        </div>
                        <div className=" grid_box overflow-hidden group opacity-0 col-span-2 p-7 w-full space-y-10 bg-[#5a6b73] hover:opacity-85! transition-all duration-300 text-[#f2f2f2]">
                            <div className="">
                                <img src="https://framerusercontent.com/images/6wf60IRVzzX5hLubFx04h32Uq44.svg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <HoverLink text='visit us' color='white' className='uppercase text-sm' />
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