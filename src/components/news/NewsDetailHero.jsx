"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/dist/SplitText'
import gsap from 'gsap'
gsap.registerPlugin(SplitText)

const NewsDetailHero = () => {
  const heroRef = useRef(null)

  useGSAP(() => {
    gsap.to(".hero_img", {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
  })

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

  });

  return (
    <>
      <div ref={heroRef} className=" container h-screen flex items-end relative overflow-hidden">
        <div className=" content_box mx-auto relative z-10 pb-12 text-[#f2f2f2] w-full max-w-180 text-center">
          <p className=' paragraph_split text-sm'>DEC 22, 2022</p>
          <h1 className=' heading_split leading-none'>Mita Group Launches Greenway Cultural Center</h1>
        </div>
        <img className=' hero_img cover absolute inset-0 brightness-75 saturate-[0.33]' src="https://framerusercontent.com/images/CzDVFa0DR9CGAGL3bfRnZIXSYw.jpg?scale-down-to=2048" alt="" />
      </div>
    </>
  )
}

export default NewsDetailHero