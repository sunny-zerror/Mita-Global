import React from 'react'
import BlinkButton from '../common/BlinkButton';
import Button from '../common/Button';

const projectsData = [
    {
        id: 1,
        title: "Skyline Heights Residential Tower",
        description:
            "A luxury residential tower that combines elegance with energy efficiency.",
        location: "Mumbai, Maharashtra, India",
        typeOfWork: "Residential Design",
        completionDate: "Mar 15, 2023",
        tags: [
            "300,000 SQ.FT",
            "LEED Certified",
            "Smart Home Tech",
            "Panoramic Views",
        ],
        cta: {
            primary: "Learn More",
            secondary: "View on Maps",
        },
        cover_img: "https://framerusercontent.com/images/NSV0AlP3aQnPRuWY6OR8zdbno.jpg?scale-down-to=1024"
    },

    {
        id: 2,
        title: "Horizon Industrial Park",
        description:
            "A cutting-edge industrial facility designed for manufacturing and logistics operations.",
        location: "Pune, Maharashtra, India",
        typeOfWork: "Industrial Design",
        completionDate: "Sep 10, 2021",
        tags: [
            "500,000 SQ.FT",
            "Modular Design",
            "Durable Materials",
            "Waste Recycling",
        ],
        cta: {
            primary: "Learn More",
            secondary: "View on Maps",
        },
        cover_img: "	https://framerusercontent.com/images/zlXRoRnEvW3QDtMkHWbpBt2jn7I.jpg?scale-down-to=1024"
    },

    {
        id: 3,
        title: "EcoCity Business Hub",
        description:
            "A state-of-the-art commercial complex designed with sustainability at its core.",
        location: "Ahmedabad, Gujarat, India",
        typeOfWork: "Commercial Design",
        completionDate: "Jun 30, 2022",
        tags: [
            "120,000 SQ.FT",
            "Renewable Energy",
            "Open Workspaces",
            "Collaborative Design",
        ],
        cta: {
            primary: "Learn More",
            secondary: "View on Maps",
        },
        cover_img: "	https://framerusercontent.com/images/AjyOKPTn7UiU9g7Vfpsv1y1nL7M.jpg?scale-down-to=1024"
    },
    {
        id: 4,
        title: "Skyline Heights Residential Tower",
        description:
            "A luxury residential tower that combines elegance with energy efficiency.",
        location: "Mumbai, Maharashtra, India",
        typeOfWork: "Residential Design",
        completionDate: "Mar 15, 2023",
        tags: [
            "300,000 SQ.FT",
            "LEED Certified",
            "Smart Home Tech",
            "Panoramic Views",
        ],
        cta: {
            primary: "Learn More",
            secondary: "View on Maps",
        },
        cover_img: "https://framerusercontent.com/images/NSV0AlP3aQnPRuWY6OR8zdbno.jpg?scale-down-to=1024"
    },
];
const AllProjects = () => {
    return (
        <>
            <div className="container py-50 px-7">
                <div className="w-full max-w-298 gap-y-20 flex flex-col text-center items-center mx-auto">
                    <div className="gap-y-6 items-center flex flex-col ">
                        <BlinkButton text="our projects" />
                        <h2 data-text-effect className=' text-center leading-none text-[#f2f2f2]'>Showcase of Our <br /> Design Excellence</h2>
                    </div>
                    <div className="space-y-1">
                        {projectsData.map((project, index) => {

                            return (
                                <div
                                    key={project.id}
                                    className={`w-full md:h-170 flex justify-between gap-1 flex-col ${index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse md:translate-x-1"
                                        } `}
                                >

                                    <div className={`w-full shrink-0 relative overflow-hidden max-sm:gap-y-16 h-full flex flex-col justify-between bg-[#f2f2f2] text-start md:w-1/2 xl:w-[40%] py-8 px-6`}>
                                        <div className="space-y-12">
                                            <div className="space-y-3">
                                                <h3 className="leading-none">
                                                    {project.title.split(" ").slice(0, 2).join(" ")} <br />
                                                    {project.title.split(" ").slice(2, 4).join(" ")} <br />
                                                    {project.title.split(" ").slice(4).join(" ")}
                                                </h3>

                                                <p className="text-sm leading-tight w-[80%]">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="uppercase space-y-4 text-xs">
                                                <div className="w-full pb-4 border-b border-[#0f12191a] flex items-center justify-between">
                                                    <p className="text-[#0f1219b3]">LOCATION:</p>
                                                    <p>{project.location}</p>
                                                </div>

                                                <div className="w-full pb-4 border-b border-[#0f12191a] flex items-center justify-between">
                                                    <p className="text-[#0f1219b3]">TYPE OF WORK:</p>
                                                    <p>{project.typeOfWork}</p>
                                                </div>

                                                <div className="w-full pb-4 border-b border-[#0f12191a] flex items-center justify-between">
                                                    <p className="text-[#0f1219b3]">COMPLETION DATE:</p>
                                                    <p>{project.completionDate}</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5 w-full max-w-80">
                                                {project.tags.map((tag, i) => (
                                                    <div
                                                        key={i}
                                                        className="border whitespace-nowrap uppercase text-xs w-fit flex items-center gap-x-2 p-2 pb-1.5 leading-none border-[#0f1219]"
                                                    >
                                                        <span className="size-1 -translate-y-px rounded-full bg-[#0f1219]" />

                                                        <p>{tag}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-full flex gap-x-4 text-xs! items-center">
                                            <Button text={project.cta.primary} link={project.cta.secondary} theme='dark' className='text-xs pb-2.5' />
                                        </div>
                                    </div>

                                    <div className="w-full h-full relative shrink-0 max-sm:h-142 overflow-hidden md:w-1/2 xl:w-[60%]">
                                        <img
                                        data-img-effect
                                            className="cover saturate-[0.33]"
                                            src={project.cover_img}
                                            alt={project.title}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProjects