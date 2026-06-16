"use client"
import React, { useRef } from 'react'
import Button from '../common/Button'
import HoverLink from '../common/HoverLink'
import BlinkButton from '../common/BlinkButton'
import { Link } from 'next-view-transitions'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import CardHover from '../animation/CardHover'
gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {

  const homeRef = useRef(null)

  useGSAP(() => {
    gsap.to(".hero_video", {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: homeRef.current,
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
      delay: 3
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
    tl.to(".hero_video", {
      opacity: 0.25,
    }, "<");
    tl.to(homeRef.current, {
      pointerEvents: "auto"
    }, "<");

  });

  return (
    <>
      <div ref={homeRef} className="w-full pointer-events-none overflow-hidden max-lg:pt-44 lg:h-screen relative bg-[#F2F2F2]">
        <div className="container">
          <div className=" relative z-100 flex flex-col justify-end w-full h-full">
            <div className=" content_box opacity-0 p-6 md:p-10 w-full space-y-5">
              <BlinkButton text={"Building your dreams"} theme='dark' className='blink_btn opacity-0' />
              <div className=" max-lg:space-y-4 w-full lg:grid grid-cols-4">
                <div className="col-span-3 ">
                  <h1 className=' heading_split leading-none max-w-160 tracking-tight wrap-break-word'>Driving Progress  with Excellence  in Infrastructure  and Energy</h1>
                </div>
                <div className=" w-full max-lg:space-y-4 flex flex-col justify-between lg:pl-2 col-span-1">
                  <p className=' paragraph_split text-sm  leading-tight md:w-[80%]'>At Mita Group, we deliver world-class EPC solutions, blending innovation, trust, and sustainability to build a future of growth and prosperity</p>
                  <Button text="About Us" link="/about" className=' max-sm:w-full! blink_btn text-sm opacity-0' />
                </div>
              </div>
            </div>
            <div className="md:grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 w-full relative z-10">
              <Link href={"/marquee-projects"} className='w-full'>
                <div className=" relative  overflow-hidden grid_box opacity-0 group col-span-1 p-7 space-y-12 md:space-y-20 bg-[#0f1219e6] hover:bg-[#0f121980] transition-all duration-300 text-[#f2f2f2]">
                  <CardHover />
                  <HoverLink text="Our Projects" color='light' />
                  <p className='text-sm leading-none'>See how our solutions are <br /> shaping the future.</p>
                </div>
              </Link>
              <Link href="/mita-reality" className='w-full '>
                <div className="  relative  overflow-hidden grid_box opacity-0 group col-span-1 p-7  space-y-12 md:space-y-20 bg-[#acbbc2e6] hover:opacity-85! transition-all duration-300 text-[#f2f2f2]">
                  <CardHover />
                  <HoverLink text="Our services" color='light' />
                  <p className='text-sm leading-none'>Explore our comprehensive<br /> EPC services.</p>
                </div>
              </Link>
              <Link href="/contact" className='col-span-2'>
                <div className="  relative  overflow-hidden grid_box opacity-0 group  p-7 w-full space-y-12 md:space-y-20 bg-[#5a6b73e6] hover:opacity-85! transition-all duration-300 text-[#f2f2f2]">
                  <CardHover />
                  <HoverLink text="Get in touch" color='light' />
                  <p className='text-sm leading-none'>Let's bring your vision to life<br /> contact us.</p>
                </div>
              </Link>
            </div>
          </div>
          <video className='hero_video cover pointer-events-none absolute z-10 inset-0 contrast-150 opacity-0' loop autoPlay muted playsInline src="/videos/hero_video.mp4"></video>
        </div>
      </div>

      <div style={{ background: "linear-gradient(180deg, #F2F2F2 0%, #5a6b73 100%)" }}>
        <div className="container pt-1 md:h-screen! max-sm:space-y-1 relative overflow-hidden md:grid grid-cols-2 gap-x-1">
          <div className="h-full max-sm:h-140 overflow-hidden">
            <video data-img-effect className='cover hue-rotate-354 saturate-[0.33]' loop muted playsInline autoPlay src="https://cdn.prod.website-files.com/66d5dc578fecb86ebbccb71c%2F66d6d93acbd84d209f5b5116_7065796-uhd_2160_3840_24fps-transcode.mp4"></video>
          </div>
          <div className="md:h-screen overflow-hidden relative w-full flex flex-col">

            <div className="  relative overflow-hidden flex-1">
              <img
                data-img-effect
                className="w-full h-full object-cover hue-rotate-[354deg] saturate-[0.33]"
                src="https://framerusercontent.com/images/uA0sWjDAr36Ulgc4X0U4JQs8okM.jpg?scale-down-to=2048"
                alt=""
              />
            </div>

            <div className=" p-7 max-sm:mt-1 bg-[#f2f2f2]  space-y-12">
              <div className="space-y-4">

                <BlinkButton text="About Mita Group" theme='dark' />

                <p className="text-2xl leading-[1.2]">
                  Since 2020, Mita Group has been transforming bold ideas into reality.
                  With expertise in infrastructure and energy, we provide bespoke
                  solutions that redefine industry benchmarks while driving progress and
                  sustainability.
                </p>
              </div>

              <Button text="Learn more" link="/about" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero