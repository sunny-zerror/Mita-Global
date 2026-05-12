import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const pathname = usePathname()
  const skipFlexImage =
    pathname !== "/contact" && pathname !== "/news"
  return (
    <>
      <div className="container space-y-1 px-1.25">
        {skipFlexImage && (
          <div className="w-full flex min-h-180 gap-1 h-screen">
            <div className="w-1/2 border overflow-hidden border-[#AACFDE] h-full relative py-20 px-6 ">
              <div className=" relative overflow-hidden z-10 gap-y-6 text-center items-center flex flex-col ">
                <button className="border bg-[#f2f2f208] whitespace-nowrap uppercase text-sm w-fit flex items-center gap-x-2 p-3  pb-2  leading-none border-[#f2f2f21a]">
                  <span className="size-1 -translate-y-px rounded-full bg-[#f2f2f2] animate-blink" />
                  <p className='leading-0 text-[#f2f2f2]'>Our services</p>
                </button>
                <h2 className=' leading-none text-[#f2f2f2]'>Your Vision,<br /> Our Expertise</h2>
                <button className="uppercase text-sm bg-[#f2f2f2] text-[#0f1219] w-fit p-3 leading-none">
                  discover services
                </button>
              </div>
              <img className=' absolute inset-0 cover opacity-60' src="https://framerusercontent.com/images/jG0gTrF5I8WGrAkR4tfkpyL29Y.jpg" alt="" />
              <div
                style={{
                  background:
                    "linear-gradient(180deg,#0f121980 ,rgba(18, 44, 95, 0.5) 0%,rgba(7, 24, 57, 0) 100%)",
                }}
                className="overlay absolute inset-px z-1 overflow-hidden"
              />
            </div>
            <div className="w-1/2 border overflow-hidden border-[#9BC6DE] h-full relative py-20 px-6 ">
              <div className=" relative overflow-hidden z-10 gap-y-6 text-center items-center flex flex-col ">
                <div className="border bg-[#f2f2f208] whitespace-nowrap uppercase text-sm w-fit flex items-center gap-x-2 p-3  pb-2  leading-none border-[#f2f2f21a]">
                  <span className="size-1 -translate-y-px rounded-full bg-[#f2f2f2] animate-blink" />
                  <p className='leading-0 text-[#f2f2f2]'>Contact us</p>
                </div>
                <h2 className=' leading-none text-[#f2f2f2]'>Let's  Start the <br /> Conversation</h2>
                <button className="uppercase text-sm bg-[#f2f2f2] text-[#0f1219] w-fit p-3 leading-none">
                  Get in touch
                </button>
              </div>
              <img className=' absolute inset-0 cover opacity-60' src="https://framerusercontent.com/images/OKAcWplwGhYkcT0cWCQCBBS3M.jpg?scale-down-to=2048" alt="" />
              <div
                style={{
                  background:
                    "linear-gradient(180deg ,#0f121980 , rgba(18, 44, 95, 0.5) 0%, rgba(7, 24, 57, 0) 100%)",
                }}
                className="overlay absolute inset-px z-1 overflow-hidden "
              />
            </div>
          </div>
        )}

        <div className="w-full space-y-50 relative bg-[#f2f2f2] pb-3 p-10">

          <div className="w-full grid px-10 h-full  pointer-events-none grid-cols-4 z-10 absolute inset-0">
            <div className="border-l h-full border-[#0f12191a]"></div>
            <div className="border-l h-full border-[#0f12191a]"></div>
            <div className="border-l h-full border-[#0f12191a]"></div>
            <div className="border-l h-full border-[#0f12191a]"></div>
          </div>

          <div className="w-full grid grid-cols-4">
            <div className=" pl-2 flex flex-col justify-between">
              <div className=" w-full space-x-5">
                <Link href="/">
                  <img
                    className="w-24 brightness-0 object-contain"
                    src="/logo.avif"
                    alt="Mita Logo"
                    loading="eager"
                  />
                </Link>
                <p className='text-[#0f1219b3] uppercase text-xs leading-none w-1/2'>We create innovative architectural solutions that inspire and endure.</p>
              </div>
              <p className='text-[#0f1219b3] uppercase text-xs leading-none w-1/2'>© 2024, Mita</p>
            </div>

            <div className="pl-3 space-y-4">
              <p className='text-[#0f1219b3] text-xs uppercase'>overview</p>
              <div className=" text-2xl capitalize flex flex-col gap-y-1.5">
                <Link className='hover:opacity-60 transition-all duration-200' href={"/about"}>about</Link>
                <Link className='hover:opacity-60 transition-all duration-200' href={"/marquee-projects"}>projects</Link>
                <Link className='hover:opacity-60 transition-all duration-200' href={"/mita-reality"}>services</Link>
              </div>
            </div>
            <div className="pl-3 space-y-4">
              <p className='text-[#0f1219b3] text-xs uppercase'>engage</p>
              <div className=" text-2xl capitalize flex flex-col gap-y-1.5">
                <Link className='hover:opacity-60 transition-all duration-200' href={"/news"}>news</Link>
                <Link className='hover:opacity-60 transition-all duration-200' href={"/resources"}>resources</Link>
                <Link className='hover:opacity-60 transition-all duration-200' href={"/contact"}>contact us</Link>
              </div>
            </div>
            <div className="pl-3 space-y-4">
              <p className='text-[#0f1219b3] text-xs uppercase'>follow us</p>
              <div className=" text-2xl capitalize gap-y-1.5">
                <p>linked in</p>
                <p>X (Twitter)</p>
                <p>instagram</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img className='w-full relative z-10' src="/logo.avif" alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer