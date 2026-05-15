import React from 'react'

export const newsContent = [
    {
        title: "Grand Opening in Bengaluru",
        paragraphs: [
            "The Greenway Cultural Center officially opened its doors in Bengaluru on December 20, 2022. The state-of-the-art facility integrates modern architecture with local heritage to create a vibrant cultural hub. Attendees at the grand opening included dignitaries, artists, and community leaders, all praising the initiative.",
            "The center features multiple performance spaces, art galleries, and green areas for public gatherings. Its design showcases Mita Group’s commitment to combining sustainability with innovative design.",
        ],
    },

    {
        title: "Commitment to Community and Culture",
        paragraphs: [
            "Mita Group's vision for the Greenway Cultural Center is to provide a space where art, culture, and community intersect. The project highlights their expertise in cultural and recreational projects, focusing on inclusivity and collaboration.",
            "Local artisans were engaged in the construction process, incorporating indigenous design elements into the facility. This effort reinforces Mita Group’s ethos of fostering regional talent and preserving cultural identity.",
        ],
    },

    {
        title: "Sustainability at the Core",
        paragraphs: [
            "The Greenway Cultural Center was built using eco-friendly materials and features energy-efficient systems. Solar panels, rainwater harvesting systems, and sustainable landscaping are key highlights.",
            "By embedding sustainability into the project, Mita Group demonstrates its leadership in creating eco-conscious infrastructure. The project is expected to become a beacon for other sustainable cultural projects in India.",
        ],
    },
]
const NewsDetailContent = () => {
    return (
        <div>
            <div className="container">
                <div className="w-full mx-auto max-w-180 space-y-16  text-[#f2f2f2] py-50">
                    <div className="space-y-10 w-full">
                    {newsContent.map((section, i) => (
                        <div key={i} className="space-y-3">
                            <h5 className=' uppercase'>{section.title}</h5>

                            <div className="space-y-3">
                                {section.paragraphs.map((para, index) => (
                                    <p key={index}>{para}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="w-full h-130 rounded-lg overflow-hidden ">
                        <img data-img-effect className='cover' src="	https://framerusercontent.com/images/NOotlyhPCixLZad4xPbo09F7Es.jpg?scale-down-to=2048" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetailContent