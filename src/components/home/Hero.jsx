import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen relative bg-[#F2F2F2]">
        <div className="container">
          <div className=" relative z-100 flex flex-col justify-end w-full h-full">
            <div className="w-full grid p-10 pt-[5.2rem] pb-[11.5rem] pointer-events-none grid-cols-4 z-10 absolute inset-0">
              <div className="border-l border-[#0f12191a]"></div>
              <div className="border-l border-[#0f12191a]"></div>
              <div className="border-l border-[#0f12191a]"></div>
              <div className="border-l border-[#0f12191a]"></div>
            </div>
            <div className=" p-10 w-full grid grid-cols-4">
              <div className="col-span-3 ">
                <div className="border whitespace-nowrap uppercase text-sm w-fit flex items-center gap-x-2 p-3  pb-2  leading-none border-[#0f1219]">
                  <span className="size-1 -translate-y-px rounded-full bg-[#0f1219] animate-blink" />
                  <p className='leading-0'>Building your dreams</p>
                </div>
                <h1 className='leading-none mt-5'>Driving Progress <br /> with Excellence <br /> in Infrastructure <br /> and Energy</h1>
              </div>
              <div className=" w-full  flex flex-col justify-between pl-2 col-span-1">
                <p className='text-sm  leading-tight w-[80%]'>At Mita Group, we deliver world-class EPC solutions, blending innovation, trust, and sustainability to build a future of growth and prosperity</p>
                <button className='uppercase text-sm bg-[#0f1219] text-[#f2f2f2] w-fit p-3 leading-none'>About Us</button>
              </div>
            </div>
            <div className="grid grid-cols-4 w-full">
              <div className="col-span-1 p-7 w-[calc(100%+16px)] space-y-20 bg-[#0f1219e6] text-[#f2f2f2]">
                <p className='uppercase  text-sm'>Our Projects</p>
                <p className='text-sm leading-none'>See how our solutions are <br /> shaping the future.</p>
              </div>
              <div className="col-span-1 p-7 ml-[calc(20px)]  w-[calc(100%-24px)] space-y-20 bg-[#acbbc2e6] text-[#f2f2f2]">
                <p className='uppercase  text-sm'>Our services</p>
                <p className='text-sm leading-none'>Explore our comprehensive<br /> EPC services.</p>
              </div>
              <div className="col-span-2 p-7 w-full space-y-20 bg-[#5a6b73e6] text-[#f2f2f2]">
                <p className='uppercase  text-sm'>Get in touch</p>
                <p className='text-sm leading-none'>Let's bring your vision to life<br /> contact us.</p>
              </div>
            </div>
          </div>
          <video className='cover pointer-events-none absolute z-10 inset-0 contrast-150 opacity-25' loop autoPlay muted playsInline src="/videos/hero_video.mp4"></video>
        </div>
      </div>

      <div style={{ background: "linear-gradient(180deg, #F2F2F2 0%, #5a6b73 100%)" }}>
        <div className="container pt-1 h-screen relative overflow-hidden grid grid-cols-2">
          <div className="h-full w-[calc(100%-4px)]">
            <video className='cover hue-rotate-354 saturate-[0.33]' loop muted playsInline autoPlay src="https://cdn.prod.website-files.com/66d5dc578fecb86ebbccb71c%2F66d6d93acbd84d209f5b5116_7065796-uhd_2160_3840_24fps-transcode.mp4"></video>
          </div>
          <div
            className="h-screen relative w-full flex flex-col">

            <div className=" relative overflow-hidden flex-1">
              <img
                className="w-full h-full object-cover hue-rotate-[354deg] saturate-[0.33]"
                src="https://framerusercontent.com/images/uA0sWjDAr36Ulgc4X0U4JQs8okM.jpg?scale-down-to=2048"
                alt=""
              />
            </div>

            <div className=" p-7 bg-[#f2f2f2]  space-y-12">
              <div className="space-y-4">

                <div className="border whitespace-nowrap uppercase text-sm w-fit flex items-center gap-x-2 p-3  pb-2  leading-none border-[#0f1219]">
                  <span className="size-1 -translate-y-px rounded-full bg-[#0f1219] animate-blink" />
                  <p className='leading-0'>About Mita Group</p>
                </div>

                <p className="text-2xl leading-[1.2]">
                  Since 2020, Mita Group has been transforming bold ideas into reality.
                  With expertise in infrastructure and energy, we provide bespoke
                  solutions that redefine industry benchmarks while driving progress and
                  sustainability.
                </p>
              </div>

              <button className="uppercase text-sm bg-[#0f1219] text-[#f2f2f2] w-fit p-3 leading-none">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero