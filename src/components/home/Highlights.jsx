import React from 'react'

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
            <div className="container pt-50 px-7">
                <div className="w-full max-w-240 space-y-20 mx-auto">
                    <div className="w-full flex items-end justify-between">
                        <div className="text-[#f2f2f2] space-y-4">
                            <div className="border bg-[#f2f2f208] whitespace-nowrap uppercase text-sm w-fit flex items-center gap-x-2 p-3  pb-2  leading-none border-[#f2f2f21a]">
                                <span className="size-1 -translate-y-px rounded-full bg-[#f2f2f2] animate-blink" />
                                <p className='leading-0 text-[#f2f2f2]'>Highlights</p>
                            </div>
                            <h2 className='leading-none'>Why Choose Mita <br /> Group?</h2>
                        </div>
                        <button className="uppercase  block h-fit text-xs bg-[#f2f2f2] text-[#0f1219] w-fit p-3 leading-none">
                            Get in Touch
                        </button>
                    </div>
                    <div className="w-full space-y-15">
                        {statsData.map((item) => (
                            <div
                                key={item.id}
                                className="w-full border-t border-[#f2f2f21a] flex"
                            >
                                <div className="w-[60%]">
                                    <p className="text-[10.5rem] leading-36 heading-font text-[#f2f2f233]">
                                        {item.number}
                                    </p>
                                </div>

                                <div className="w-[40%] py-4 flex flex-col justify-between text-[#f2f2f2]">
                                    <p className="uppercase font-medium text-base">
                                        {item.title}
                                    </p>

                                    <p className="text-[#f2f2f2b3] text-sm leading-tight">
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