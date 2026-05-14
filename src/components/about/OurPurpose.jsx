import React from 'react'
import BlinkButton from '../common/BlinkButton'

const featuresData = [
  {
    icon: "	https://framerusercontent.com/images/HTUN5zwRCiYetp3YEIR1IobKvTA.svg",
    title: "Creative Vision",
    description:
      "Bringing innovative and imaginative designs to life with unique flair.",
  },
  {
    icon: "	https://framerusercontent.com/images/xi2sLKWCtgikyFFSzzUy5bTAPYU.svg",
    title: "Tailored Solutions",
    description:
      "Customizing designs to perfectly align with client needs and goals.",
  },
  {
    icon: "https://framerusercontent.com/images/LfItf7auEprqaNILyZiqY9WlWkY.svg",
    title: "Eco Practices",
    description:
      "Implementing energy-efficient and eco-friendly solutions in each project.",
  },
];

const OurPurpose = () => {
  return (
    <>
      <div className="container py-50">
        <div className="w-full relative mx-auto max-w-298  h-[150svh] min-h-300 py-20 px-6">

          <div className="w-full flex gap-y-16  text-[#f2f2f2] flex-col justify-center items-center relative z-10">
            <div className="space-y-4 flex flex-col items-center">
              <BlinkButton text="OUR PURPOSE" />
              <h2 data-text-effect className='leading-none text-center'>With a focus on creativity and <br /> precision, we transform visions <br /> into enduring designs.</h2>
            </div>

            <div className="relative max-w-240 z-10 grid grid-cols-1 md:grid-cols-3 gap-2">
              {featuresData.map((item, index) => {

                return (
                  <div
                    key={index}
                    className="  group gap-y-6   border border-[#f2f2f21a]   bg-[#f2f2f21a] px-6 py-7 flex flex-col items-center text-center" >
                    <div className="">
                      <img
                        src={item.icon}
                        className=""
                      />
                    </div>
                    <div className="space-y-2">
                      <p className=" uppercase">
                        {item.title}
                      </p>
                      <p className=" text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full h-full absolute z-1 inset-0">
            <img className='cover saturate-[0.33]' src="https://framerusercontent.com/images/4zwJ6KNwjfNhvCWLFHocUSrHfCY.jpg?scale-down-to=1024" alt="" />
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(15, 18, 25, 0.5) 0%, rgba(7, 24, 57, 0) 100%)",
            }}
            className="overlay w-full h-full absolute inset-0 z-3"
          ></div>
        </div>
      </div>

    </>
  )
}

export default OurPurpose