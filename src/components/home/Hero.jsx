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
      delay: 2.75
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

  });

  return (
    <>
      <div ref={homeRef} className="w-full overflow-hidden h-screen relative bg-[#F2F2F2]">
        <div className="container">
          <div className=" relative z-100 flex flex-col justify-end w-full h-full">
            <div className="w-full grid p-10 pt-[4.7rem] pb-0 pointer-events-none grid-cols-4 z-10 absolute inset-0">
              <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
              <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
              <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
              <div className="border-l border_bar h-0  border-[#0f12191a]"></div>
            </div>
            <div className=" content_box opacity-0 p-10 w-full space-y-5">
              <BlinkButton text={"Building your dreams"} theme='dark' className='blink_btn opacity-0' />
              <div className="grid grid-cols-4">
                <div className="col-span-3 ">
                  <h1 className=' heading_split leading-none max-w-160 tracking-tight wrap-break-word'>Driving Progress  with Excellence  in Infrastructure  and Energy</h1>
                </div>
                <div className=" w-full  flex flex-col justify-between pl-2 col-span-1">
                  <p className=' paragraph_split text-sm  leading-tight w-[80%]'>At Mita Group, we deliver world-class EPC solutions, blending innovation, trust, and sustainability to build a future of growth and prosperity</p>
                  <Button text="About Us" link="/about" className='blink_btn text-sm opacity-0' />
                </div>
              </div>
            </div>
            <div className="grid px-1 grid-cols-4 w-full relative z-10">
              <Link href={"/marquee-projects"}>
                <div className=" relative  overflow-hidden grid_box opacity-0 group col-span-1 p-7 w-[calc(100%+14px)] space-y-20 bg-[#0f1219e6] hover:bg-[#0f121980] transition-all duration-300 text-[#f2f2f2]">
                  <div className="w-full h-full absolute inset-0 z-10 pointer-events-none">
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500  bg-[#f2f2f2] group-hover:top-3 group-hover:right-3 absolute"></div>
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-8 group-hover:right-4.5 absolute"></div>
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-4.5 group-hover:right-8 absolute"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
                  </div>
                  <HoverLink text="Our Projects" color='light' />
                  <p className='text-sm leading-none'>See how our solutions are <br /> shaping the future.</p>
                </div>
              </Link>
              <Link href="/mita-reality">
                <div className="  relative  overflow-hidden grid_box opacity-0 group col-span-1 p-7 ml-[calc(18px)]  w-[calc(100%-24px)] space-y-20 bg-[#acbbc2e6] hover:opacity-85! transition-all duration-300 text-[#f2f2f2]">
                  <div className="w-full h-full absolute inset-0 z-10 pointer-events-none">
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500  bg-[#f2f2f2] group-hover:top-3 group-hover:right-3 absolute"></div>
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-8 group-hover:right-4.5 absolute"></div>
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-4.5 group-hover:right-8 absolute"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
                  </div>
                  <HoverLink text="Our services" color='light' />
                  <p className='text-sm leading-none'>Explore our comprehensive<br /> EPC services.</p>
                </div>
              </Link>
              <Link href="/contact" className='col-span-2'>
                <div className="  relative  overflow-hidden grid_box opacity-0 group  p-7 w-full space-y-20 bg-[#5a6b73e6] hover:opacity-85! transition-all duration-300 text-[#f2f2f2]">
                  <div className="w-full h-full absolute inset-0 z-10 pointer-events-none">
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500  bg-[#f2f2f2] group-hover:top-3 group-hover:right-3 absolute"></div>
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-8 group-hover:right-4.5 absolute"></div>
                    <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-4.5 group-hover:right-8 absolute"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
                    <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
                  </div>
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
        <div className="container pt-1 h-screen relative overflow-hidden grid grid-cols-2">
          <div className="h-full overflow-hidden w-[calc(100%-4px)]">
            <video data-img-effect className='cover hue-rotate-354 saturate-[0.33]' loop muted playsInline autoPlay src="https://cdn.prod.website-files.com/66d5dc578fecb86ebbccb71c%2F66d6d93acbd84d209f5b5116_7065796-uhd_2160_3840_24fps-transcode.mp4"></video>
          </div>
          <div
            className="h-screen relative w-full flex flex-col">

            <div className=" relative overflow-hidden flex-1">
              <img
                data-img-effect
                className="w-full h-full object-cover hue-rotate-[354deg] saturate-[0.33]"
                src="https://framerusercontent.com/images/uA0sWjDAr36Ulgc4X0U4JQs8okM.jpg?scale-down-to=2048"
                alt=""
              />
            </div>

            <div className=" p-7 bg-[#f2f2f2]  space-y-12">
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