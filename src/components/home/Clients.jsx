import React from 'react'


const clientLogos = [
  {
    img: "	https://framerusercontent.com/images/aV1M871ZK200Y8VvwnHYgMKSLqQ.svg"
  },
  {
    img: "https://framerusercontent.com/images/xLqcrF75v37dG5YMqBF5NRoEk.svg"
  },
  {
    img: "https://framerusercontent.com/images/WaDBqfk9rY6oQ73XAErcGe6ds.svg"
  },
  {
    img: "https://framerusercontent.com/images/RzwT4VZv0JWcqvPqsAGHWC30.svg"
  },
  {
    img: "	https://framerusercontent.com/images/bPtKxgbGils0G9vmjbRlSJRwh2U.svg"
  },
  {
    img: "	https://framerusercontent.com/images/igWoasPtCXOfkVKuNWYCZzs8qI.svg"
  },
  {
    img: "	https://framerusercontent.com/images/e3xlfD7dCbQcTLj8iVJgPkLkAs.svg"
  },
  {
    img: "	https://framerusercontent.com/images/KU9grFZgW6ZIFimlMXoVxIkrFRg.svg"
  },
  {
    img: "https://framerusercontent.com/images/GlNBzyOqqAZBjGym2Oo2Tpypus.svg"
  },
  {
    img: "	https://framerusercontent.com/images/p8iNxuWA4EN0HZRgQMIT6sb0fBQ.svg"
  },

]
const Clients = () => {
  return (
    <>
      <div className=" py-50 space-y-12 w-full  flex flex-col text-center items-center justify-center">
        <div className="border bg-[#f2f2f208] whitespace-nowrap uppercase text-sm w-fit flex items-center gap-x-2 px-4 py-3  pb-2  leading-none border-[#f2f2f21a]">
          <span className="size-1 -translate-y-px rounded-full bg-[#f2f2f2] animate-blink" />
          <p className='leading-0 text-[#f2f2f2]'>Building your dreams</p>
        </div>
        <div className="w-full grid grid-cols-5 gap-px max-w-240 mx-auto">
          {clientLogos.map((logo, index) => (
            <div key={index} className=" p-7 bg-[#0f1219] center">
              <img src={logo.img} className='opacity-50' alt="" />
            </div>
          ))}
        </div>
        <div className="max-w-80 text-sm leading-tight text-[#f2f2f2b3]">
          <p>We’re honored to collaborate with visionary partners across the energy and infrastructure sectors, delivering tailored solutions that drive excellence and innovation.</p>
        </div>
      </div>
    </>
  )
}

export default Clients