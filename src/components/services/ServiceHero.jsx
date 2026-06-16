"use client"
import React from 'react'
import BlinkButton from '../common/BlinkButton'
import Button from '../common/Button'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/dist/SplitText'
import gsap from 'gsap'
import HoverLink from '../common/HoverLink'
import CardHover from '../animation/CardHover'
gsap.registerPlugin(SplitText)

const ServiceHero = () => {
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
        <>
            <div className="w-full  lg:h-screen relative">
                <div className="container max-lg:pt-44 bg-[#F2F2F2]">
                    <div className=" relative z-100 flex flex-col justify-end w-full h-full">
                        <div className=" content_box opacity-0 p-6 md:p-10  space-y-5 w-full">
                            <BlinkButton text='Our Services' theme='dark' className='blink_btn opacity-0' />
                            <div className=" max-lg:space-y-4 w-full lg:grid grid-cols-4">
                                <div className="col-span-3 ">
                                    <h1 className=' heading_split leading-none max-w-160 tracking-tight wrap-break-word'>Turning Ideas into Timeless Creations</h1>
                                </div>
                                <div className=" w-full  max-lg:space-y-4 flex flex-col justify-between lg:pl-2 col-span-1">
                                    <p className=' paragraph_split text-sm  leading-tight md:w-[80%]'>We provide personalized services that integrate our expertise with innovative solutions to deliver remarkable results.</p>
                                    <Button text="About us" className=' max-sm:w-full! blink_btn text-sm opacity-0' />
                                </div>
                            </div>
                        </div>
                        <div className="md:grid relative z-10  md:px-1 grid-cols-4  w-full">
                            <div className="grid_box overflow-hidden group relative opacity-0 col-span-2 p-7  md:w-[calc(100%-4px)] space-y-12 md:space-y-20 bg-[#0f1219e6] hover:bg-[#0f121980] transition-all duration-300 text-[#f2f2f2]">
                                <CardHover />
                                <HoverLink text='our projects' color='white' className='uppercase text-sm' />
                                <p className='text-sm leading-none'>Explore our portfolio to see <br /> concepts come to life.</p>
                            </div>
                            <div className="grid_box overflow-hidden group relative opacity-0 col-span-2 p-7 w-full space-y-12 md:space-y-20 bg-[#5a6b73] hover:opacity-85! transition-all duration-300 text-[#f2f2f2]">
                                <CardHover />
                                <HoverLink text='get in touch' color='white' className='uppercase text-sm' />
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