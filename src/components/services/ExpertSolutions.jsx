import React from 'react'
import BlinkButton from '../common/BlinkButton'

const servicesData = [
  {
    id: 1,
    title: "Concept Design",
    description:
      "Creating innovative and functional design concepts that align with your vision.",
    icon: "https://framerusercontent.com/images/2WV3vUHWkx2NDOs5XFTxOufg2I.svg",
    image:
      "https://framerusercontent.com/images/JvBVtJwz3fTKMwtdyQeUopid8.jpg?scale-down-to=2048",
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Creating functional interior designs that elevate your space's overall experience.",
    icon: "https://framerusercontent.com/images/F346hdIzO2Avqkgp9iYhwTR1Ew.svg",
    image:
      "https://framerusercontent.com/images/479s1tsalKB8cm2SJTMOvlyA.jpg?scale-down-to=2048",
  },
  {
    id: 3,
    title: "Sustainable Design",
    description:
      "Using eco-friendly and energy-efficient solutions to boost project sustainability.",
    icon: "https://framerusercontent.com/images/LfItf7auEprqaNILyZiqY9WlWkY.svg",
    image:
      "https://framerusercontent.com/images/oI1mj78KVzj7SxytfTUOPhwlCGo.jpg?scale-down-to=2048",
  },
  {
    id: 4,
    title: "Space Renovation",
    description:
      "Enhancing existing spaces with modern updates to better align with your needs.",
    icon: "https://framerusercontent.com/images/QPmfTckobSwCG0LbcVqhfB3HXE.svg",
    image:
      "https://framerusercontent.com/images/hsWiPFXuUf8s5RYlUfgEXuyNQY.jpg?scale-down-to=2048",
  },
  {
    id: 5,
    title: "Urban Planning",
    description:
      "Developing detailed plans and blueprints to guide the construction process.",
    icon: "https://framerusercontent.com/images/PL6tMnCnaAnNHk2RaupsQnH2sU.svg",
    image:
      "https://framerusercontent.com/images/vwnThgu1p8AHcM25U0S5m1XBv6I.jpg",
  },
  {
    id: 6,
    title: "Project Management",
    description:
      "Revamping existing spaces with modern updates to suit your needs.",
    icon: "https://framerusercontent.com/images/poiYaukCTkR9y5fwpf8HaoW2ys.svg",
    image:
      "https://framerusercontent.com/images/C0WUOdUrI1sl5dLLDCOWuzgxhck.jpg",
  },
];

const ExpertSolutions = () => {
  return (
    <>
      <div className="container mb-1">
        <div className="w-full py-20 px-7 bg-[#f2f2f2]">
          <div className="gap-y-6 items-center text-center flex flex-col ">
            <BlinkButton text='Expert Solutions' theme='dark' />
            <h2 data-text-effect className=' leading-none '>Mita delivers tailored <br /> architectural solutions that <br /> bring your vision to life.</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="w-full grid gap-1 grid-cols-3">
          {servicesData.map((item) => (
            <div key={item.id} className=" border border-[#f2f2f233] w-full flex flex-col justify-between items-center px-6 py-16 relative h-120 xl:h-140">
              <div className="absolute overflow-hidden inset-0 w-full h-full">
                <img data-img-effect className='cover saturate-[0.33] brightness-75' src={item.image} alt="" />
              </div>
              <div className="relative z-10">
                <img src={item.icon} alt="" />
              </div>
              <div className=" relative z-10 max-w-90 text-[#f2f2f2] space-y-3 text-center">
                <h3>{item.title}</h3>
                <p className='leading-tight'>{item.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExpertSolutions