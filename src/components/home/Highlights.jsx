import React from 'react'
import BlinkButton from '../common/BlinkButton';
import Button from '../common/Button';

const Highlights = () => {

    const statsData = [
        {
            id: 1,
            number: "10+",
            title: "Years of Combined Expertise",
            description:
                "Our team brings over 10+ years of collective experience in delivering exceptional EPC projects, driving progress in infrastructure and energy.",
        },

        {
            id: 2,
            number: "20+",
            title: "Major Projects Delivered",
            description:
                "Successfully completed 20+ large-scale projects, including renewable energy installations, industrial facilities, and turnkey solutions.",
        },

        {
            id: 3,
            number: "100%",
            title: "Sustainability Focus",
            description:
                "Committed to eco-friendly materials and energy-efficient processes, ensuring every project aligns with global sustainability standards.",
        },
    ];

    return (
        <>
            <div className="container pt-40 md:pt-50 px-5">
                <div className="w-full max-w-240 space-y-12 md:space-y-20 mx-auto">
                    <div className="w-full max-sm:space-y-5 md:flex items-end justify-between">
                        <div className="text-[#f2f2f2] space-y-4">
                            <BlinkButton text="Highlights" />
                            <h2 data-text-effect className='leading-none'>Why Choose Mita <br /> Group?</h2>
                        </div>
                        <Button text="Get in Touch" link="/contact" theme='light' />
                    </div>
                    <div className="w-full space-y-8 xl:space-y-15">
                        {statsData.map((item) => (
                            <div
                                key={item.id}
                                className="w-full border-t border-[#f2f2f21a] md:flex"
                            >
                                <div className="md:w-[60%]">
                                    <p data-text-effect className=" text-[5rem] max-sm:leading-none md:text-[7.5rem] xl:text-[10.5rem] xl:leading-44 heading-font text-[#f2f2f233]">
                                        {item.number}
                                    </p>
                                </div>

                                <div className="md:w-[40%] py-4 flex flex-col justify-between text-[#f2f2f2]">
                                    <p className="uppercase font-medium text-base">
                                        {item.title}
                                    </p>

                                    <p className="text-[#f2f2f2b3] text-sm max-sm:mt-2 leading-tight">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Highlights