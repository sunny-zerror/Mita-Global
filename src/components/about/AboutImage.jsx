"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)


const AboutImage = ({ img }) => {

    const imgParentRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(".full_img", {
            y: -100
        }, {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: imgParentRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    },{scope: imgParentRef})

    return (
        <>
            <div ref={imgParentRef}  className="container">
                <div className="w-full overflow-hidden  aspect-video mt-1 ">
                    <img className=' full_img cover saturate-[0.33]' src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default AboutImage