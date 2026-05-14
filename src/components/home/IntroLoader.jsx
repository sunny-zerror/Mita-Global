"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'

const IntroLoader = () => {
    useGSAP(() => {
        const tl = gsap.timeline({ delay: 1 })
        tl.to(".box1", {
            clipPath: "polygon(50% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 35%)",
            ease: "expo.inOut",
            duration: .8,
        })
        tl.to(".box2", {
            clipPath: "polygon(0% 0%, 50% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 50%)",
            ease: "expo.inOut",
            duration: .8,
        }, "<")
        tl.to(".loader_box", {
            width: "3rem",
            top: "1.5rem",
            left: "2.5rem",
            ease: "expo.inOut",
            duration: 1.1,
            transform: "translate(0%,0%)",
        })
         tl.to(".box2", {
            ease: "expo.inOut",
            marginLeft: 0,
            duration: 1.1,
            ease: "expo.inOut",
        }, "<")
        tl.to(".loader_box", {
            opacity: 0,
            duration: 0.01
        })
    })
    return (
        <div className=" loader_box w-[25.5vw] fixed z-10000 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2   aspect-[2.7/1] flex items-center ">

            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)"
                }} className=" box1 bg-[#0f1219] overflow-hidden w-[28%] h-full ">
            </div>
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)"
                }} className="box2 bg-[#0f1219] overflow-hidden -ml-px w-[40%] h-full">
            </div>
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)"
                }} className="box2 bg-[#0f1219] overflow-hidden -ml-px w-[40%] h-full">
            </div>
        </div>
    )
}

export default IntroLoader