import React from 'react'
import BlinkButton from '../common/BlinkButton'
import Button from '../common/Button'
import HoverLink from '../common/HoverLink'

const resourcesData = [
    {
        category: "MARKET INSIGHTS",
        items: [
            {
                tag: "RESEARCH",
                title: "WHITE PAPERS",
                description:
                    "Detailed reports on architectural topics, providing expert insights and analysis.",
            },
            {
                tag: "TRENDS",
                title: "INDUSTRY REPORTS",
                description:
                    "Comprehensive analyses of current and future market trends and conditions in architecture.",
            },
        ],
    },
    {
        category: "EDUCATIONAL CONTENT",
        items: [
            {
                tag: "MEDIA",
                title: "WEBINARS AND VIDEOS",
                description:
                    "Recorded sessions and visual content covering various architectural topics and insights.",
            },
            {
                tag: "EXCELLENCE",
                title: "BEST PRACTICES GUIDES",
                description:
                    "Guidelines for achieving high standards in architectural design and execution.",
            },
        ],
    },
    {
        category: "PRACTICAL GUIDES & TOOLS",
        items: [
            {
                tag: "TOOLS",
                title: "DESIGN TEMPLATES",
                description:
                    "Downloadable templates for architectural plans, presentations, and concepts.",
            },
            {
                tag: "SOLUTIONS",
                title: "TOOLKITS",
                description:
                    "Collections of tools for specific tasks like project management or sustainability.",
            },
            {
                tag: "HOW-TO",
                title: "TECHNICAL GUIDES",
                description:
                    "Practical advice on technical aspects of architecture, including codes and methods.",
            },
            {
                tag: "GROWTH",
                title: "DEVELOPMENT GUIDES",
                description:
                    "Tips for advancing your career, including certification advice and skill development.",
            },
        ],
    },
]

const ExpertHub = () => {
    return (
        <>
            <div className="container py-50 px-7">
                <div className="w-full max-w-240 space-y-20 mx-auto">
                    <div className="w-full flex items-end justify-between">
                        <div className="text-[#f2f2f2] space-y-4">
                            <BlinkButton text="Expert Hub" />
                            <h2 data-text-effect className='leading-none'>Knowledge and <br /> Resources Center</h2>
                        </div>
                        <Button text="About Us" />
                    </div>
                    <div className="space-y-8">
                        {resourcesData.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                className="space-y-4 border-t border-[#f2f2f21a] pb-0 py-6 last:border-b last:pb-8"
                            >
                                <p className="text-xs uppercase text-[#f2f2f2b3]">
                                    {section.category}
                                </p>

                                <div className="grid  grid-cols-1 md:grid-cols-2 gap-1">
                                    {section.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className=" group bg-[#0f1219] hover:opacity-85 transition-all duration-300  px-6 py-7 flex rounded-lg flex-col justify-between"
                                        >
                                            <div className="space-y-12">
                                                <div className="w-fit border border-[#f2f2f21a] bg-[#f2f2f208] px-3 leading-none pt-2 pb-1">
                                                    <p className="text-xs uppercase text-[#f2f2f2]  flex items-center gap-2">
                                                        <span className="size-1 bg-[#f2f2f2] rounded-full" />
                                                        {item.tag}
                                                    </p>
                                                </div>

                                                <div className="space-y-2 max-w-80">
                                                    <HoverLink text={item.title} color='light' className='text-[#f2f2f2] text-sm' />
                                                    <p className="text-sm text-[#f2f2f2b3] leading-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertHub