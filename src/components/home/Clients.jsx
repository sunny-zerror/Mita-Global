"use client";
import React from 'react'
import BlinkButton from '../common/BlinkButton'

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
    <div className="py-50 space-y-12 w-full flex flex-col text-center items-center justify-center">
      <BlinkButton text="Building your dreams" />

      <div className="w-full grid grid-cols-5 gap-px max-w-240 mx-auto">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="group relative p-7 bg-[#0f1219] hover:bg-[#0f1219b3] transition-all duration-300 center overflow-hidden"
          >
            <div
            style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.33) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.33) 100%)",
                }}
                 className="absolute inset-0 z-10 pointer-events-none">

              {/* Vertical Lines */}
              <div
                className="absolute inset-0 flex justify-evenly"
              >
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="  w-px h-full bg-[#f2f2f2]  origin-top scale-y-0  group-hover:scale-y-100  transition-transform duration-300  "
                    style={{
                      transitionDelay: `${i * 80}ms`,
                    }}
                  />
                ))}
              </div>

              {/* Horizontal Lines */}
              <div
                className="absolute inset-0 flex flex-col justify-evenly">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="h-px w-full bg-[#f2f2f2]  origin-left scale-x-0  group-hover:scale-x-100  transition-transform duration-300  "
                    style={{
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            <img
              src={logo.img}
              className=" relative z-20 opacity-50 transition-opacity duration-300 group-hover:opacity-100  "
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="max-w-80 text-sm leading-tight text-[#f2f2f2b3]">
        <p>
          We’re honored to collaborate with visionary partners across the
          energy and infrastructure sectors, delivering tailored solutions that
          drive excellence and innovation.
        </p>
      </div>
    </div>
  );
};

export default Clients