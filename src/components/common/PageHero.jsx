"use client"
import React from 'react'
import BlinkButton from './BlinkButton'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/dist/SplitText'
import gsap from 'gsap'
gsap.registerPlugin(SplitText)

const PageHero = ({
    blinkBtnText,
    title,
    description,
}) => {

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
        tl.to(".blink_btn", {
            opacity: 1
        }, "<");

    });
    return (
        <>
            <div className="container">
                <div className=" relative z-100 flex flex-col justify-end w-full pt-60 bg-[#F2F2F2]">
                    <div className="w-full grid p-10 pt-[5.2rem] pb-0 pointer-events-none grid-cols-4 z-10 absolute inset-0">
                        <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
                        <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
                        <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
                        <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
                    </div>
                    <div className=" content_box opacity-0 p-10 space-y-5 w-full">
                        <BlinkButton text={blinkBtnText} theme='dark' className='blink_btn opacity-0' />
                        <div className="grid grid-cols-4">
                            <div className="col-span-3 ">
                                <h1 className=' heading_split leading-none max-w-160 tracking-tight wrap-break-word'>{title}</h1>
                            </div>
                            <div className=" w-full  flex items-end pl-2 col-span-1">
                                <p className='paragraph_split text-sm  leading-tight w-[80%]'>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHero