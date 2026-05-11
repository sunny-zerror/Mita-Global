import React from 'react'
import BlinkButton from '../common/BlinkButton'

const aboutData = [
    {
        title: "Our Beginnings",
        description:
            "Mita started with a vision to revolutionize spaces through innovative and sustainable design.",
    },
    {
        title: "Milestones of Growth",
        description:
            "We've grown from a small firm to a leading name, reaching milestones and growing our portfolio.",
    },
    {
        title: "A Legacy of Innovation",
        description:
            "Our history is defined by pushing design boundaries and creating projects that inspire and lead.",
    },
    {
        title: "Client-Centric Design",
        description:
            "We focus on understanding and reflecting our clients’ visions with tailored, innovative solutions.",
    },
    {
        title: "Sustainable Practices",
        description:
            "We integrate eco-friendly and energy-efficient solutions into our designs for a better impact.",
    },
    {
        title: "Collaborative Results",
        description:
            "We work closely with clients and stakeholders to ensure exceptional results and exceed expectations.",
    },
];

const StoryApproach = () => {
    return (
        <>
            <div className="container  px-7">
                <div className="w-full max-w-240 space-y-20 mx-auto">
                    <div className="w-full flex items-end justify-between">
                        <div className="text-[#f2f2f2] space-y-4">
                            <BlinkButton text="story & approach" />
                            <h2 className='leading-none'>How We Began and <br /> Where We’re Going</h2>
                        </div>
                    </div>
                    <div className="w-full overflow-hidden rounded-xl border">

                        <div className="grid grid-cols-1 gap-px md:grid-cols-3">
                            {aboutData.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-[#f2f2f2]  space-y-2  bg-[#0F1219]   p-6 "
                                >
                                    <p className=" uppercase">
                                        {item.title}
                                    </p>

                                    <p className=" opacity-70 leading-tight text-sm ">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StoryApproach